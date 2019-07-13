function toggleClass() {
  const addressNode = document.querySelector("#livingaddress");
  if (addressNode.classList.contains("blue")) {
    addressNode.classList.replace("blue", "red");
  } else {
    addressNode.classList.replace("red", "blue");
  }
}

let red = 0;
let blue = 255;
let redToBlue = true;
function animatedToggleColor() {
  if (redToBlue && blue === 255) {
    redToBlue = false;
  } else if (!redToBlue && red === 255) {
    redToBlue = true;
  }

  if (redToBlue) {
    red--;
    blue++;
  } else {
    red++;
    blue--;
  }

  const addressNode = document.querySelector("#livingaddress");
  const colorString = "rgb(" + red + ",0," + blue + ")";
  addressNode.style.color = colorString;
}

let animationStartTime = null;
let interval = null;

function stopAnimation() {
  clearInterval(interval);
  interval = null;
}

function buttonClickHandler() {
  animationStartTime = Date.now();
  if (interval === null) {
    interval = setInterval(animatedToggleColor, 1);
    setTimeout(stopAnimation, 6000);
  } else {
    stopAnimation();
  }
}

const button = document.querySelector("#colortoggler");
button.addEventListener("click", buttonClickHandler);
