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
var list = document.querySelector(".result-list");
var gameEnd = false;
var leaderBoard = [];
var questionCounter = 0;
var timeLeft = 60;
var penalty = 0;
var userScore;

//function called when start button is pressed
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
//function called when answers are submitted, checking if the answer was correct, scoring, and moving on to the next display and question
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
//function called to move on to the next question, I know there are better ways to do this and the questions themselves below
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
//the following five functions are my questions, a convoluted and inefficient mess, I had a hard time with multi dimensional arrays.
function firstQuestion() {
    questionEl.textContent = questions[0];
    answerEl1.textContent = answerKey1[0];
    answerEl2.textContent = answerKey1[1];
    answerEl3.textContent = answerKey1[2];
    answerEl4.textContent = answerKey1[3];
    answerEl1.setAttribute("data-bool", "true");
}
function secondQuestion() {
    answerEl1.setAttribute("data-bool", "false")
    questionEl.textContent = questions[1];
    answerEl1.textContent = answerKey2[0];
    answerEl2.textContent = answerKey2[1];
    answerEl3.textContent = answerKey2[2];
    answerEl4.textContent = answerKey2[3];
    answerEl3.setAttribute("data-bool", "true");
}
function thirdQuestion() {
    answerEl2.setAttribute("data-bool", "false")
    questionEl.textContent = questions[2];
    answerEl1.textContent = answerKey3[0];
    answerEl2.textContent = answerKey3[1];
    answerEl3.textContent = answerKey3[2];
    answerEl4.textContent = answerKey3[3];
    answerEl4.setAttribute("data-bool", "true");
}
function fourthQuestion() {
    answerEl4.setAttribute("data-bool", "false")
    questionEl.textContent = questions[3];
    answerEl1.textContent = answerKey4[0];
    answerEl2.textContent = answerKey4[1];
    answerEl3.textContent = answerKey4[2];
    answerEl4.textContent = answerKey4[3];
    answerEl1.setAttribute("data-bool", "true");
}
function fifthQuestion() {
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
//countdown timer for the function
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
//runs when submit button is pressed, scoring the users initials
function submission() {
    sContainer.setAttribute("class", "hidden");
    var userInitials = initSubmit.value;
    localStorage.setItem("initials", JSON.stringify(userInitials));
    console.log(userInitials);
    renderLeaderboard();
};
//to help reset the UI when the reset button is pressed
function clearButton() {
    startButton.removeAttribute("class", "hidden");
    startButton.setAttribute("style", "font-size: 5em;", "height: fit-content;", "margin: auto;");
}
//to reset the game
function resetGame() {
    gameEnd = false;
    questionCounter = 5;
    setTimeout(clearButton, 1000);
    sContainer.setAttribute("class", "hidden");
    results.setAttribute("class", "hidden");
    penalty = 0;
    correctConfirm.textContent = "";
};
//attempting to pull data from local storage to display a leader board, had issues with this.
function renderLeaderboard() {
    results.removeAttribute("class", "hidden");
    var getName = JSON.parse(localStorage.getItem("initials"));
    var getScore = JSON.parse(localStorage.getItem("score"));
    var finalLeaderboard = {
        Name: getName,
        Score: getScore
    };
    leaderBoard.push(finalLeaderboard);
    leaderBoard.sort((a, b) => b.finalLeaderboard.score - a.finalLeaderboard.score);
    leaderBoard.slice(0, 5);
    localStorage.setItem("leaderboard", JSON.stringify(leaderBoard));
    list.innerHTML = "";
    for (var i =0; i < leaderBoard.length; i++) {
        var board = leaderBoard[i];
        var li = document.createElement("li");
        li.textContent = board;
        list.appendChild(li);
        }
        document.querySelector(".results-list").innerHTML = list;
        console.log(leaderBoard)
    }

//event listeners
startButton.addEventListener("click", startGame);
resetButton.addEventListener("click", resetGame);
answerEl.addEventListener("click", checkAnswer);
submit.addEventListener("click", submission);
