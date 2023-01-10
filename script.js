var mainTitle = document.querySelector("p");
var instructions = document.getElementById("instructions");
var startButton = document.getElementById("start-button");

var questions = [
    {
        question: "Commonly used data types DO NOT include _______.",
        answer: "Alerts" //Other answers: Strings, Booleans, Numbers
    },
    {
        question: "The condition in an 'if / else' statement is enclosed with _______.",
        answer: "Parenthesis" //Other answers: Quotes, Curly Brackets, Square Brackets
    },
    {
        question:"Arrays in JavaScript can be used to store _______.",
        answer: "All of the above" //Other answers: numbers and strings, other arrays, booleans
    },
    {
        question:"String values must be enclosed within _______ when being assigned to variables.",
        answer: "Quotes" //Other answers: Commas, Curly Brackets, Parenthesis
    },
    {
        question:"A very useful tool used during development and debuggin for printing content to the debugger is _______.", 
        answer: "console.log" //Other answers: JavaScript, terminal/bash, for loops
    }
]

mainTitle.textContent = "Coding Quiz"
instructions.textContent = "Try to answer the following code-related questions within the time limit. Keep in mind that incorret answers will penalize your score/time by 10 seconds!"

startButton.addEventListener("click", startQuiz)

function startQuiz () {
    mainTitle.textContent = "";
    instructions.textContent = "";
}
