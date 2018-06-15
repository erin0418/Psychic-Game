var wins = 0;
var losses = 0;
var guessesLeft = 8;
var guess = []
var computerChoices = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

document.onkeyup = function(event) {

var userGuess = event.key;
var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

console.log(wins)
console.log(losses)
console.log(guessesLeft)
console.log(computerGuess)

if (userGuess === computerGuess) {
    wins++
    guessesLeft = 9;
    alert("You won! " + userGuess + " was the correct letter!");
    guess = []
}
else {
    guessesLeft--
    guess.push(userGuess);
    }

if (guessesLeft === 0) {
    guessesLeft = 9;
    losses++;
    guess = [];
}

var html =
    "<p>Wins: " + wins + "<p>" +
    "<p>Losses: " + losses + "</p>" +
    "<p>Guesses Left: " + guessesLeft + "</p>" +
    "<p>Your Guesses so far: " + guess.join(", ") + "</p>";

document.querySelector("#game").innerHTML = html;
}