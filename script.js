
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
        text: "Which part of the below is the html element:" + "\r\n" + "<li id=" + '"' + "Tomatoes" + '"' + ">Tomatoes</li>",
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
let currentQuestionIndex = 0;
let currentScore = 0;

//getters and setters for local storage
let storeQuestions = function (questions) {
    localStorage.setItem("questions",JSON.stringify(questions));
}

let getQuestions = function () {
    return JSON.parse(localStorage.getItem("questions"));
}

let storeScores = function(scores){
    console.log("in storeScores");
    console.log(scores);
    localStorage.setItem("scores",JSON.stringify(scores));
}

let getScores = function () {
    var scores = JSON.parse(localStorage.getItem("scores"));
    if (scores !== null) {
        return scores;
    } else {
        return [];
    }
    // return JSON.parse(localStorage.getItem("scores"));
}

let stopTimer = function(){
    clearInterval(interval);
  }
  
let clearTimerTime = function(){
    //clear the timer and default to 2 minutes
  
    $("#minutes").text("2");
    $("#seconds").text("00");
    totalSeconds = 120;
    stopTimer();
}

let startQuiz = function () {
    //show the question card
    // $("#question-card").show();
    $("#question-card").addClass("visible").removeClass("invisible");
    //create the content for the question card using the first question (index 0)
    createQuestionCardContent(getQuestionByIndex(0));
    interval = setInterval(function() {
        setTimerTime(totalSeconds);
        totalSeconds--;
    },1000)
}

let setTimerTime = function(totalSeconds){
  
    secondsLeftover = zeroPad((totalSeconds % 60),2);
  
    minutes = (Math.floor(totalSeconds / 60));
  
    $("#minutes").text(minutes);
    $("#seconds").text(secondsLeftover);
}

// taken from teh interwebs
let zeroPad  = function(num, places) {
    var zero = places - num.toString().length + 1;
    return Array(+(zero > 0 && zero)).join("0") + num;
}

let nextQuestion = function(){
    if ($(":checked")[0] === undefined) {
        //if they havent picked an option alert them 
        alert("you must pick at least one answer");
        return;
    }

    //if they have answered the current question correctly add 1 to their score
    if(questionAnsweredCorrectly(getQuestionByIndex(currentQuestionIndex))){
        currentScore++;
    }

    currentQuestionIndex++;
    nextQuestion = getQuestionByIndex(currentQuestionIndex);
    console.log("nextQuestion");
    console.log(nextQuestion);
    if (nextQuestion !== undefined ) {
        createQuestionCardContent(nextQuestion);    
    } else {
        endQuiz();
    }
    
}

let questionAnsweredCorrectly = function (currentQuestion) {
    //by default return false
    //the number part of the id of the radio buttons should match the correctAnswerIndex property on the question
    var selectedAnswerIndex = $(":checked").attr("id").split("-")[1];
    if (selectedAnswerIndex === currentQuestion.correctAnswerIndex.toString()) {
        return true;
    }
    return false;
}

let postScores = function(scores){

    // i want to generate html like this:
    // <tr>
    // <th scope="row">1</th> Rank
    // <td>MS</td> initials
    // <td>5</td> score 
    // <td>0:30</td> time taken
    // </tr>
    console.log("in postScores");
    console.log(scores);

    $("#score-table-body").empty();

    scores.sort(function(a,b) {
        return a.score - b.score
    });

    let i = 0;
    scores.forEach(score => {
        score.Rank = i + 1;
        scoreRow = $("<tr>")
        scoreRow.append($("<th>").text(score.Rank));
        scoreRow.append($("<td>").text(score.Initials));
        scoreRow.append($("<td>").text(score.Score)); //i know score.Score sucks but cant think of how else to put it
        scoreRow.append($("<td>").text(score.TimeTaken));
        
        //append the table row to the table body
        $("#score-table-body").append(scoreRow);
        i++;
    });

}

let calculateScore = function(){

    currentScore = {
        Rank: 0, //this gets assigned a value in postScores
        Initials: getInitials(),
        Score: currentScore,
        TimeTaken: totalSeconds
    }

    return currentScore;
}

let getInitials = function() {
    Initials = prompt("please enter your initials")
    return Initials;
}

let endQuiz = function () {
    $("#question-card").addClass("invisible").removeClass("visible");
    alert("you've finished the quiz!");
    //need to show a dialog here to show the score and get the user to put in their initials
    //would be good to record the time taken as well
    stopTimer();
    currentScore = calculateScore();
    console.log("scores");
    console.log(scores);
    scores.push(currentScore);
    storeScores(scores);
    clearTimerTime();
    postScores(scores);
    currentQuestionIndex = 0;
}

let getQuestionByIndex = function (index) {
    questions = getQuestions();
    return questions[index];
}

let createQuestionCardContent = function (question) {
    //set the question card text to the question   
    //i got the newline escape stuff from the net https://stackoverflow.com/questions/4535888/jquery-text-and-newlines
    var obj = $("#question-card-text").text(question.text);
    obj.html(obj.html().replace(/\n/g,'<br/>'));

    //clear the current answers
    $("#question-answer-section").empty();

    var i = 0;
    console.log(question);
    //for each answer in the question object create a radio button and label and append to the containing div
    question.answers.forEach(answer => {
        var div = $("<div>").addClass("form-group row mx-2 align-items-center");
        var input = $("<input>").addClass("col-1").attr({
            type: "radio",
            id: "answer-" + i
        });
        var label = $("<label>").addClass("form-check-label col-11").attr({
            for: "answer-" + i
        });
        label.text(answer);
        div.append(input);
        div.append(label);
        $("#question-answer-section").append(div);
        i++;
    });

}

let resetQuiz = function(){
    stopTimer();
    clearTimerTime();
    $("#question-card").addClass("invisible").removeClass("visible");
}

//initial setup listeners etc..
let OnInit = function() {
    storeQuestions(questions);
    scores = getScores();
    // $("#question-card").hide();
    $("#question-card").addClass("invisible").removeClass("visible");
}

$("#start-quiz-button").on("click",startQuiz);

$("#submit-question-button").on("click",nextQuestion);
$("#reset-quiz-button").on("click",resetQuiz);

OnInit();
