// Global Variable
var startQuizBtn = document.getElementById("startquizbtn")
var homepage = document.querySelector("#homepage");
var body = document.querySelector("*")

var firstcard = document.querySelector("#firstcard");
var secondcard = document.querySelector("#secondcard")

var rorw = document.getElementById("rorw")

var answer1Btn = document.getElementById("answer1btn");
var answer2Btn = document.getElementById("answer2btn");
var answer3Btn = document.getElementById("answer3btn");
var answer4Btn = document.getElementById("answer4btn");
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
    chooseAnswer1 ();
}

// End of showing next screen


// Start of function chooseAnswer1
function chooseAnswer1() {
firstcard.setAttribute("style", "display:inline-block")
answer1Btn.addEventListener("click", myfunction1)
answer2Btn.addEventListener("click", myfunction2)
answer3Btn.addEventListener("click", myfunction3)
answer4Btn.addEventListener("click", myfunction4)

function myfunction1() {
if (answer1 = "Number" ) {
    rorw.textContent = "Wrong!"
    secondsLeft --;
    chooseAnswer2 ();
}
}
function myfunction2() {
if (answer2 = "String") {
    rorw.textContent = "Wrong!"
    secondsLeft --;
    chooseAnswer2 (); 
}
}
function myfunction3() {
if (answer3 = "Document") {
    rorw.textContent = "Correct!"
    chooseAnswer2 (); 
}
}

function myfunction4() {
if (answer4 = "Boolean") {
    rorw.textContent = "Wrong!"
    secondsLeft --;
    chooseAnswer2 ();  
 }
} return;
}
// End Function Choose Answer 1

// Start of Function for Choose 2nd Answer
function chooseAnswer2() {
firstcard.setAttribute("style", "display:none")
secondcard.setAttribute("style", "display:inline-block")

answer1Btn.addEventListener("click", myfunction1)
answer2Btn.addEventListener("click", myfunction2)
answer3Btn.addEventListener("click", myfunction3)
answer4Btn.addEventListener("click", myfunction4)

function myfunction1() {
if (answer1 === "JS" ) {
    // rorw.textContent = "Correct"
    // chooseAnswer3 ();
    console.log ("hello")
}
}
function myfunction2() {
if (answer2 = "JAVA") {
    rorw.textContent = "Wrong!"
    secondsLeft --;
    chooseAnswer3 (); 
}
}
function myfunction3() {
if (answer3 = "JST") {
    rorw.textContent = "Wrong!"
    secondsLeft --;
    chooseAnswer3 (); 
}
}

function myfunction4() {
if (answer4 = "J") {
    rorw.textContent = "Wrong!"
    secondsLeft --;
    chooseAnswer3 ();  
 }
}
}
// End of function for Choose Answer 2


function chooseAnswer3() {
    console.log ("test for function chooseAnswer3")
}