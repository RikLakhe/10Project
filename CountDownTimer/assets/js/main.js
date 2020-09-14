const count = document.querySelector(".count-timer");
const startButton = document.querySelector("#start-button");
const stopButton = document.querySelector("#stop-button");
const addButton = document.querySelector("#add-button");
const reduceButton = document.querySelector("#reduce-button");

var t;
count.innerHTML = "0:0";
let min = 0
let second = 0

addButton.addEventListener('click', function () {
    min += 1;
    count.innerHTML = min + ":" + second;
})

reduceButton.addEventListener('click', function () {
    if (min > 10) {
        min -= 1;
    } else {
        min = 0;
    }
    count.innerHTML = min + ":" + second;
})

startButton.addEventListener('click',
    function () {
        startButton.classList.add('d-none')
        stopButton.classList.remove('d-none')
        timerFunction();
    }
);

stopButton.addEventListener('click',
    function () {
        startButton.classList.remove('d-none')
        stopButton.classList.add('d-none')
        timerFunctionStop();
    }
);

const timerFunction = () =>{
    t = window.setInterval(function () {
        if (min === 0 && second === 0) {
            count.innerHTML = "Times up!!";
            clearInterval(t);
            startButton.classList.remove('d-none')
            stopButton.classList.add('d-none')
        } else {
            if (second === 0) {
                second = 59;
                min -= 1;
            } else {
                second -= 1;
            }
            count.innerHTML = min + ":" + second;
        }

    }, 1000)
}

const timerFunctionStop = ()=>{
    clearInterval(t);
}
