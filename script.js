const homeDisplay = document.querySelector(".homeScore");
const awayDisplay = document.querySelector(".awayScore");
const btnPlay = document.querySelector(".play");
const btnReset = document.querySelector(".btnReset");
const jumboScreen = document.querySelector(".jumboScreen");

function getRandomScore() {
  return Math.floor(Math.random() * 3);
}

let homeScore = getRandomScore();
let awayScore = getRandomScore();

btnPlay.addEventListener("click", function () {
  homeDisplay.textContent = homeScore;
  awayDisplay.textContent = awayScore;

  if (homeScore > awayScore) {
    jumboScreen.textContent = `HOME TEAM IS WINNING ${homeScore} to ${awayScore}`;
  } else if (awayScore > homeScore) {
    jumboScreen.textContent = `AWAY TEAM IS WINNING ${homeScore} to ${awayScore}`;
  } else {
    jumboScreen.textContent = "TIE GAME!!";
  }
});
