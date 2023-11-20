'use strict';

let lastAlarmMessage = '';

function updateClock() {
    let now = new Date();
    let hours = now.getHours().toString().padStart(2, '0');
    let minutes = now.getMinutes().toString().padStart(2, '0');
    let timeString = hours + ':' + minutes;
    document.getElementById('clock').innerText = timeString;

    let alarmHour = document.getElementById('hour').value;
    let alarmMinute = document.getElementById('minute').value;

    if (lastAlarmMessage !== '' && hours === alarmHour && minutes === alarmMinute) {
        document.getElementById('alarmStatus').innerHTML = lastAlarmMessage;
        document.getElementById('alarmStatus').style.color = 'green';
        document.getElementById('alarmSound').play();
    } else if (lastAlarmMessage !== '') {
        document.getElementById('alarmStatus').innerHTML = lastAlarmMessage;
        document.getElementById('alarmStatus').style.color = 'white';
    } else {
        document.getElementById('alarmStatus').innerText = '';
    }
}

function setAlarm() {
    let alarmHour = document.getElementById('hour').value;
    let alarmMinute = document.getElementById('minute').value;

    let now = new Date();
    let currentHour = now.getHours().toString().padStart(2, '0');
    let currentMinute = now.getMinutes().toString().padStart(2, '0');

    if (alarmHour === currentHour && alarmMinute === currentMinute) {
        document.getElementById('alarmStatus').innerText = 'Alarm time is the same as the current time, Choose a different time.';
        document.getElementById('alarmStatus').style.color = 'red';
        return;
    }

    if (alarmHour < 0 || alarmHour > 23 || alarmMinute < 0 || alarmMinute > 59) {
        document.getElementById('alarmStatus').innerText = 'Invalid input.';
        document.getElementById('alarmStatus').style.color = 'red';
        return;
    }

    lastAlarmMessage = '<i class="fa-solid fa-bell"></i>' + ' ' + alarmHour.padStart(2, '0') + ':' + alarmMinute.padStart(2, '0');
    document.getElementById('alarmStatus').style.color = 'white';
}

setInterval(updateClock, 1000);
