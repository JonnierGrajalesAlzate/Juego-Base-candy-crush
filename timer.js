// ********************************
// ***Variable Settings of Timer***
// ********************************
let gameSeconds = 60;
let chronometer;
let chronometerBehind;
const gameTimeSpan = document.getElementById("gameTime");

// ********************
// ***End Game Alert***
// ********************
const endGame = () => {
    swal({
        title: "Fin de la partida",
        text: `¡Gracias por participar! Puntaje Final: ${score}`,
        closeOnClickOutside: false, 
            buttons: {
                end: {
                    text: "Finalizar la partida",
                    value: "end",
                    className: "btn-swal",
                },
                again: {
                    text: "Jugar de nuevo",
                    value: "again",
                    className: "btn-swal",
                },
            },
        })
        .then((value) => {
            switch (value) {
                case "again":
                    control.classList.add("display-none");
                    timer.classList.add("display-none");
                    board.classList.add("display-none");
                    clearBoard();
                    clearTimer();
                    clearScore();
                    gameLevel();
                    break;
                case "end":
                    window.close();
                    break;
            }
        });
}

// ********************
// ***Game Countdown***
// ********************
const gameCountdown = () => {
    if (!chronometer) {
        chronometer = setInterval(() => {
            let minutes = Math.floor(gameSeconds / 60);
            let seconds = (gameSeconds % 60);
            seconds = seconds < 10 ? "0" + seconds : seconds
            gameTimeSpan.innerHTML = `${minutes} : ${seconds}`
            hMatch(width);
            vMatch(width);
            descendItems(width);
            fill(width);
            gameSeconds--;
            if (gameSeconds == -1) {
                clearInterval(chronometer);
            }
        }, 1000);
    }
}

// ********************
// ***End Countdown***
// ********************
const endCountdown = () => (
    chronometerBehind = setTimeout(endGame, ((gameSeconds * 1000) + 1000))
)

