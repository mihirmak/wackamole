function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        seconds = parseInt(timer % 60, 10);
        seconds = seconds < 10 ? "0" + seconds : seconds;
        display.textContent =seconds;

        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);
}

window.onload = function () {
    var timeInSeconds = 59,
        display = document.querySelector('#time');
    startTimer(timeInSeconds, display);
};
