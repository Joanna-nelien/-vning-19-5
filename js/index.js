/**
* Prompt for user choice of weapon
* SET variabele to userChoice
* Randome computers weapon
* SET variable to computerChoice
* Determine winner by if-statements
* Display winner
 */


const userChoice = prompt("välj vapen: sten, sax eller påse");
console.log(userChoice);

const randomNumber = match.floor(Math.random() * 3);
console.log(randomNumber);

let computerChoice;

if (randomNumber=== 0) {
    computerChoice = "sten";
} else if (randomeNumber === 1) {
    computerChoice = "sax";
} else if (randomNumber === 2) {
    computerChoice = "påse";
}

//console.log("Användarens val: ",userChoice);
//console.log("Datorns val: ",computerChoice);

if (userChoice === "sten") {
    if (computerChoice === "sten") {
        console.log("Oavgjort");
    } else if (computerChoice === "sax") {
        console.log("Du vinner");
    } else if (computerChoice === "påse") {
        console.log("Du förlorar");
    }
} else if (userChoice === "sax") {
    if (computerChoice === "sax") {
        console.log("Oavgjort");
    } else if (computerChoice === "påse") {
        console.log("Du vinner");
    } else if (computerChoice === "sten") {
        console.log("Du förlorar");
    }
} else if (userChoice === "påse") {
    if (computerChoice === "påse") {
        console.log("Oavgjort");
    } else if (computerChoice === "sten") {
        console.log("Du vinner");
    } else if (computerChoice === "sax") {
        console.log("Du förlorar");
    }
}
