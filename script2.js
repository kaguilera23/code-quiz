var goBack = document.getElementById("go-back")
var highscores = document.getElementById("highscores");

var names = localStorage.getItem("name");

console.log(names);

goBack.addEventListener("Click", function () {
    goBack.setAttribute("href", "index.html");
});


