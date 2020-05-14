class Clock {
    constructor() {
        const timeElem = document.querySelector('.momentum-clock-time');
        const parse24 = time => (time > 9) ? time : `0${time}`;
        const getRealTime = () => {
            const date = new Date(),
                hour = date.getHours(),
                minute = date.getMinutes(),
                second = date.getSeconds();

            return `${ parse24(hour) }:${ parse24(minute) }:${ parse24(second) }`;
        }
        const setClockTime = () => timeElem.textContent = getRealTime();

        setClockTime();
        setInterval(setClockTime, 1000);
    }
}

export default Clock; 
