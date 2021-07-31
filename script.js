const header = document.querySelector("#header");
header.innerHTML = "So you want to join So Solid Crew?";

const intro = document.querySelector("#intro");
intro.innerHTML = "Start the timer. Rap the verse. If it takes you 21 seconds, you're in.";

const subHeader = document.querySelector("#sub-header");
subHeader.innerHTML = "You've got 21 seconds to go.";

// const result = document.querySelector("#result");
// result.innerHTML = "";
// result.style.display = "none";

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
    watch.innerHTML = "00:00:00";
    }

button.addEventListener("click", (event) => {
    if (event.target.classList.contains("ready")) {
        timeStart();
        event.target.classList.remove("ready");
        event.target.classList.add("running");
        button.innerHTML = "stop";
        watch.style.display="none";
        verse.style.display="block";
    } else if (event.target.classList.contains("running")) {
        timeStopped();
        event.target.classList.remove("running");
        event.target.classList.add("stopped");
        button.innerHTML = "reset";
        watch.style.display="block";
        verse.style.display="none";
        // subHeader.style.display="none";
        // result.style.display="block";
        if (watch.innerHTML === "00:20:90" || "00:20:91" || "00:20:92" || "00:20:93" || "00:20:94" || "00:20:95" || "00:20:96" || "00:20:97" || "00:20:98" || "00:20:99" || "00:21:00" || "00:21:01" || "00:21:02" || "00:21:03" || "00:21:04" || "00:21:05" || "00:21:06" || "00:21:07" || "00:21:08" || "00:21:09" || "00:21:10") {
            subHeader.innerHTML = "You are now in So Solid Crew."
        } else {
            subHeader.innerHTML = "You can be part of So Weak Crew."
        }
    } else {
        timeReset();
        event.target.classList.remove("stopped");
        event.target.classList.add("ready");
        button.innerHTML = "start";
        // subHeader.style.display="block";
        // result.style.display="none";
        subHeader.innerHTML = "You've got 21 seconds to go.";
    }
})

// if (watch.innerHTML === "00:20:90" || "00:20:91" || "00:20:92" || "00:20:93" || "00:20:94" || "00:20:95" || "00:20:96" || "00:20:97" || "00:20:98" || "00:20:99" || "00:21:00" || "00:21:01" || "00:21:02" || "00:21:03" || "00:21:04" || "00:21:05" || "00:21:06" || "00:21:07" || "00:21:08" || "00:21:09" || "00:21:10") {
//     subHeader.innerHTML = "You are now in So Solid Crew."
// } else {
//     subHeader.innerHTML = "You can be part of So Weak Crew."
// }