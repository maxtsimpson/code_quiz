
//declare an array of question objects
var questions = [
    {
        text: "In general, how should you end a line of javascript?",
        answers: ["]",";","}","'"],
        correctAnswerIndex: 1,
        answeredCorrectly: false,
        studentAnswer: ""
    },
    {
        text: "How can you compare that two variables are equal in javascript?",
        answers: ["a isTheSameAs b","a = b","a === b","a + b"],
        correctAnswerIndex: 2,
        answeredCorrectly: false,
        studentAnswer: ""
    },
    {
        text: "What will the var result be equal to. \r\nvar result = '1' + 3",
        answers: ["4","13","NaN","you totally can't do that"],
        correctAnswerIndex: 1,
        answeredCorrectly: false,
        studentAnswer: ""
    },
    {
        text: "Which part of the below is the html element:\r\n<li id=" + '"' + "Tomatoes" + '"' + ">Tomatoes</li>",
        answers: ["li","id","Tomatoes","there's no element here"],
        correctAnswerIndex: 0,
        answeredCorrectly: false,
        studentAnswer: ""
    },
    {
        text: "Which part of the below is the html attribute:\r\n<li id=" + '"' + "Tomatoes" + '"' + ">Tomatoes</li>",
        answers: ["li","id","Tomatoes","there's no attribute here"],
        correctAnswerIndex: 1,
        answeredCorrectly: false,
        studentAnswer: ""
    },
    {
        text: "What is the latest release of javascript?",
        answers: ["Firefox 15","chromium","Ecma script 6","typescript"],
        correctAnswerIndex: 2,
        answeredCorrectly: false,
        studentAnswer: ""
    },
    {
        text: "which of the below can i use to get a random number between 0 and 1?",
        answers: ["Math.random()","Math.random() * 0","Random.Math","0..1"],
        correctAnswerIndex: 0,
        answeredCorrectly: false,
        studentAnswer: ""
    }
]

//create an array of score objects. because we arent pre-populating the scores it will just be a blank array
let scores = [];
let interval = "";
let totalSeconds = 120;

//getters and setters for local storage
let storeQuestions = function (questions) {
    localStorage.setItem("questions",questions);
}

let getQuestions = function () {
    return localStorage.getItem("questions");
}

let storeScores = function (scores) {
    localStorage.setItem("scores",scores);
}

let getScores = function () {
    return localStorage.getItem("scores");
}

let stopTimer = function(){
    clearInterval(interval);
  }
  
let clearTimerTime = function(){
    //clear the timer and default to 25 minutes
    console.log("clearTimerTime");
  
    minutesDisplay.textContent = "02";
    secondsDisplay.textContent = "00";
    totalSeconds = 120;
    stopTimer();
}

let startQuiz = function () {
    interval = setInterval(function() {
        setTimerTime(totalSeconds);
        totalSeconds--;
    },1000)
}

let setTimerTime = function(totalSeconds){
    console.log("in setTimerTime");
    //expecting total seconds
  
    secondsLeftover = zeroPad((totalSeconds % 60),2);
  
    minutes = zeroPad((Math.floor(totalSeconds / 60)),2);
  
    $("#minutes").text(minutes);
    $("#seconds").text(secondsLeftover);
}

// taken from teh interwebs
let zeroPad  = function(num, places) {
    var zero = places - num.toString().length + 1;
    return Array(+(zero > 0 && zero)).join("0") + num;
}

$("#start-quiz-button").on("click",startQuiz);