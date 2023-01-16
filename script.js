var mainTitle = document.querySelector("h2");
var instructions = document.getElementById("instructions");
var startButtonSection = document.getElementById("start-section");
var mcButtonsSection = document.getElementById("choice-section");
var timeSection = document.getElementById("time-left");
var inputSection = document.getElementById("input-section");

var timeLeft = 20;

// Main Page Content
mainTitle.textContent = "Coding Quiz Challenge";
instructions.textContent = "Try to answer the following code-related questions within the time limit. Keep in mind that incorrect answers will penalize your score/time by 10 seconds!"
var startButton = document.createElement("button")
startButton.textContent = "Start Quiz";
startButton.setAttribute("id", "start-button");
startButtonSection.appendChild(startButton);

// When the user clicks to start the quiz
startButtonSection.addEventListener("click", startQuiz)

function startQuiz() {

// Establishes Timer for Quiz

function timer() {
    var timerInterval = setInterval(function(){
        timeSection.textContent = timeLeft + " seconds";

        if (timeLeft <= 0) {
            clearInterval(timerInterval);
        }

        timeLeft--;

    }, 1000)
}

timer();

// Removes instructions and start button

    instructions.textContent = "";
    startButton.remove();

// Created multiple choice buttons
    var buttonA = document.createElement("button");
    var buttonB = document.createElement("button");
    var buttonC = document.createElement("button");
    var buttonD = document.createElement("button");

    buttonA.setAttribute("id", "button-a");
    buttonB.setAttribute("id", "button-b");
    buttonC.setAttribute("id", "button-c");
    buttonD.setAttribute("id", "button-d");

    buttonA.className = "choice-buttons"
    buttonB.className = "choice-buttons"
    buttonC.className = "choice-buttons"
    buttonD.className = "choice-buttons"

    mcButtonsSection.appendChild(buttonA);
    mcButtonsSection.appendChild(buttonB);
    mcButtonsSection.appendChild(buttonC);
    mcButtonsSection.appendChild(buttonD);

function firstQuestion () {
    var questionOne = {
        question: "Commonly used data types DO NOT include _______.",
        answers: ["Alerts", "Strings", "Booleans", "Numbers"],
        correct: buttonA
    }
    mainTitle.textContent = questionOne.question;

        buttonA.textContent = questionOne.answers[0];
        buttonB.textContent = questionOne.answers[1];
        buttonC.textContent = questionOne.answers[2];
        buttonD.textContent = questionOne.answers[3];

    mcButtonsSection.addEventListener("click", checkAnswer);
    
    function checkAnswer(answer) {
        answer.stopPropagation();
        console.log(answer);
        
        if(answer.target === questionOne.correct) {
            console.log("correct");
            // secondQuestion();
        } else {
            console.log("incorrect");
            timeLeft-= 10;
            // secondQuestion();
        }
    }
        
    }

function secondQuestion() {
    var questionTwo = {
        question: "The condition in an 'if / else' statement is enclosed with _______.",
             answers: ["Quotes", "Parenthesis", "Curly Brackets", "Square Brackets"],//"Parenthesis" Other answers: Quotes, Curly Brackets, Square Brackets,
             correct: buttonB,
    }

    mainTitle.textContent = questionTwo.question;

    buttonA.textContent = questionTwo.answers[0];
    buttonB.textContent = questionTwo.answers[1];
    buttonC.textContent = questionTwo.answers[2];
    buttonD.textContent = questionTwo.answers[3]; 

    mcButtonsSection.addEventListener("click", checkAnswer);
    
    function checkAnswer(answer) {
        answer.stopPropagation();
        if(answer.target === questionTwo.correct) {
            console.log("correct");
            // thirdQuestion();
        } else {
            console.log("incorrect");
            timeLeft-= 10;
            // thirdQuestion();
        }
    }
}

function thirdQuestion() {
    var questionThree = {
        question:"Arrays in JavaScript can be used to store _______.",
             answers: ["Numbers and Strings", "Other Arrays", "Booleans", "All of the above"],//"All of the above" Other answers: numbers and strings, other arrays, booleans
             correct: buttonD,
    }

    mainTitle.textContent = questionThree.question;

    buttonA.textContent = questionThree.answers[0];
    buttonB.textContent = questionThree.answers[1];
    buttonC.textContent = questionThree.answers[2];
    buttonD.textContent = questionThree.answers[3];   

    mcButtonsSection.addEventListener("click", checkAnswer);
    
    function checkAnswer(answer) {
        answer.stopPropagation();
        if(answer.target === questionThree.correct) {
            console.log("correct");
            // fourthQuestion();
        } else {
            console.log("incorrect");
            timeLeft-= 10;
            // fourthQuestion();
        }
    }
}

function fourthQuestion() {
    var questionFour = {
        question:"String values must be enclosed within _______ when being assigned to variables.",
             answers: ["Quotes", "Commas", "Curly Brackets", "Parenthesis"],//"Quotes" Other answers: Commas, Curly Brackets, Parenthesis
             correct: buttonA,
    }

    mainTitle.textContent = questionFour.question;

    buttonA.textContent = questionFour.answers[0];
    buttonB.textContent = questionFour.answers[1];
    buttonC.textContent = questionFour.answers[2];
    buttonD.textContent = questionFour.answers[3];   

    mcButtonsSection.addEventListener("click", checkAnswer);
    
    function checkAnswer(answer) {
        answer.stopPropagation();
        if(answer.target === questionFour.correct) {
            console.log("correct");
            // fifthQuestion();
        } else {
            console.log("incorrect");
            timeLeft-= 10;
            // fifthQuestion();
        }
    }
}

function fifthQuestion() {
    var questionFive = {
        question:"A very useful tool used during development and debuggin for printing content to the debugger is _______.", 
             answers: ["JavaScript", "terminal/bash", "console.log", "for loop"],//"console.log" Other answers: JavaScript, terminal/bash, for loops
             correct: buttonC,
    }

    mainTitle.textContent = questionFive.question;

    buttonA.textContent = questionFive.answers[0];
    buttonB.textContent = questionFive.answers[1];
    buttonC.textContent = questionFive.answers[2];
    buttonD.textContent = questionFive.answers[3]; 
    
    mcButtonsSection.addEventListener("click", checkAnswer);
    
    function checkAnswer(answer) {
        answer.stopPropagation();
        if(answer.target === questionFive.correct) {
            console.log("correct");
            endScore();
        } else {
            console.log("incorrect");
            timeLeft-= 10;
            endScore();
        }
    }
}

function endScore() {
    
    mainTitle.textContent = "All Done!";
    instructions.textContent = "Your final score is " + timeLeft;
    mcButtonsSection.remove();

    var enterInitials = document.createElement("div");
    var initialsSection = document.createElement("input");
    var submitButton = document.createElement("button");
    submitButton.setAttribute("id", "submit-button");
    enterInitials.setAttribute("id", "enter-initials");
    initialsSection.setAttribute("id", "initials-here");

    enterInitials.textContent = "Enter initials:";
    submitButton.textContent = "Submit"

    inputSection.appendChild(enterInitials);
    inputSection.appendChild(initialsSection);
    inputSection.appendChild(submitButton);

    var names = [];
    
    function storeData () {
        localStorage.setItem("name", JSON.stringify(names));
    };

    inputSection.addEventListener("keydown", function(event){
        console.log(event)

        var namesText = initialsSection.value;

        if (event.key == "Enter") {
            names.push(namesText);
            initialsSection.value = "";
            console.log("clicked enter");
            storeData(); 
        }
    });

    inputSection.addEventListener("click", function(event) {
        console.log(event);

        var namesText = initialsSection.value;

        if (event.target === submitButton) {
            names.push(namesText);
            initialsSection.value = "";
            console.log("clicked");
            storeData();
        }
    });

   
    
}
}

