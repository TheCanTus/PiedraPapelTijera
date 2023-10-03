document.addEventListener("DOMContentLoaded", function () {
  let triunfos = 0;
  let perdidas = 0;

  const rockButton = document.getElementById("rock");
  const paperButton = document.getElementById("paper");
  const scissorsButton = document.getElementById("scissors");
  const resultElement = document.getElementById("result");
  const playerChoiceElement = document.getElementById("player-choice");
  const computerChoiceElement = document.getElementById("computer-choice");
  const winsElement = document.getElementById("wins");
  const lossesElement = document.getElementById("losses");

  function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  function eleccion(jugada) {
    let resultado = ""
    if (jugada == 1) {
      resultado = "Piedra 🥌"
    } else if (jugada == 2) {
      resultado = "Papel 📃"
    } else if (jugada == 3) {
      resultado = "Tijera ✂️"
    } else {
      resultado = "MAL ELEGIDO"
    }
    return resultado
  }

  function jugar(usuarioChoice) {
    const pcChoice = aleatorio(1, 3);
    const resultado = eleccion(usuarioChoice);

    playerChoiceElement.textContent = resultado;
    computerChoiceElement.textContent = eleccion(pcChoice);

    if (pcChoice === usuarioChoice) {
      resultElement.textContent = "EMPATE";
    } else if (
      (usuarioChoice === 1 && pcChoice === 3) ||
      (usuarioChoice === 2 && pcChoice === 1) ||
      (usuarioChoice === 3 && pcChoice === 2)
    ) {
      resultElement.textContent = "GANASTE";
      triunfos++;
    } else {
      resultElement.textContent = "PERDISTE";
      perdidas++;
    }

    winsElement.textContent = triunfos;
    lossesElement.textContent = perdidas;

    if (triunfos >= 3 || perdidas >= 3) {
      alert(
        "Ganaste " +
        triunfos +
        " veces. Perdiste " +
        perdidas +
        " veces."
      );
    } else {
      // Continuar el juego
    }
  }

  rockButton.addEventListener("click", function () {
    jugar(1);
  });

  paperButton.addEventListener("click", function () {
    jugar(2);
  });

  scissorsButton.addEventListener("click", function () {
    jugar(3);
  });
});
