function computerPlay() {
    var items = ['piedra', 'papel', 'tijera'];
    var item = items[Math.floor(Math.random() * items.length)];
    console.log("La maquina escogio " + item + '!');
    return item
}
let puntJugador = 0
let puntajePC = 0

//mostrar recuadro donde este el resultado





const display = document.getElementsByClassName('display');

function playRound(playerSelection, computerSelection) {
    if (playerSelection.toLowerCase() === "piedra" & computerSelection === "tijera") {
        display[0].innerHTML = "Ganaste! piedra mata tijera";
        puntJugador = puntJugador + 1;
    } else if (playerSelection.toLowerCase() === "piedra" & computerSelection === "papel") {
         display[0].innerHTML = "Perdiste! papel gana a piedra"
        puntajePC = puntajePC + 1;
    } else if (playerSelection.toLowerCase() === "papel" & computerSelection === "tijera") {
         display[0].innerHTML = "Perdiste! tijera mata a papel"
        puntajePC = puntajePC + 1;
    } else if (playerSelection.toLowerCase() === "papel" & computerSelection === "piedra") {
         display[0].innerHTML = "Ganaste! papel mata a piedra"
        puntJugador = puntJugador + 1;
    } else if  (playerSelection.toLowerCase() === "tijera" & computerSelection === "piedra") {
         display[0].innerHTML = "Perdiste! tijera pierde con piedra"
        puntajePC = puntajePC + 1;
    } else if  (playerSelection.toLowerCase() === "tijera" & computerSelection === "papel") {
             display[0].innerHTML = "Ganaste! tijera mata a papel"
            puntJugador = puntJugador + 1;
    } else if  (playerSelection.toLowerCase() ===  computerSelection ) {
         display[0].innerHTML = "Esto es un empate!";
    }
}
function game() {
    for (let i = 0; i < 5; i++) {
        playerSelection= prompt("Elije piedra papel o tijera");
        computerSelection = computerPlay();
        playRound(playerSelection, computerSelection);
        console.log("Esta fue la ronda " + i+1 + ". El puntaje es. Jugador: " + puntJugador + ". Maquina: " + puntajePC);
     }
     if (puntJugador > puntajePC) {
         console.log("Ganaste la partida! " + puntJugador + " a " + puntajePC);
     } else if (puntajePC > puntJugador) {
        console.log("Perdiste ! " + puntJugador + " a " + puntajePC);
     }

}

boton = document.getElementsByClassName('btn');
boton[0].addEventListener('click', jugarPiedra);
function jugarPiedra() {
    return playRound('piedra', computerPlay());
}

boton[1].addEventListener('click', jugarPapel);
function jugarPapel() {
    return playRound('papel', computerPlay());
}

boton[2].addEventListener('click', jugarTijera);
function jugarTijera() {
    return playRound('tijera', computerPlay());
}
//game();
