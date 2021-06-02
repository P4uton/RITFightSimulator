//Unit Stats
const SpotterNaki = {Strength: 1, Defense: 1, Speed: 60, RecruitmentTime: 4.59, RecruitingLocation : "Marshlands", Effective0: "Spotter Naki", Effective1: " Forest Spirit", Effective2: "Elder Spirit", Effective3: null, Effective4: null, Effective5: null, Weak: "Nothing"};
const DruidNaki = {Strength: 25, Defense: 25, Speed: 150, RecruitmentTime: 18.35,  RecruitingLocation : "Marshlands",Effective0: "Grass Spirit", Effective1: " Forest Spirit", Effective2: "Elder Spirit", Effective3: null, Effective4: null, Effective5: null, Weak: "Nothing" };
const GuardNaki = {Strength: 100, Defense: 50, Speed: 150, RecruitmentTime: 45.87,  RecruitingLocation : "Marshlands",Effective0: "Grass Spirit", Effective1: " ForestSpirit", Effective2: "Elder Spirit", Effective3: null, Effective4: null, Effective5: null, Weak: "Nothing"};
const GrassSpirit = {Strength: 20, Defense: 40, Speed: 250, RecruitmentTime: 22.94,  RecruitingLocation : "Marshlands",Effective0: "Grass Spirit", Effective1: " ForestSpirit", Effective2: "Elder Spirit", Effective3: null, Effective4: null, Effective5: null,Weak: "Nothing"};
const ForestSpirit = {Strength: 30, Defense: 60, Speed: 237.5 ,RecruitmentTime: 34.4,  RecruitingLocation : "Marshlands",Effective0: "Grass Spirit", Effective1: " ForestSpirit", Effective2: "Elder Spirit", Effective3: null, Effective4: null, Effective5: null,Weak: "Nothing"};
const ElderSpirit = {Strength: 100, Defense: 1000, Speed: 375 ,RecruitmentTime: 229.36, RecruitingLocation : "Marshlands", Effective0: "Grass Spirit", Effective1: " Forest", Effective2: "Elder Spirit", Effective3: null, Effective4: null, Effective5: null,Weak: "Nothing"};
const Pangoan = {Strength: 200, Defense: 200, Speed: 200 ,RecruitmentTime: 57.34, RecruitingLocation : "Marshlands", Effective0: "Grass Spirit", Effective1: " Forest", Effective2: "Elder Spirit", Effective3: null, Effective4: null, Effective5: null,Weak: "Nothing"};
const Athlas = {Strength: 800, Defense: 600, Speed: 38.33,RecruitmentTime: 52.08, RecruitingLocation : "Marshlands", Effective0: "Guard Naki | Athlas", Effective3: null, Effective4: null, Effective5: null,Weak: "Nothing"};
const Marshy = {Strength: 50, Defense: 20, Speed: 125 ,RecruitmentTime: 13.76,  RecruitingLocation : "Marshlands", Effective0: "Guard Naki | Athlas", Effective3: null, Effective4: null, Effective5: null,Weak: "Nothing"};
const Wasty = {Strength: 250, Defense: 10, Speed: 175, RecruitmentTime: 45.87,  RecruitingLocation : "Marshlands", Effective0: "Guard Naki | Athlas", Effective3: null, Effective4: null, Effective5: null,Weak: "Nothing"};
const Ovivi = {Strength: 10, Defense: 10, Speed: 10 ,RecruitmentTime: 10,  RecruitingLocation : "Marshlands", Effective0: "Guard Naki | Athlas", Effective3: null, Effective4: null, Effective5: null,Weak: "Nothing"};
const Teryx = {Strength: 10, Defense: 10, Speed: 10 ,RecruitmentTime: 10,  RecruitingLocation : "Marshlands", Effective0: "Guard Naki | Athlas", Effective3: null, Effective4: null, Effective5: null,Weak: "Nothing"};
const Raider = {Strength: 10, Defense: 10, Speed: 10 ,RecruitmentTime: 10,RecruitingLocation : "Marshlands", Effective0: "Guard Naki | Athlas", Effective3: null, Effective4: null, Effective5: null,Weak: "Nothing"};

//Oder of Units in Array has to match order of Units in HTML
const UnitArray = [SpotterNaki,DruidNaki, GuardNaki, GrassSpirit, ForestSpirit, ElderSpirit, Pangoan, Athlas, Marshy, Wasty, Ovivi, Teryx, Raider];
const unitArray = {SpotterNaki, DruidNaki, GuardNaki, GrassSpirit, ForestSpirit,ElderSpirit, Pangoan, Athlas, Marshy, Wasty, Ovivi, Teryx, Raider};
const unitNamesArray = ["Spotter Naki", "Druid Naki", "Guard Naki", "Grass Spirit", "Forest Spirit", "Elder Spirit", "Pangoan", "Athlas", "Marshy", "Wasty", "Ovivi", "Teryx", "Raider"];
const Effectiveness = [
    [SpotterNaki, ]
]
