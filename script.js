var mainTitle = document.querySelector("p");
var instructions = document.getElementById("instructions");
var startButton = document.getElementById("start-button");

mainTitle.textContent = "Coding Quiz"
instructions.textContent = "Try to answer the following code-related questions within the time limit. Keep in mind that incorret answers will penalize your score/time by 10 seconds!"

startButton.addEventListener("click", function () {
    console.log("Hello");
});

