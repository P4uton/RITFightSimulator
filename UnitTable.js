window.onload = function () {
    window.document.body.onload = fillUnitTable();
};

function fillUnitTable() {
    let multiplier = 1;
    let worldSelect = document.getElementById("World_Select").value;
    if (worldSelect === "Beginner World"){
        multiplier = 2;
    }
    let names = Object.keys(unitArray);
    //console.log(names);



    for (let i = 0;i<UnitArray.length;i++){
        let text = document.getElementById("Unit_Table"+i.toString()+"_0");
            text.innerHTML = names[i];

    }



}