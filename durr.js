var missile = document.getElementById("object");
var missile2 = document.getElementById("object2");
var missile3 = document.getElementById("object3");
var missile4 = document.getElementById("object4");
var missile5 = document.getElementById("object5");
var missile6 = document.getElementById("object6");
var missile7 = document.getElementById("object7");
var missile8 = document.getElementById("object8");
var missile9 = document.getElementById("object9");
var missile10 = document.getElementById("object10");

var un = Math.floor(Math.random() * 345) + 50;
var deux = Math.floor(Math.random() * 345) + 50;
var trois = Math.floor(Math.random() * 345) + 50;
var quatre = Math.floor(Math.random() * 345) + 50;
var cinq = Math.floor(Math.random() * 345) + 50;
var six = Math.floor(Math.random() * 345) + 50;
var sept = Math.floor(Math.random() * 345) + 50;
var huit = Math.floor(Math.random() * 345) + 50;
var neuf = Math.floor(Math.random() * 345) + 50;
var dix = Math.floor(Math.random() * 345) + 50;
var dur = 3;
var dur2 = 3;
var dur3 = 3;
var dur4 = 3;
var dur5 = 3;
var dur6 = 3;
var dur7 = 3;
var dur8 = 3;
var dur9 = 3;
var dur10 = 3;
var rightPosition = -100;
var rightPosition2 = -100;
var rightPosition3 = -100;
var rightPosition4 = -100;
var rightPosition5 = -100;
var rightPosition6 = -100;
var rightPosition7 = -100;
var rightPosition8 = -100;
var rightPosition9 = -100;
var rightPosition10 = -100;

var topPosition = 0;
var direction = -1;
var direction2 = -1;
var direction3 = -1;
var direction4 = -1;
var direction5 = -1;
var direction6 = -1;
var direction7 = -1;
var direction8 = -1;
var direction9 = -1;
var direction10 = -1;

play3.addEventListener("click", function () {
  wave.style.animationPlayState = "running";
});
pause3.addEventListener("click", function () {
  wave.style.animationPlayState = "paused";
});

let animationActiveDur = false;
let animationActiveDur2 = false;
let animationActiveDur3 = false;
let animationActiveDur4 = false;
let animationActiveDur5 = false;
let animationActiveDur6 = false;
let animationActiveDur7 = false;
let animationActiveDur8 = false;
let animationActiveDur9 = false;
let animationActiveDur10 = false;
//1
function mouvementDur() {
  if (!animationActiveDur) return;

  if (rightPosition == -100) {
    direction = 1;
  } else if (rightPosition >= 1250) {
    rightPosition = rightPosition - 1250;
    un = 5 + Math.floor(Math.random() * 345) + 50;
  }
  rightPosition += 2 + dur * direction;
  missile.style.right = `${rightPosition + 20}px`;
  missile.style.top = `${un}px`;
  requestAnimationFrame(mouvementDur);
}

play3.addEventListener("click", () => {
  if (animationActiveDur) return;
  animationActiveDur = true;
  mouvementDur();
});

pause3.addEventListener("click", () => {
  animationActiveDur = false;
});
//2
function mouvementDurDeux() {
  if (!animationActiveDur2) return;

  if (rightPosition2 == -200) {
    direction2 = 1;
  } else if (rightPosition2 >= 1250) {
    rightPosition2 = rightPosition2 - 1250;
    deux = 5 + Math.floor(Math.random() * 345) + 50;
  }
  rightPosition2 += 2 + dur2 * direction2;
  missile2.style.right = `${rightPosition2 + 20}px`;
  missile2.style.top = `${deux}px`;
  requestAnimationFrame(mouvementDurDeux);
}

play3.addEventListener("click", () => {
  if (animationActiveDur2) return;
  animationActiveDur2 = true;
  mouvementDurDeux();
});

pause3.addEventListener("click", () => {
  animationActiveDur2 = false;
});
//3
function mouvementDurTrois() {
  if (!animationActiveDur3) return;

  if (rightPosition3 == -300) {
    direction3 = 1;
  } else if (rightPosition3 >= 1250) {
    rightPosition3 = rightPosition3 - 1250;
    trois = 5 + Math.floor(Math.random() * 345) + 50;
  }
  rightPosition3 += 2 + dur3 * direction3;
  missile3.style.right = `${rightPosition3 + 20}px`;
  missile3.style.top = `${trois}px`;
  requestAnimationFrame(mouvementDurTrois);
}

play3.addEventListener("click", () => {
  if (animationActiveDur3) return;
  animationActiveDur3 = true;
  mouvementDurTrois();
});

pause3.addEventListener("click", () => {
  animationActiveDur3 = false;
});
//4
function mouvementDurQuatre() {
  if (!animationActiveDur4) return;

  if (rightPosition4 == -400) {
    direction4 = 1;
  } else if (rightPosition4 >= 1250) {
    rightPosition4 = rightPosition4 - 1250;
    quatre = 5 + Math.floor(Math.random() * 345) + 50;
  }
  rightPosition4 += 2 + dur4 * direction4;
  missile4.style.right = `${rightPosition4 + 20}px`;
  missile4.style.top = `${quatre}px`;
  requestAnimationFrame(mouvementDurQuatre);
}

play3.addEventListener("click", () => {
  if (animationActiveDur4) return;
  animationActiveDur4 = true;
  mouvementDurQuatre();
});

pause3.addEventListener("click", () => {
  animationActiveDur4 = false;
});
//5
function mouvementDurCinq() {
  if (!animationActiveDur5) return;

  if (rightPosition5 == -500) {
    direction5 = 1;
  } else if (rightPosition5 >= 1250) {
    rightPosition5 = rightPosition5 - 1250;
    cinq = 5 + Math.floor(Math.random() * 345) + 50;
  }
  rightPosition5 += 2 + dur5 * direction5;
  missile5.style.right = `${rightPosition5 + 20}px`;
  missile5.style.top = `${cinq}px`;
  requestAnimationFrame(mouvementDurCinq);
}

play3.addEventListener("click", () => {
  if (animationActiveDur5) return;
  animationActiveDur5 = true;
  mouvementDurCinq();
});

pause3.addEventListener("click", () => {
  animationActiveDur5 = false;
});
//6
function mouvementDurSix() {
  if (!animationActiveDur6) return;

  if (rightPosition6 == -600) {
    direction6 = 1;
  } else if (rightPosition6 >= 1250) {
    rightPosition6 = rightPosition6 - 1250;
    six = 5 + Math.floor(Math.random() * 345) + 50;
  }
  rightPosition6 += 2 + dur6 * direction6;
  missile6.style.right = `${rightPosition6 + 20}px`;
  missile6.style.top = `${six}px`;
  requestAnimationFrame(mouvementDurSix);
}

play3.addEventListener("click", () => {
  if (animationActiveDur6) return;
  animationActiveDur6 = true;
  mouvementDurSix();
});

pause3.addEventListener("click", () => {
  animationActiveDur6 = false;
});
//7
function mouvementDurSept() {
  if (!animationActiveDur7) return;

  if (rightPosition7 == -700) {
    direction7 = 1;
  } else if (rightPosition7 >= 1250) {
    rightPosition7 = rightPosition7 - 1250;
    sept = 5 + Math.floor(Math.random() * 345) + 50;
  }
  rightPosition7 += 2 + dur7 * direction7;
  missile7.style.right = `${rightPosition7 + 20}px`;
  missile7.style.top = `${sept}px`;
  requestAnimationFrame(mouvementDurSept);
}

play3.addEventListener("click", () => {
  if (animationActiveDur7) return;
  animationActiveDur7 = true;
  mouvementDurSept();
});

pause3.addEventListener("click", () => {
  animationActiveDur7 = false;
});
//8
//9
function mouvementDurHuit() {
  if (!animationActiveDur8) return;

  if (rightPosition8 == -800) {
    direction8 = 1;
  } else if (rightPosition8 >= 1250) {
    rightPosition8 = rightPosition8 - 1250;
    huit = 5 + Math.floor(Math.random() * 345) + 50;
  }
  rightPosition8 += 2 + dur8 * direction8;
  missile8.style.right = `${rightPosition8 + 20}px`;
  missile8.style.top = `${huit}px`;
  requestAnimationFrame(mouvementDurHuit);
}

play3.addEventListener("click", () => {
  if (animationActiveDur8) return;
  animationActiveDur8 = true;
  mouvementDurHuit();
});

pause3.addEventListener("click", () => {
  animationActiveDur8 = false;
});
//9
function mouvementDurNeuf() {
  if (!animationActiveDur9) return;

  if (rightPosition9 == -900) {
    direction9 = 1;
  } else if (rightPosition9 >= 1250) {
    rightPosition9 = rightPosition9 - 1250;
    neuf = 5 + Math.floor(Math.random() * 345) + 50;
  }
  rightPosition9 += 2 + dur9 * direction9;
  missile9.style.right = `${rightPosition9 + 20}px`;
  missile9.style.top = `${neuf}px`;
  requestAnimationFrame(mouvementDurNeuf);
}

play3.addEventListener("click", () => {
  if (animationActiveDur9) return;
  animationActiveDur9 = true;
  mouvementDurNeuf();
});

pause3.addEventListener("click", () => {
  animationActiveDur9 = false;
});
//10
function mouvementDurDix() {
  if (!animationActiveDur10) return;

  if (rightPosition10 == -1000) {
    direction10 = 1;
  } else if (rightPosition10 >= 1250) {
    rightPosition10 = rightPosition10 - 1250;
    dix = 5 + Math.floor(Math.random() * 345) + 50;
  }
  rightPosition10 += 2 + dur10 * direction10;
  missile10.style.right = `${rightPosition10 + 20}px`;
  missile10.style.top = `${dix}px`;
  requestAnimationFrame(mouvementDurDix);
}

play3.addEventListener("click", () => {
  if (animationActiveDur10) return;
  animationActiveDur10 = true;
  mouvementDurDix();
});

pause3.addEventListener("click", () => {
  animationActiveDur10 = false;
});
