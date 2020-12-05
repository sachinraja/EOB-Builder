class Character{
    constructor(name, imageName, title, uniquePerks, abilityName, abilityAttributes){
        this.name = name;
        this.imageName = imageName;
        this.title = title;
        this.uniquePerks = uniquePerks;
        this.abilityName = abilityName;
        this.abilityAttributes = abilityAttributes;
    }
}

class Item{
    constructor(name, imageName, attributes){
        this.name = name;
        this.imageName = imageName;
        this.attributes = attributes;
    }
}

class Perk{
    constructor(name, imageName, levelAttributes){
        this.name = name;
        this.imageName = imageName;
        this.levelAttributes = levelAttributes;
    }
}

const characterEnums = {
    COOLDOWN : "Cooldown",
    TOTALHEALING : "Total healing",
    DURATION : "Duration",
    MISC : "Miscellaneous",
    DAMAGEREDUCTION : "Damage Reduction",
    KNOCKBACKREDUCTION : "Knockback Reduction",
    DAMAGE : "Damage",
    CASTTIME : "Cast Time",
    CASTS : "Casts",
    DOORLOCKDURATION : "Door Lock Duration",
    STUNDURATION : "Stun Duration",
    VISIBLERADIUS : "Visible Radius"
}

const characters = {
    "otto" : new Character("Otto", "otto_icon.png", "Medic", ["bedside_manner", "remote_diagnostics"], "Bio-Stabilizer", [
        {[characterEnums.COOLDOWN] : [70, "fixed"], [characterEnums.DURATION] : [5, "fixed"], [characterEnums.TOTALHEALING] : [15, "fixed"]},
        {[characterEnums.COOLDOWN] : [60, "fixed"], [characterEnums.DURATION] : [5, "fixed"], [characterEnums.TOTALHEALING] : [20, "fixed"]},
        {[characterEnums.COOLDOWN] : [50, "fixed"], [characterEnums.DURATION] : [5, "fixed"], [characterEnums.TOTALHEALING] : [25, "fixed"]}
    ]),

    "triss" : new Character("Triss", "triss_icon.png", "Spy", ["ninja", "advanced_optics"], "Target Location", [
        {[characterEnums.COOLDOWN] : [70, "fixed"], [characterEnums.DURATION] : [4, "fixed"], [characterEnums.MISC] : ["Reveals Players", "str"]},
        {[characterEnums.COOLDOWN] : [60, "fixed"], [characterEnums.DURATION] : [5, "fixed"], [characterEnums.MISC] : ["Reveals Players", "str"]},
        {[characterEnums.COOLDOWN] : [45, "fixed"], [characterEnums.DURATION] : [6, "fixed"], [characterEnums.MISC] : ["Reveals Players", "str"]}
    ]),

    "virgil" : new Character("Virgil", "virgil_icon.png", "Scientist", ["critical_failure", "fusion_cell"], "Teleportation Field", [
        {[characterEnums.COOLDOWN] : [40, "fixed"], [characterEnums.DURATION] : [5, "fixed"], [characterEnums.MISC] : ["Teleports Players", "str"]},
        {[characterEnums.COOLDOWN] : [30, "fixed"], [characterEnums.DURATION] : [5, "fixed"], [characterEnums.MISC] : ["Teleports Players", "str"]},
        {[characterEnums.COOLDOWN] : [20, "fixed"], [characterEnums.DURATION] : [5, "fixed"], [characterEnums.MISC] : ["Teleports Players", "str"]}
    ]),

    "lucius" : new Character("Lucius", "lucius_icon.png", "Trapper", ["knuckle_dusters", "second_wind"], "Adrenaline Rush", [
        {[characterEnums.COOLDOWN] : [40, "fixed"], [characterEnums.DURATION] : [5, "fixed"], [characterEnums.DAMAGEREDUCTION] : [0.4, "percent"], [characterEnums.KNOCKBACKREDUCTION] : [0.4, "percent"]},
        {[characterEnums.COOLDOWN] : [30, "fixed"], [characterEnums.DURATION] : [5, "fixed"], [characterEnums.DAMAGEREDUCTION] : [0.5, "percent"], [characterEnums.KNOCKBACKREDUCTION] : [0.5, "percent"]},
        {[characterEnums.COOLDOWN] : [20, "fixed"], [characterEnums.DURATION] : [5, "fixed"], [characterEnums.DAMAGEREDUCTION] : [0.6, "percent"], [characterEnums.KNOCKBACKREDUCTION] : [0.6, "percent"]}
    ]),

    "xenna" : new Character("Xenna", "xenna_icon.png", "Captain", ["deadshot", "mercenary"], "Torrelian Shield", [
        {[characterEnums.COOLDOWN] : [20, "fixed"], [characterEnums.DURATION] : [10, "fixed"], [characterEnums.DAMAGE] : [4, "fixed"], [characterEnums.CASTTIME] : [0.75, "fixed"]},
        {[characterEnums.COOLDOWN] : [20, "fixed"], [characterEnums.DURATION] : [15, "fixed"], [characterEnums.DAMAGE] : [6, "fixed"], [characterEnums.CASTTIME] : [0.6, "fixed"]},
        {[characterEnums.COOLDOWN] : [20, "fixed"], [characterEnums.DURATION] : [20, "fixed"], [characterEnums.DAMAGE] : [8, "fixed"], [characterEnums.CASTTIME] : [0.45, "fixed"]}
    ]),

    "monkus" : new Character("Monkus", "monkus_icon.png", "Space Monkey", ["lean_build", "scrappy"], "Monkey Roll", [
        {[characterEnums.COOLDOWN] : [30, "fixed"], [characterEnums.MISC] : ["Invincible during roll", "str"]},
        {[characterEnums.COOLDOWN] : [25, "fixed"], [characterEnums.MISC] : ["Invincible during roll", "str"]},
        {[characterEnums.COOLDOWN] : [15, "fixed"], [characterEnums.MISC] : ["Invincible during roll", "str"]}
    ]),

    "sarrel" : new Character("Sarrel", "sarrel_icon.png", "Grifter", ["channeler", "alien_affinity"], "Ability Steal", [
        {[characterEnums.COOLDOWN] : [25, "fixed"], [characterEnums.MISC] : ["Steals an ability", "str"]},
        {[characterEnums.COOLDOWN] : [20, "fixed"], [characterEnums.MISC] : ["Steals an ability", "str"]},
        {[characterEnums.COOLDOWN] : [15, "fixed"], [characterEnums.MISC] : ["Steals an ability", "str"]}
    ]),

    "niko" : new Character("Niko", "niko_icon.png", "Officer", ["utility_belt", "bulletproof_vest"], "Access Denied", [
        {[characterEnums.COOLDOWN] : [45, "fixed"], [characterEnums.DOORLOCKDURATION] : [3, "fixed"], [characterEnums.DAMAGE] : [8, "fixed"], [characterEnums.STUNDURATION] : [1, "fixed"]},
        {[characterEnums.COOLDOWN] : [40, "fixed"], [characterEnums.DOORLOCKDURATION] : [3, "fixed"], [characterEnums.DAMAGE] : [12, "fixed"], [characterEnums.STUNDURATION] : [1, "fixed"]},
        {[characterEnums.COOLDOWN] : [35, "fixed"], [characterEnums.DOORLOCKDURATION] : [3, "fixed"], [characterEnums.DAMAGE] : [16, "fixed"], [characterEnums.STUNDURATION] : [1, "fixed"]}
    ]),

    "silas" : new Character("Silas", "silas_icon.png", "Assassin", ["concealed_blade", "backstab"], "Shadow Sneak", [
        {[characterEnums.COOLDOWN] : [20, "fixed"], [characterEnums.DURATION] : [8, "fixed"], [characterEnums.VISIBLERADIUS] : [6, "fixed"]},
        {[characterEnums.COOLDOWN] : [20, "fixed"], [characterEnums.DURATION] : [9, "fixed"], [characterEnums.VISIBLERADIUS] : [5.5, "fixed"]},
        {[characterEnums.COOLDOWN] : [20, "fixed"], [characterEnums.DURATION] : [10, "fixed"], [characterEnums.VISIBLERADIUS] : [5, "fixed"]}
    ])
};

const itemEnums = {
    TYPE : "Type",
    CASTTIME : "Cast Time",
    GENCHARGE : "Gen Charge",
    MAXAMMO : "Max Ammo",
    HEALING : "Healing",
    PROJECTILESPEED : "Projectile Speed",
    STUNDURATION : "Stun Duration",
    DAMAGE : "Damage",
    CHARGEDDAMAGE : "Charged Damage",
    VISIBILITYRADIUS : "Visibility Radius",
    KNOCKBACK : "Knockback",
    DURATION : "Duration",
    RADIUS : "Radius",
    SLOW : "Slow",
    CHARGEDSLOW : "Charged Slow",
    DISTANCE: "Distance",
    IMPACTDAMAGE : "Impact Damage",
    PULLDAMAGEPERMETER : "Pull Damage per Meter",
    MOVEMENTSPEEDBONUS : "Movement Speed Bonus",
    CHARGEDKNOCKBACK : "Charged Knockback",
    RANGE : "Range",
    CHARGEDRANGE : "Charged Range",
    SLOWDURATION : "Slow Duration",
    SLOWMAGNITUDE : "Slow Magnitude",
    CHARGEDSLOWMAGNITUDE : "Charged Slow Magnitude"
};

const items = {
    "health_kit" : new Item("Health Kit", "health_kit.png", {
        [itemEnums.TYPE] : ["Starting", "str"],
        [itemEnums.CASTTIME] : [0.6, "fixed"],
        [itemEnums.GENCHARGE] : [1, "fixed"],
        [itemEnums.MAXAMMO] : [2, "fixed"],
        [itemEnums.HEALING] : [30, "fixed"]
    }),

    "stun_gun" : new Item("Stun Gun", "stun_gun.png", {
        [itemEnums.TYPE] : ["Starting", "str"],
        [itemEnums.CASTTIME] : [0.85, "fixed"],
        [itemEnums.GENCHARGE] : [2, "fixed"],
        [itemEnums.MAXAMMO] : [4, "fixed"],
        [itemEnums.PROJECTILESPEED] : ["Fast", "str"],
        [itemEnums.STUNDURATION] : [1.25, "fixed"],
        [itemEnums.DAMAGE] : [6, "fixed"]
    }),

    "snare_traps" : new Item("Snare Traps", "snare_traps.png", {
        [itemEnums.TYPE] : ["Starting", "str"],
        [itemEnums.CASTTIME] : [0.3, "fixed"],
        [itemEnums.GENCHARGE] : [2, "fixed"],
        [itemEnums.MAXAMMO] : [4, "fixed"],
        [itemEnums.STUNDURATION] : [1.25, "fixed"],
        [itemEnums.DAMAGE] : [10, "fixed"],
        [itemEnums.CHARGEDDAMAGE] : [25, "fixed"],
        [itemEnums.VISIBILITYRADIUS] : [2, "fixed"]
    }),

    "force_baton" : new Item("Force Baton", "force_baton.png", {
        [itemEnums.TYPE] : ["Starting", "str"],
        [itemEnums.CASTTIME] : [0.7, "fixed"],
        [itemEnums.GENCHARGE] : [2, "fixed"],
        [itemEnums.MAXAMMO] : [4, "fixed"],
        [itemEnums.STUNDURATION] : [1, "fixed"],
        [itemEnums.DAMAGE] : [10, "fixed"],
        [itemEnums.KNOCKBACK] : [65, "fixed"]
    }),

    "EMP" : new Item("EMP", "EMP.png", {
        [itemEnums.TYPE] : ["Starting", "str"],
        [itemEnums.CASTTIME] : [0.75, "fixed"],
        [itemEnums.GENCHARGE] : ["Empower", "str"],
        [itemEnums.MAXAMMO] : [1, "fixed"],
        [itemEnums.DURATION] : [1.25, "fixed"],
        [itemEnums.DAMAGE] : [20, "fixed"],
        [itemEnums.CHARGEDDAMAGE] : [35, "fixed"],
        [itemEnums.RADIUS] : [3, "fixed"],
        [itemEnums.SLOW] : [60, "fixed"],
        [itemEnums.CHARGEDSLOW] : [100, "fixed"]
    }),

    "jump_drive" : new Item("Jump Drive", "jump_drive.png", {
        [itemEnums.TYPE] : ["Starting", "str"],
        [itemEnums.CASTTIME] : [0.4, "fixed"],
        [itemEnums.GENCHARGE] : [2, "str"],
        [itemEnums.MAXAMMO] : [4, "fixed"],
        [itemEnums.DURATION] : [0.5, "fixed"],
        [itemEnums.DAMAGE] : [8, "fixed"],
        [itemEnums.DISTANCE] : [40, "fixed"],
        [itemEnums.SLOW] : [75, "fixed"]
    }),

    "hookshot" : new Item("Hookshot", "hookshot.png", {
        [itemEnums.TYPE] : ["Starting", "str"],
        [itemEnums.CASTTIME] : [0.7, "fixed"],
        [itemEnums.GENCHARGE] : [1, "str"],
        [itemEnums.MAXAMMO] : [2, "fixed"],
        [itemEnums.IMPACTDAMAGE] : [12.5, "fixed"],
        [itemEnums.PULLDAMAGEPERMETER] : [2, "fixed"]
    }),
    "stim_serum" : new Item("Stim Serum", "stim_serum.png", {
        [itemEnums.TYPE] : ["Starting", "str"],
        [itemEnums.CASTTIME] : [0.3, "str"],
        [itemEnums.GENCHARGE] : [1, "str"],
        [itemEnums.MAXAMMO] : [2, "fixed"],
        [itemEnums.DURATION] : [3, "fixed"],
        [itemEnums.MOVEMENTSPEEDBONUS] : [65, "fixed"]
    }),

    "force_blaster" : new Item("Force Blaster", "force_blaster.png", {
        [itemEnums.TYPE] : ["Starting", "str"],
        [itemEnums.CASTTIME] : [0.65, "fixed"],
        [itemEnums.GENCHARGE] : [1, "str"],
        [itemEnums.MAXAMMO] : [2, "fixed"],
        [itemEnums.DAMAGE] : [15, "fixed"],
        [itemEnums.CHARGEDDAMAGE] : [22.5, "fixed"],
        [itemEnums.KNOCKBACK] : [15, "fixed"],
        [itemEnums.CHARGEDKNOCKBACK] : [30, "fixed"],
        [itemEnums.RANGE] : [2.25, "fixed"],
        [itemEnums.CHARGEDRANGE] : [4.5, "fixed"],
        [itemEnums.SLOWDURATION] : [2, "fixed"],
        [itemEnums.SLOWMAGNITUDE] : [0.6, "percent"],
        [itemEnums.CHARGEDSLOWMAGNITUDE] : [0.75, "percent"]
    })
};

const perkEnums = {
    CAMERAZOOM : "Camera Zoom",
    ALIENABILITYSTEAL : "Alien Ability Steal",
    ALIENDAMAGE : "Alien Damage",
    DURATION : "Duration",
    DAMAGETAKENREDUCTION : "Damage Taken Reduction",
    BLEEDDAMAGE : "Bleed Damage",
    THROWINGAXEDAMAGE : "Throwing Axe Damage",
    CHARGEDTHROWINGAXEDAMAGE : "Charged Throwing Axe Damage",
    SLOW : "Slow",
    SLOWDURATION : "Slow Duration",
    HEALTHHEALEDFORMAXHP : "Health Healed for Max HP",
    MAXHP : "Max HP",
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
    GENMAXHP : "Generator Max HP Bonus",
    HEALINGPERSECOND : "Healing per Second",
    ALIENEVOGAIN: "Alien Evolution Points Gain",
    HUMANEVOREDUCTION : "Human Evolution Points Reduction",
    CAMERAVISION : "Camera Vision",
    KNIFEDAMAGE : "Knife Damage",
    CHARGEDKNIFEDAMAGE : "Charged Knife Damage",
    INVENTORYSLOTS : "Inventory Slots",
    MOVEMENTSPEEDAFTERABILILTY : "Movement Speed After Ability",
    ARMORABSORPTION: "Armor Absorption",
    BULLETPROOFVESTGENRECHARGE : "Bulletproof Vest Generator Recharge",
    EXTRAITEM : "Extra Item"
};

const perks = {
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

    "armory_specialist" : new Perk("Armory Specialist", "armory_specialist.png", [
        {[perkEnums.EXTRAITEM] : [["Shield Battery", "Bandage"], "list"]},
        {[perkEnums.EXTRAITEM] : [["Knife", "Throwing Axe", "Wrench"], "list"]},
        {[perkEnums.EXTRAITEM] : [["Sledgehammer", "Mortar", "Sniper"], "list"]}
    ]),

    "backstab" : new Perk("Backstab", "backstab.png", [
        {[perkEnums.BLEEDDAMAGE] : [4, "fixed"], [perkEnums.DURATION] : [3, "fixed"]},
        {[perkEnums.BLEEDDAMAGE] : [5, "fixed"], [perkEnums.DURATION] : [3, "fixed"]},
        {[perkEnums.BLEEDDAMAGE] : [6, "fixed"], [perkEnums.DURATION] : [3, "fixed"]}
    ]),

    "ballistic_plating" : new Perk("Ballistic Plating", "ballistic_plating.png", [
        {[perkEnums.DAMAGETAKENREDUCTION] : [0.5, "fixed"]},
        {[perkEnums.DAMAGETAKENREDUCTION] : [1, "fixed"]},
        {[perkEnums.DAMAGETAKENREDUCTION] : [1.5, "fixed"]}
    ]),

    "battle_axe" : new Perk("Battle Axe", "battle_axe.png", [
        {[perkEnums.THROWINGAXEDAMAGE] : [2, "fixed"], [perkEnums.CHARGEDTHROWINGAXEDAMAGE] : [2, "fixed"], [perkEnums.SLOW] : [0.3, "percent"], [perkEnums.SLOWDURATION] : [1, "fixed"]},
        {[perkEnums.THROWINGAXEDAMAGE] : [2, "fixed"], [perkEnums.CHARGEDTHROWINGAXEDAMAGE] : [4, "fixed"], [perkEnums.SLOW] : [0.3, "percent"], [perkEnums.SLOWDURATION] : [1.5, "fixed"]},
        {[perkEnums.THROWINGAXEDAMAGE] : [2, "fixed"], [perkEnums.CHARGEDTHROWINGAXEDAMAGE] : [6, "fixed"], [perkEnums.SLOW] : [0.3, "percent"], [perkEnums.SLOWDURATION] : [2, "fixed"]}
    ]),

    "bedside_manner" : new Perk("Bedside Manner", "bedside_manner.png", [
        {[perkEnums.HEALTHHEALEDFORMAXHP] : [6, "fixed"]},
        {[perkEnums.HEALTHHEALEDFORMAXHP] : [5, "fixed"]},
        {[perkEnums.HEALTHHEALEDFORMAXHP] : [4, "fixed"]}
    ]),

    "bulletproof_vest" : new Perk("Bulletproof Vest", "bulletproof_vest.png", [
        {[perkEnums.ARMOR] : [30, "fixed"]},
        {[perkEnums.ARMOR] : [40, "fixed"]},
        {[perkEnums.ARMOR] : [50, "fixed"]}
    ]),

    "channeler" : new Perk("Channeler", "channeler.png", [
        {[perkEnums.COOLDOWNREDUCTION] : [0.15, "percent"], [perkEnums.MISC] : ["Extra Spell", "str"]},
        {[perkEnums.COOLDOWNREDUCTION] : [0.225, "percent"], [perkEnums.MISC] : ["Extra Spell", "str"]},
        {[perkEnums.COOLDOWNREDUCTION] : [0.3, "percent"], [perkEnums.MISC] : ["Extra Spell", "str"]}
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

    "enhanced_alloys" : new Perk("Enhanced Alloys", "enhanced_alloys.png", [
        {[perkEnums.ARMORABSORPTION] : [0.1, "percent"], [perkEnums.BULLETPROOFVESTGENRECHARGE] : [0.25, "percent"]},
        {[perkEnums.ARMORABSORPTION] : [0.175, "percent"], [perkEnums.BULLETPROOFVESTGENRECHARGE] : [0.375, "percent"]},
        {[perkEnums.ARMORABSORPTION] : [0.25, "percent"], [perkEnums.BULLETPROOFVESTGENRECHARGE] : [0.5, "percent"]}
    ]),

    "epinephrine" : new Perk("Epinephrine", "epinephrine.png", [
        {[perkEnums.MOVEMENTSPEEDAFTERABILILTY] : [0.1, "percent"], [perkEnums.DURATION] : [3, "fixed"]},
        {[perkEnums.MOVEMENTSPEEDAFTERABILILTY] : [0.15, "percent"], [perkEnums.DURATION] : [3, "fixed"]},
        {[perkEnums.MOVEMENTSPEEDAFTERABILILTY] : [0.2, "percent"], [perkEnums.DURATION] : [3, "fixed"]}
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
        {[perkEnums.MAXHP] : [-10, "fixed"], [perkEnums.MOVEMENTSPEED] : [0.02, "percent"]},
        {[perkEnums.MAXHP] : [-15, "fixed"], [perkEnums.MOVEMENTSPEED] : [0.04, "percent"]},
        {[perkEnums.MAXHP] : [-20, "fixed"], [perkEnums.MOVEMENTSPEED] : [0.06, "percent"]}
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
        {[perkEnums.DAMAGETAKENREDUCTION] : [0.05, "percent"]},
        {[perkEnums.DAMAGETAKENREDUCTION] : [0.075, "percent"]},
        {[perkEnums.DAMAGETAKENREDUCTION] : [0.1, "percent"]}
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
        {[perkEnums.MAXHP] : [0.1, "percent"]},
        {[perkEnums.MAXHP] : [0.15, "percent"]},
        {[perkEnums.MAXHP] : [0.2, "percent"]}
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
        {[perkEnums.GENHEALING] : [5, "fixed"], [perkEnums.GENMAXHP] : [2, "fixed"]},
        {[perkEnums.GENHEALING] : [7.5, "fixed"], [perkEnums.GENMAXHP] : [4, "fixed"]},
        {[perkEnums.GENHEALING] : [10, "fixed"], [perkEnums.GENMAXHP] : [6, "fixed"]}
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
        {[perkEnums.MAXHP] : [-40, "fixed"], [perkEnums.MOVEMENTSPEED] : [-0.05, "percent"], [perkEnums.INVENTORYSLOTS] : [1, "fixed"]},
        {[perkEnums.MAXHP] : [-35, "fixed"], [perkEnums.MOVEMENTSPEED] : [-0.04, "percent"], [perkEnums.INVENTORYSLOTS] : [1, "fixed"]},
        {[perkEnums.MAXHP] : [-30, "fixed"], [perkEnums.MOVEMENTSPEED] : [-0.03, "percent"], [perkEnums.INVENTORYSLOTS] : [1, "fixed"]}
    ])
};