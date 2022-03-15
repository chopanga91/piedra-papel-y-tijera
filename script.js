function computerPlay() {
    var items = ['piedra', 'papel', 'tijera'];
    var item = items[Math.floor(Math.random() * items.length)];
    console.log("La maquina escogio " + item + '!');
    return item
}
let puntJugador = 0
let puntajePC = 0

function playRound(playerSelection, computerSelection) {
    if (playerSelection.toLowerCase() === "piedra" & computerSelection === "tijera") {
        console.log("Ganaste! piedra mata tijera")
        puntJugador = puntJugador + 1;
    } else if (playerSelection.toLowerCase() === "piedra" & computerSelection === "papel") {
        console.log("Perdiste! papel gana a piedra")
        puntajePC = puntajePC + 1;
    } else if (playerSelection.toLowerCase() === "papel" & computerSelection === "tijera") {
        console.log("Perdiste! tijera mata a papel")
        puntajePC = puntajePC + 1;
    } else if (playerSelection.toLowerCase() === "papel" & computerSelection === "piedra") {
        console.log("Ganaste! papel mata a piedra")
        puntJugador = puntJugador + 1;
    } else if  (playerSelection.toLowerCase() === "tijera" & computerSelection === "piedra") {
        console.log("Perdiste! tijera pierde con piedra")
        puntajePC = puntajePC + 1;
    } else if  (playerSelection.toLowerCase() === "tijera" & computerSelection === "papel") {
            console.log("Ganaste! tijera mata a papel")
            puntJugador = puntJugador + 1;
    } else if  (playerSelection.toLowerCase() ===  computerSelection ) {
        console.log("Esto es un empate!");
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

game();
