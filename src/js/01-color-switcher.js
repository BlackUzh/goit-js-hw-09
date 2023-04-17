
const startBtn = document.querySelector("[data-start]")
const stopBtn = document.querySelector("[data-stop]")
const body = document.querySelector("body")

let intervalId = null;

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, 0)}`;
}


const onChangeColor = () => {
    startBtn.disabled = true
    stopBtn.disabled = false
    intervalId = setInterval(() => {
        body.style.backgroundColor = getRandomHexColor()
    }, 1000);
}

const offChangeColor = () => {
    clearInterval(intervalId)
    startBtn.disabled = false
    stopBtn.disabled = true
}

startBtn.addEventListener("click", onChangeColor);
stopBtn.addEventListener("click", offChangeColor)