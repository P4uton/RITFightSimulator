function calculate() {
    let totalAttack = 0;
    let totalDefense = 0;
    let attack_values=[];
    let defensive_values = [];

    //put number of Attacking Units in Array
    for (let i=0; i < UnitArray.length;i++ ) {
        attack_values.push(document.getElementsByClassName("attack_number")[i].value);
    }
    //console.log(attack_values);

    //put number of defender units in Array
    for (let i=0; i < UnitArray.length;i++ ) {
        defensive_values.push(document.getElementsByClassName("def_number")[i].value);
    }

    totalAttack = calc_totalOffensive(totalAttack, attack_values);
    totalDefense = calc_totalDefense(totalDefense, defensive_values);

    //console.log("final off "+ totalAttack);
    //
    //console.log("final def "+ totalDefense);


    let defensiveDeathArray = calc_DefensiveDeaths(defensive_values, totalAttack, totalDefense);
    fillDefensiveDeaths(defensiveDeathArray);
    let offensiveDeathArray = calc_OffensiveDeathArray(attack_values, totalAttack, totalDefense);
    fillOffensiveDeaths(offensiveDeathArray);


    fillTable(totalAttack, totalDefense);
    let strengthLost = calc_StrengthLost(offensiveDeathArray);
    fillStrengthLost(strengthLost);

    //returns an Array with only names  of attacking units
    let UnitNamesAttackArray = createUnitArray(attack_values);
    let UnitNamesDefenseArray = createUnitArray(defensive_values);
    calculateEffectiveness(totalAttack, totalDefense, attack_values, defensive_values, UnitNamesAttackArray, UnitNamesDefenseArray);

    console.log("Success");
}

function calculateEffectiveness(totalAttack, totalDefense, attack_values, defense_values, UnitNamesAttackArray, UnitNamesDefenseArray ) {
    let attackerEffectiveness = 0;
    let defenderEffectiveness = 0;
    const amountTotalOff = totalAttack;
    const amountTotalDef = totalDefense;
    let totalUnitsOff = calc_totalUnits(attack_values);
    let totalUnitsDef = calc_totalUnits(defense_values);
    const percentageArrayOffensive = calc_Percentages(attack_values, totalUnitsOff);
    const percentageArrayDefensive = calc_Percentages(defense_values, totalUnitsDef);

    if (amountTotalDef && amountTotalOff){
        for (let i = 0; i < UnitArray.length; i++){
            if (percentageArrayOffensive[i] > 0) {
                //let defender
                for (let j = 0; i< UnitNamesDefenseArray.length; j++) {
                    if (UnitNamesAttackArray[i].Effective + "i" === UnitNamesDefenseArray[i].Weak + "i") {
                        console.log(UnitArray[i].Effective0 + unitNamesArray[i])
                    }
                }
            }

        }
    }

}
//create Array with only names of attacking units
function createUnitArray(values) {
    let array = [];
    for (let i = 0; i < UnitArray.length; i++) {
        if (values[i] > 0){
            array.push(unitNamesArray[i]);
        }
    }
    console.log(array);
    return array;

}

function calc_totalOffensive(totalAttack, attack_values) {

    //get Offensive Skill
    let offensive_Skill = document.getElementById("offensive_Skill").value;


    //Multiply Attacking numbers with corresponding offensive values
    for (let y=0; y < attack_values.length; y++){
        totalAttack += attack_values[y] * UnitArray[y].Strength;
    }
    //console.log(totalAttack);


    totalAttack += totalAttack * (offensive_Skill/100);

    let totalUnits = calc_totalUnits(attack_values);
    let percentageArray = calc_Percentages(attack_values, totalUnits);
    fillOffensivePercentages(percentageArray);

    return totalAttack;

}

function calc_totalDefense(totalDefense, defensive_values) {

    //get Defensive Skill
    let defensive_Skill = document.getElementById("defensive_Skill").value;

    //console.log(defensive_values);
    //multiply defenders with corresponding defensive values
    for (let y = 0; y < defensive_values.length; y++){
        totalDefense += defensive_values[y] * UnitArray[y].Defense;
    }

    totalDefense += totalDefense * (defensive_Skill/100);

    let totalUnits = calc_totalUnits(defensive_values);
    let percentageArray = calc_Percentages(defensive_values, totalUnits);
    fillDefensivePercentages(percentageArray);

    return totalDefense;
}

function calc_totalUnits(unitArray) {

    let totalNumberOfUnits = 0;
    for (let y=0; y < unitArray.length; y++){
        if (unitArray[y].toString() === ""){
            unitArray[y] = 0;

        }
        else totalNumberOfUnits += parseInt(unitArray[y]);
    }

    //console.log("number of Units: " + totalNumberOfUnits);

    return totalNumberOfUnits;

}

function calc_Percentages(unitArray, totalNumberOfUnits){
    let percentageArray = [];
    for (let y=0; y < unitArray.length; y++){
        percentageArray.push((unitArray[y]/totalNumberOfUnits*100).toFixed(2));

    }

    return percentageArray;
}

function fillOffensivePercentages(percentageArray) {
    for (let i=0;i<percentageArray.length;i++){
        let text = document.getElementById("off%" + i.toString());
        if (Number.isNaN(parseInt(percentageArray[i]))){
            text.innerHTML = "0".concat("%");
        }
        else text.innerHTML = percentageArray[i].concat("%");
    }

}

function fillDefensivePercentages(percentageArray) {
    for (let i=0;i<percentageArray.length;i++){
        let text = document.getElementById("def%" + i.toString());
        if (Number.isNaN(parseInt(percentageArray[i]))){
            text.innerHTML = "0".concat("%");
        }
        else text.innerHTML = percentageArray[i].concat("%");
    }

}

function calc_DefensiveDeaths(defensive_Values, totalAttack, totalDefense) {
    let defensiveDeathArray = [];
    let difference = getDifference(totalAttack, totalDefense);
    if (totalAttack < totalDefense){
        for (let i = 0; i < defensive_Values.length; i++){
            defensiveDeathArray.push(Math.ceil(defensive_Values[i]*difference));
        }
    }
    else {
        for (let i = 0; i < defensive_Values.length; i++){
            defensiveDeathArray.push(Math.ceil(defensive_Values[i]));
        }
    }
    //console.log("defensive Death Array:"+defensiveDeathArray);
    getPlagueStatus();
    return defensiveDeathArray;

}

function calc_OffensiveDeathArray(attack_values, totalAttack, totalDefense) {
    let offensiveDeathArray = [];
    let plague = getPlagueStatus();
    let difference = getDifference(totalAttack, totalDefense);

    if (totalAttack > totalDefense){
        for (let i = 0; i < attack_values.length; i++){
            if (plague === "false"){
                offensiveDeathArray.push(Math.ceil(attack_values[i]/difference));
            }
            else {
                offensiveDeathArray.push(Math.ceil((attack_values[i]/difference)+(attack_values[i]-(attack_values[i]/difference))*0.3))
            }
        }
    }
    else {
        for (let i = 0; i < attack_values.length; i++){
            offensiveDeathArray.push(attack_values[i]);
        }
    }

    //console.log("offensiveDeathArray: " + offensiveDeathArray);
    return offensiveDeathArray;
}

function fillDefensiveDeaths(defensiveDeathArray) {
    for (let i=0;i<defensiveDeathArray.length;i++){
        let text = document.getElementById("defDeath" + i.toString());
        text.innerHTML = defensiveDeathArray[i];
    }

}


function fillOffensiveDeaths(offensiveDeathArray) {
    for (let i=0;i < offensiveDeathArray.length;i++){
        let text = document.getElementById("offDeath" + i.toString());
        text.innerHTML = offensiveDeathArray[i];
    }

}

function fillTable(totalAttack, totalDefense,) {

    //set totalAttack field
    let text = document.getElementById("totalAttack");
    text.innerHTML = totalAttack;

    //set total Defesnive field
    text = document.getElementById("totalDefense");
    text.innerHTML = totalDefense;

    //set difference
    text = document.getElementById("Difference");
    text.innerHTML = getDifference(totalAttack,totalDefense);

}

function getDifference(totalAttack, totalDefense) {
    if (totalDefense === 0){
        return 0;
    }
    let difference = totalAttack/totalDefense;
    return difference = +difference.toFixed(15);

}

function getPlagueStatus() {
    return document.getElementById("plague").value;

}

function calc_StrengthLost(offensiveDeathArray) {
    let strengthLost = 0;
    for (let i=0;i<offensiveDeathArray.length;i++){
        strengthLost += offensiveDeathArray[i] * UnitArray[i].Strength;
    }
    return strengthLost;
}

function fillStrengthLost(strengthLost) {
    let text = document.getElementById("StrengthLost");
    text.innerHTML = strengthLost;
}


function onLoad(){
    let button = document.getElementById("body");
    button.addEventListener("keyup", function (event) {
       // console.log(event.code);
        if (event.code === "Enter" ) {
            calculate();
        }

    })

}

window.onload = function () {
    window.document.body.onload = onLoad();
    };
