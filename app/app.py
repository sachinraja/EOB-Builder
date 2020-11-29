from flask import Flask, request, url_for, redirect, render_template

app = Flask(__name__)
valid_characters = ["otto", "triss", "virgil", "lucius", "xenna", "monkus", "sarrel", "niko", "silas"]
valid_items = ["health_kit", "stun_gun", "snare_trap", "force_baton", "EMP", "jump_drive", "hookshot", "stim_serum", "force_blaster"]
valid_perks = ["advanced_optics_1", "advanced_optics_2", "advanced_optics_3", "alien_affinity_1", "alien_affinity_2", "alien_affinity_3", "alien_hunter_1", "alien_hunter_2", "alien_hunter_3", "backstab_1", "backstab_2", "backstab_3", "ballistic_plating_1", "ballistic_plating_2", "ballistic_plating_3", "battle_axe_1", "battle_axe_2", "battle_axe_3", "bedside_manner_1", "bedside_manner_2", "bedside_manner_3", "bulletproof_vest_1", "bulletproof_vest_2", "bulletproof_vest_3", "channeler_1", "channeler_2", "channeler_3", "concealed_blade_1", "concealed_blade_2", "concealed_blade_3", "critical_failure_1", "critical_failure_2", "critical_failure_3", "cybernetics_1", "cybernetics_2", "cybernetics_3", "dead_shot_1", "dead_shot_2", "dead_shot_3", "espresso_1", "espresso_2", "espresso_3", "flanking_1", "flanking_2", "flanking_3", "fusion_cell_1", "fusion_cell_2", "fusion_cell_3", "heavy_wrench_1", "heavy_wrench_2", "heavy_wrench_3", "jerry_rigged_1", "jerry_rigged_2", "jerry_rigged_3", "knuckle_dusters_1", "knuckle_dusters_2", "knuckle_dusters_3", "lean_build_1", "lean_build_2", "lean_build_3", "lightweight_1", "lightweight_2", "lightweight_3", "make_it_rain_1", "make_it_rain_2", "make_it_rain_3", "mercenary_1", "mercenary_2", "mercenary_3", "nano_serum_1", "nano_serum_2", "nano_serum_3", "nano_virus_1", "nano_virus_2", "nano_virus_3", "nanoweave_vest_1", "nanoweave_vest_2", "nanoweave_vest_3", "ninja_1", "ninja_2", "ninja_3", "nope_nope_nope_1", "nope_nope_nope_2", "nope_nope_nope_3", "overdrive_1", "overdrive_2", "overdrive_3", "pack_tactics_1", "pack_tactics_2", "pack_tactics_3", "remote_diagnostics_1", "remote_diagnostics_2", "remote_diagnostics_3", "revenge_1", "revenge_2", "revenge_3", "robust_1", "robust_2", "robust_3", "scavenger_1", "scavenger_2", "scavenger_3", "scrappy_1", "scrappy_2", "scrappy_3", "second_wind_1", "second_wind_2", "second_wind_3", "shock_therapy_1", "shock_therapy_2", "shock_therapy_3", "slow_drip_1", "slow_drip_2", "slow_drip_3", "symbiont_expert_1", "symbiont_expert_2", "symbiont_expert_3", "thermal_imaging_1", "thermal_imaging_2", "thermal_imaging_3", "toxic_blade_1", "toxic_blade_2", "toxic_blade_3", "utility_belt_1", "utility_belt_2", "utility_belt_3"]

@app.route("/", methods=["GET", "POST"])
def base():
    if request.method == "POST":
        print(request.form["character"])
        return redirect(url_for("base"))
    
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

app.run()

if __name__ == "__main__":
    app.run()
