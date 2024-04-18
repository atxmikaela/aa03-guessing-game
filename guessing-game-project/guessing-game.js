const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let secretNumber = 50;

const checkGuess = (num) => {
    if (num > secretNumber) {
        console.log("Too high");
        askGuess();
    }
    if (num < secretNumber) {
        console.log("Too low");
        askGuess();
    }
    if (num === secretNumber) {
        console.log("You win!");
        rl.close()
    }
}

function askGuess() {
    rl.question('Enter a Guess: ', (answer) => {
        checkGuess(Number(answer))
    }
    )
}


askGuess()