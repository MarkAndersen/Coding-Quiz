var startButton = document.querySelector(".start-button");
var resetButton = document.querySelector(".reset-button");
resetButton.disabled = true;
var container = document.querySelector(".quiz-container");
var questionEl = document.querySelector(".question");
var correctConfirm = document.querySelector(".confirm");
var answerEl = document.querySelector(".answers");
var answerEl1 = document.querySelector(".ansBtn1");
var answerEl2 = document.querySelector(".ansBtn2");
var answerEl3 = document.querySelector(".ansBtn3");
var answerEl4 = document.querySelector(".ansBtn4");
var questions = ["What is another term for hurricane?", "In which season are tornadoes in the US most common?", "In which US state did the highest wind gust ever measured occur?",
    "What is the highest average annual snowfall in the US?", "Where did the hottest temperature ever recorded in the US occur?"];
var answerKey1 = ["Typhoon", "Nor'easter", "Bomb Cyclone", "Tornado"];
var answerKey2 = ["Winter", "Fall", "Spring", "Summer"];
var answerKey3 = ["Alaska", "Oklahoma", "Florida", "New Hampshire"];
var answerKey4 = ["641 inches", "845 inches", "409 inches", "1032 inches"];
var answerKey5 = ["Reno, NV", "Death Valley, CA", "Phoenix, AZ", "San Antonio, TX"];
var sContainer = document.querySelector(".highscore-container");
var submit = document.querySelector(".submitBtn");
var initSubmit = document.querySelector(".highscore");
var results = document.querySelector(".results");
var renderedLeaderboard = document.querySelector(".leaderboard");
var gameEnd = false;
// var leaderBoard = [];

var questionCounter = 0;
var timeLeft = 60;
var penalty = 0;
var userScore;



function startGame() {
    gameEnd = false;
    timeLeft = 60;
    questionCounter = 0;
    resetButton.disabled = false;
    container.removeAttribute("class", "hidden");
    startButton.setAttribute("class", "hidden");
    countdown();
    firstQuestion();

}
function checkAnswer(event) {
    event.preventDefault();
    var confirmEl = event.target;
    if (confirmEl.matches(".btn")) {
        var state = confirmEl.getAttribute("data-bool");
        if (state === "true") {
            correctConfirm.textContent = "Correct!"
            console.log("yup!");
            nextQuestion();
        } else {
            correctConfirm.textContent = "Incorrect!"
            console.log("nope!");
            penalty += 10;
            nextQuestion();
        };
    };
}
function nextQuestion() {
    questionCounter++;
    if (questionCounter === 1) {
        secondQuestion();
    } else if (questionCounter === 2) {
        thirdQuestion();
    } else if (questionCounter === 3) {
        fourthQuestion();
    } else if (questionCounter === 4) {
        fifthQuestion();
    };
}
function firstQuestion() {
    // console.log("im running!");
    questionEl.textContent = questions[0];
    answerEl1.textContent = answerKey1[0];
    answerEl2.textContent = answerKey1[1];
    answerEl3.textContent = answerKey1[2];
    answerEl4.textContent = answerKey1[3];
    answerEl1.setAttribute("data-bool", "true");
}
function secondQuestion() {
    // console.log("im running2!");
    answerEl1.setAttribute("data-bool", "false")
    questionEl.textContent = questions[1];
    answerEl1.textContent = answerKey2[0];
    answerEl2.textContent = answerKey2[1];
    answerEl3.textContent = answerKey2[2];
    answerEl4.textContent = answerKey2[3];
    answerEl3.setAttribute("data-bool", "true");
}
function thirdQuestion() {
    // console.log("im running3!");
    answerEl2.setAttribute("data-bool", "false")
    questionEl.textContent = questions[2];
    answerEl1.textContent = answerKey3[0];
    answerEl2.textContent = answerKey3[1];
    answerEl3.textContent = answerKey3[2];
    answerEl4.textContent = answerKey3[3];
    answerEl4.setAttribute("data-bool", "true");
}
function fourthQuestion() {
    // console.log("im running4!");
    answerEl4.setAttribute("data-bool", "false")
    questionEl.textContent = questions[3];
    answerEl1.textContent = answerKey4[0];
    answerEl2.textContent = answerKey4[1];
    answerEl3.textContent = answerKey4[2];
    answerEl4.textContent = answerKey4[3];
    answerEl1.setAttribute("data-bool", "true");
}
function fifthQuestion() {
    // console.log("im running5!");
    answerEl1.setAttribute("data-bool", "false");
    questionEl.textContent = questions[4];
    answerEl1.textContent = answerKey5[0];
    answerEl2.textContent = answerKey5[1];
    answerEl3.textContent = answerKey5[2];
    answerEl4.textContent = answerKey5[3];
    answerEl2.setAttribute("data-bool", "true");
    gameEnd = true;
}
//runs at end of game, storing score
function endGame() {
    if (gameEnd === true) {
        userScore = timeLeft - penalty;
        localStorage.setItem("score", JSON.stringify(userScore));
        container.setAttribute("class", "hidden");
        sContainer.removeAttribute("class", "hidden");
        correctConfirm.textContent = "";
    } else return;
}
//countdown timer for the function, how do i stop the counter when the game ends?
function countdown() {
    var timeInterval = setInterval(function () {
        if (questionCounter > 4) {
            endGame();
            clearInterval(timeInterval);
            timeLeft = 0;
            console.log("the game has ended");
        }
        if (timeLeft > 0) {
            timeLeft--;
            console.log(timeLeft);
        }
    }, 1000);
}
function submission() {
    sContainer.setAttribute("class", "hidden");
    var userInitials = initSubmit.value;
    localStorage.setItem("initials", JSON.stringify(userInitials));
    console.log(userInitials);
    renderLeaderboard();
}

function clearButton() {
    startButton.removeAttribute("class", "hidden");
    startButton.setAttribute("style", "font-size: 5em;", "height: fit-content;", "margin: auto;");
}
function resetGame() {
    gameEnd = false;
    questionCounter = 5;
    setTimeout(clearButton, 1000);
    sContainer.setAttribute("class", "hidden");
    results.setAttribute("class", "hidden");
    penalty = 0;
    correctConfirm.textContent = "";
};
function renderLeaderboard() {
    var savedInfo = JSON.parse(localStorage.getItem("initials"));
    var finalScore = JSON.parse(localStorage.getItem("score"));
    var finalResults = {initials: savedInfo, score: finalScore}
    results.removeAttribute("class", "hidden");
    var finalScore = localStorage.getItem("score") || '[]';
    var leaderBoard = [finalScore, finalResults]
    leaderBoard.sort((a, b) => b.finalScore - a.finalScore);
    leaderBoard.slice(0, 5);
    localStorage.setItem('highscore', JSON.stringify(leaderBoard));
    var display = "";
    for (var i =0; i < leaderBoard.length; i++) {
        
        display += "<li>" + leaderBoard[i] + "</li>";
    }
    document.querySelector(".results-list").innerHTML = display;

    
    console.log(leaderBoard)

}

    
    
    // leaderBoard.push(finalScore);
    // leaderBoard.sort();
    // console.log(leaderBoard);
    // renderedLeaderboard.textContent = savedInfo + "" + leaderBoard;


startButton.addEventListener("click", startGame);
resetButton.addEventListener("click", resetGame);
answerEl.addEventListener("click", checkAnswer);
submit.addEventListener("click", submission);
//TODO: create input with initials and store time left and initials locally
//TODO: reset the quiz