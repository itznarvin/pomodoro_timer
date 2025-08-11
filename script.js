const minuteDisplay = document.getElementById('minutes')
const secondsDisplay = document.getElementById('seconds')
const startBtn = document.getElementById('start')
const pauseBtn = document.getElementById('pause')
const resetBtn = document.getElementById('reset')

let timer;
let timeLeft = 25 * 60;//25 minutes in seconds
let isRunning = false

// Function to update the timer display
function updateDisplay() {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;

minutesDisplay.textContent = String(minutes).padStart(2, '0');
secondsDisplay.textContent = String(seconds).padStart(2, '0');
}

//Function to start the timer
function startTimer() {
    if (isRunning) return;// Prevent multiple intervals 
    isRunning = true;

    timer = setInterval(() => {
        if (timeLeft > 0) {
            timeLeft--;
            updateDisplay(); 
        } else {
            clearInterval(timer);
            isRunning = false;
            alert("Time's up! Take a break. ")
        }
    }, 1000);
}

// Function to reset the timer
function resetTimer() {
    clearInterval(timer);
    timeLeft = 25 * 60;
    isRunning = false;
    updateDisplay();
}

// Button event listeners
startBtn.addEventListener('click', startTimer);
pauseBtn.addEventListener('click', pauseTimer);
resetBtn.addEventListener('click', resetTimer);

//Initial display setup
updateDisplay();