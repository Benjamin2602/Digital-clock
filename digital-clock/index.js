const hourEl = document.getElementById("hour");
const minuteEl = document.getElementById("minute");
const secondEl = document.getElementById("second");
const ampmEl = document.getElementById("ampm");

const updateClock = () => {
    let h = new Date().getHours()
    let m = new Date().getMinutes()
    let s = new Date().getSeconds()

    // if hour is greater than 12 then subtract 12 from it
    let ampm = h >= 12 ? 'PM' : 'AM'

    // if hour is lesser than 10 then add 0 before it

    h = h<10 ? '0' + h : h
    m = m<10 ? '0' + m : m
    s = s<10 ? '0' + s : s


    hourEl.innerText =h
    minuteEl.innerText = m
    secondEl.innerText = s
    ampmEl.innerText = ampm

    // updating the current time with setTimeout with 1000ms means 1 second
    //time changes every 1 second

    setTimeout(() => {
        updateClock()
    }, 1000)
}

updateClock();