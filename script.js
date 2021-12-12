const dayId = document.querySelector("#day");
const hourId = document.querySelector("#hour");
const minuteId = document.querySelector("#minute");
const secondId = document.querySelector("#second");


const countDown = () => {
    /* ============================ */
    const newYear = new Date('February 1, 2022 23:59:59').getTime();
    const toDay = new Date().getTime();
    const gap = newYear - toDay;

    /* ============================= */
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    /* ============================= */
    const newDay = Math.floor(gap / day);
    const newHour = Math.floor((gap % day) / hour);
    const newMinute = Math.floor((gap % hour) / minute);
    const newSecond = Math.floor((gap % minute) / second);

    /* ============================= */
    dayId.innerHTML = newDay;
    hourId.innerHTML = newHour;
    minuteId.innerHTML = newMinute;
    secondId.innerHTML = newSecond;
}

/* ============= Render UI ============ */
// setInterval(() => {
//     countDown();
// }, 1000);

// function animateFlip(element, value) {
//     element.innerHTML = value;

//     gsap.to(element.querySelector)
// }
