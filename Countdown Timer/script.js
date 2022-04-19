const $days = document.getElementById('days');
const $hours = document.getElementById('hours');
const $mins = document.getElementById('mins');
const $seconds = document.getElementById('seconds');

const newYear = '1 Jan 2023';

function countDown() {
    const newYearDate = new Date(newYear);
    const currentDate = new Date();

    const totalSeconds = Math.floor((newYearDate - currentDate) / 1000);

    const days = Math.floor(totalSeconds/3600/24);
    const hours =  Math.floor(totalSeconds/3600) % 24;
    const mins = Math.floor(totalSeconds/60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;

    $days.innerHTML = days;
    $hours.innerHTML = formatTime(hours);
    $mins.innerHTML = formatTime(mins);
    $seconds.innerHTML = formatTime(seconds);
}

function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}

countDown();

setInterval(countDown,1000);