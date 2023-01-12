var mainTitle = document.querySelector("h1");
var instructions = document.getElementById("instructions");
var startButtonSection = document.getElementById("start-button");
var mcButtonsSection = document.getElementById("choice-buttons");
// var choiceA = document.getElementById("button-a");
// var choiceB = document.getElementById("button-b");
// var choiceC = document.getElementById("button-c");
// var choiceD = document.getElementById("button-d");




// Main Page Content
mainTitle.textContent = "Coding Quiz Challenge";
instructions.textContent = "Try to answer the following code-related questions within the time limit. Keep in mind that incorrect answers will penalize your score/time by 10 seconds!"
var startButton = document.createElement("button")
startButton.textContent = "Start Quiz";
startButtonSection.appendChild(startButton);

// When the user starts the quiz
startButtonSection.addEventListener("click", startQuiz, false)

function startQuiz () {
        
    // Get rid of title and instruction

    instructions.textContent = "";
    startButton.remove();

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

    var questions = [
        {
            question: "Commonly used data types DO NOT include _______.",
            answers: ["Alerts", "Strings", "Booleans", "Numbers"],
            correct: buttonA
        },
        {
            question: "The condition in an 'if / else' statement is enclosed with _______.",
            answers: ["Quotes", "Parenthesis", "Curly Brackets", "Square Brackets"],//"Parenthesis" Other answers: Quotes, Curly Brackets, Square Brackets,
            correct: buttonB,
        },
        {
            question:"Arrays in JavaScript can be used to store _______.",
            answers: ["Numbers and Strings", "Other Arrays", "Booleans", "All of the above"],//"All of the above" Other answers: numbers and strings, other arrays, booleans
            correct: buttonD,
        },
        {
            question:"String values must be enclosed within _______ when being assigned to variables.",
            answers: ["Quotes", "Commas", "Curly Brackets", "Parenthesis"],//"Quotes" Other answers: Commas, Curly Brackets, Parenthesis
            correct: buttonA,
        },
        {
            question:"A very useful tool used during development and debuggin for printing content to the debugger is _______.", 
            answers: ["JavaScript", "terminal/bash", "console.log", "for loop"],//"console.log" Other answers: JavaScript, terminal/bash, for loops
            correct: buttonC,
        }
    ]
   
    function questionOne () {
        mainTitle.textContent = questions[0].question;

        buttonA.textContent = questions[0].answers[0];
        buttonB.textContent = questions[0].answers[1];
        buttonC.textContent = questions[0].answers[2];
        buttonD.textContent = questions[0].answers[3];

        mcButtonsSection.addEventListener("click", function hello (answer) {
            answer.stopPropagation();
            console.log(answer.target);
            console.log(questions[0].correct)
            console.log(buttonA);
            if (answer.target === questions[0].correct) {
                console.log("correct");
            } else {
                console.log("incorrect");
            }
    });
    }
  
    function questionTwo () {
        mainTitle.textContent = questions[1].question;

        buttonA.textContent = questions[1].answers[0];
        buttonB.textContent = questions[1].answers[1];
        buttonC.textContent = questions[1].answers[2];
        buttonD.textContent = questions[1].answers[3];

        mcButtonsSection.addEventListener("click", function hello (answer) {
            answer.stopPropagation();
            console.log(answer.target);
            console.log(questions[1].correct)
            console.log(buttonA);
            if (answer.target === questions[1].correct) {
                console.log("correct");
            } else {
                console.log("incorrect");
            }
    });
    }

    function questionThree () {
        mainTitle.textContent = questions[2].question;

        buttonA.textContent = questions[2].answers[0];
        buttonB.textContent = questions[2].answers[1];
        buttonC.textContent = questions[2].answers[2];
        buttonD.textContent = questions[2].answers[3];

        mcButtonsSection.addEventListener("click", function hello (answer) {
            answer.stopPropagation();
            console.log(answer.target);
            console.log(questions[2].correct)
            console.log(buttonA);
            if (answer.target === questions[2].correct) {
                console.log("correct");
            } else {
                console.log("incorrect");
            }
    });

    };

    function questionFour () {
        mainTitle.textContent = questions[3].question;

        buttonA.textContent = questions[3].answers[0];
        buttonB.textContent = questions[3].answers[1];
        buttonC.textContent = questions[3].answers[2];
        buttonD.textContent = questions[3].answers[3];

        mcButtonsSection.addEventListener("click", function hello (answer) {
            answer.stopPropagation();
            console.log(answer.target);
            console.log(questions[3].correct)
            console.log(buttonA);
            if (answer.target === questions[3].correct) {
                console.log("correct");
            } else {
                console.log("incorrect");
            }
    });

    };

    function questionFive () {
        mainTitle.textContent = questions[4].question;

        buttonA.textContent = questions[4].answers[0];
        buttonB.textContent = questions[4].answers[1];
        buttonC.textContent = questions[4].answers[2];
        buttonD.textContent = questions[4].answers[3];

        mcButtonsSection.addEventListener("click", function hello (answer) {
            answer.stopPropagation();
            console.log(answer.target);
            console.log(questions[4].correct)
            console.log(buttonA);
            if (answer.target === questions[4].correct) {
                console.log("correct");
            } else {
                console.log("incorrect");
            }
    });
    };

    questionOne();
    questionTwo();
    questionThree();
    questionFour();
    questionFive();

}