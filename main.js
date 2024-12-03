/* --- Task 1 --- */

// 1
favouriteSongs = ["Tiny Dancer", "Running Up That Hill", 
    "Don't stop Moving", "Tragedy", "Crazy Horses"];

//2
profitSevenDaysPyramidScheme = [1, 2, 4, 8, 16, 32, 64];

//3 
friends = [
    {name: "Chris", specialSkill: "changing lives",},
    {name: "Lizzie", specialSkill: "friendly",},
    {name: "Ben", specialSkill: "code rapping",},
    {name: "Tao", specialSkill: "hand raising",},
    {name: "Liz", specialSkill: "crochet",},
    {name: "Patrick", specialSkill: "Call of Duty",},
    {name: "Tim", specialSkill: "analogies",},
    {name: "James", specialSkill: "friendship",},
    {name: "Joseph", specialSkill: "being positive",},
    {name: "Max", specialSkill: "papier-mâché",},
];

/* --- Task 2 --- */

let options = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

console.log(`I was born in the month of ${options[6]}.`)
console.log(`My mother was born in the month of ${options[2]}.`)
console.log(`My favourite month is ${options[2]}.`)

/* --- Task 3 --- */

let englishNumbers = ["one", "two", "three", "four", "five"];

i = 0;
 while (i < englishNumbers.length) {
    console.log(englishNumbers[i]);
    i ++;
};

/* --- Task 4 --- */

for (j = 0; j < englishNumbers.length; j ++) {
    console.log(englishNumbers[j]);
};

/* --- Task 5 --- */

let words = ["ben", "ha", "spla", "fa", "ca", "dra"];

for (x = 0; x < words.length; x++){
    newWord = words[x] + 't';
    words.splice(x, 1, newWord);
}

console.log(words);

/* --- Task 6 --- */

videogameChoices = ["Against the Storm", "Metaphor:ReFantazio", "BALATRO", "shapez 2", "Final Fantasy", "BioShock", "Deathloop"];

// using whole numbers/integers to randomise the array above
const randomizer = Math.floor(Math.random() * (videogameChoices.length));

function videogameSelector () {
    let randomChoice = videogameChoices[randomizer];
    // If the 'Final Fantasy' element is selected, we are creating an additional randomizer here to decide which one to play
    if (randomChoice === "Final Fantasy"){
        const ffRandomizer = Math.floor(Math.random() * (16)) +1; // where 16 is the amount of numbered titles, the +1 takes us out of the chance of getting 0 and the ability to reach 16
        console.log (`You should play Final Fantasy ${ffRandomizer} tonight!`)
    }
    else {
        console.log(`You should play ${randomChoice} tonight!`)
    }

}

// Test run the function
videogameSelector();