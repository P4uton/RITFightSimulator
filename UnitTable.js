window.onload = function () {
    window.document.body.onload = fillUnitTable();
};

function fillUnitTable() {
    let multiplier = 1;
    console.log("fillUnitTable");
    let worldSelect = document.getElementById("World_Select").value;
    if (worldSelect === "Beginner World"){
        multiplier = 1;
    }
    else multiplier = 2;

    let UnitNames = Object.keys(unitArray);


   //loop to enter Unit names into each cell
    for (let i = 0; i < UnitArray.length; i++){
        let text = document.getElementById("Unit_Table" + i.toString()+"_0");
        text.innerHTML = UnitNames[i];
    }

    //loop to enter strength value from values.js into each cell
    for (let i = 0; i < UnitArray.length; i++){
        let text2 = document.getElementById("Unit_Table" + i.toString() + "_1");
        text2.innerHTML = UnitArray[i].Strength;
    }

    //loop to enter defense value from values.js into each cell
    for (let i = 0; i < UnitArray.length; i++){
        let text2 = document.getElementById("Unit_Table" + i.toString() + "_2");
        text2.innerHTML = UnitArray[i].Defense;
    }

    //loop to enter Travel Time value from values.js into each cell
    for (let i = 0; i < UnitArray.length; i++){
        let text2 = document.getElementById("Unit_Table" + i.toString() + "_3");
        text2.innerHTML = UnitArray[i].Speed * multiplier;
    }

    //loop to enter Recruitment Duration value from values.js into each cell
    for (let i = 0; i < UnitArray.length; i++){
        let text2 = document.getElementById("Unit_Table" + i.toString() + "_4");
        text2.innerHTML = UnitArray[i].RecruitmentTime * multiplier;
    }

    //loop to enter Power Ratio
    for (let i = 0; i < UnitArray.length; i++){
        let text2 = document.getElementById("Unit_Table" + i.toString() + "_5");
        let x = UnitArray[i].Strength / (UnitArray[i].RecruitmentTime * multiplier) ;
        text2.innerHTML = x.toFixed(2);

    }

    //loop to enter Defense Ratio
    for (let i = 0; i < UnitArray.length; i++){
        let text2 = document.getElementById("Unit_Table" + i.toString() + "_6");
        let x = UnitArray[i].Defense / (UnitArray[i].RecruitmentTime * multiplier);
        text2.innerHTML = x.toFixed(2);
    }

    //loop to enter Effective against
    for (let i = 0; i < UnitArray.length; i++){
        let text = document.getElementById("Unit_Table" + i.toString()+"_7");
        let text2 = UnitArray[i].Effective0 + " " +  UnitArray[i].Effective1 + " " + UnitArray[i].Effective2 + " " + UnitArray[i].Effective3 + " " + UnitArray[i].Effective4 + " " + UnitArray[i].Effective5;

        //replace every "null" with a whitespace
        text2 = text2.replace(/null/g,'');
        text.innerHTML = text2;

    }

    //loop to enter Weak against
    for (let i = 0; i < UnitArray.length; i++){
        let text = document.getElementById("Unit_Table" + i.toString()+"_8");
        text.innerHTML = UnitArray[i].Weak;
    }

    //loop to enter Recruitment Location
    for (let i = 0; i < UnitArray.length; i++){
        let text = document.getElementById("Unit_Table" + i.toString()+"_9");
        text.innerHTML = UnitArray[i].RecruitingLocation;
    }

    //loop to enter max. Strength / 24h
    for (let i = 0; i < UnitArray.length; i++){
        let text2 = document.getElementById("Unit_Table" + i.toString() + "_10");
        let x = Math.round((86400/(UnitArray[i].RecruitmentTime*multiplier))*UnitArray[i].Strength);
        x = x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        text2.innerHTML = x;
    }





}