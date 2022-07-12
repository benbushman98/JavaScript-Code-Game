// Global Variable
var startQuizBtn = document.getElementById("startquizbtn");
var homepage = document.querySelector("#homepage");
var body = document.querySelector("*");
var firstcard = document.querySelector("#firstcard");
var secondcard = document.querySelector("#secondcard");
var thirdcard = document.querySelector("#thirdcard");
var fourthcard = document.querySelector("#fourthcard");
var fifthcard = document.querySelector("#fifthcard");
var highscores = document.querySelector("#highscore");
var rorw = document.getElementById("rorw");
var submitForm = $('#submitform');
var highScoreLog = $('#highscorelog');
var submit = document.getElementById("submit");
var clearhs = document.getElementById("clearhigh");
// End Global Variable

// Code for Timer
var timer = document.getElementById("time");
var secondsLeft = 60;
var timerInterval;
startQuizBtn.addEventListener("click", setTimer);
function setTimer() {
        timerInterval = setInterval(function() {
        secondsLeft--;
        timer.textContent = "Time: " + secondsLeft;

        if (secondsLeft <= 0) {
            clearInterval(timerInterval);
            highscorePage ()
        }
    }, 1000);}
// End code for Timer

// First Page Initialize
init ();
function init () {
    highscores.setAttribute("style", "display:none");
    homepage.setAttribute("style", "display:inline-block");
    startQuizBtn.addEventListener("click", chooseAnswer1);
}
// End of First Page Initialize

// Begin Question 1
function chooseAnswer1() {
homepage.setAttribute("style", "display:none");
firstcard.setAttribute("style", "display:inline-block");

var answer1Btn1 = document.querySelector(".answer1btn1");
var answer2Btn1 = document.querySelector(".answer2btn1");
var answer3Btn1 = document.querySelector(".answer3btn1");
var answer4Btn1 = document.querySelector(".answer4btn1");

answer1Btn1.addEventListener("click", myfunction1);
answer2Btn1.addEventListener("click", myfunction2);
answer3Btn1.addEventListener("click", myfunction3);
answer4Btn1.addEventListener("click", myfunction4);

function myfunction1() {
if (answer1Btn1 = "Number" ) {
    rorw.textContent = "Wrong!";
    secondsLeft -= 10;
    return chooseAnswer2 ();
}
}
function myfunction2() {
if (answer2Btn1 = "String") {
    rorw.textContent = "Wrong!";
    secondsLeft -= 10;
    return chooseAnswer2 ();
}
}
function myfunction3() {
if (answer3Btn1 = "Document") {
    rorw.textContent = "Correct!"
    return chooseAnswer2 ();
}
}

function myfunction4() {
if (answer4Btn1 = "Boolean") {
    rorw.textContent = "Wrong!"
    secondsLeft -= 10;
    return chooseAnswer2 (); 
 }
}
}
// End Question 1

// Begin Question 2
function chooseAnswer2() {
firstcard.setAttribute("style", "display:none");
secondcard.setAttribute("style", "display:inline-block");

var answer1Btn2 = document.querySelector(".answer1btn2");
var answer2Btn2 = document.querySelector(".answer2btn2");
var answer3Btn2 = document.querySelector(".answer3btn2");
var answer4Btn2 = document.querySelector(".answer4btn2");

answer1Btn2.addEventListener("click", myFunction1);
answer2Btn2.addEventListener("click", myFunction2);
answer3Btn2.addEventListener("click", myFunction3);
answer4Btn2.addEventListener("click", myFunction4);

function myFunction1() {
if (answer1Btn2 = "JS" ) {
    rorw.textContent = "Correct!"
    return chooseAnswer3 ();
}
}
function myFunction2() {
if (answer2Btn2 = "JAVA") {
    rorw.textContent = "Wrong!"
    secondsLeft -= 10;
    return chooseAnswer3 ();
}
}
function myFunction3() {
if (answer3Btn2 = "JST") {
    rorw.textContent = "Wrong!"
    secondsLeft -= 10;
    return chooseAnswer3 ();
}
}

function myFunction4() {
if (answer4Btn2 = "J") {
    rorw.textContent = "Wrong!"
    secondsLeft -= 10;
    return chooseAnswer3 ();
}
}
}
// End Question 2

// Begin Question 3
function chooseAnswer3() {
secondcard.setAttribute("style", "display:none");
thirdcard.setAttribute("style", "display:inline-block");

var answer1Btn3 = document.querySelector(".answer1btn3");
var answer2Btn3 = document.querySelector(".answer2btn3");
var answer3Btn3 = document.querySelector(".answer3btn3");
var answer4Btn3 = document.querySelector(".answer4btn3");

answer1Btn3.addEventListener("click", myFunction1);
answer2Btn3.addEventListener("click", myFunction2);
answer3Btn3.addEventListener("click", myFunction3);
answer4Btn3.addEventListener("click", myFunction4);

function myFunction1() {
if (answer1Btn3 = "Locate a specific class in the HTML" ) {
    rorw.textContent = "Wrong!"
    secondsLeft -= 10;
    return chooseAnswer4 ();
}
}
function myFunction2() {
if (answer2Btn3 = "Modify the CSS") {
    rorw.textContent = "Wrong!"
    secondsLeft -= 10;
    return chooseAnswer4 ();
}
}
function myFunction3() {
if (answer3Btn3 = "To validate the click of a button") {
    rorw.textContent = "Wrong!"
    secondsLeft -= 10;
    return chooseAnswer4 ();
}
}

function myFunction4() {
if (answer4Btn3 = "Locate a specific ID in the HTML") {
    rorw.textContent = "Correct!"
    return chooseAnswer4 ();
}
}
}
// End Question 3

// Begin Question 4
function chooseAnswer4() {
thirdcard.setAttribute("style", "display:none");
fourthcard.setAttribute("style", "display:inline-block");

var answer1Btn4 = document.querySelector(".answer1btn4");
var answer2Btn4 = document.querySelector(".answer2btn4");
var answer3Btn4 = document.querySelector(".answer3btn4");
var answer4Btn4 = document.querySelector(".answer4btn4");
    
answer1Btn4.addEventListener("click", myFunction1);
answer2Btn4.addEventListener("click", myFunction2);
answer3Btn4.addEventListener("click", myFunction3);
answer4Btn4.addEventListener("click", myFunction4);
    
function myFunction1() {
if (answer1Btn4 = "Locate a specific class in the HTML" ) {
    rorw.textContent = "Wrong!"
    secondsLeft -= 10;
    return chooseAnswer5 ();
}
}
function myFunction2() {
if (answer2Btn4 = "Modify the CSS") {
    rorw.textContent = "Correct!"
    return chooseAnswer5 ();
}
}
function myFunction3() {
if (answer3Btn4 = "To validate the click of a button") {
    rorw.textContent = "Wrong!"
    secondsLeft -= 10;
    return chooseAnswer5 ();
}
}
    
function myFunction4() {
if (answer4Btn4 = "Locate a specific ID in the HTML") {
    rorw.textContent = "Wrong!"
    secondsLeft -= 10;
    return chooseAnswer5 ();
}
}
}
// End Question 4

// Begin Question 5
function chooseAnswer5() {
fourthcard.setAttribute("style", "display:none");
fifthcard.setAttribute("style", "display:inline-block");

var answer1Btn5 = document.querySelector(".answer1btn5");
var answer2Btn5 = document.querySelector(".answer2btn5");
var answer3Btn5 = document.querySelector(".answer3btn5");
var answer4Btn5 = document.querySelector(".answer4btn5");
    
answer1Btn5.addEventListener("click", myFunction1);
answer2Btn5.addEventListener("click", myFunction2);
answer3Btn5.addEventListener("click", myFunction3);
answer4Btn5.addEventListener("click", myFunction4);
    
function myFunction1() {
if (answer1Btn5 = "Locate a specific class in the HTML" ) {
    rorw.textContent = "Correct!"
    return highscorePage ();
}
}
function myFunction2() {
if (answer2Btn5 = "Modify the CSS") {
    rorw.textContent = "Wrong!"
    secondsLeft -= 10;
    return highscorePage ();
}
}
function myFunction3() {
if (answer3Btn5 = "To validate the click of a button") {
    rorw.textContent = "Wrong!"
    secondsLeft -= 10;
    return highscorePage ();
}
}
    
function myFunction4() {
if (answer4Btn5 = "Locate a specific ID in the HTML") {
    rorw.textContent = "Wrong!"
    secondsLeft -= 10;
    return highscorePage ();}}
}
// End Question 5

// Setup page for highscore content
function highscorePage () {
firstcard.setAttribute("style", "display:none");
secondcard.setAttribute("style", "display:none");
thirdcard.setAttribute("style", "display:none");
fourthcard.setAttribute("style", "display:none");
fifthcard.setAttribute("style", "display:none");
highscores.setAttribute("style", "display:inline-block");
rorw.setAttribute("Style", "display:none");
timer.setAttribute("Style", "display:none")
clearInterval(timerInterval);
scoreInput();
}
// End setup for highscore content

// Begin function for scoring
function scoreInput() {
    if (secondsLeft < 0) {
        secondsLeft = 0}
var score = document.getElementById("score");
    score.textContent = "Your final score is " + secondsLeft + "!";
    // checkStoredHigh();
}
// End function for scoring

// Check for locally stored highscores
// function checkStoredHigh () {
//     JSON.parse(localStorage.getItem("highScoreInput"));
// }
// End for locally highscores

// Variables and Event Listener for Submit Button
submit = document.addEventListener("submit", renderScore) 
submit = document.addEventListener("submit", storeScore)
clearhs.addEventListener("click", clear);
// End of Variables and Event Listener for Submit Button

// Begin Function Submitting Score
function renderScore(event) {
event.preventDefault();
    var initials = $('input[name="initials"]').val();
    if(!initials) {
    alert("Please input initials");
    return;}
    highScoreLog.append('<li>' + initials + "  |  " + secondsLeft + '</li>');
    var form = document.querySelector("form");
    var high = document.getElementById("high")
    var highbox = document.getElementById("highbox")
    form.setAttribute("style", "display:none;")
    high.setAttribute("style", "margin-top: 25px")
    highbox.setAttribute("style", "display: inline-block;")
}
// End for Submitting Score

function displayPrevHigh(highscores) {
    for (let index = 0; index < highscores.length; index++) {
        
    highScoreLog.append('<li>' + highscores[index].name + "  |  " + highscores[index].score + '</li>');
    var form = document.querySelector("form");
    var high = document.getElementById("high")
    var highbox = document.getElementById("highbox")
    form.setAttribute("style", "display:none;")
    high.setAttribute("style", "margin-top: 25px")
    highbox.setAttribute("style", "display: inline-block;")
}
}


// Function for storing score in Local Storage
function storeScore (event) {
    event.preventDefault();
    var highscores = JSON.parse(window.localStorage.getItem("highscore")) || []
    var initials = document.querySelector("#initials")
    
    var highScoreInput = {
        name: initials.value,
        score: secondsLeft};
// console.log(highscores)
        highscores.push(highScoreInput)
    window.localStorage.setItem("highscore", JSON.stringify(highscores));

displayPrevHigh(highscores);
    }
// End for storing Score.

// Code for Clear HS Button
var clearList = document.querySelector(".clearlist")
function clear() {
    clearList.setAttribute("style", "display: none;")
    clearhs.setAttribute("style", "margin-top: 63px;")
    localStorage.clear();
}
// End for Clear HS Button