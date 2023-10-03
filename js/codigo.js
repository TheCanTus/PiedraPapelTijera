document.addEventListener("DOMContentLoaded", function () {
  let triunfos = 0;
  let perdidas = 0;
  let vidasJugador = 3;
  let vidasComputadora = 3;

  const maxVidas = 3;

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

  function verificarFinDelJuego() {
    if (triunfos >= maxVidas || perdidas >= maxVidas) {
      alert(
        "El juego ha terminado. Ganaste " +
        triunfos +
        " veces. Perdiste " +
        perdidas +
        " veces."
      );
    }
  }

  function jugar(usuarioChoice) {
    if (vidasJugador <= 0 || vidasComputadora <= 0) {
      return;
    }

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
      vidasComputadora--; // Restar una vida a la computadora
    } else {
      resultElement.textContent = "PERDISTE";
      perdidas++;
      vidasJugador--; // Restar una vida al jugador
    }

    winsElement.textContent = triunfos;
    lossesElement.textContent = perdidas;

    verificarFinDelJuego(); // Verificar si el juego debe detenerse
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