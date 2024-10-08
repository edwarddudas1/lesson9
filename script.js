const countDownEl = document.querySelector(".timer");
console.log(countDownEl);
let time = 3600;

setInterval(updateCountDown, 1000);

function updateCountDown() {
    const minutes = Math.floor(time / 60);
    let seconds = time % 60;
    seconds = seconds < 10 ? "0" + seconds: seconds;
    if(minutes == 300){
        alert("Вже 30 хвилин пройшло!!")
    }
    countDownEl.innerHTML = `${minutes}:${seconds}`;
    time--;
}












// const startTimer = document.querySelector('.button-start')
// const stopTimer = document.querySelector('.button-stop')
// const resetTimer = document.querySelector('.button-reset')

// let timer = 1;
// let elapsedTime = 0;
// function formatTime(){
//     const totalSeconds = Math.floor(elapsedTime / 1000);
//     const hours = Math.floor(totalSeconds / 3600);
//     const minutes = Math.floor((totalSeconds % 3600) / 60);
//     const seconds = totalSeconds % 60;

    
//     console.log(`${hours}:${minutes}:${seconds}`);
// }
// formatTime()
// function startTimer(){
//     let startTime = Date.now();
//     console.log(startTime);
// }
// startTimer()