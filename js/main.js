// Funzione per aggiornare l'orologio
function updateClock() {
  const now = new Date(); // Oggetto Date per il momento corrente
  const targetDate = new Date("2023-08-27 09:30"); // Oggetto Date per la data target

  // Calcola la differenza tra le date in millisecondi
  const timeDifference = targetDate - now;

  // Calcola il numero di secondi rimanenti
  const secondsRemaining = Math.floor(timeDifference / 1000);

  // Calcola giorni, ore, minuti e secondi
  const days = Math.floor(secondsRemaining / (60 * 60 * 24));
  const hours = Math.floor((secondsRemaining % (60 * 60 * 24)) / (60 * 60));
  const minutes = Math.floor((secondsRemaining % (60 * 60)) / 60);
  const seconds = secondsRemaining % 60;

  document.getElementById("days").textContent = days < 10 ? "0" + days : days;
  document.getElementById("hours").textContent =
    hours < 10 ? "0" + hours : hours;
  document.getElementById("minutes").textContent =
    minutes < 10 ? "0" + minutes : minutes;
  document.getElementById("seconds").textContent =
    seconds < 10 ? "0" + seconds : seconds;
}

// Aggiorna l'orologio ogni secondo
setInterval(updateClock, 1000);

// Chiamata iniziale per evitare il ritardo iniziale
updateClock();
