function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
};

const startButton = document.querySelector(`[data-start]`);
const stopButton = document.querySelector(`[data-stop]`);
const body = document.body;
let timer = null;

startButton.disabled = false;
stopButton.disabled = true;
//! вмикаємо зміну кольору
startButton.addEventListener('click', ()=> {
    timer = setInterval(() => { 
        const randomColor = getRandomHexColor();
        body.style.backgroundColor = randomColor;
        startButton.disabled = true;
        stopButton.disabled = false;
    }, 1000);
});
//! вимикаємо зміну кольору
stopButton.addEventListener('click', () => { 
    clearInterval(timer);
    startButton.disabled = false;
    stopButton.disabled = true;
});