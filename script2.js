var goBack = document.getElementById("go-back");
var highscores = document.getElementById("highscores");
var buttonsSection = document.querySelector(".buttons");
var clearButton = document.getElementById("clear");

// display scores in local storage currently
getLocalStorage(); 

function getLocalStorage() {
    var names = JSON.parse(localStorage.getItem("name"));

if (names == null) {
    highscores.textContent = "No Highscorers Yet!"
} else {
    for (var i = 0; i < names.length; i++) {
        var scoresList = document.createElement("li");
        highscores.appendChild(scoresList);
    
        scoresList.textContent = names[i];
    };
}
}

// if you click go back, go to index.html, restart quiz
goBack.addEventListener("click", function() {
    console.log("Hello");
    document.location.href = "./index.html"
});

// clears local storage
clearButton.addEventListener("click", function() {
    console.log("Hello");
    localStorage.clear();
    getLocalStorage();
});
   


