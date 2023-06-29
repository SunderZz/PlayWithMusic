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
var hardcore = 5;
var hardcore2 = 5;
var hardcore3 = 5;
var hardcore4 = 5;
var hardcore5 = 5;
var hardcore6 = 5;
var hardcore7 = 5;
var hardcore8 = 5;
var hardcore9 = 5;
var hardcore10 = 5;
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

play4.addEventListener("click", function () {
  wave.style.animationPlayState = "running";
});
pause4.addEventListener("click", function () {
  wave.style.animationPlayState = "paused";
});

let animationActiveHard = false;
let animationActiveHard2 = false;
let animationActiveHard3 = false;
let animationActiveHard4 = false;
let animationActiveHard5 = false;
let animationActiveHard6 = false;
let animationActiveHard7 = false;
let animationActiveHard8 = false;
let animationActiveHard9 = false;
let animationActiveHard10 = false;
//1
function mouvementHard() {
  if (!animationActiveHard) return;

  if (rightPosition == -100) {
    direction = 1;
  } else if (rightPosition >= 1250) {
    rightPosition = rightPosition - 1250;
    un = 5 + Math.floor(Math.random() * 345) + 50;
  }
  rightPosition += hardcore * direction;
  missile.style.right = `${rightPosition + 20}px`;
  missile.style.top = `${un}px`;
  requestAnimationFrame(mouvementHard);
}

play4.addEventListener("click", () => {
  if (animationActiveHard) return;
  animationActiveHard = true;
  mouvementHard();
});

pause4.addEventListener("click", () => {
  animationActiveHard = false;
});
//2
function mouvementHardDeux() {
  if (!animationActiveHard2) return;

  if (rightPosition2 == -200) {
    direction2 = 1;
  } else if (rightPosition2 >= 1250) {
    rightPosition2 = rightPosition2 - 1250;
    deux = 5 + Math.floor(Math.random() * 345) + 50;
  }
  rightPosition2 += hardcore2 * direction2;
  missile2.style.right = `${rightPosition2 + 20}px`;
  missile2.style.top = `${deux}px`;
  requestAnimationFrame(mouvementHardDeux);
}

play4.addEventListener("click", () => {
  if (animationActiveHard2) return;
  animationActiveHard2 = true;
  mouvementHardDeux();
});

pause4.addEventListener("click", () => {
  animationActiveHard2 = false;
});
//3
function mouvementHardTrois() {
  if (!animationActiveHard3) return;

  if (rightPosition3 == -300) {
    direction3 = 1;
  } else if (rightPosition3 >= 1250) {
    rightPosition3 = rightPosition3 - 1250;
    trois = 5 + Math.floor(Math.random() * 345) + 50;
  }
  rightPosition3 += hardcore3 * direction3;
  missile3.style.right = `${rightPosition3 + 20}px`;
  missile3.style.top = `${trois}px`;
  requestAnimationFrame(mouvementHardTrois);
}

play4.addEventListener("click", () => {
  if (animationActiveHard3) return;
  animationActiveHard3 = true;
  mouvementHardTrois();
});

pause4.addEventListener("click", () => {
  animationActiveHard3 = false;
});
//4
function mouvementHardQuatre() {
  if (!animationActiveHard4) return;

  if (rightPosition4 == -400) {
    direction4 = 1;
  } else if (rightPosition4 >= 1250) {
    rightPosition4 = rightPosition4 - 1250;
    quatre = 5 + Math.floor(Math.random() * 345) + 50;
  }
  rightPosition4 += hardcore4 * direction4;
  missile4.style.right = `${rightPosition4 + 20}px`;
  missile4.style.top = `${quatre}px`;
  requestAnimationFrame(mouvementHardQuatre);
}

play4.addEventListener("click", () => {
  if (animationActiveHard4) return;
  animationActiveHard4 = true;
  mouvementHardQuatre();
});

pause4.addEventListener("click", () => {
  animationActiveHard4 = false;
});
//5
function mouvementHardCinq() {
  if (!animationActiveHard5) return;

  if (rightPosition5 == -500) {
    direction5 = 1;
  } else if (rightPosition5 >= 1250) {
    rightPosition5 = rightPosition5 - 1250;
    cinq = 5 + Math.floor(Math.random() * 345) + 50;
  }
  rightPosition5 += hardcore5 * direction5;
  missile5.style.right = `${rightPosition5 + 20}px`;
  missile5.style.top = `${cinq}px`;
  requestAnimationFrame(mouvementHardCinq);
}

play4.addEventListener("click", () => {
  if (animationActiveHard5) return;
  animationActiveHard5 = true;
  mouvementHardCinq();
});

pause4.addEventListener("click", () => {
  animationActiveHard5 = false;
});
//6
function mouvementHardSix() {
  if (!animationActiveHard6) return;

  if (rightPosition6 == -600) {
    direction6 = 1;
  } else if (rightPosition6 >= 1250) {
    rightPosition6 = rightPosition6 - 1250;
    six = 5 + Math.floor(Math.random() * 345) + 50;
  }
  rightPosition6 += hardcore6 * direction6;
  missile6.style.right = `${rightPosition6 + 20}px`;
  missile6.style.top = `${six}px`;
  requestAnimationFrame(mouvementHardSix);
}

play4.addEventListener("click", () => {
  if (animationActiveHard6) return;
  animationActiveHard6 = true;
  mouvementHardSix();
});

pause4.addEventListener("click", () => {
  animationActiveHard6 = false;
});
//7
function mouvementHardSept() {
  if (!animationActiveHard7) return;

  if (rightPosition7 == -700) {
    direction7 = 1;
  } else if (rightPosition7 >= 1250) {
    rightPosition7 = rightPosition7 - 1250;
    sept = 5 + Math.floor(Math.random() * 345) + 50;
  }
  rightPosition7 += hardcore7 * direction7;
  missile7.style.right = `${rightPosition7 + 20}px`;
  missile7.style.top = `${sept}px`;
  requestAnimationFrame(mouvementHardSept);
}

play4.addEventListener("click", () => {
  if (animationActiveHard7) return;
  animationActiveHard7 = true;
  mouvementHardSept();
});

pause4.addEventListener("click", () => {
  animationActiveHard7 = false;
});
//8
function mouvementHardHuit() {
  if (!animationActiveHard8) return;

  if (rightPosition8 == -800) {
    direction8 = 1;
  } else if (rightPosition8 >= 1250) {
    rightPosition8 = rightPosition8 - 1250;
    huit = 5 + Math.floor(Math.random() * 345) + 50;
  }
  rightPosition8 += hardcore8 * direction8;
  missile8.style.right = `${rightPosition8 + 20}px`;
  missile8.style.top = `${huit}px`;
  requestAnimationFrame(mouvementHardHuit);
}

play4.addEventListener("click", () => {
  if (animationActiveHard8) return;
  animationActiveHard8 = true;
  mouvementHardHuit();
});

pause4.addEventListener("click", () => {
  animationActiveHard8 = false;
});
//9
function mouvementHardNeuf() {
  if (!animationActiveHard9) return;

  if (rightPosition9 == -900) {
    direction9 = 1;
  } else if (rightPosition9 >= 1250) {
    rightPosition9 = rightPosition9 - 1250;
    neuf = 5 + Math.floor(Math.random() * 345) + 50;
  }
  rightPosition9 += hardcore9 * direction9;
  missile9.style.right = `${rightPosition9 + 20}px`;
  missile9.style.top = `${neuf}px`;
  requestAnimationFrame(mouvementHardNeuf);
}

play4.addEventListener("click", () => {
  if (animationActiveHard9) return;
  animationActiveHard9 = true;
  mouvementHardNeuf();
});

pause4.addEventListener("click", () => {
  animationActiveHard9 = false;
});
//10
function mouvementHardDix() {
  if (!animationActiveHard10) return;

  if (rightPosition10 == -1000) {
    direction10 = 1;
  } else if (rightPosition10 >= 1250) {
    rightPosition10 = rightPosition10 - 1250;
    dix = 5 + Math.floor(Math.random() * 345) + 50;
  }
  rightPosition10 += hardcore10 * direction10;
  missile10.style.right = `${rightPosition10 + 20}px`;
  missile10.style.top = `${dix}px`;
  requestAnimationFrame(mouvementHardDix);
}

play4.addEventListener("click", () => {
  if (animationActiveHard10) return;
  animationActiveHard10 = true;
  mouvementHardDix();
});

pause4.addEventListener("click", () => {
  animationActiveHard10 = false;
});
