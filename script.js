var mainTitle = document.querySelector("h1");
var instructions = document.getElementById("instructions");
var startButtonSection = document.getElementById("start-button");
var mcButtonsSection = document.getElementById("choice-buttons");

var questions = [
    {
        question: "Commonly used data types DO NOT include _______.",
        answers: ["Alerts", "Strings", "Booleans", "Numbers"],
        correct: "Alerts",
    },
    {
        question: "The condition in an 'if / else' statement is enclosed with _______.",
        answers: ["Quotes", "Parenthesis", "Curly Brackets", "Square Brackets"],//"Parenthesis" Other answers: Quotes, Curly Brackets, Square Brackets,
        correct: "Parenthesis"
    },
    {
        question:"Arrays in JavaScript can be used to store _______.",
        answers: ["Numbers and Strings", "Other Arrays", "Booleans", "All of the above"],//"All of the above" Other answers: numbers and strings, other arrays, booleans
        correct: "All of the above"
    },
    {
        question:"String values must be enclosed within _______ when being assigned to variables.",
        answers: ["Quotes", "Commas", "Curly Brackets", "Parenthesis"],//"Quotes" Other answers: Commas, Curly Brackets, Parenthesis
        correct: "Quotes"
    },
    {
        question:"A very useful tool used during development and debuggin for printing content to the debugger is _______.", 
        answers: ["JavaScript", "terminal/bash", "console.log", "for loop"],//"console.log" Other answers: JavaScript, terminal/bash, for loops
        correct: "console.log"
    }
]

// Main Page Content
mainTitle.textContent = "Coding Quiz Challenge";
instructions.textContent = "Try to answer the following code-related questions within the time limit. Keep in mind that incorrect answers will penalize your score/time by 10 seconds!"
var startButton = document.createElement("button")
startButton.textContent = "Start Quiz";
startButtonSection.appendChild(startButton);

// When the user starts the quiz
startButtonSection.addEventListener("click", startQuiz)


function startQuiz () {
    
    // Get rid of title and instruction

    instructions.textContent = "";
    startButton.setAttribute("style", "visibility:hidden");

    // Create multiple choice buttons    
    
    var buttonA = document.createElement("button");
    var buttonB = document.createElement("button");
    var buttonC = document.createElement("button");
    var buttonD = document.createElement("button");

    buttonA.setAttribute("id", "button-a");
    buttonB.setAttribute("id", "button-b");
    buttonC.setAttribute("id", "button-c");
    buttonD.setAttribute("id", "button-d");

    mcButtonsSection.appendChild(buttonA);
    mcButtonsSection.appendChild(buttonB);
    mcButtonsSection.appendChild(buttonC);
    mcButtonsSection.appendChild(buttonD);

    // Asking Question 1
    function questionOne() {
         mainTitle.textContent = questions[0].question;

            buttonA.textContent = questions[0].answers[0];
            buttonB.textContent = questions[0].answers[1];
            buttonC.textContent = questions[0].answers[2];
            buttonD.textContent = questions[0].answers[3];

    // Event Listener for button choices
     mcButtonsSection.addEventListener("click", userResponse, true);
    
    function userResponse(event) {
        if (event.target === buttonA) {
            console.log("Button A");
            return true;
        } else if (event.target === buttonB) {
            console.log("Button B");
            return false;
        } else if (event.target === buttonC) {
            console.log("Button C");
            return false;
        } else if (event.target === buttonD) {
            console.log("Button D");
            return false;
        }

        

    }       
    };

    questionOne();

    // Questions 2

    function questionFour() {
        mainTitle.textContent = questions[1].question;

           buttonA.textContent = questions[1].answers[0];
           buttonB.textContent = questions[1].answers[1];
           buttonC.textContent = questions[1].answers[2];
           buttonD.textContent = questions[1].answers[3];

}
}