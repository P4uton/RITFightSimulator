function calculate() {
    let totalAttack = 0;
    let totalDefense = 0;
    //Array that stores amount of each unit attacking
    let attack_values=[];
    let defensive_values = [];

    //put number of Attacking Units in Array
    for (let i=0; i < UnitArray.length;i++ ) {
        attack_values.push(document.getElementsByClassName("attack_number")[i].value);
    }


    //put number of defender units in Array
    for (let i=0; i < UnitArray.length;i++ ) {
        defensive_values.push(document.getElementsByClassName("def_number")[i].value);
    }

    //returns an Array with only names  of attacking units
    let UnitNamesAttackArray = createUnitArray(attack_values);
    let UnitNamesDefenseArray = createUnitArray(defensive_values);
    calculateEffectiveness(attack_values, defensive_values, UnitNamesAttackArray, UnitNamesDefenseArray);

    //total Strength of Attackers WITH Skill applied
    totalAttack = calc_totalOffensive(attack_values);
    //total Strength of Defenders WITH Skill applied
    totalDefense = calc_totalDefense( defensive_values);


    let defensiveDeathArray = calc_DefensiveDeaths(defensive_values, totalAttack, totalDefense);
    fillDefensiveDeaths(defensiveDeathArray);
    let offensiveDeathArray = calc_OffensiveDeathArray(attack_values, totalAttack, totalDefense);
    fillOffensiveDeaths(offensiveDeathArray);


    fillTable(totalAttack, totalDefense);
    let strengthLost = calc_StrengthLost(offensiveDeathArray);
    fillStrengthLost(strengthLost);


    console.log("Success");
}

function calculateEffectiveness(attack_values, defense_values, UnitNamesAttackArray, UnitNamesDefenseArray ) {
    let override = document.getElementById("override").value;
    if (override === "false") {
        let totalAttack = calc_totalOffensiveNoSkill(attack_values);
        let totalDefense = calc_totalDefenseNoSkill(defense_values);
        let attackerEffectiveness;
        let defenderEffectiveness;

        //Array of individual Strength per Unit (num of Units * unit.strength)
        let strengthArray = calc_individualOffensive(attack_values);
        //Array of individual Defense per Unit (num of Units * unit.defense)
        let defenseArray = calc_individualDefense(defense_values);

        const percentageArrayOffensive = calc_Percentages(strengthArray, totalAttack);
        const percentageArrayDefensive = calc_Percentages(defenseArray, totalDefense);


        //cals calc_Effectiveness function, which looks for all effective matchups. To calculate for defender simply switch the values and arrays
        attackerEffectiveness = calc_Effectiveness(totalAttack, totalDefense, percentageArrayOffensive, percentageArrayDefensive, UnitNamesDefenseArray);
        defenderEffectiveness = calc_Effectiveness(totalDefense, totalAttack, percentageArrayDefensive, percentageArrayOffensive, UnitNamesAttackArray);

        let effectiveOff = document.getElementById("effectiveOff");
        effectiveOff.innerHTML = Math.round(attackerEffectiveness);

        let effectiveDef = document.getElementById("effectiveDef");
        effectiveDef.innerHTML = Math.round(defenderEffectiveness);
    }
    else {
        let effectiveOff = document.getElementById("effectiveOff");
        effectiveOff.innerHTML = 0;

        let effectiveDef = document.getElementById("effectiveDef");
        effectiveDef.innerHTML = 0;
    }



}
function calc_Effectiveness(totalAttack, totalDefense, percentageArrayOffensive, percentageArrayDefensive, UnitNamesDefenseArray) {
    let Effectiveness = 0;
    if (totalAttack && totalDefense){
        for (let i = 0; i < UnitArray.length; i++){
            if (percentageArrayOffensive[i] > 0) {
                for (let j = 0; j < UnitNamesDefenseArray.length; j++) {
                    let unitNameOff = unitNamesArray[i];
                    if (unitArray[unitNameOff].Effective0 === UnitNamesDefenseArray[j] && unitArray[unitNameOff].Effective0 != null) {
                        Effectiveness += (percentageArrayOffensive[i] * percentageArrayDefensive[j])/100;
                    }
                    if (unitArray[unitNameOff].Effective1 === UnitNamesDefenseArray[j] && unitArray[unitNameOff].Effective1 != null) {
                        Effectiveness += (percentageArrayOffensive[i] * percentageArrayDefensive[j])/100;
                    }
                    if (unitArray[unitNameOff].Effective2 === UnitNamesDefenseArray[j] && unitArray[unitNameOff].Effective2 != null) {
                        Effectiveness += (percentageArrayOffensive[i] * percentageArrayDefensive[j])/100;
                    }
                    if (unitArray[unitNameOff].Effective3 === UnitNamesDefenseArray[j] && unitArray[unitNameOff].Effective3 != null) {
                        Effectiveness += (percentageArrayOffensive[i] * percentageArrayDefensive[j])/100;
                    }
                    if (unitArray[unitNameOff].Effective4 === UnitNamesDefenseArray[j] && unitArray[unitNameOff].Effective4 != null) {
                        Effectiveness += (percentageArrayOffensive[i] * percentageArrayDefensive[j])/100;
                    }
                    if (unitArray[unitNameOff].Effective5 === UnitNamesDefenseArray[j] && unitArray[unitNameOff].Effective5 != null) {
                        Effectiveness += (percentageArrayOffensive[i] * percentageArrayDefensive[j])/100;
                    }
                }
            }

        }
    }
    return Effectiveness;

}


//create Array with only names of attacking units
function createUnitArray(values) {
    let array = [];
    for (let i = 0; i < UnitArray.length; i++) {
        if (values[i] > 0){
            array.push(unitNamesArray[i]);
        }
        else array.push(null);
    }
    return array;
}

//calculate total Offense
function calc_totalOffensive (attack_values) {
    let totalAttack = 0;
    //get Offensive Skill
    let offensive_Skill = document.getElementById("offensive_Skill").value;
    offensive_Skill = parseInt(offensive_Skill);
    let effectivePercent = document.getElementById("effectiveOff").innerText;
    effectivePercent = parseInt(effectivePercent);

    //Multiply Attacking numbers with corresponding offensive values
    for (let y=0; y < attack_values.length; y++){
        totalAttack += attack_values[y] * UnitArray[y].Strength;
    }

    let totalSkill = (offensive_Skill + effectivePercent)/100;

    totalAttack += totalAttack * (totalSkill);

    let totalUnits = calc_totalUnits(attack_values);
    let percentageArray = calc_Percentages(attack_values, totalUnits);
    fillOffensivePercentages(percentageArray);

    return totalAttack;
}

//calculate total Strength without Skill applied
function calc_totalOffensiveNoSkill(attack_values) {
    let totalAttack = 0;


    //Multiply Attacking numbers with corresponding offensive values
    for (let y=0; y < attack_values.length; y++){
        totalAttack += attack_values[y] * UnitArray[y].Strength;
    }

    return totalAttack;
}

function calc_individualOffensive(attack_values) {
    let totalAttack = [];

    for (let y=0; y < attack_values.length; y++) {
        totalAttack.push(attack_values[y] * UnitArray[y].Strength);
    }

    return totalAttack;
}



//calculate total Defense
function calc_totalDefense(defensive_values) {
    let totalDefense = 0;
    //get Defensive Skill
    let defensive_Skill = document.getElementById("defensive_Skill").value;
    defensive_Skill = parseInt(defensive_Skill);
    let effectivePercent = document.getElementById("effectiveDef").innerText;
    effectivePercent = parseInt(effectivePercent);

    //multiply defenders with corresponding defensive values
    for (let y = 0; y < defensive_values.length; y++){
        totalDefense += defensive_values[y] * UnitArray[y].Defense;
    }

    totalDefense += totalDefense * ((defensive_Skill + effectivePercent)/100);

    let totalUnits = calc_totalUnits(defensive_values);
    let percentageArray = calc_Percentages(defensive_values, totalUnits);
    fillDefensivePercentages(percentageArray);

    return totalDefense;
}

//calculate total Defense without Skill applied
function calc_totalDefenseNoSkill(defensive_values) {
    let totalDefense = 0;
    //multiply defenders with corresponding defensive values
    for (let y = 0; y < defensive_values.length; y++){
        totalDefense += defensive_values[y] * UnitArray[y].Defense;
    }


    return totalDefense;
}

function calc_individualDefense(defense_values) {
    let totalDefense = [];

    for (let y=0; y < defense_values.length; y++) {
        totalDefense.push(defense_values[y] * UnitArray[y].Defense);
    }

    return totalDefense;
}

//calculates total number of units either attacking or defending
function calc_totalUnits(unitArray) {

    let totalNumberOfUnits = 0;
    for (let y=0; y < unitArray.length; y++){
        if (unitArray[y].toString() === ""){
            unitArray[y] = 0;

        }
        else totalNumberOfUnits += parseInt(unitArray[y]);
    }


    return totalNumberOfUnits;

}
//calculates percentages based on unit amount
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
    return difference = +difference.toFixed(5);

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
        if (event.code === "Enter" ) {
            calculate();
        }

    })

}

window.onload = function () {
    window.document.body.onload = onLoad();
    };
