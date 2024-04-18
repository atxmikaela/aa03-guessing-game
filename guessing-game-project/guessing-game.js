const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});



function randomInRange(min, max) {
    return Math.floor((Math.random() * (max - min) + min))
}




function askGuess() {
    rl.question('Enter a Guess: ', (answer) => {
        checkGuess(Number(answer))
        return askGuess()
    },
        askGuess
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

let counter = 5;

const checkGuess = (num) => {
    if (num > secretNumber) {
        console.log("Too high");
        counter--
    if(counter === 0 ){
        console.log("Nice try!")
        rl.close()
    }
        return false
    }
    else if (num < secretNumber) {
        console.log("Too low");
        counter--
        if(counter === 0 ){
            console.log("Nice try!")
            rl.close()
        }
            return false
    }
       else{
        console.log("You win!");

       }
       return true

}

askRange()

