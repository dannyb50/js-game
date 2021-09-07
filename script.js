// const submit = document.querySelector("#name-submit");

// submit.addEventListener("click", (event) => {
//     const name = document.querySelector("#name-input").value;
// // //     const header = document.querySelector("#question__header");
// // //     header.innerHTML = `Hello ${name}, would you like to join <span class="brand"> So Solid Crew </span>?`;
// // //     event.preventDefault();
//     if (name === "") {
//       alert("Please enter your name")
//     };
// });

// function to add player name and ask a question when entered

const handleClick = (event) => {
  const name = document.querySelector("#name-input").value;
  const header = document.querySelector("#question__header");
  const proceedToGame = document.querySelector("#question__button");
  if (name === "") {
    alert("Please enter your name")
    };
  if (name) {
    proceedToGame.innerHTML = "Yes please";
    header.innerHTML = `Hello ${name}, would you like to join <span class="brand"> So Solid Crew </span>?`;
    event.preventDefault();
    }
  }

const intro = document.querySelector("#game__intro");
intro.innerHTML = "Ok then. <br><br> Start the timer and rap the verse. <br> If it takes you 21.0 seconds, you're in.";

const subHeader = document.querySelector("#game__sub-header");
subHeader.innerHTML = "You've got 21 seconds to go.";

const verse = document.querySelector("#game__play__verse");
verse.innerHTML = "I got 21 seconds to flow <br> I got 21 seconds to go <br> 'Cause if you like me lemme know <br> Let me in da studio <br> I got 21 seconds before I got to go <br> Did you see me on the video 'oh no' <br> Did you see me on the video 'oh no' <br> So if you like me lemme know <br> Let me in da studio <br> I got 21 seconds before I got to go <br> Did you see me on the video 'oh no' <br> Did you see me on the video 'oh no' <br> So if you like me lemme know <br> Let me in da studio <br> I got 21 seconds before I gotta go"
verse.style.display = "none";

const button = document.querySelector("#game__play__button");
button.innerHTML = "Start";

const watch = document.querySelector("#game__play__stopwatch");

const time = document.querySelector("#game__play__stopwatch__time");

// stopwatch

let currentTime = 0;
let trackerCount = 0;

let timer;

// start watch

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

// stop the watch

function stopTimer() {
	clearInterval(timer);
	button.innerHTML = "Try again";
}

// reset the watch

function resetTimer() {
	currentTime = 0;
	currentTime = currentTime.toFixed(1);
	time.innerHTML = currentTime;
	button.innerHTML = "Start";
}

// function for when to display the verse or timer, and start/stop/reset button display

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

    // result function for what to display depending on stopped time

    const name = document.querySelector("#name-input").value;

    if (time.innerHTML === "21.0") {
        subHeader.innerHTML = `<span class="brand">Congratulations ${name}! You are the newest member of So Solid Crew!</span>`;
    } else if (time.innerHTML === "20.6" ||
      time.innerHTML === "20.7" ||
      time.innerHTML === "20.8" ||
      time.innerHTML === "20.9" ||
      time.innerHTML === "21.1" ||
      time.innerHTML === "21.2" ||
      time.innerHTML === "21.3" ||
      time.innerHTML === "21.4") {
        subHeader.innerHTML = `<span class="brand">Unlucky ${name}. That was close, but not close enough.</span>`
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
        subHeader.innerHTML = `<span class="brand">More like "So Weak Crew".</span>`
    } else {
      subHeader.innerHTML = `<span class="brand">Well, that was embarrassing.</span>`
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
