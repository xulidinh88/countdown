const months = [
	"January",
	"February",
	"March",
	"April",
	"May",
	"June",
	"July",
	"August",
	"September",
	"October",
	"November",
	"December",
];
const weekdays = [
	"Sunday",
	"Monday",
	"Tuesday",
	"Wednesday",
	"Thursday",
	"Friday",
	"Saturday",
];
const oneDay = 86400000;
const oneHour = 3600000;
const oneMinute = 60000;
const oneSecond = 1000;

const deadline = document.querySelector(".deadline");
const items = document.querySelectorAll(".deadline-format h4");

let futureDate = new Date(2025, 0, 1, 0, 0, 0);
const futureTime = futureDate.getTime();

function getRemainingTime() {
	const today = new Date().getTime();
	const t = futureTime + 1000 - today; // mili seconds
	let days = t / oneDay;
	days = Math.floor(days);
	let hours = Math.floor((t % oneDay) / oneHour);
	let minutes = Math.floor((t % oneHour) / oneMinute);
	let seconds = Math.floor((t % oneMinute) / oneSecond);
	let values = [days, hours, minutes, seconds];

    function format (item) {
        return (item < 10) ? `0${item}` : item;
    }
    items.forEach(function (item, index) {
        item.innerHTML = format(values[index])
    })
    if(t < 0) {
        clearInterval(countdown)
        values = [0, 0, 0, 0];
        items.forEach(function (item, index) {
            item.innerHTML = format(values[index])
        })
    }
}
let countdown = setInterval(getRemainingTime, 1000)
getRemainingTime();
