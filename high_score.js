const highScoresList = document.getElementById("highScoresList");
//getting data from local storage
const highScores = JSON.parse(localStorage.getItem("highScores"));

//console.log(highScores);
highScoresList.innerHTML = highScores.map( score => {

    return `<li class="high-score">${score.name} - ${score.score}</li>`;

})
.join("");

//console.log(highScoresList);
