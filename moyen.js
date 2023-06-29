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
var moyen = 2;
var moyen2 = 2;
var moyen3 = 2;
var moyen4 = 2;
var moyen5 = 2;
var moyen6 = 2;
var moyen7 = 2;
var moyen8 = 2;
var moyen9 = 2;
var moyen10 = 2;
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
play2.addEventListener("click", function () {
  wave.style.animationPlayState = "running";
});
pause2.addEventListener("click", function () {
  wave.style.animationPlayState = "paused";
});

let animationActiveMoyen = false;
let animationActiveMoyen2 = false;
let animationActiveMoyen3 = false;
let animationActiveMoyen4 = false;
let animationActiveMoyen5 = false;
let animationActiveMoyen6 = false;
let animationActiveMoyen7 = false;
let animationActiveMoyen8 = false;
let animationActiveMoyen9 = false;
let animationActiveMoyen10 = false;
//1
function mouvementMoyen() {
  if (!animationActiveMoyen) return;

  if (rightPosition == -100) {
    direction = 1;
  } else if (rightPosition >= 1250) {
    rightPosition = rightPosition - 1250;
    un = 5 + Math.floor(Math.random() * 345) + 50;
  }
  rightPosition += moyen * direction;
  missile.style.right = `${rightPosition + 20}px`;
  missile.style.top = `${un}px`;
  requestAnimationFrame(mouvementMoyen);
}

play2.addEventListener("click", () => {
  if (animationActiveMoyen) return;
  animationActiveMoyen = true;
  mouvementMoyen();
});

pause2.addEventListener("click", () => {
  animationActiveMoyen = false;
});
//2
function mouvementMoyenDeux() {
  if (!animationActiveMoyen2) return;

  if (rightPosition2 == -200) {
    direction2 = 1;
  } else if (rightPosition2 >= 1250) {
    rightPosition2 = rightPosition2 - 1250;
    deux = 5 + Math.floor(Math.random() * 345) + 50;
  }
  rightPosition2 += moyen2 * direction2;
  missile2.style.right = `${rightPosition2 + 20}px`;
  missile2.style.top = `${deux}px`;
  requestAnimationFrame(mouvementMoyenDeux);
}

play2.addEventListener("click", () => {
  if (animationActiveMoyen2) return;
  animationActiveMoyen2 = true;
  mouvementMoyenDeux();
});

pause2.addEventListener("click", () => {
  animationActiveMoyen2 = false;
});
//3
function mouvementMoyenTrois() {
  if (!animationActiveMoyen3) return;

  if (rightPosition3 == -300) {
    direction3 = 1;
  } else if (rightPosition3 >= 1250) {
    rightPosition3 = rightPosition3 - 1250;
    trois = 5 + Math.floor(Math.random() * 345) + 50;
  }
  rightPosition3 += moyen3 * direction3;
  missile3.style.right = `${rightPosition3 + 20}px`;
  missile3.style.top = `${trois}px`;
  requestAnimationFrame(mouvementMoyenTrois);
}

play2.addEventListener("click", () => {
  if (animationActiveMoyen3) return;
  animationActiveMoyen3 = true;
  mouvementMoyenTrois();
});

pause2.addEventListener("click", () => {
  animationActiveMoyen3 = false;
});
//4
function mouvementMoyenQuatre() {
  if (!animationActiveMoyen4) return;

  if (rightPosition4 == -400) {
    direction4 = 1;
  } else if (rightPosition4 >= 1250) {
    rightPosition4 = rightPosition4 - 1250;
    quatre = 5 + Math.floor(Math.random() * 345) + 50;
  }
  rightPosition4 += moyen4 * direction4;
  missile4.style.right = `${rightPosition4 + 20}px`;
  missile4.style.top = `${quatre}px`;
  requestAnimationFrame(mouvementMoyenQuatre);
}

play2.addEventListener("click", () => {
  if (animationActiveMoyen4) return;
  animationActiveMoyen4 = true;
  mouvementMoyenQuatre();
});

pause2.addEventListener("click", () => {
  animationActiveMoyen4 = false;
});
//5
function mouvementMoyenCinq() {
  if (!animationActiveMoyen5) return;

  if (rightPosition5 == -500) {
    direction5 = 1;
  } else if (rightPosition5 >= 1250) {
    rightPosition5 = rightPosition5 - 1250;
    cinq = 5 + Math.floor(Math.random() * 345) + 50;
  }
  rightPosition5 += moyen5 * direction5;
  missile5.style.right = `${rightPosition5 + 20}px`;
  missile5.style.top = `${cinq}px`;
  requestAnimationFrame(mouvementMoyenCinq);
}

play2.addEventListener("click", () => {
  if (animationActiveMoyen5) return;
  animationActiveMoyen5 = true;
  mouvementMoyenCinq();
});

pause2.addEventListener("click", () => {
  animationActiveMoyen5 = false;
});
//6
function mouvementMoyenSix() {
  if (!animationActiveMoyen6) return;

  if (rightPosition6 == -600) {
    direction6 = 1;
  } else if (rightPosition6 >= 1250) {
    rightPosition6 = rightPosition6 - 1250;
    six = 5 + Math.floor(Math.random() * 345) + 50;
  }
  rightPosition6 += moyen6 * direction6;
  missile6.style.right = `${rightPosition6 + 20}px`;
  missile6.style.top = `${six}px`;
  requestAnimationFrame(mouvementMoyenSix);
}

play2.addEventListener("click", () => {
  if (animationActiveMoyen6) return;
  animationActiveMoyen6 = true;
  mouvementMoyenSix();
});

pause2.addEventListener("click", () => {
  animationActiveMoyen6 = false;
});
//7
function mouvementMoyenSept() {
  if (!animationActiveMoyen7) return;

  if (rightPosition7 == -700) {
    direction7 = 1;
  } else if (rightPosition7 >= 1250) {
    rightPosition7 = rightPosition7 - 1250;
    sept = 5 + Math.floor(Math.random() * 345) + 50;
  }
  rightPosition7 += moyen7 * direction7;
  missile7.style.right = `${rightPosition7 + 20}px`;
  missile7.style.top = `${sept}px`;
  requestAnimationFrame(mouvementMoyenSept);
}

play2.addEventListener("click", () => {
  if (animationActiveMoyen7) return;
  animationActiveMoyen7 = true;
  mouvementMoyenSept();
});

pause2.addEventListener("click", () => {
  animationActiveMoyen7 = false;
});
//8
function mouvementMoyenHuit() {
  if (!animationActiveMoyen8) return;

  if (rightPosition8 == -800) {
    direction8 = 1;
  } else if (rightPosition8 >= 1250) {
    rightPosition8 = rightPosition8 - 1250;
    huit = 5 + Math.floor(Math.random() * 345) + 50;
  }
  rightPosition8 += moyen8 * direction8;
  missile8.style.right = `${rightPosition8 + 20}px`;
  missile8.style.top = `${huit}px`;
  requestAnimationFrame(mouvementMoyenHuit);
}

play2.addEventListener("click", () => {
  if (animationActiveMoyen8) return;
  animationActiveMoyen8 = true;
  mouvementMoyenHuit();
});

pause2.addEventListener("click", () => {
  animationActiveMoyen8 = false;
});
//9
function mouvementMoyenNeuf() {
  if (!animationActiveMoyen9) return;

  if (rightPosition9 == -900) {
    direction9 = 1;
  } else if (rightPosition9 >= 1250) {
    rightPosition9 = rightPosition9 - 1250;
    neuf = 5 + Math.floor(Math.random() * 345) + 50;
  }
  rightPosition9 += moyen9 * direction9;
  missile9.style.right = `${rightPosition9 + 20}px`;
  missile9.style.top = `${neuf}px`;
  requestAnimationFrame(mouvementMoyenNeuf);
}

play2.addEventListener("click", () => {
  if (animationActiveMoyen9) return;
  animationActiveMoyen9 = true;
  mouvementMoyenNeuf();
});

pause2.addEventListener("click", () => {
  animationActiveMoyen9 = false;
});
//10
function mouvementMoyenDix() {
  if (!animationActiveMoyen10) return;

  if (rightPosition10 == -1000) {
    direction10 = 1;
  } else if (rightPosition10 >= 1250) {
    rightPosition10 = rightPosition10 - 1250;
    dix = 5 + Math.floor(Math.random() * 345) + 50;
  }
  rightPosition10 += moyen10 * direction10;
  missile10.style.right = `${rightPosition10 + 20}px`;
  missile10.style.top = `${dix}px`;
  requestAnimationFrame(mouvementMoyenDix);
}

play2.addEventListener("click", () => {
  if (animationActiveMoyen10) return;
  animationActiveMoyen10 = true;
  mouvementMoyenDix();
});

pause2.addEventListener("click", () => {
  animationActiveMoyen10 = false;
});
