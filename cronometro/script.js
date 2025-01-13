// Selecionar os elementos do DOM
const timerDisplay = document.getElementById("timer");
const startButton = document.getElementById("start");
const stopButton = document.getElementById("stop");
const resetButton = document.getElementById("reset");

// Variáveis para controle do tempo
let seconds = 0;
let intervalId = null;

// Função para formatar o tempo no formato MM:SS
function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  return `${String(minutes).padStart(2, "0")}:${String(remainingSeconds).padStart(2, "0")}`;
}

// Função para atualizar o display do cronômetro
function updateTimerDisplay() {
  timerDisplay.textContent = formatTime(seconds);
}

// Iniciar o cronômetro
function startTimer() {
  // Evitar múltiplos intervalos
  if (intervalId) return;

  // Iniciar um intervalo que incrementa os segundos a cada 1 segundo
  intervalId = setInterval(() => {
    seconds++;
    updateTimerDisplay();
  }, 1000);
}

// Parar o cronômetro
function stopTimer() {
  clearInterval(intervalId);
  intervalId = null; // Redefinir o ID do intervalo
}

// Resetar o cronômetro
function resetTimer() {
  stopTimer();
  seconds = 0;
  updateTimerDisplay();
}

// Adicionar eventos aos botões
startButton.addEventListener("click", startTimer);
stopButton.addEventListener("click", stopTimer);
resetButton.addEventListener("click", resetTimer);

// Inicializar o cronômetro com 0
updateTimerDisplay();
