const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});



function randomInRange(min, max) {
    return Math.floor((Math.random() * (max - min) + min))
}


let counter = 5;

function askGuess() {
    rl.question('Enter a Guess: ', (answer) => {
        counter--
        if (checkGuess(Number(answer))) {
            rl.close()
            return
        }

        else if (counter === 0) {
            console.log("Nice try!");
            console.log('The correct number is: ' + secretNumber)
            rl.close()
            return
        }
        else {
            return askGuess()
        }
    }



    )
}



function askRange() {
    rl.question(
        "Enter a max number: ",
        (max) => {
            let fmax = Number(max)
            console.log(fmax)

            rl.question(
                "Enter a min number: ",
                (min) => {
                    let fmin = Number(min)
                    console.log(fmin)
                    secretNumber = randomInRange(fmin, fmax)
                    console.log(`I'm thinking of a number between ${min} and ${max}`)
                    askGuess(secretNumber)
                }
            )
        }
    )
}

let secretNumber;



const checkGuess = (num) => {
    if (num > secretNumber) {
        console.log("Too high");
        return false;
    }


    else if (num < secretNumber) {
        console.log("Too low");
        return false;
    }

    else {
        console.log("You win!");
        return true;
    }


}

askRange()
