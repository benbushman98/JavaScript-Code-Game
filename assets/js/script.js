// Global Variable
var startQuizBtn = document.getElementById("startquizbtn");
var homepage = document.querySelector("#homepage");
var firstcard = document.querySelector("#firstcard");
// End Global Variable

// Code for Timer
var timer = document.getElementById("time");
var secondsLeft = 60;

startQuizBtn.addEventListener("click", setTimer)

function setTimer() {
    var timerInterval = setInterval(function() {
        secondsLeft--;
        timer.textContent = secondsLeft;

        if (secondsLeft === 0) {
            clearInterval(timerInterval);
            youLose();
        }
    }, 1000);
}
function youLose() {
    timer.textContent = " ";
    alert("You lose!")
}
// End code for Timer

// Function for showing next screen
startQuizBtn.addEventListener("click", questionOne)
function questionOne() {
    homepage.setAttribute("style", "display:none")
    firstcard.setAttribute("style", "display:inline-block")
}