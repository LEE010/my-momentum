const timeElem = document.querySelector('.clock-time');

const parseTime = time => (time > 9) ? time : `0${time}`;

const getRealTime = () => {
    const date = new Date(),
        hour = date.getHours(),
        minute = date.getMinutes(),
        second = date.getSeconds();

    return `${ parseTime(hour) }:${ parseTime(minute) }:${ parseTime(second) }`;
};

const setClockTime = () => timeElem.textContent = getRealTime();

export default () => {
    setClockTime();
    setInterval(setClockTime, 1000);
}; 
