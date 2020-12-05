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
    let newPerkDivHTML = `
        <img src="${imagePath}" style="background-color: ${backgroundColor};">
        
        <select onchange="changePerk(this.value, this.parentElement);">\n
    `;
    
    for (const perk of Object.entries(perks)){
        for (const i of [...Array(3).keys()]){
            newPerkDivHTML += `<option value='["${perk[0]}",${i+1}]'>${perk[1].name} ${i+1}</option>`;
        }
    }

    newPerkDivHTML += "\n</select>";
    newPerkDiv.innerHTML = newPerkDivHTML;

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
