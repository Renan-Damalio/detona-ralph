const windows = document.querySelectorAll(".window");
const scoreEl = document.getElementById("score");
const timeEl = document.getElementById("time");
const startBtn = document.getElementById("start");

let score = 0;
let time = 30;
let currentIndex = null;
let timer;
let ralphTimer;

// Escolhe uma janela aleatória para o Ralph aparecer
function showRalph() {
  windows.forEach(w => w.classList.remove("ralph"));

  const index = Math.floor(Math.random() * 9);
  currentIndex = index;
  windows[index].classList.add("ralph");
}

// Quando clicar em Ralph → +1 ponto
windows.forEach((window, index) => {
  window.addEventListener("click", () => {
    if (index === currentIndex) {
      score++;
      scoreEl.textContent = score;
      window.classList.remove("ralph");
    }
  });
});

// Contagem regressiva
function countdown() {
  time--;
  timeEl.textContent = time;

  if (time <= 0) {
    clearInterval(timer);
    clearInterval(ralphTimer);
    windows.forEach(w => w.classList.remove("ralph"));
    alert(`Fim de jogo!\nSua pontuação: ${score}`);
  }
}

// Iniciar Jogo
startBtn.addEventListener("click", () => {
  score = 0;
  time = 30;
  scoreEl.textContent = score;
  timeEl.textContent = time;

  clearInterval(timer);
  clearInterval(ralphTimer);

  timer = setInterval(countdown, 1000);
  ralphTimer = setInterval(showRalph, 700);

  showRalph();
});
