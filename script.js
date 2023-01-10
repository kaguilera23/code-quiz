var mainTitle = document.querySelector("h1");
var instructions = document.getElementById("instructions");
var buttonsSection = document.getElementById("buttons");

var questions = [
    {
        question: "Commonly used data types DO NOT include _______.",
        answer: ["Alerts", "Strings", "Booleans", "Numbers"],
        correct: buttonA,
    },
    {
        question: "The condition in an 'if / else' statement is enclosed with _______.",
        answer: ["Quotes", "Parenthesis", "Curly Brackets", "Square Brackets"],//"Parenthesis" Other answers: Quotes, Curly Brackets, Square Brackets,
        correct: buttonB
    },
    {
        question:"Arrays in JavaScript can be used to store _______.",
        answer: ["Numbers and Strings", "Other Arrays", "Booleans", "All of the above"],//"All of the above" Other answers: numbers and strings, other arrays, booleans
        correct: buttonD
    },
    {
        question:"String values must be enclosed within _______ when being assigned to variables.",
        answer: ["Quotes", "Commas", "Curly Brackets", "Parenthesis"],//"Quotes" Other answers: Commas, Curly Brackets, Parenthesis
        correct: buttonA
    },
    {
        question:"A very useful tool used during development and debuggin for printing content to the debugger is _______.", 
        answer: ["JavaScript", "terminal/bash", "console.log", "for loop"]//"console.log" Other answers: JavaScript, terminal/bash, for loops
    }
]

// Main Page Content
mainTitle.textContent = "Coding Quiz Challenge";
instructions.textContent = "Try to answer the following code-related questions within the time limit. Keep in mind that incorrect answers will penalize your score/time by 10 seconds!"
var startButton = document.createElement("button")
startButton.textContent = "Start Quiz";
buttonsSection.appendChild(startButton);

// When the user starts the quiz
startButton.addEventListener("click", startQuiz)

function startQuiz () {

    instructions.textContent = "";
    startButton.setAttribute("style", "visibility:hidden");

    mainTitle.textContent = questions[0].question;
    
    var buttonA = document.createElement("button");
    var buttonB = document.createElement("button");
    var buttonC = document.createElement("button");
    var buttonD = document.createElement("button");


    // Write a for loop when I know what's happening

    buttonA.textContent = questions[0].answer[0];
    buttonB.textContent = questions[0].answer[1];
    buttonC.textContent = questions[0].answer[2];
    buttonD.textContent = questions[0].answer[3];

    buttonsSection.appendChild(buttonA);
    buttonsSection.appendChild(buttonB)
    buttonsSection.appendChild(buttonC)
    buttonsSection.appendChild(buttonD)

}
