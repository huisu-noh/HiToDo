const clockTitle = document.querySelector(".clock-main")



function clock(){
    const date = new Date();
    const month = date.getMonth();
    const clockDate = date.getDate();
    const day = date.getDay();
    const week = ["Sun", "Mon", "Tue", "Wen", "Thu", "Fri", "Sat"];
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();

    clockTitle.innerText = `${month + 1}월 ${clockDate}일 ${week[day]}` + 
    ` ${hours < 10 ? `0${hours}` : hours} : ${
        minutes < 10 ? `0${minutes}` : minutes} : ${
        seconds < 10 ? `0${seconds}` : seconds}`;
}

function init(){
    clock();
    setInterval(clock, 1000);
}


init();