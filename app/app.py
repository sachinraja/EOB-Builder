from flask import Flask, request, url_for, redirect, render_template, jsonify, make_response
import json
from dotenv import load_dotenv
import os
import redis
import datetime
from math import ceil

# Connect to Redis
load_dotenv()
r = redis.from_url(os.environ.get("REDIS_URL"))
r.flushdb()

MAX_REQUESTS = 1000
REQUESTS_AMOUNT_TTL = 600

valid_characters = ["otto", "triss", "virgil", "lucius", "xenna", "monkus", "sarrel", "niko", "silas"]
valid_items = ["health_kit", "stun_gun", "snare_traps", "force_baton", "EMP", "jump_drive", "hookshot", "stim_serum", "force_blaster"]
valid_perks_api = ["advanced_optics", "alien_affinity", "alien_hunter", "backstab", "ballistic_plating", "battle_axe", "bedside_manner", "bulletproof_vest", "channeler", "concealed_blade", "critical_failure", "cybernetics", "dead_shot", "espresso", "flanking", "fusion_cell", "heavy_wrench", "jerry_rigged", "knuckle_dusters", "lean_build", "lightweight", "make_it_rain", "mercenary", "nano_serum", "nano_virus", "nanoweave_vest", "ninja", "nope_nope_nope", "overdrive", "pack_tactics", "remote_diagnostics", "revenge", "robust", "scavenger", "scrappy", "second_wind", "shock_therapy", "slow_drip", "symbiont_expert", "thermal_imaging", "toxic_blade", "utility_belt"]
valid_perks = [f"{perk}_{num}" for num in range(1, 4) for perk in valid_perks_api]

characters = []
items = []
perks = []

with open("app/api/characters.json") as f:
    characters = json.load(f)

with open("app/api/items.json") as f:
    items = json.load(f)

with open("app/api/perks.json") as f:
    perks = json.load(f)

app = Flask(__name__)

@app.errorhandler(404)
def page_not_found(e):
    return render_template("404.html"), 404

app.register_error_handler(404, page_not_found)

@app.route("/", methods=["GET", "POST"])
def home():
    return redirect(url_for("info"))

@app.route("/info", methods=["GET", "POST"])
def info():
    return render_template("info.html")

@app.route("/build", methods=["GET"])
def build():
    # validate character arg
    character = request.args.get("chr", "otto")
    if character not in valid_characters: 
        character = "otto"

    # validate item arg
    item = request.args.get("item", "health_kit")
    if item not in valid_items:
        item = "health_kit"
    
    # validate perks
    perks = request.args.getlist("perk")

    # replace invalid perks
    perks = ["advanced_optics_1" if perk not in valid_perks else perk for perk in perks]

    # get list up to len of 3 so there is a valid perk for each perk
    perks.extend(["advanced_optics_1"] * (3 - len(perks)))

    # split perk name and level
    perks = [[perk[:-2], int(perk[-1:])] for perk in perks]
    
    return render_template("build.html", character=character, item=item, perks=perks)

@app.route("/api", methods=["GET"])
def api():
    resp = None
    headers = {}

    # if valid param is in request.args
    if len(set(request.args).intersection(("character", "item", "perk"))) >= 1:
        remaining_requests = decrement_one_from_request_limit(request.remote_addr)
        
        headers["Content-Type"] = "application/json"
        headers["X-RateLimit-Limit"] = MAX_REQUESTS
        headers["X-RateLimit-Remaining"] = remaining_requests
        requests_pttl = get_remaining_requests_reset_pttl(request.remote_addr)
        reset_time = datetime.datetime.now() + datetime.timedelta(milliseconds=requests_pttl)
        headers["X-RateLimit-Reset"] = reset_time.timestamp()
        # convert from millseconds to seconds for header
        requests_ttl = requests_pttl / 1000
        headers["X-RateLimit-Reset-After"] = requests_ttl

        # if being ratelimited
        if remaining_requests <= 0:
            # ceil seconds to retry request after
            headers["Retry-After"] = ceil(requests_ttl)

            resp = make_response(jsonify({
                "message": "You are being rate limited.", 
                "retry-after" : requests_ttl
                }))
                
            resp.headers = headers
            return resp, 429

    if "character" in request.args:
        character = request.args.get("character")
        if character in valid_characters:
            resp = make_response(jsonify(characters[character]))
        
        else:
            resp = make_response(jsonify({"message": "Character not found."}))
            resp.headers = headers
            return resp, 400

        resp.headers = headers
        return resp
    
    if "item" in request.args:
        item = request.args.get("item")
        if item in valid_items:
            resp = make_response(jsonify(items[item]))
        
        else:
            resp = make_response(jsonify({"message": "Item not found."}))
            resp.headers = headers
            return resp, 400

        resp.headers = headers
        return resp

    elif "perk" in request.args:
        perk = request.args.get("perk")
        if perk in valid_perks_api:
            resp =  make_response(jsonify(perks[perk]))
        
        else:
            resp = make_response(jsonify({"message": "Perk not found."}))
            resp.headers = headers
            return resp, 400

        resp.headers = headers
        return resp
        

    return render_template("api.html")

def get_remaining_requests(remote_addr):
    """Gets the remaining number of requests before the ratelimit is applied."""
    
    # decrement one from api calls limit
    remaining_requests = r.get(f"{remote_addr}_remaining")
    
    if remaining_requests == None:
        # 1000 requests per 10 minutes
        r.set(f"{remote_addr}_remaining", MAX_REQUESTS, ex=REQUESTS_AMOUNT_TTL)
        return MAX_REQUESTS
    
    return int(remaining_requests)

def decrement_one_from_request_limit(remote_addr):
    """Subtracts one from the request limit mapped to the remote address in redis and returns number of remaining requests."""

    remaining_requests = get_remaining_requests(remote_addr)

    # set key if does not exist
    if r.set(f"{remote_addr}_remaining", MAX_REQUESTS, ex=REQUESTS_AMOUNT_TTL, nx=True):
        remaining_requests = REQUESTS_AMOUNT_TTL

    # decrement if above 0
    if remaining_requests > 0:
        r.decr(f"{remote_addr}_remaining", amount=1)
        return remaining_requests - 1
    
    else:
        return remaining_requests

def get_remaining_requests_reset_pttl(remote_addr):
    """Gets the number of milliseconds before the number of remaining requests is reset."""

    return r.pttl(f"{remote_addr}_remaining")