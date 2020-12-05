function getCharacter(name){
    return characters[name];
}

function changeCharacter(characterName, characterDiv){
    const character = getCharacter(characterName);
    const characterImg = characterDiv.getElementsByTagName("img")[0];
    characterImg.src = `../static/assets/characters/${character.imageName}`;

    displayCharacterInfo(character);
    updateURLParameter(window.location.href, "chr", characterName);
}

function displayCharacterInfo(character){
    let characterHTML = `<h2>${character.name}</h2>\n<ul>\n`;

    characterHTML += `<li>Title: ${character.title}</li>\n`;
    characterHTML += `<li><strong>Ability: ${character.abilityName} 3</strong></li>\n`;

    //get highest level of ability and display it
    for (const abilityAttr of Object.entries(character.abilityAttributes[2])){
        let [attrStr, color] = getFromType.apply(this, abilityAttr[1]);
        characterHTML += `<li style="color: ${color}">${abilityAttr[0]}: ${attrStr}</li>\n`;
    }

    characterHTML += "</ul>\n";
    document.getElementsByClassName("characterAttributes")[0].innerHTML = characterHTML;
}

function getFromType(attrValue, attrType){
    let attrStr = "";
    let color = "#00ff00";

    switch (attrType){
        case "fixed":
            if (attrValue < 0){
                color = "#ff0000";
            }

            attrStr = attrValue;
            break;
        
        case "percent":
            if (attrValue < 0){
                color = "#ff0000";
            }

            attrValue *= 100;
            attrStr = `${attrValue}%`;
            break;
        
        case "str":
            attrStr = attrValue;
            break;

        case "list":
            attrStr = attrValue.join(", ");
            break;
    }

    return [attrStr, color];
}

function getItem(name){
    return items[name];
}

function changeItem(itemName, itemDiv){
    const item = getItem(itemName);
    const itemImg = itemDiv.getElementsByTagName("img")[0];
    itemImg.src = `../static/assets/items/${item.imageName}`;

    displayItemInfo(item);
    updateURLParameter(window.location.href, "item", itemName)
}

function displayItemInfo(item){
    let itemHTML = `<h2>${item.name}</h2>\n<ul>\n`;

    for (const itemAttr of Object.entries(item.attributes)){
        let [attrStr, color] = getFromType.apply(this, itemAttr[1])
        itemHTML += `<li style="color: ${color}">${itemAttr[0]}: ${attrStr}</li>\n`;
    }

    itemHTML += "</ul>\n";
    document.getElementsByClassName("itemAttributes")[0].innerHTML = itemHTML;
}

function getPerk(name){
    return perks[name];
}

function getPerkInfos(){
    const perkSelects = document.getElementsByClassName("perks")[0].getElementsByTagName("select");
    let perkInfos = [];
    
    for (const perkSelect of perkSelects){
        perkInfos.push(JSON.parse(perkSelect.value));
    }
    
    return perkInfos;
}

function changePerk(perkInfo, perkDiv){
    const [name, level] = JSON.parse(perkInfo);
    const perk = getPerk(name);
    const perkImg = perkDiv.getElementsByTagName("img")[0];
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

    const perkInfos = getPerkInfos();
    const perkNames = perkInfos.map(perkInfo => `${perkInfo[0]}_${perkInfo[1]}`);

    displayPerkInfo(perkInfos);
    updatePerksParameters(perkNames);
}

function displayPerkInfo(perkInfos){
    const perkData = perkInfos.map(perkInfo => getPerk(perkInfo[0]));

    let perkHTMLs = "";

    //convert to strings
    for (let i = 0; i < perkData.length; i++){
        const level = perkInfos[i][1] - 1;
        let perkHTML = `<div>\n<h2>${perkData[i].name}</h2>\n<ul>\n`;

        for (const levelAttr of Object.entries(perkData[i].levelAttributes[level])){
            let [attrStr, color] = getFromType.apply(this, levelAttr[1]);
            perkHTML += `<li style="color: ${color}">${levelAttr[0]}: ${attrStr}</li>\n`;
        }
        
        perkHTML += "</ul>\n</div>\n";
        perkHTMLs += perkHTML;
    }

    document.getElementsByClassName("perkAttributes")[0].innerHTML = perkHTMLs;
}

function updatePerksParameters(perkNames){
    let newAdditionalURL = "";
    let tempArray = window.location.href.split("?");
    let baseURL = tempArray[0];
    let additionalURL = tempArray[1];
    let temp = "";

    if (additionalURL){
        tempArray = additionalURL.split("&");

        for (let i = 0; i < tempArray.length; i++){
            if (tempArray[i].split("=")[0] != "perk"){
                newAdditionalURL += temp + tempArray[i];
                temp = "&";
            }
        }
    }

    let perkParams = "";
    for (let perkName of perkNames){
        perkParams += `${temp}perk=${perkName}`;
        temp = "&";
    }

    let newURL = `${baseURL}?${newAdditionalURL}${perkParams}`;

    window.history.replaceState("", "", newURL);
    document.getElementById("currentURL").textContent = newURL;
}

function updateURLParameter(url, param, paramVal){
    let newAdditionalURL = "";
    let tempArray = url.split("?");
    let baseURL = tempArray[0];
    let additionalURL = tempArray[1];
    let temp = "";

    if (additionalURL){
        tempArray = additionalURL.split("&");

        for (let i = 0; i < tempArray.length; i++){
            if(tempArray[i].split("=")[0] != param){
                newAdditionalURL += temp + tempArray[i];
                temp = "&";
            }
        }
    }

    let updatedParam = `${temp}${param}=${paramVal}`;
    let newURL =`${baseURL}?${newAdditionalURL}${updatedParam}`; 

    window.history.replaceState("", "", newURL);
    document.getElementById("currentURL").textContent = newURL;
}

function copyURL(){
    //create dummy element to copy url from
    let temp = document.createElement("input");
    let text = window.location.href;

    document.body.appendChild(temp);
    temp.value = text;
    temp.select();
    document.execCommand("copy");
    document.body.removeChild(temp);
}