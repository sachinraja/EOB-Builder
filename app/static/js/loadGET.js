function loadCharacter(characterName){
    let characterDiv = document.getElementsByClassName("character")[0];
    changeCharacter(characterName, characterDiv);
    characterDiv.getElementsByTagName("select")[0].value = characterName;
}

function loadItem(itemName){
    let itemDiv = document.getElementsByClassName("startingItem")[0];
    changeItem(itemName, itemDiv);
    itemDiv.getElementsByTagName("select")[0].value = itemName;
}

function loadPerk(perkInfo){
    let [name, level] = perkInfo;
    let perk = getPerk(name);

    let imagePath = `../static/assets/perks/${perk.imageName}`;

    //change perk background color to represent level
    let backgroundColor = "#0000ff";

    if (level == 2){
        backgroundColor = "#6a0dad";
    }

    else if (level == 3){
        backgroundColor = "#ffd700";
    }

    //generate perks with images and select options
    let newPerkDiv = document.createElement("div");
    newPerkDiv.innerHTML = 
    `
        <img src="${imagePath}" style="background-color: ${backgroundColor};">
        
        <select onchange="changePerk(this.value, this.parentElement);">
            <option value='["advanced_optics",1]'>Advanced Optics 1</option>
            <option value='["advanced_optics",2]'>Advanced Optics 2</option>
            <option value='["advanced_optics",3]'>Advanced Optics 3</option>
            <option value='["alien_affinity",1]'>Alien Affinity 1</option>
            <option value='["alien_affinity",2]'>Alien Affinity 2</option>
            <option value='["alien_affinity",3]'>Alien Affinity 3</option>
            <option value='["alien_hunter",1]'>Alien Hunter 1</option>
            <option value='["alien_hunter",2]'>Alien Hunter 2</option>
            <option value='["alien_hunter",3]'>Alien Hunter 3</option>
            <option value='["backstab",1]'>Backstab 1</option>
            <option value='["backstab",2]'>Backstab 2</option>
            <option value='["backstab",3]'>Backstab 3</option>
            <option value='["ballistic_plating",1]'>Ballistic Plating 1</option>
            <option value='["ballistic_plating",2]'>Ballistic Plating 2</option>
            <option value='["ballistic_plating",3]'>Ballistic Plating 3</option>
            <option value='["battle_axe",1]'>Battle Axe 1</option>
            <option value='["battle_axe",2]'>Battle Axe 2</option>
            <option value='["battle_axe",3]'>Battle Axe 3</option>
            <option value='["bedside_manner",1]'>Bedside Manner 1</option>
            <option value='["bedside_manner",2]'>Bedside Manner 2</option>
            <option value='["bedside_manner",3]'>Bedside Manner 3</option>
            <option value='["bulletproof_vest",1]'>Bulletproof Vest 1</option>
            <option value='["bulletproof_vest",2]'>Bulletproof Vest 2</option>
            <option value='["bulletproof_vest",3]'>Bulletproof Vest 3</option>
            <option value='["channeler",1]'>Channeler 1</option>
            <option value='["channeler",2]'>Channeler 2</option>
            <option value='["channeler",3]'>Channeler 3</option>
            <option value='["concealed_blade",1]'>Concealed Blade 1</option>
            <option value='["concealed_blade",2]'>Concealed Blade 2</option>
            <option value='["concealed_blade",3]'>Concealed Blade 3</option>
            <option value='["critical_failure",1]'>Critical Failure 1</option>
            <option value='["critical_failure",2]'>Critical Failure 2</option>
            <option value='["critical_failure",3]'>Critical Failure 3</option>
            <option value='["cybernetics",1]'>Cybernetics 1</option>
            <option value='["cybernetics",2]'>Cybernetics 2</option>
            <option value='["cybernetics",3]'>Cybernetics 3</option>
            <option value='["dead_shot",1]'>Dead Shot 1</option>
            <option value='["dead_shot",2]'>Dead Shot 2</option>
            <option value='["dead_shot",3]'>Dead Shot 3</option>
            <option value='["espresso",1]'>Espresso 1</option>
            <option value='["espresso",2]'>Espresso 2</option>
            <option value='["espresso",3]'>Espresso 3</option>
            <option value='["flanking",1]'>Flanking 1</option>
            <option value='["flanking",2]'>Flanking 2</option>
            <option value='["flanking",3]'>Flanking 3</option>
            <option value='["fusion_cell",1]'>Fusion Cell 1</option>
            <option value='["fusion_cell",2]'>Fusion Cell 2</option>
            <option value='["fusion_cell",3]'>Fusion Cell 3 </option>
            <option value='["heavy_wrench",1]'>Heavy Wrench 1</option>
            <option value='["heavy_wrench",2]'>Heavy Wrench 2</option>
            <option value='["heavy_wrench",3]'>Heavy Wrench 3</option>
            <option value='["jerry_rigged",1]'>Jerry Rigged 1</option>
            <option value='["jerry_rigged",2]'>Jerry Rigged 2</option>
            <option value='["jerry_rigged",3]'>Jerry Rigged 3</option>
            <option value='["knuckle_dusters",1]'>Knuckle Dusters 1</option>
            <option value='["knuckle_dusters",2]'>Knuckle Dusters 2</option>
            <option value='["knuckle_dusters",3]'>Knuckle Dusters 3</option>
            <option value='["lean_build",1]'>Lean Build 1</option>
            <option value='["lean_build",2]'>Lean Build 2</option>
            <option value='["lean_build",3]'>Lean Build 3</option>
            <option value='["lightweight",1]'>Lightweight 1</option>
            <option value='["lightweight",2]'>Lightweight 2</option>
            <option value='["lightweight",3]'>Lightweight 3</option>
            <option value='["make_it_rain",1]'>Make It Rain 1</option>
            <option value='["make_it_rain",2]'>Make It Rain 2</option>
            <option value='["make_it_rain",3]'>Make It Rain 3</option>
            <option value='["mercenary",1]'>Mercenary 1</option>
            <option value='["mercenary",2]'>Mercenary 2</option>
            <option value='["mercenary",3]'>Mercenary 3</option>
            <option value='["nano_serum",1]'>Nano Serum 1</option>
            <option value='["nano_serum",2]'>Nano Serum 2</option>
            <option value='["nano_serum",3]'>Nano Serum 3</option>
            <option value='["nano_virus",1]'>Nano Virus 1</option>
            <option value='["nano_virus",2]'>Nano Virus 2</option>
            <option value='["nano_virus",3]'>Nano Virus 3</option>
            <option value='["nanoweave_vest",1]'>Nanoweave Vest 1</option>
            <option value='["nanoweave_vest",2]'>Nanoweave Vest 2</option>
            <option value='["nanoweave_vest",3]'>Nanoweave Vest 3</option>
            <option value='["ninja",1]'>Ninja 1</option>
            <option value='["ninja",2]'>Ninja 2</option>
            <option value='["ninja",3]'>Ninja 3</option>
            <option value='["nope_nope_nope",1]'>Nope Nope Nope 1</option>
            <option value='["nope_nope_nope",2]'>Nope Nope Nope 2</option>
            <option value='["nope_nope_nope",3]'>Nope Nope Nope 3</option>
            <option value='["overdrive",1]'>Overdrive 1</option>
            <option value='["overdrive",2]'>Overdrive 2</option>
            <option value='["overdrive",3]'>Overdrive 3</option>
            <option value='["pack_tactics",1]'>Pack Tactics 1</option>
            <option value='["pack_tactics",2]'>Pack Tactics 2</option>
            <option value='["pack_tactics",3]'>Pack Tactics 3</option>
            <option value='["remote_diagnostics",1]'>Remote Diagnostics 1</option>
            <option value='["remote_diagnostics",2]'>Remote Diagnostics 2</option>
            <option value='["remote_diagnostics",3]'>Remote Diagnostics 3</option>
            <option value='["revenge",1]'>Revenge 1</option>
            <option value='["revenge",2]'>Revenge 2</option>
            <option value='["revenge",3]'>Revenge 3</option>
            <option value='["robust",1]'>Robust 1</option>
            <option value='["robust",2]'>Robust 2</option>
            <option value='["robust",3]'>Robust 3</option>
            <option value='["scavenger",1]'>Scavenger 1</option>
            <option value='["scavenger",2]'>Scavenger 2</option>
            <option value='["scavenger",3]'>Scavenger 3</option>
            <option value='["scrappy",1]'>Scrappy 1</option>
            <option value='["scrappy",2]'>Scrappy 2</option>
            <option value='["scrappy",3]'>Scrappy 3</option>
            <option value='["second_wind",1]'>Second Wind 1</option>
            <option value='["second_wind",2]'>Second Wind 2</option>
            <option value='["second_wind",3]'>Second Wind 3</option>
            <option value='["shock_therapy",1]'>Shock Therapy 1</option>
            <option value='["shock_therapy",2]'>Shock Therapy 2</option>
            <option value='["shock_therapy",3]'>Shock Therapy 3</option>
            <option value='["slow_drip",1]'>Slow Drip 1</option>
            <option value='["slow_drip",2]'>Slow Drip 2</option>
            <option value='["slow_drip",3]'>Slow Drip 3</option>
            <option value='["symbiont_expert",1]'>Symbiont Expert 1</option>
            <option value='["symbiont_expert",2]'>Symbiont Expert 2</option>
            <option value='["symbiont_expert",3]'>Symbiont Expert 3</option>
            <option value='["thermal_imaging",1]'>Thermal Imaging 1</option>
            <option value='["thermal_imaging",2]'>Thermal Imaging 2</option>
            <option value='["thermal_imaging",3]'>Thermal Imaging 3</option>
            <option value='["toxic_blade",1]'>Toxic Blade 1</option>
            <option value='["toxic_blade",2]'>Toxic Blade 2</option>
            <option value='["toxic_blade",3]'>Toxic Blade 3</option>
            <option value='["utility_belt",1]'>Utility Belt 1</option>
            <option value='["utility_belt",2]'>Utility Belt 2</option>
            <option value='["utility_belt",3]'>Utility Belt 3</option>
        </select>
    `;

    //add newPerkDiv to perks Container and set selection value
    document.getElementsByClassName("perks")[0].appendChild(newPerkDiv);
    newPerkDiv.getElementsByTagName("select")[0].value = JSON.stringify(perkInfo);
}

function loadGET(chrName, itemName, perks){
    loadCharacter(chrName);
    loadItem(itemName);

    for (perk of perks){
        loadPerk(perk);
    }

    displayPerkInfo(getPerkInfos());
    
    //"load" once GET parameters have been accounted for
    document.getElementsByTagName("html")[0].style.visibility = "visible";
}
