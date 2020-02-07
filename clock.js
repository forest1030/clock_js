const clockConTainer = document.querySelector(".js-clock");
const clockTitle = clockConTainer.querySelector(".js-title") //js-clock의 자식을 가져오기

function currentTime(){
    const date = new Date();
    const hoursIn = date.getHours();
    const mins = date.getMinutes();
    const secon = date.getSeconds();


    const Hour = `${hoursIn < 10 ? `0${hoursIn}` : hoursIn}`;
    const Min = `${mins < 10 ? `0${mins}`: mins}`;
    const Sec = `${secon < 10 ? `0${secon}` : secon}`;

    clockTitle.innerHTML = `${Hour}h ${Min}m ${Sec}s`;

}

function init(){
    currentTime();
    setInterval(currentTime, 1000);
}

init();