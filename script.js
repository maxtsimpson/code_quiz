
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
scores = []

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

