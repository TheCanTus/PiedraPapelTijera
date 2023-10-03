/*function aleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

function eleccion(jugada) {
  let resultado = ""
  if(jugada == 1) {
    resultado = "Piedra 🪨"
  } else if (jugada == 2) {
    resultado = "Papel 📃"
  } else if (jugada == 3) {
    resultado = "Tijera ✂️"
  } else {
    resultado = "MAL ELEGIDO"
  }
  return resultado
}

// 1 es piedra, 2 es papel, 3 es tijera
let jugador = 0
let pc = 0
let triunfos = 0
let perdidas = 0

while (triunfos < 3 && perdidas < 3) {
  pc = aleatorio(1,3)
  jugador = prompt("Elige: 1 para piedra, 2 para papel, 3 para tijera")
  // alert("Elegiste " + jugador)

  alert("PC elige " + eleccion(pc))
  alert("Tú eliges " + eleccion(jugador))
  
  // COMBATE
  if (pc == jugador) {
    alert("EMPATE")
  } else if (jugador == 1 && pc == 3) {
    alert("GANASTE")
    triunfos = triunfos + 1
  } else if (jugador == 2 && pc == 1) {
    alert("GANASTE")
    triunfos = triunfos + 1
  } else if (jugador == 3 && pc == 2) {
    alert("GANASTE")
    triunfos = triunfos + 1
  } else {
    alert("PERDISTE")
    perdidas = perdidas + 1
  }
}

alert("Ganaste " + triunfos + " veces. Perdiste " + perdidas + " veces.")
*/
document.addEventListener("DOMContentLoaded", function () {
  let jugador = 0;
  let pc = 0;
  let triunfos = 0;
  let perdidas = 0;

  const rockButton = document.getElementById("rock");
  const paperButton = document.getElementById("paper");
  const scissorsButton = document.getElementById("scissors");
  const resultElement = document.getElementById("result");
  const winsElement = document.getElementById("wins");
  const lossesElement = document.getElementById("losses");

  function aleatorio(min, max) {
      return Math.floor(Math.random() * (max - min + 1) + min);
  }

  function eleccion(jugada) {
    let resultado = ""
    if(jugada == 1) {
      resultado = "Piedra 🪨"
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

      alert("PC elige " + eleccion(pcChoice));
      alert("Tú eliges " + resultado);

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
