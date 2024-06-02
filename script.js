const homeDisplay = document.querySelector(".homeScore");
const awayDisplay = document.querySelector(".awayScore");
const btnPlay = document.querySelector(".play");
const btnReset = document.querySelector(".btnReset");
const jumboScreen = document.querySelector(".jumboScreenText");
const get = document.querySelector(".get");

let totalHomeScore = 0;
let totalAwayScore = 0;
let clickCount = 0;

const team1 = [
  "Provick",
  "James",
  "Silva",
  "Disasi",
  "Chillwel",
  "ENZO",
  "caisaido",
  "Palmer",
  "Mudryck",
  "Jackson",
  "Madueke",
];

get.addEventListener("click", function () {
  let randomPlayer = Math.floor(Math.random() * team1.length);
  let randomElement = team1[randomPlayer];
  console.log("Randomly selected player:", randomElement);
});

btnPlay.addEventListener("click", function () {
  clickCount++;
  if (clickCount === 4) {
    let resultText = "";
    if (totalHomeScore > totalAwayScore) {
      resultText = `HOME TEAM WINS ${totalHomeScore} to ${totalAwayScore}`;
    } else if (totalAwayScore > totalHomeScore) {
      resultText = `AWAY TEAM WINS ${totalAwayScore} to ${totalHomeScore}`;
    } else {
      resultText = `GAME ENDS ${totalHomeScore} - ${totalAwayScore}`;
    }
    jumboScreen.textContent = resultText;

    btnPlay.disabled = true;
  } else {
    function getRandomScore() {
      return Math.floor(Math.random() * 3);
    }

    let homeScore = getRandomScore();
    totalHomeScore += homeScore;
    let awayScore = getRandomScore();
    totalAwayScore += awayScore;

    homeDisplay.textContent = totalHomeScore;
    awayDisplay.textContent = totalAwayScore;

    if (totalHomeScore > totalAwayScore) {
      jumboScreen.textContent = `HOME TEAM IS WINNING ${totalHomeScore} to ${totalAwayScore}`;
    } else if (totalAwayScore > totalHomeScore) {
      jumboScreen.textContent = `AWAY TEAM IS WINNING ${totalAwayScore} to ${totalHomeScore}`;
    } else {
      jumboScreen.textContent = "TIE GAME!!";
    }
  }
});

btnReset.addEventListener("click", function () {
  homeDisplay.textContent = 0;
  awayDisplay.textContent = 0;
  totalAwayScore = 0;
  totalHomeScore = 0;
  clickCount = 0;
  btnPlay.disabled = false;
  jumboScreen.textContent = "Press Play";
});
