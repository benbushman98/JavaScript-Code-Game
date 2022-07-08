// Global Variable
var startQuizBtn = document.getElementById("startquizbtn")
var homepage = document.querySelector("#homepage");
var body = document.querySelector("*")

var firstcard = document.querySelector("#firstcard");
var secondcard = document.querySelector("#secondcard");
var thirdcard = document.querySelector("#thirdcard");
var fourthcard = document.querySelector("#fourthcard");
var fifthcard = document.querySelector("#fifthcard");
var highscores = document.querySelector("#highscore");

var rorw = document.getElementById("rorw")

var answer1Btn1 = document.querySelector(".answer1btn1");
var answer2Btn1 = document.querySelector(".answer2btn1");
var answer3Btn1 = document.querySelector(".answer3btn1");
var answer4Btn1 = document.querySelector(".answer4btn1");

var answer1Btn2 = document.querySelector(".answer1btn2");
var answer2Btn2 = document.querySelector(".answer2btn2");
var answer3Btn2 = document.querySelector(".answer3btn2");
var answer4Btn2 = document.querySelector(".answer4btn2");

var answer1Btn3 = document.querySelector(".answer1btn3");
var answer2Btn3 = document.querySelector(".answer2btn3");
var answer3Btn3 = document.querySelector(".answer3btn3");
var answer4Btn3 = document.querySelector(".answer4btn3");

var answer1Btn4 = document.querySelector(".answer1btn4");
var answer2Btn4 = document.querySelector(".answer2btn4");
var answer3Btn4 = document.querySelector(".answer3btn4");
var answer4Btn4 = document.querySelector(".answer4btn4");

var answer1Btn5 = document.querySelector(".answer1btn5");
var answer2Btn5 = document.querySelector(".answer2btn5");
var answer3Btn5 = document.querySelector(".answer3btn5");
var answer4Btn5 = document.querySelector(".answer4btn5");
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
            alert("You lose.")
        }
    }, 1000);
}
function youLose() {
    alert("You lose!")
}
// End code for Timer


// First page
init ();
function init () {
    highscores.setAttribute("style", "display:none");
    homepage.setAttribute("style", "display:inline-block")
    startQuizBtn.addEventListener("click", chooseAnswer1)
}
// End of First Page


// Start of function chooseAnswer1
function chooseAnswer1() {
homepage.setAttribute("style", "display:none")
firstcard.setAttribute("style", "display:inline-block")

answer1Btn1.addEventListener("click", myfunction1)
answer2Btn1.addEventListener("click", myfunction2)
answer3Btn1.addEventListener("click", myfunction3)
answer4Btn1.addEventListener("click", myfunction4)

function myfunction1() {
if (answer1Btn1 = "Number" ) {
    rorw.textContent = "Wrong!"
    secondsLeft --;
    return chooseAnswer2 ();
}
}
function myfunction2() {
if (answer2Btn1 = "String") {
    rorw.textContent = "Wrong!"
    secondsLeft --;
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
    secondsLeft --;
    return chooseAnswer2 (); 
 }
}
}
// End Function Choose Answer 1


// Start of Function for Choose 2nd Answer
function chooseAnswer2() {
firstcard.setAttribute("style", "display:none")
secondcard.setAttribute("style", "display:inline-block")

answer1Btn2.addEventListener("click", myFunction1)
answer2Btn2.addEventListener("click", myFunction2)
answer3Btn2.addEventListener("click", myFunction3)
answer4Btn2.addEventListener("click", myFunction4)

function myFunction1() {
if (answer1Btn2 = "JS" ) {
    rorw.textContent = "Correct!"
    return chooseAnswer3 ();
}
}
function myFunction2() {
if (answer2Btn2 = "JAVA") {
    rorw.textContent = "Wrong!"
    secondsLeft --;
    return chooseAnswer3 ();
}
}
function myFunction3() {
if (answer3Btn2 = "JST") {
    rorw.textContent = "Wrong!"
    secondsLeft --;
    return chooseAnswer3 ();
}
}

function myFunction4() {
if (answer4Btn2 = "J") {
    rorw.textContent = "Wrong!"
    secondsLeft --;
    return chooseAnswer3 ();
}
}
}
// End of function for Choose Answer 2

// Beginning of function for Chooseanswer 3
function chooseAnswer3() {
secondcard.setAttribute("style", "display:none")
thirdcard.setAttribute("style", "display:inline-block")

answer1Btn3.addEventListener("click", myFunction1)
answer2Btn3.addEventListener("click", myFunction2)
answer3Btn3.addEventListener("click", myFunction3)
answer4Btn3.addEventListener("click", myFunction4)

function myFunction1() {
if (answer1Btn3 = "Locate a specific class in the HTML" ) {
    rorw.textContent = "Wrong!"
    secondsLeft --;
    return chooseAnswer4 ();
}
}
function myFunction2() {
if (answer2Btn3 = "Modify the CSS") {
    rorw.textContent = "Wrong!"
    secondsLeft --;
    return chooseAnswer4 ();
}
}
function myFunction3() {
if (answer3Btn3 = "To validate the click of a button") {
    rorw.textContent = "Wrong!"
    secondsLeft --;
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
// End of funtion for chooseanswer 3

// beginning of function for choose answe 4
function chooseAnswer4() {
thirdcard.setAttribute("style", "display:none")
fourthcard.setAttribute("style", "display:inline-block")
    
answer1Btn4.addEventListener("click", myFunction1)
answer2Btn4.addEventListener("click", myFunction2)
answer3Btn4.addEventListener("click", myFunction3)
answer4Btn4.addEventListener("click", myFunction4)
    
function myFunction1() {
if (answer1Btn4 = "Locate a specific class in the HTML" ) {
    rorw.textContent = "Wrong!"
    secondsLeft --;
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
    secondsLeft --;
    return chooseAnswer5 ();
}
}
    
function myFunction4() {
if (answer4Btn4 = "Locate a specific ID in the HTML") {
    rorw.textContent = "Wrong!"
    secondsLeft --;
    return chooseAnswer5 ();
}
}
}
// End for answer 4


function chooseAnswer5() {
fourthcard.setAttribute("style", "display:none")
fifthcard.setAttribute("style", "display:inline-block")
    
answer1Btn5.addEventListener("click", myFunction1)
answer2Btn5.addEventListener("click", myFunction2)
answer3Btn5.addEventListener("click", myFunction3)
answer4Btn5.addEventListener("click", myFunction4)
    
function myFunction1() {
if (answer1Btn5 = "Locate a specific class in the HTML" ) {
    rorw.textContent = "Correct!"
    return highscorePage ();
}
}
function myFunction2() {
if (answer2Btn5 = "Modify the CSS") {
    rorw.textContent = "Wrong!"
    secondsLeft --;
    return highscorePage ();
}
}
function myFunction3() {
if (answer3Btn5 = "To validate the click of a button") {
    rorw.textContent = "Wrong!"
    secondsLeft --;
    return highscorePage ();
}
}
    
function myFunction4() {
if (answer4Btn5 = "Locate a specific ID in the HTML") {
    rorw.textContent = "Wrong!"
    secondsLeft --;
    return highscorePage ();
}
}
}


function highscorePage () {
fifthcard.setAttribute("style", "display:none");
highscores.setAttribute("style", "display:inline-block");
rorw.setAttribute("Style", "display:none");
    scoreInput ();
        function scoreInput() {
            var score = document.getElementById("score");
            score.textContent = "Your final score is " + secondsLeft + "!";
        }
var restart = document.getElementById("restart");
restart.addEventListener("click", loop);

var submit = document.getElementById("submit");
submit = document.addEventListener("click", function () {
    secondsLeft
})
}

function loop() {
return init();
}


var submitForm = $('#submitform');
var highScoreLog = $('#highscorelog');
function submitFormEvent (event) {
    event.preventDefault();

var initials = $('input[name="initials"]').val();

if(!initials) {
    console.log("Please input intitials");
    return;
}
highScoreLog.append('<li>' + initials + "  |  " + secondsLeft + '</li>');
$('input[name="initials"]').val('');

}
submitForm.on('submit', submitFormEvent);