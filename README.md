# 04 Web APIs: Code Quiz

As you proceed in your career as a web developer, you will probably be asked to complete a coding assessment, which is typically a combination of multiple-choice questions and interactive challenges. Build a timed code quiz with multiple-choice questions. This app will run in the browser and feature dynamically updated HTML and CSS powered by your JavaScript code. It will also feature a clean and polished user interface and be responsive, ensuring that it adapts to multiple screen sizes.

## User Story

```
AS A coding bootcamp student
I WANT to take a timed quiz on JavaScript fundamentals that stores high scores
SO THAT I can gauge my progress compared to my peers
```

## Acceptance Criteria

```
GIVEN I am taking a code quiz
    Create a basic html page
        start button

    Create a script file
        store an array of question objects - questions, answered, studentAnswer, correctAnswer
        store an array of score objects - name, score

WHEN I click the start button
    add event listener to start button
THEN a timer starts and I am presented with a question
    create a start timer function call a timer interval and store the interval id in variable
    create a function to get a question object
WHEN I answer a question
    create a function to modify the question object to store whether it was answered, the students answer and store the question object to local storage
THEN I am presented with another question
    call the getQuestion function
WHEN I answer a question incorrectly
THEN time is subtracted from the clock

WHEN all questions are answered or the timer reaches 0
THEN the game is over
WHEN the game is over
THEN I can save my initials and score
    call a gameOver function that saves user scores
    then return to the landing page showing high scores
```

The following animation demonstrates the application functionality:

![code quiz](./Assets/04-web-apis-homework-demo.gif)

### Review

You are required to submit the following for review:

* The URL of the functional, deployed application.

* The URL of the GitHub repository. Give the repository a unique name and include a README describing the project.

- - -
© 2019 Trilogy Education Services, a 2U, Inc. brand. All Rights Reserved.
