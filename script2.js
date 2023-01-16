var goBack = document.getElementById("go-back");
var highscores = document.getElementById("highscores");
var buttonsSection = document.querySelector(".buttons");

console.log(buttonsSection);

var names = localStorage.getItem("name");

console.log(names);

// buttonsSection.addEventListener("click", function () {
//     console.log("hello");
// }, false);

goBack.addEventListener("click", function() {
    console.log("Hello");
    var backButton = document.createElement("a");
    backButton.setAttribute("href", "index.html");
    goBack.appendChild(backButton);
});
   



// var savedHighscores = JSON.parse(localStorage.getItem("names"));

