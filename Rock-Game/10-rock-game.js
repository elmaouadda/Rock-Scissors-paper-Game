let score = JSON.parse(localStorage.getItem("score")) || {
  wins: 0,
  losses: 0,
  ties: 0,
};

updateScoreElement();

/* 
if (score === null) {
  score = {
    wins: 0,
    losses: 0,
    ties: 0,
  };
}
*/

function playGame(playerMove) {
  const computerMove = pickComputerMove();

  result = "";
  if (playerMove === "paper") {
    if (computerMove === "paper") {
      result = "Tie.";
    } else if (computerMove === "rock") {
      result = "You win.";
    } else if (computerMove === "scissors") {
      result = "You lose.";
    }
  } else if (playerMove === "scissors") {
    if (computerMove === "scissors") {
      result = "Tie.";
    } else if (computerMove === "rock") {
      result = "You lose.";
    } else if (computerMove === "paper") {
      result = "You win.";
    }
  } else if (playerMove === "rock") {
    if (computerMove === "rock") {
      result = "Tie.";
    }
    if (computerMove === "scissors") {
      result = "You win";
    }
    if (computerMove === "paper") {
      result = "You lose.";
    }
  }

  if (result === "You win") {
    score.wins = score.wins + 1;
  } else if (result === "You lose") {
    score.losses = score.losses + 1;
  } else if (result === "Tie.") {
    score.ties = score.ties + 1;
  }

  localStorage.setItem("score", JSON.stringify(score));

  updateScoreElement();

  document.querySelector(".js-result").innerHTML = result;

  document.querySelector(
    ".js-moves"
  ).innerHTML = `You <img src="${playerMove}-emoji.png" class="move-icon" />
<img src="${computerMove}-emoji.png" class="move-icon" />
Computer`;
}

function updateScoreElement() {
  document.querySelector(
    ".js-score"
  ).innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
}

function updateResultElement() {
  document.querySelector(".js-result").innerHTML = `${result}`;
}

function pickComputerMove() {
  const randomNumber = Math.random();

  let computerMove = "";

  if (randomNumber >= 0 && randomNumber < 1 / 3) {
    computerMove = "rock";
  } else if ((randomNumber >= 1 / 3) & (randomNumber < 2 / 3)) {
    computerMove = "scissors";
  } else if ((randomNumber >= 2 / 3) & (randomNumber < 1)) {
    computerMove = "paper";
  }

  return computerMove;
}