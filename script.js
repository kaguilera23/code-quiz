var mainTitle = document.querySelector("h1");
var instructions = document.getElementById("instructions");
var buttonsSection = document.getElementById("buttons");

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
    
    var buttonA = document.createElement("button");
    var buttonB = document.createElement("button");
    var buttonC = document.createElement("button");
    var buttonD = document.createElement("button");

    buttonA.textContent = questions[0].question;
    buttonB.textContent = "This is";
    buttonC.textContent = "A button";
    buttonD.textContent = "Hopefully";

    buttonsSection.appendChild(buttonA);
    buttonsSection.appendChild(buttonB)
    buttonsSection.appendChild(buttonC)
    buttonsSection.appendChild(buttonD)

}
