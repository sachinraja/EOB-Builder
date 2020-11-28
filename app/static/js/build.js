class Character{
    constructor(name, imageName){
        this.name = name;
        this.imageName = imageName;
    }
}

class Item{
    constructor(name, imageName){
        this.name = name;
        this.imageName = imageName;
    }
}

class Perk{
    constructor(name, imageName, levelAttributes){
        this.name = name;
        this.imageName = imageName;
        this.levelAttributes = levelAttributes;
    }
}

const characters = {
    "otto" : new Character("Otto", "otto_icon.png"), 
    "triss" : new Character("Triss", "triss_icon.png"),
    "virgil" : new Character("Virgil", "virgil_icon.png"),
    "lucius" : new Character("Lucius", "lucius_icon.png"),
    "xenna" : new Character("Xenna", "xenna_icon.png"),
    "monkus" : new Character("Monkus", "monkus_icon.png"),
    "sarrel" : new Character("Sarrel", "sarrel_icon.png"),
    "niko" : new Character("Niko", "niko_icon.png"),
    "silas" : new Character("Silas", "silas_icon.png")
};

const items = {
    "health_kit" : new Item("Health Kit", "health_kit.png"),
    "stun_gun" : new Item("Stun Gun", "stun_gun.png"),
    "snare_trap" : new Item("Snare Trap", "snare_trap.png"),
    "force_baton" : new Item("Force Baton", "force_baton.png"),
    "EMP" : new Item("EMP", "EMP.png"),
    "jump_drive" : new Item("Jump Drive", "jump_drive.png"),
    "hookshot" : new Item("Hookshot", "hookshot.png"),
    "stim_serum" : new Item("Stim Serum", "stim_serum.png"),
    "force_blaster" : new Item("Force Blaster", "force_blaster.png")
};

const perkEnums = {
    CAMERAZOOM : "Camera Zoom",
    ALIENABILITYSTEAL : "Alien Ability Steal",
    ALIENDAMAGE : "Alien Damage",
    DURATION : "Duration",
    DAMAGEREDUCTION : "Damage Reduction",
    BLEEDDAMAGE : "Bleed Damage",
    THROWINGAXEDAMAGE : "Throwing Axe Damage",
    CHARGEDTHROWINGAXEDAMAGE : "Charged Throwing Axe Damage",
    SLOW : "Slow",
    SLOWDURATION : "Slow Duration",
    MAXHPBONUS : "Max HP Bonus",
    MAXHPREDUCTION : "Max HP Reduction",
    ARMOR : "Armor",
    COOLDOWNREDUCTION : "Cooldown Reduction",
    ABILITYDAMAGE : "Ability Damage",
    ABILITYALIENDAMAGE : "Ability Alien Damage",
    DAMAGE : "Damage",
    MISC : "Miscellaneous",
    CHARGEITEMS : "Charge Items",
    WRENCHDAMAGE : "Wrench Damage",
    CHARGEDWRENCHDAMAGE : "Charged Wrench Damage",
    KNOCKBACK : "Knockback",
    MOVEMENTSPEED : "Movement Speed",
    ADDITIONALCREDITS : "Additional Credits",
    KILLCHARGE : "Kill Charge",
    HEALING : "Healing",
    VACCINEDURATION : "Vaccine Duration",
    ALONEMOVEMENTSPEED : "Alone Movement Speed",
    ALIENNEARMOVEMENTSPEED : "Alien Nearby Movement Speed",
    GENMOVEMENTSPEED : "Generator Movement Speed",
    PLAYERNEARMOVEMENTSPEED : "Player Nearby Movement Speed",
    SHOWPLAYERSBELOWHEALTH : "Show Players Below Health",
    EXTRASCAVENGEITEMS : "Extra Scavenge Items",
    COOLDOWNREDUCTIONONDAMAGETAKEN : "Cooldown Reduction on Damage Taken",
    SURVIVEKILLINGBLOWWITHHEALTH : "Survive Killing Blow with Health",
    GENHEALING : "Generator Healing",
    GENMAXHPBONUS : "Generator Max HP Bonus",
    HEALINGPERSECOND : "Healing per Second",
    ALIENEVOGAIN: "Alien Evolution Points Gain",
    HUMANEVOREDUCTION : "Human Evolution Points Reduction",
    CAMERAVISION : "Camera Vision",
    KNIFEDAMAGE : "Knife Damage",
    CHARGEDKNIFEDAMAGE : "Charged Knife Damage",
    MOVEMENTSPEEDREDUCTION: "Movement Speed Reduction",
    INVENTORYSLOTS : "Inventory Slots"
};

var perks = {
    "advanced_optics" : new Perk("Advanced Optics", "advanced_optics.png", [
        {[perkEnums.CAMERAZOOM] : [1, "fixed"]},
        {[perkEnums.CAMERAZOOM] : [2, "fixed"]},
        {[perkEnums.CAMERAZOOM] : [3, "fixed"]}
    ]),

    "alien_affinity" : new Perk("Alien Affinity", "alien_affinity.png", [
        {[perkEnums.ALIENABILITYSTEAL] : [1, "fixed"]},
        {[perkEnums.ALIENABILITYSTEAL] : [2, "fixed"]},
        {[perkEnums.ALIENABILITYSTEAL] : [3, "fixed"]}
    ]),

    "alien_hunter" : new Perk("Alien Hunter", "alien_hunter.png", [
        {[perkEnums.ALIENDAMAGE] : [0.75, "percent"]},
        {[perkEnums.ALIENDAMAGE] : [0.1, "percent"]},
        {[perkEnums.ALIENDAMAGE] : [0.15, "percent"]}
    ]),

    "backstab" : new Perk("Backstab", "backstab.png", [
        {[perkEnums.BLEEDDAMAGE] : [4, "fixed"], [perkEnums.DURATION] : 3},
        {[perkEnums.BLEEDDAMAGE] : [5, "fixed"], [perkEnums.DURATION] : 3},
        {[perkEnums.BLEEDDAMAGE] : [6, "fixed"], [perkEnums.DURATION] : 3}
    ]),

    "ballistic_plating" : new Perk("Ballistic Plating", "ballistic_plating.png", [
        {[perkEnums.DAMAGEREDUCTION] : [0.5, "fixed"]},
        {[perkEnums.DAMAGEREDUCTION] : [1, "fixed"]},
        {[perkEnums.DAMAGEREDUCTION] : [1.5, "fixed"]}
    ]),

    "battle_axe" : new Perk("Battle Axe", "battle_axe.png", [
        {[perkEnums.THROWINGAXEDAMAGE] : [2, "fixed"], [perkEnums.CHARGEDTHROWINGAXEDAMAGE] : [2, "fixed"], [perkEnums.SLOW] : [0.3, "percent"], [perkEnums.SLOWDURATION] : [1, "fixed"]},
        {[perkEnums.THROWINGAXEDAMAGE] : [2, "fixed"], [perkEnums.CHARGEDTHROWINGAXEDAMAGE] : [4, "fixed"], [perkEnums.SLOW] : [0.3, "percent"], [perkEnums.SLOWDURATION] : [1.5, "fixed"]},
        {[perkEnums.THROWINGAXEDAMAGE] : [2, "fixed"], [perkEnums.CHARGEDTHROWINGAXEDAMAGE] : [6, "fixed"], [perkEnums.SLOW] : [0.3, "percent"], [perkEnums.SLOWDURATION] : [2, "fixed"]}
    ]),

    "bedside_manner" : new Perk("Bedside Manner", "bedside_manner.png", [
        {[perkEnums.MAXHPBONUS] : [1/6, "fixed"]},
        {[perkEnums.MAXHPBONUS] : [1/5, "fixed"]},
        {[perkEnums.MAXHPBONUS] : [1/4, "fixed"]}
    ]),

    "bulletproof_vest" : new Perk("Bulletproof Vest", "bulletproof_vest.png", [
        {[perkEnums.ARMOR] : [30, "fixed"]},
        {[perkEnums.ARMOR] : [40, "fixed"]},
        {[perkEnums.ARMOR] : [50, "fixed"]}
    ]),

    "channeler" : new Perk("Channeler", "channeler.png", [
        {[perkEnums.COOLDOWNREDUCTION] : [0.15, "percent"], [perkEnums.MISC] : ["Extra Spell"]},
        {[perkEnums.COOLDOWNREDUCTION] : [0.225, "percent"], [perkEnums.MISC] : ["Extra Spell"]},
        {[perkEnums.COOLDOWNREDUCTION] : [0.3, "percent"], [perkEnums.MISC] : ["Extra Spell"]}
    ]),

    "concealed_blade" : new Perk("Concealed Blade", "concealed_blade.png", [
        {[perkEnums.ABILITYDAMAGE] : [8, "fixed"]},
        {[perkEnums.ABILITYDAMAGE] : [9, "fixed"]},
        {[perkEnums.ABILITYDAMAGE] : [10, "fixed"]}
    ]),

    "critical_failure" : new Perk("Critical Failure", "critical_failure.png", [
        {[perkEnums.ABILITYDAMAGE] : [10, "fixed"]},
        {[perkEnums.ABILITYDAMAGE] : [15, "fixed"]},
        {[perkEnums.ABILITYDAMAGE] : [20, "fixed"]}
    ]),

    "cybernetics" : new Perk("Cybernetics", "cybernetics.png", [
        {[perkEnums.DAMAGE] : [0.05, "percent"]},
        {[perkEnums.DAMAGE] : [0.075, "percent"]},
        {[perkEnums.DAMAGE] : [0.1, "percent"]}
    ]),

    "dead_shot" : new Perk("Dead Shot", "dead_shot.png", [
        {[perkEnums.DAMAGE] : [4, "fixed"]},
        {[perkEnums.DAMAGE] : [7, "fixed"]},
        {[perkEnums.DAMAGE] : [10, "fixed"]}
    ]),

    "espresso" : new Perk("Espresso", "espresso.png", [
        {[perkEnums.COOLDOWNREDUCTION] : [0.1, "percent"]},
        {[perkEnums.COOLDOWNREDUCTION] : [0.175, "percent"]},
        {[perkEnums.COOLDOWNREDUCTION] : [0.25, "percent"]}
    ]),

    "flanking" : new Perk("Flanking", "flanking.png", [
        {[perkEnums.DAMAGE] : [0.03, "percent"]},
        {[perkEnums.DAMAGE] : [0.04, "percent"]},
        {[perkEnums.DAMAGE] : [0.05, "percent"]}
    ]),

    "fusion_cell" : new Perk("Fusion Cell", "fusion_cell.png", [
        {[perkEnums.CHARGEITEMS] : [['Starting'], "list"]},
        {[perkEnums.CHARGEITEMS] : [['Starting', 'Armory'], "list"]},
        {[perkEnums.CHARGEITEMS] : [['Starting', 'Armory', 'Heavy'], "list"]}
    ]),

    "heavy_wrench" : new Perk("Heavy Wrench", "heavy_wrench.png", [
        {[perkEnums.WRENCHDAMAGE] : [2, "fixed"], [perkEnums.CHARGEDWRENCHDAMAGE] : [4, "fixed"], [perkEnums.KNOCKBACK] : [0.1, "percent"]},
        {[perkEnums.WRENCHDAMAGE] : [3, "fixed"], [perkEnums.CHARGEDWRENCHDAMAGE] : [7, "fixed"], [perkEnums.KNOCKBACK] : [0.3, "percent"]},
        {[perkEnums.WRENCHDAMAGE] : [4, "fixed"], [perkEnums.CHARGEDWRENCHDAMAGE] : [10, "fixed"], [perkEnums.KNOCKBACK] : [0.5, "percent"]}
    ]),

    "jerry_rigged" : new Perk("Jerry Rigged", "jerry_rigged.png", [
        {[perkEnums.CHARGEITEMS] : [['Stim Cola', 'Security Camera'], "list"]},
        {[perkEnums.CHARGEITEMS] : [['Stim Cola', 'Security Camera', 'Shiv'], "list"]},
        {[perkEnums.CHARGEITEMS] : [['Stim Cola', 'Security Camera', 'Shiv', 'Bandages'], "list"]}
    ]),

    "knuckle_dusters" : new Perk("Knuckle Dusters", "knuckle_dusters.png", [
        {[perkEnums.ABILITYDAMAGE] : [6, "fixed"], [perkEnums.ABILITYALIENDAMAGE] : [16, "fixed"]},
        {[perkEnums.ABILITYDAMAGE] : [7, "fixed"], [perkEnums.ABILITYALIENDAMAGE] : [18, "fixed"]},
        {[perkEnums.ABILITYDAMAGE] : [8, "fixed"], [perkEnums.ABILITYALIENDAMAGE] : [20, "fixed"]}
    ]),

    "lean_build" : new Perk("Lean Build", "lean_build.png", [
        {[perkEnums.MAXHPREDUCTION] : [10, "fixed"], [perkEnums.MOVEMENTSPEED] : [0.02, "percent"]},
        {[perkEnums.MAXHPREDUCTION] : [15, "fixed"], [perkEnums.MOVEMENTSPEED] : [0.04, "percent"]},
        {[perkEnums.MAXHPREDUCTION] : [20, "fixed"], [perkEnums.MOVEMENTSPEED] : [0.06, "percent"]}
    ]),

    "lightweight" : new Perk("Lightweight", "lightweight.png", [
        {[perkEnums.MOVEMENTSPEED] : [0.2, "percent"]},
        {[perkEnums.MOVEMENTSPEED] : [0.4, "percent"]},
        {[perkEnums.MOVEMENTSPEED] : [0.6, "percent"]}
    ]),

    "make_it_rain" : new Perk("Make It Rain", "make_it_rain.png", [
        {[perkEnums.ADDITIONALCREDITS] : [0.05, "percent"]},
        {[perkEnums.ADDITIONALCREDITS] : [0.1, "percent"]},
        {[perkEnums.ADDITIONALCREDITS] : [0.15, "percent"]}
    ]),

    "mercenary" : new Perk("Mercenary", "mercenary.png", [
        {[perkEnums.KILLCHARGE] : [['Starting'], "list"]},
        {[perkEnums.KILLCHARGE] : [['Starting', 'Armory'], "list"]},
        {[perkEnums.KILLCHARGE] : [['Starting', 'Armory', 'Heavy'], "list"]}
    ]),

    "nano_serum" : new Perk("Nano Serum", "nano_serum.png", [
        {[perkEnums.HEALING] : [0.15, "percent"]},
        {[perkEnums.HEALING] : [0.225, "percent"]},
        {[perkEnums.HEALING] : [0.3, "percent"]}
    ]),

    "nano_virus" : new Perk("Nano Virus", "nano_virus.png", [
        {[perkEnums.VACCINEDURATION] : [1, "fixed"]},
        {[perkEnums.VACCINEDURATION] : [1.5, "fixed"]},
        {[perkEnums.VACCINEDURATION] : [2, "fixed"]}
    ]),

    "nanoweave_vest" : new Perk("Nanoweave Vest", "nanoweave_vest.png", [
        {[perkEnums.DAMAGEREDUCTION] : [0.05, "percent"]},
        {[perkEnums.DAMAGEREDUCTION] : [0.075, "percent"]},
        {[perkEnums.DAMAGEREDUCTION] : [0.1, "percent"]}
    ]),

    "ninja" : new Perk("Ninja", "ninja.png", [
        {[perkEnums.ALONEMOVEMENTSPEED] : [0.12, "percent"]},
        {[perkEnums.ALONEMOVEMENTSPEED] : [0.14, "percent"]},
        {[perkEnums.ALONEMOVEMENTSPEED] : [0.16, "percent"]}
    ]),

    "nope_nope_nope" : new Perk("Nope Nope Nope", "nope_nope_nope.png", [
        {[perkEnums.ALIENNEARMOVEMENTSPEED] : [0.03, "percent"]},
        {[perkEnums.ALIENNEARMOVEMENTSPEED] : [0.06, "percent"]},
        {[perkEnums.ALIENNEARMOVEMENTSPEED] : [0.1, "percent"]}
    ]),

    "overdrive" : new Perk("Overdrive", "overdrive.png", [
        {[perkEnums.GENMOVEMENTSPEED] : [0.03, "percent"], [perkEnums.DURATION] : [10, "fixed"]},
        {[perkEnums.GENMOVEMENTSPEED] : [0.06, "percent"], [perkEnums.DURATION] : [10, "fixed"]},
        {[perkEnums.GENMOVEMENTSPEED] : [0.1, "percent"], [perkEnums.DURATION] : [10, "fixed"]}
    ]),

    "pack_tactics" : new Perk("Pack Tactics", "pack_tactics.png", [
        {[perkEnums.PLAYERNEARMOVEMENTSPEED] : [0.03, "percent"], [perkEnums.DURATION] : [10, "fixed"]},
        {[perkEnums.PLAYERNEARMOVEMENTSPEED] : [0.06, "percent"], [perkEnums.DURATION] : [10, "fixed"]},
        {[perkEnums.PLAYERNEARMOVEMENTSPEED] : [0.1, "percent"], [perkEnums.DURATION] : [10, "fixed"]}
    ]),

    "remote_diagnostics" : new Perk("Remote Diagnostics", "remote_diagnostics.png", [
        {[perkEnums.SHOWPLAYERSBELOWHEALTH] : [0.2, "percent"]},
        {[perkEnums.SHOWPLAYERSBELOWHEALTH] : [0.3, "percent"]},
        {[perkEnums.SHOWPLAYERSBELOWHEALTH] : [0.4, "percent"]}
    ]),

    "revenge" : new Perk("Revenge", "revenge.png", [
        {[perkEnums.DAMAGE] : [0.075, "percent"]},
        {[perkEnums.DAMAGE] : [0.1, "percent"]},
        {[perkEnums.DAMAGE] : [0.15, "percent"]}
    ]),

    "robust" : new Perk("Robust", "robust.png", [
        {[perkEnums.MAXHPBONUS] : [10, "percent"]},
        {[perkEnums.MAXHPBONUS] : [15, "percent"]},
        {[perkEnums.MAXHPBONUS] : [20, "percent"]}
    ]),

    "scavenger" : new Perk("Scavenger", "scavenger.png", [
        {[perkEnums.EXTRASCAVENGEITEMS] : [1, "fixed"]},
        {[perkEnums.EXTRASCAVENGEITEMS] : [2, "fixed"]},
        {[perkEnums.EXTRASCAVENGEITEMS] : [3, "fixed"]}
    ]),

    "scrappy" : new Perk("Scrappy", "scrappy.png", [
        {[perkEnums.COOLDOWNREDUCTIONONDAMAGETAKEN] : [5, "fixed"]},
        {[perkEnums.COOLDOWNREDUCTIONONDAMAGETAKEN] : [4, "fixed"]},
        {[perkEnums.COOLDOWNREDUCTIONONDAMAGETAKEN] : [3, "fixed"]}
    ]),

    "second_wind" : new Perk("Second Wind", "second_wind.png", [
        {[perkEnums.SURVIVEKILLINGBLOWWITHHEALTH] : [5, "fixed"]},
        {[perkEnums.SURVIVEKILLINGBLOWWITHHEALTH] : [10, "fixed"]},
        {[perkEnums.SURVIVEKILLINGBLOWWITHHEALTH] : [15, "fixed"]}
    ]),

    "shock_therapy" : new Perk("Shock Therapy", "shock_therapy.png", [
        {[perkEnums.GENHEALING] : [5, "fixed"], [perkEnums.GENMAXHPBONUS] : [2, "fixed"]},
        {[perkEnums.GENHEALING] : [7.5, "fixed"], [perkEnums.GENMAXHPBONUS] : [4, "fixed"]},
        {[perkEnums.GENHEALING] : [10, "fixed"], [perkEnums.GENMAXHPBONUS] : [6, "fixed"]}
    ]),

    "slow_drip" : new Perk("Slow Drip", "slow_drip.png", [
        {[perkEnums.HEALINGPERSECOND] : [0.125, "fixed"]},
        {[perkEnums.HEALINGPERSECOND] : [0.25, "fixed"]},
        {[perkEnums.HEALINGPERSECOND] : [0.4, "fixed"]}
    ]),

    "symbiont_expert" : new Perk("Symbiont Expert", "symbiont_expert.png", [
        {[perkEnums.ALIENEVOGAIN] : [0.05, "percent"], [perkEnums.HUMANEVOREDUCTION] : [0.05, "percent"]},
        {[perkEnums.ALIENEVOGAIN] : [0.075, "percent"], [perkEnums.HUMANEVOREDUCTION] : [0.075, "percent"]},
        {[perkEnums.ALIENEVOGAIN] : [0.1, "percent"], [perkEnums.HUMANEVOREDUCTION] : [0.1, "percent"]}
    ]),

    "thermal_imaging" : new Perk("Thermal Imaging", "thermal_imaging.png", [
        {[perkEnums.CAMERAVISION] : [1, "fixed"]},
        {[perkEnums.CAMERAVISION] : [2, "fixed"]},
        {[perkEnums.CAMERAVISION] : [3, "fixed"]}
    ]),

    "toxic_blade" : new Perk("Toxic Blade", "toxic_blade.png", [
        {[perkEnums.KNIFEDAMAGE] : [1, "fixed"], [perkEnums.CHARGEDKNIFEDAMAGE] : [2, "fixed"], [perkEnums.SLOW] : [0.3, "percent"], [perkEnums.SLOWDURATION] : [1, "fixed"]},
        {[perkEnums.KNIFEDAMAGE] : [1.5, "fixed"], [perkEnums.CHARGEDKNIFEDAMAGE] : [4, "fixed"], [perkEnums.SLOW] : [0.3, "percent"], [perkEnums.SLOWDURATION] : [1.5, "fixed"]},
        {[perkEnums.KNIFEDAMAGE] : [2, "fixed"], [perkEnums.CHARGEDKNIFEDAMAGE] : [6, "fixed"], [perkEnums.SLOW] : [0.3, "percent"], [perkEnums.SLOWDURATION] : [2, "fixed"]}
    ]),

    "utility_belt" : new Perk("Utility Belt", "utility_belt.png", [
        {[perkEnums.MAXHPREDUCTION] : [40, "fixed"], [perkEnums.MOVEMENTSPEEDREDUCTION] : [0.05, "percent"], [perkEnums.INVENTORYSLOTS] : [1, "fixed"]},
        {[perkEnums.MAXHPREDUCTION] : [35, "fixed"], [perkEnums.MOVEMENTSPEEDREDUCTION] : [0.04, "percent"], [perkEnums.INVENTORYSLOTS] : [1, "fixed"]},
        {[perkEnums.MAXHPREDUCTION] : [30, "fixed"], [perkEnums.MOVEMENTSPEEDREDUCTION] : [0.03, "percent"], [perkEnums.INVENTORYSLOTS] : [1, "fixed"]}
    ])
};

function getCharacter(name){
    return characters[name];
}

function changeCharacter(chrName, chrDiv){
    let chr = getCharacter(chrName);
    let chrImg = chrDiv.getElementsByTagName("img")[0];
    chrImg.src = `../static/assets/characters/${chr.imageName}`;
}

function getItem(name){
    return items[name];
}

function changeItem(itemName, itemDiv){
    let item = getItem(itemName);
    let itemImg = itemDiv.getElementsByTagName("img")[0];
    itemImg.src = `../static/assets/items/${item.imageName}`;
}

function getPerk(name){
    return perks[name];
}

function changePerk(perkInfo, perkDiv){
    let [name, level] = JSON.parse(perkInfo);
    let perk = getPerk(name);
    let perkImg = perkDiv.getElementsByTagName("img")[0];
    perkImg.src = `../static/assets/perks/${perk.imageName}`;

    //change perk background color to represent level
    switch(level){
        default:
            perkImg.style.backgroundColor = "#0000ff";
            break;
        case 2:
            perkImg.style.backgroundColor = "#6a0dad";
            break;
        case 3: 
            perkImg.style.backgroundColor = "#ffd700";
            break;
    }
}

onload = function(){
    //generate perks with images and select options
    let perksContainerHTML = "";
    for (let i = 0; i < 3; i++){
        perksContainerHTML += 
        `<div>
            <img src="../static/assets/perks/robust.png" style="background-color: blue;">
            <select onchange="changePerk(this.value, this.parentElement);" name="perk1">
                <option value='["advanced_optics", 1]'>Advanced Optics 1</option>
                <option value='["advanced_optics", 2]'>Advanced Optics 2</option>
                <option value='["advanced_optics", 3]'>Advanced Optics 3</option>
                <option value='["alien_affinity", 1]'>Alien Affinity 1</option>
                <option value='["alien_affinity", 2]'>Alien Affinity 2</option>
                <option value='["alien_affinity", 3]'>Alien Affinity 3</option>
                <option value='["alien_hunter", 1]'>Alien Hunter 1</option>
                <option value='["alien_hunter", 2]'>Alien Hunter 2</option>
                <option value='["alien_hunter", 3]'>Alien Hunter 3</option>
                <option value='["backstab", 1]'>Backstab 1</option>
                <option value='["backstab", 2]'>Backstab 2</option>
                <option value='["backstab", 3]'>Backstab 3</option>
                <option value='["ballistic_plating", 1]'>Ballistic Plating 1</option>
                <option value='["ballistic_plating", 2]'>Ballistic Plating 2</option>
                <option value='["ballistic_plating", 3]'>Ballistic Plating 3</option>
                <option value='["battle_axe", 1]'>Battle Axe 1</option>
                <option value='["battle_axe", 2]'>Battle Axe 2</option>
                <option value='["battle_axe", 3]'>Battle Axe 3</option>
                <option value='["bedside_manner", 1]'>Bedside Manner 1</option>
                <option value='["bedside_manner", 2]'>Bedside Manner 2</option>
                <option value='["bedside_manner", 3]'>Bedside Manner 3</option>
                <option value='["bulletproof_vest", 1]'>Bulletproof Vest 1</option>
                <option value='["bulletproof_vest", 2]'>Bulletproof Vest 2</option>
                <option value='["bulletproof_vest", 3]'>Bulletproof Vest 3</option>
                <option value='["channeler", 1]'>Channeler 1</option>
                <option value='["channeler", 2]'>Channeler 2</option>
                <option value='["channeler", 3]'>Channeler 3</option>
                <option value='["concealed_blade", 1]'>Concealed Blade 1</option>
                <option value='["concealed_blade", 2]'>Concealed Blade 2</option>
                <option value='["concealed_blade", 3]'>Concealed Blade 3</option>
                <option value='["critical_failure", 1]'>Critical Failure 1</option>
                <option value='["critical_failure", 2]'>Critical Failure 2</option>
                <option value='["critical_failure", 3]'>Critical Failure 3</option>
                <option value='["cybernetics", 1]'>Cybernetics 1</option>
                <option value='["cybernetics", 2]'>Cybernetics 2</option>
                <option value='["cybernetics", 3]'>Cybernetics 3</option>
                <option value='["dead_shot", 1]'>Dead Shot 1</option>
                <option value='["dead_shot", 2]'>Dead Shot 2</option>
                <option value='["dead_shot", 3]'>Dead Shot 3</option>
                <option value='["espresso", 1]'>Espresso 1</option>
                <option value='["espresso", 2]'>Espresso 2</option>
                <option value='["espresso", 3]'>Espresso 3</option>
                <option value='["flanking", 1]'>Flanking 1</option>
                <option value='["flanking", 2]'>Flanking 2</option>
                <option value='["flanking", 3]'>Flanking 3</option>
                <option value='["fusion_cell", 1]'>Fusion Cell 1</option>
                <option value='["fusion_cell", 2]'>Fusion Cell 2</option>
                <option value='["fusion_cell", 3]'>Fusion Cell 3 </option>
                <option value='["heavy_wrench", 1]'>Heavy Wrench 1</option>
                <option value='["heavy_wrench", 2]'>Heavy Wrench 2</option>
                <option value='["heavy_wrench", 3]'>Heavy Wrench 3</option>
                <option value='["jerry_rigged", 1]'>Jerry Rigged 1</option>
                <option value='["jerry_rigged", 2]'>Jerry Rigged 2</option>
                <option value='["jerry_rigged", 3]'>Jerry Rigged 3</option>
                <option value='["knuckle_dusters", 1]'>Knuckle Dusters 1</option>
                <option value='["knuckle_dusters", 2]'>Knuckle Dusters 2</option>
                <option value='["knuckle_dusters", 3]'>Knuckle Dusters 3</option>
                <option value='["lean_build", 1]'>Lean Build 1</option>
                <option value='["lean_build", 2]'>Lean Build 2</option>
                <option value='["lean_build", 3]'>Lean Build 3</option>
                <option value='["lightweight", 1]'>Lightweight 1</option>
                <option value='["lightweight", 2]'>Lightweight 2</option>
                <option value='["lightweight", 3]'>Lightweight 3</option>
                <option value='["make_it_rain", 1]'>Make It Rain 1</option>
                <option value='["make_it_rain", 2]'>Make It Rain 2</option>
                <option value='["make_it_rain", 3]'>Make It Rain 3</option>
                <option value='["mercenary", 1]'>Mercenary 1</option>
                <option value='["mercenary", 2]'>Mercenary 2</option>
                <option value='["mercenary", 3]'>Mercenary 3</option>
                <option value='["nano_serum", 1]'>Nano Serum 1</option>
                <option value='["nano_serum", 2]'>Nano Serum 2</option>
                <option value='["nano_serum", 3]'>Nano Serum 3</option>
                <option value='["nano_virus", 1]'>Nano Virus 1</option>
                <option value='["nano_virus", 2]'>Nano Virus 2</option>
                <option value='["nano_virus", 3]'>Nano Virus 3</option>
                <option value='["nanoweave_vest", 1]'>Nanoweave Vest 1</option>
                <option value='["nanoweave_vest", 2]'>Nanoweave Vest 2</option>
                <option value='["nanoweave_vest", 3]'>Nanoweave Vest 3</option>
                <option value='["ninja", 1]'>Ninja 1</option>
                <option value='["ninja", 2]'>Ninja 2</option>
                <option value='["ninja", 3]'>Ninja 3</option>
                <option value='["nope_nope_nope", 1]'>Nope Nope Nope 1</option>
                <option value='["nope_nope_nope", 2]'>Nope Nope Nope 2</option>
                <option value='["nope_nope_nope", 3]'>Nope Nope Nope 3</option>
                <option value='["overdrive", 1]'>Overdrive 1</option>
                <option value='["overdrive", 2]'>Overdrive 2</option>
                <option value='["overdrive", 3]'>Overdrive 3</option>
                <option value='["pack_tactics", 1]'>Pack Tactics 1</option>
                <option value='["pack_tactics", 2]'>Pack Tactics 2</option>
                <option value='["pack_tactics", 3]'>Pack Tactics 3</option>
                <option value='["remote_diagnostics", 1]'>Remote Diagnostics 1</option>
                <option value='["remote_diagnostics", 2]'>Remote Diagnostics 2</option>
                <option value='["remote_diagnostics", 3]'>Remote Diagnostics 3</option>
                <option value='["revenge", 1]'>Revenge 1</option>
                <option value='["revenge", 2]'>Revenge 2</option>
                <option value='["revenge", 3]'>Revenge 3</option>
                <option value='["robust", 1]'>Robust 1</option>
                <option value='["robust", 2]'>Robust 2</option>
                <option value='["robust", 3]'>Robust 3</option>
                <option value='["scavenger", 1]'>Scavenger 1</option>
                <option value='["scavenger", 2]'>Scavenger 2</option>
                <option value='["scavenger", 3]'>Scavenger 3</option>
                <option value='["scrappy", 1]'>Scrappy 1</option>
                <option value='["scrappy", 2]'>Scrappy 2</option>
                <option value='["scrappy", 3]'>Scrappy 3</option>
                <option value='["second_wind", 1]'>Second Wind 1</option>
                <option value='["second_wind", 2]'>Second Wind 2</option>
                <option value='["second_wind", 3]'>Second Wind 3</option>
                <option value='["shock_therapy", 1]'>Shock Therapy 1</option>
                <option value='["shock_therapy", 2]'>Shock Therapy 2</option>
                <option value='["shock_therapy", 3]'>Shock Therapy 3</option>
                <option value='["slow_drip", 1]'>Slow Drip 1</option>
                <option value='["slow_drip", 2]'>Slow Drip 2</option>
                <option value='["slow_drip", 3]'>Slow Drip 3</option>
                <option value='["symbiont_expert", 1]'>Symbiont Expert 1</option>
                <option value='["symbiont_expert", 2]'>Symbiont Expert 2</option>
                <option value='["symbiont_expert", 3]'>Symbiont Expert 3</option>
                <option value='["thermal_imaging", 1]'>Thermal Imaging 1</option>
                <option value='["thermal_imaging", 2]'>Thermal Imaging 2</option>
                <option value='["thermal_imaging", 3]'>Thermal Imaging 3</option>
                <option value='["toxic_blade", 1]'>Toxic Blade 1</option>
                <option value='["toxic_blade", 2]'>Toxic Blade 2</option>
                <option value='["toxic_blade", 3]'>Toxic Blade 3</option>
                <option value='["utility_belt", 1]'>Utility Belt 1</option>
                <option value='["utility_belt", 2]'>Utility Belt 2</option>
                <option value='["utility_belt", 3]'>Utility Belt 3</option>
            </select>
        </div>`
    }

    document.getElementsByClassName("perks")[0].innerHTML = perksContainerHTML;

}
