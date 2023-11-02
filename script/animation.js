// Constants
const rocketAnimationElement = document.getElementById("rocket-animation");
const templateFrame = [
  " --------------- ",
  "--------^--------",
  "-------/ \\-------",
  "------/   \\------",
  "------|   |------",
  "------|   |------",
  "------|   |------",
  "------|   |------",
  "-----/|   |\\-----",
  "----/_|   |_\\----",
  "------\\___/------",
  "-------101-------",
  "-------*2*-------",
  "--------3--------",
  " --------------- "
].join("\n");
const templateLength = templateFrame.length;
const exhaustChars = ['@','#','$','%','&'];
const charNum = exhaustChars.length;
const sparkCount = 3; // number of sparks
const timeInterval = 200; // time between animations [milliseconds]

// Functions
function getExhaustChars(stepNum) {
  const chars = [];
  for (let i = 0; i < charNum; i++) {
    let index = stepNum - 1 - i;
    if (index < 0) {
      index = index + charNum;
    }
    chars[i] = exhaustChars[index];
  }
  return chars;
}

function getSparkIndices() {
  const indices = [];
  for (let i = 0; i < sparkCount; i++) {
    indices[i] = Math.floor(Math.random() * templateLength);
  }
  return indices;
}

// Animation
let rocketFrame;
let chars;
let regex;
let sparkIndices;
let sparkIndex;
var step = 1;
function animateRocket() {
  rocketFrame = templateFrame; // reset animation

  // Insert exhaust characters
  chars = getExhaustChars(step);
  for (let i = 0; i < charNum; i++) {
    regex = new RegExp("[" + i.toString() + "]","g");
    rocketFrame = rocketFrame.replace(regex, chars[i]);
  }

  // Insert sparks
  sparkIndices = getSparkIndices();
  for (let i = 0; i < sparkCount; i++) {
    let sparkIndex = sparkIndices[i];
    if (rocketFrame[sparkIndex] == "-" && step == charNum) { // TODO: implemet incremental sparks
      rocketFrame = rocketFrame.slice(0, sparkIndex) +
                    "+" +
                    rocketFrame.slice(sparkIndex + 1, templateLength);
    } 
  }

  rocketAnimationElement.innerHTML = rocketFrame; // update animation

  step == charNum ? step = 1 : step = step + 1; // increment step
}

setInterval(animateRocket, timeInterval); // set animation interval