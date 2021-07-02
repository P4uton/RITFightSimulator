# RITFightSimulator
Made by Pauton

There are two Versions:
FightSimulatorVue: This is the Version running on orb.riseintime.com. Most likely you won't be able to run this version yourself, since the rest of the build is missing.

RITFightSimulator: This version is written entirely in vanilla Javascript, HTML and CSS. It will run directly in your browser if you download it. However at this point it is outdated.


To add new Unit in Vanilla Version:

In values.js
1. Add new Unit Object (const NewUnit = {Strength: 0, Defense: 0, Speed: 0 ,RecruitmentTime: 0,RecruitingLocation : "Marshlands", Effective0: null, Effective3: null, Effective4: null, Effective5: null, Weak: "Nothing"};
2. add Unit Object to UnitArray and unitArray
3. add Unit name to unitNamesArray

In index.html
1. add new table row to unit overview table
2. adjust table header IDs so it counts up correctly
3. add new table row to FightSim Table
4. adjust IDs so they count up correctly


Done.


ToDo Vanilla:
- bring up to date with Vue version
- Additional Fields for Skills, Runes, Artefacts

- Add Hero Units to values.js

- Correct all values in values.js

  
ToDo Vue:

- Additional Fields for Skills, Runes, Artefacts
- rename Strength to Attack or smth.
- Hyperlink units
 
  
  
