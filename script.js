let num = 0;
let den = 0;
let streak = 0;
let myVariable = 20;
const mySlider = document.getElementById("mySlider");
const sliderValueDisplay = document.getElementById("sliderValue");
let skateLeft = document.getElementById("skateLeft");
let skateRight = document.getElementById("skateRight");

mySlider.addEventListener("input", function () {
  myVariable = parseInt(mySlider.value);
  sliderValueDisplay.textContent = myVariable;
  console.log("myVariable is now: " + myVariable);
});

function randomize() {
  num = Math.floor(Math.random() * (myVariable - 1)) + 2;
  den = Math.floor(Math.random() * (myVariable - 1)) + 2;
}
function draw() {
  document.getElementById("question1").innerHTML = num;
  document.getElementById("question2").innerHTML = den;
}
function generateProblem() {
  prenum = num;
  randomize();
  while (num % den != 0 || num == den) {
    randomize();
  }
  draw();
}
const defaults = {
  spread: 360,
  ticks: 50,
  gravity: 0,
  decay: 0.94,
  startVelocity: 30,
  shapes: ["star"],
  colors: ["FFE400", "FFBD00", "E89400", "FFCA6C", "FDFFB8"],
};
function handleSubmit() {
  var ans = document.getElementById("ans").value;
  if (ans == num / den) {
    document.getElementById("tell").innerHTML =
      "You got " + num + " ÷ " + den + " right!";
    streak += 1;

    if (!document.getElementById("skateLeft").classList.contains("animated")) {
      document.getElementById("skateLeft").classList.add("animated");
      document.getElementById("skateRight").classList.add("animated");

      setTimeout(() => {
        document.getElementById("skateLeft").classList.remove("animated");
        document.getElementById("skateRight").classList.remove("animated");
        if (streak >= 5) {
          skateLeft.style.fontSize = 90 + "px";
          skateRight.style.fontSize = 90 + "px";
          skateLeft.style.color = "red";
          skateRight.style.color = "red";
        }
        if (streak >= 10) {
          skateLeft.style.fontSize = 110 + "px";
          skateRight.style.fontSize = 110 + "px";
          skateLeft.style.color = "white";
          skateRight.style.color = "white";
        }
        if (streak >= 20) {
          skateLeft.style.fontSize = 50 + "px";
          skateRight.style.fontSize = 50 + "px";
          skateLeft.style.color = "blue";
          skateRight.style.color = "blue";
        }
        if (streak < 5) {
          skateLeft.style.fontSize = 75 + "px";
          skateRight.style.fontSize = 75 + "px";
          skateLeft.style.color = "black";
          skateRight.style.color = "black";
        }
      }, 7000);
    }
  } else {
    document.getElementById("tell").innerHTML =
      "Sorry, you got it wrong. The answer was " + num / den;
    streak = 0;
  }
  document.getElementById("streak").innerHTML = "Streak: " + streak;
  generateProblem();
}

generateProblem();
