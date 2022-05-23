let rocketAnimationElement = document.getElementById("rocket-animation");
let templateFrame = [
  " ------------- ",
  "-------^-------",
  "------/ \\------",
  "-----/   \\-----",
  "-----|   |-----",
  "-----|   |-----",
  "-----|   |-----",
  "-----|   |-----",
  "----/|   |\\----",
  "---/_|   |_\\---",
  "-----\\___/-----",
  "------212------",
  "------*3*------",
  "-------4-------",
  " ------------- "
].join("\n")
var step = 0;
let templateLength = templateFrame.length;
var exhaustChars = ['@','#','$','%','&'];
let charNum = exhaustChars.length;
setInterval(animateRocket,100)

function getExhaustChars(stepNum){
  let chars = [];
  for (let i = 0; i < charNum; i++) {
    let index = stepNum - i;
    if (index < 0){
      index = index + charNum;
    }
    chars[i] = exhaustChars[index];
  }
  return chars;
}

function animateRocket(){
  let rocketFrame = templateFrame;
  let chars = getExhaustChars(step);
  let index = Math.floor(Math.random() * templateLength);
  rocketFrame = rocketFrame.replace(/1/g, chars[0]);
  rocketFrame = rocketFrame.replace(/2/g, chars[1]);
  rocketFrame = rocketFrame.replace(/3/g, chars[2]);
  rocketFrame = rocketFrame.replace(/4/g, chars[3]);
  if (rocketFrame[index] == "-" && step == 4){
    rocketFrame = rocketFrame.slice(0,index) + "+" + rocketFrame.slice(index + 1,templateLength);
  }
  rocketAnimationElement.innerHTML = rocketFrame;
  if (step == 4){
    step = 0;
  } else{
    step = step + 1;
  }
}
