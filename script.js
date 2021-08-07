const nameForm = document.querySelector("#name-form")

nameForm.addEventListener("submit", (event) => {
    const name = document.querySelector("#name-input").value;
    const header = document.querySelector("#question__header");
    header.innerHTML = `Hello ${name}, would you like to join So Solid Crew?`;
    event.preventDefault();
    });

const intro = document.querySelector("#game__intro");
intro.innerHTML = "Ok then. <br> Start the timer and rap the verse. <br> If it takes you 21.0 seconds, you're in.";

const subHeader = document.querySelector("#game__sub-header");
subHeader.innerHTML = "You've got 21 seconds to go.";

const verse = document.querySelector("#game__verse");
verse.innerHTML = "I got 21 seconds to flow <br> I got 21 seconds to go <br> 'Cause if you like me lemme know <br> Let me in da studio <br> I got 21 seconds before I got to go <br> Did you see me on the video 'oh no' <br> Did you see me on the video 'oh no' <br> So if you like me lemme know <br> Let me in da studio <br> I got 21 seconds before I got to go <br> Did you see me on the video 'oh no' <br> Did you see me on the video 'oh no' <br> So if you like me lemme know <br> Let me in da studio <br> I got 21 seconds before I gotta go"
verse.style.display = "none";

const button = document.querySelector("#game__button");
button.innerHTML = "start";

const watch = document.querySelector("#game__stopwatch");

const time = document.querySelector("#game__time");

let currentTime = 0;
let trackerCount = 0;

let timer;

function startTimer() {
	timer = setInterval(() => {
		currentTime++;

		let minutes = Math.floor(currentTime / 100 / 60);
		let seconds = currentTime / 100 - minutes * 60;
		let finalTime = `${minutes}:${seconds < 10 ? 0 : ""}${seconds.toFixed(1)}`;
		time.innerHTML = minutes > 0 ? finalTime : seconds.toFixed(1);
	}, 10);
	button.innerHTML = "Stop";
}

function stopTimer() {
	clearInterval(timer);
	button.innerHTML = "Try again";
}

function resetTimer() {
	currentTime = 0;
	currentTime = currentTime.toFixed(1);
	time.innerHTML = currentTime;
	button.innerHTML = "Start";
}


button.addEventListener("click", (event) => {

  if (event.target.classList.contains("ready")) {
    startTimer();
    event.target.classList.remove("ready");
    event.target.classList.add("running");
    watch.style.display="none";
    verse.style.display="block";
  }

  else if (event.target.classList.contains("running")) {
    stopTimer();
    event.target.classList.remove("running");
    event.target.classList.add("stopped");
    watch.style.display="block";
    verse.style.display="none";

    console.log(time.innerHTML);

    // Coaches - Why do I have to declare name again here as well as on line 4?
    const name = document.querySelector("#name-input").value;

    if (time.innerHTML === "21.0") {
        subHeader.innerHTML = `Congratulations ${name}! You are the newest member of So Solid Crew!`;
    } else if (time.innerHTML === "20.6" ||
      time.innerHTML === "20.7" ||
      time.innerHTML === "20.8" ||
      time.innerHTML === "20.9" ||
      time.innerHTML === "21.1" ||
      time.innerHTML === "21.2" ||
      time.innerHTML === "21.3" ||
      time.innerHTML === "21.4") {
        subHeader.innerHTML = `Unlucky ${name}. That was close, but not close enough.`
    }
    else if (time.innerHTML === "20.1" ||
      time.innerHTML === "20.2" ||
      time.innerHTML === "20.3" ||
      time.innerHTML === "20.4" ||
      time.innerHTML === "20.5" ||
      time.innerHTML === "21.5" ||
      time.innerHTML === "21.6" ||
      time.innerHTML === "21.7" ||
      time.innerHTML === "21.8" ||
      time.innerHTML === "21.9") {
        subHeader.innerHTML = `More like So Weak Crew.`
    } else {
      subHeader.innerHTML = `Well, that was embarrassing.`
    }
  }

  else if (event.target.classList.contains("stopped")) {
    resetTimer();
    event.target.classList.remove("stopped");
    event.target.classList.add("ready");
    watch.style.display="block";
    verse.style.display="none";
    subHeader.innerHTML = "You've got 21 seconds to go.";
  }
});
