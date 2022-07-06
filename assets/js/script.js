// Code for Timer
var timer = document.getElementById("time");
var secondsLeft = 60;
var startQuizBtn = document.getElementById("startquizbtn")

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
startQuizBtn.addEventListener("click", setTimer)
function youLose() {
    timer.textContent = " ";
    alert("You lose!")
}
