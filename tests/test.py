import aiohttp
import asyncio
import random

API_LINK = "https://eob-builder.herokuapp.com/api"
invalid = ["a?!#@$(%", "baer#41!43", "caer!@#e", "eraea", "r/a/hdf", "teah;fls"]

valid_characters = ["otto", "triss", "virgil", "lucius", "xenna", "monkus", "sarrel", "niko", "silas"]
mix_valid_invalid_characters = valid_characters[:3] + invalid

valid_items = ["health_kit", "stun_gun", "snare_trap", "force_baton", "EMP", "jump_drive", "hookshot", "stim_serum", "force_blaster"]
mix_valid_invalid_items = valid_items[:3] + invalid

valid_perks = ["advanced_optics","alien_affinity","alien_hunter","backstab","ballistic_plating","battle_axe","bedside_manner","bulletproof_vest","channeler","concealed_blade","critical_failure","cybernetics","dead_shot","espresso","flanking","fusion_cell","heavy_wrench","jerry_rigged","knuckle_dusters","lean_build","lightweight","make_it_rain","mercenary","nano_serum","nano_virus","nanoweave_vest","ninja","nope_nope_nope","overdrive","pack_tactics","remote_diagnostics","revenge","robust","scavenger","scrappy","second_wind","shock_therapy","slow_drip","symbiont_expert","thermal_imaging","toxic_blade","utility_belt"]
mix_valid_invalid_perks = valid_perks[:3] + invalid

# grab with aiohttp
async def get_random_character():
    async with aiohttp.ClientSession() as session:
        async with session.get(API_LINK, params={"character" : random.choice(valid_characters)}) as resp:
            return await resp.json()

async def get_character(character):
    async with aiohttp.ClientSession() as session:
        async with session.get(API_LINK, params={"character" : character}) as resp:
            return await resp.json()

async def get_random_item():
    async with aiohttp.ClientSession() as session:
        async with session.get(API_LINK, params={"item" : random.choice(valid_items)}) as resp:
            return await resp.json()

async def get_item(item):
    async with aiohttp.ClientSession() as session:
        async with session.get(API_LINK, params={"item" : item}) as resp:
            return await resp.json()

async def get_random_perk():
    async with aiohttp.ClientSession() as session:
        async with session.get(API_LINK, params={"perk" : random.choice(valid_perks)}) as resp:
            return await resp.json()

async def get_perk(perk):
    async with aiohttp.ClientSession() as session:
        async with session.get(API_LINK, params={"perk" : perk}) as resp:
            return await resp.json()

async def keep_requesting(function):
    while True:
        # request every 2 seconds
        await asyncio.sleep(2)
        await function()

loop = asyncio.get_event_loop()

character = loop.run_until_complete(get_character("otto"))
assert character["name"] == "Otto"

item = loop.run_until_complete(get_item("stun_gun"))
assert item["name"] == "Stun Gun"

perk = loop.run_until_complete(get_perk("advanced_optics"))
assert perk["name"] == "Advanced Optics"
