// create watch
let strap = document.createElement("div");
strap.className = "strap";

let watch = document.createElement("div");
watch.className = "watch";

let watchImage = document.createElement("img");
watchImage.src = "images/watch.png";
watchImage.alt = "watch image";
watch.appendChild(watchImage);

let hourHand = document.createElement("div");
hourHand.id = "hour";
hourHand.className = "hand";
watch.appendChild(hourHand);

let minHand = document.createElement("div");
minHand.id = "minute";
minHand.className = "hand";
watch.appendChild(minHand);

let secHand = document.createElement("div");
secHand.id = "second";
secHand.className = "hand";
watch.appendChild(secHand);

strap.appendChild(watch);
document.body.appendChild(strap);

// Get the hands
let hour = document.getElementById("hour");
let minute = document.getElementById("minute");
let seconds = document.getElementById("second");

// Function to update clock hands
function updateClock() {
    let dateNow = new Date();

    let hr = dateNow.getHours();
    let min = dateNow.getMinutes();
    let sec = dateNow.getSeconds();

    let calcHr = hr * 30 + min / 2;
    let calcMin = min * 6;
    let calcSec = sec * 6;

    hour.style.transform = `translate(-50%, -100%) rotate(${calcHr}deg)`;
    minute.style.transform = `translate(-50%, -100%) rotate(${calcMin}deg)`;
    seconds.style.transform = `translate(-50%, -100%) rotate(${calcSec}deg)`;
}

setInterval(updateClock, 1000);
updateClock();
