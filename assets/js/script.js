var startButton = document.querySelector(".start-button");
var container = document.querySelector(".quiz-container");
var question = document.createElement("ul");
var q1 = document.createElement('li');
var q2 = document.createElement('li');
var q3 = document.createElement('li');
var q4 = document.createElement('li');
var quizAnswer;
var points = 0;

//creating declaring variables to start out, wil need to insert dynamic html with javascript. if we're doing 5 questions with 4 multiple choices, 5 Ul's with 4 Li's



function startGame () {
    countdown();
    firstQuestion();
    startButton.disabled = true;
}

function firstQuestion() {
    //create and insert UL of 4 Li's one of which has a correct answer
    question.textContent = "yeahhhh boiiii?";
    q1.textContent = "naaaaa boiii";
    q2.textContent = "naaaaa boiii";
    q3.textContent = "naaaaa boiii";
    q4.textContent = "naaaaa boiii";
    container.appendChild(question);
    question.appendChild(q1);
    question.appendChild(q2);
    question.appendChild(q3);
    question.appendChild(q4);
}

function secondQuestion() {
    //create and insert UL of 4 Li's one of which has a correct answer
    question.textContent = "yeahhhh boiiii?";
    q1.textContent = "naaaaa boiii";
    q2.textContent = "naaaaa boiii";
    q3.textContent = "naaaaa boiii";
    q4.textContent = "naaaaa boiii";
    container.appendChild(question);
    question.appendChild(q1);
    question.appendChild(q2);
    question.appendChild(q3);
    question.appendChild(q4);
}
function thirdQuestion() {
    //create and insert UL of 4 Li's one of which has a correct answer
    question.textContent = "yeahhhh boiiii?";
    q1.textContent = "naaaaa boiii";
    q2.textContent = "naaaaa boiii";
    q3.textContent = "naaaaa boiii";
    q4.textContent = "naaaaa boiii";
    container.appendChild(question);
    question.appendChild(q1);
    question.appendChild(q2);
    question.appendChild(q3);
    question.appendChild(q4);
}
function fourthQuestion() {
    //create and insert UL of 4 Li's one of which has a correct answer
    question.textContent = "yeahhhh boiiii?";
    q1.textContent = "naaaaa boiii";
    q2.textContent = "naaaaa boiii";
    q3.textContent = "naaaaa boiii";
    q4.textContent = "naaaaa boiii";
    container.appendChild(question);
    question.appendChild(q1);
    question.appendChild(q2);
    question.appendChild(q3);
    question.appendChild(q4);
}
function fifthQuestion() {
    //create and insert UL of 4 Li's one of which has a correct answer
    question.textContent = "yeahhhh boiiii?";
    q1.textContent = "naaaaa boiii";
    q2.textContent = "naaaaa boiii";
    q3.textContent = "naaaaa boiii";
    q4.textContent = "naaaaa boiii";
    container.appendChild(question);
    question.appendChild(q1);
    question.appendChild(q2);
    question.appendChild(q3);
    question.appendChild(q4);
}

//countdown timer for the function.... adding in a boolean to check if quiz answers are false to remove 10 seconds
function countdown () {
    var timeLeft = 60;
    var timeInterval = setInterval(function () {
     if (timeLeft > 0) {
         timeLeft--;
         console.log(timeLeft);
     } else if (quizAnswer === false) {
         timeLeft - 10;
     } else {
         alert("Time's up!");
         clearInterval(timeInterval);
         startButton.disabled = false;
     };

    }, 1000 );
}
function correctAnswer () {
//check if answer clicked is correct, move on to the next question
quizAnswer === true;
}
function incorrectAnswer () {
quizAnswer === false;
}

startButton.addEventListener('click', startGame);
.addEventListener('click', '.correct', correctAnswer);
.addEventListener('click', '.incorrect', incorrectAnswer);

//TODO: create event delegation on clicks to select LI's OR! make them buttons!
//TODO: create the win condition
//TODO: create input with initials and store time left and initials locally 
//TODO: reset the quiz