const header = document.querySelector("#header");
header.innerHTML = "Could you join So Solid Crew?";

const intro = document.querySelector("#intro");
intro.innerHTML = "Start the timer. Rap the verse. If it takes you 21 seconds, you're in.";

const subHeader = document.querySelector("#sub-header");
subHeader.innerHTML = "You've got 21 seconds to go.";

const verse = document.querySelector("#verse");
verse.innerHTML = "I got 21 seconds to flow <br> I got 21 seconds to go <br> 'Cause if you like me lemme know <br> Let me in da studio <br> I got 21 seconds before I got to go <br> Did you see me on the video 'oh no' <br> Did you see me on the video 'oh no' <br> So if you like me lemme know <br> Let me in da studio <br> I got 21 seconds before I got to go <br> Did you see me on the video 'oh no' <br> Did you see me on the video 'oh no' <br> So if you like me lemme know <br> Let me in da studio <br> I got 21 seconds before I gotta go"
verse.style.display = "none";

const button = document.querySelector("#button");
button.innerHTML = "start";

const watch = document.querySelector("#stopwatch");
let millisecond = 0;
let timer;

function timeStart(){
    watch.style.color = "#ffc0cb";
    clearInterval(timer);
    timer = setInterval(() => {
        millisecond += 10;

        let dateTimer = new Date(millisecond);

        watch.innerHTML = 
        ('0'+dateTimer.getUTCMinutes()).slice(-2) + ':' +
        ('0'+dateTimer.getUTCSeconds()).slice(-2) + ':' +
        ('0'+dateTimer.getUTCMilliseconds()).slice(-3,-1);
      }, 10);
    }

function timeStopped() {
    watch.style.color = "red";
    clearInterval(timer);
    }

function timeReset(){
    setInterval(timer)
    millisecound = 0;
    watch.innerHTML = "00:00:00:00";
    }

button.addEventListener("click", (event) => {

    if (event.target.classList.contains("start")) timeStart();
})