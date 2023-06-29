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
//données différentes pour chaques niveau ou accumulation des données

var simple = 1;
var simple2 = 1;
var simple3 = 1;
var simple4 = 1;
var simple5 = 1;
var simple6 = 1;
var simple7 = 1;
var simple8 = 1;
var simple9 = 1;
var simple10 = 1;
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

play1.addEventListener("click", function () {
  wave.style.animationPlayState = "running";
});
pause1.addEventListener("click", function () {
  wave.style.animationPlayState = "paused";
});

let animationActive = false;
let animationActive2 = false;
let animationActive3 = false;
let animationActive4 = false;
let animationActive5 = false;
let animationActive6 = false;
let animationActive7 = false;
let animationActive8 = false;
let animationActive9 = false;
let animationActive10 = false;
//1
function mouvement() {
  if (!animationActive) return;

  if (rightPosition == -100) {
    direction = 1;
  } else if (rightPosition >= 1250) {
    rightPosition = rightPosition - 1250;
    un = 5 + Math.floor(Math.random() * 345) + 50;
  }
  rightPosition += simple * direction;
  missile.style.right = `${rightPosition + 20}px`;
  missile.style.top = `${un}px`;
  requestAnimationFrame(mouvement);
}

play1.addEventListener("click", () => {
  if (animationActive) return;
  animationActive = true;
  mouvement();
});

pause1.addEventListener("click", () => {
  animationActive = false;
});
//2
function mouvementDeux() {
  if (!animationActive2) return;

  if (rightPosition2 == -200) {
    direction2 = 1;
  } else if (rightPosition2 >= 1250) {
    rightPosition2 = rightPosition2 - 1250;
    deux = 5 + Math.floor(Math.random() * 345) + 50;
  }
  rightPosition2 += simple2 * direction2;
  missile2.style.right = `${rightPosition2 + 20}px`;
  missile2.style.top = `${deux}px`;
  requestAnimationFrame(mouvementDeux);
}

play1.addEventListener("click", () => {
  if (animationActive2) return;
  animationActive2 = true;
  mouvementDeux();
});

pause1.addEventListener("click", () => {
  animationActive2 = false;
});
//3
function mouvementTrois() {
  if (!animationActive3) return;

  if (rightPosition3 == -300) {
    direction3 = 1;
  } else if (rightPosition3 >= 1250) {
    rightPosition3 = rightPosition3 - 1250;
    trois = 5 + Math.floor(Math.random() * 345) + 50;
  }
  rightPosition3 += simple3 * direction3;
  missile3.style.right = `${rightPosition3 + 20}px`;
  missile3.style.top = `${trois}px`;
  requestAnimationFrame(mouvementTrois);
}

play1.addEventListener("click", () => {
  if (animationActive3) return;
  animationActive3 = true;
  mouvementTrois();
});

pause1.addEventListener("click", () => {
  animationActive3 = false;
});
//4
function mouvementQuatre() {
  if (!animationActive4) return;

  if (rightPosition4 == -400) {
    direction4 = 1;
  } else if (rightPosition4 >= 1250) {
    rightPosition4 = rightPosition4 - 1250;
    quatre = 5 + Math.floor(Math.random() * 345) + 50;
  }
  rightPosition4 += simple4 * direction4;
  missile4.style.right = `${rightPosition4 + 20}px`;
  missile4.style.top = `${quatre}px`;
  requestAnimationFrame(mouvementQuatre);
}

play1.addEventListener("click", () => {
  if (animationActive4) return;
  animationActive4 = true;
  mouvementQuatre();
});

pause1.addEventListener("click", () => {
  animationActive4 = false;
});
//5
function mouvementCinq() {
  if (!animationActive5) return;

  if (rightPosition5 == -500) {
    direction5 = 1;
  } else if (rightPosition5 >= 1250) {
    rightPosition5 = rightPosition5 - 1250;
    cinq = 5 + Math.floor(Math.random() * 345) + 50;
  }
  rightPosition5 += simple5 * direction5;
  missile5.style.right = `${rightPosition5 + 20}px`;
  missile5.style.top = `${cinq}px`;
  requestAnimationFrame(mouvementCinq);
}

play1.addEventListener("click", () => {
  if (animationActive5) return;
  animationActive5 = true;
  mouvementCinq();
});

pause1.addEventListener("click", () => {
  animationActive5 = false;
});
//6
function mouvementSix() {
  if (!animationActive6) return;

  if (rightPosition6 == -600) {
    direction6 = 1;
  } else if (rightPosition6 >= 1250) {
    rightPosition6 = rightPosition6 - 1250;
    six = 5 + Math.floor(Math.random() * 345) + 50;
  }
  rightPosition6 += simple6 * direction6;
  missile6.style.right = `${rightPosition6 + 20}px`;
  missile6.style.top = `${six}px`;
  requestAnimationFrame(mouvementSix);
}

play1.addEventListener("click", () => {
  if (animationActive6) return;
  animationActive6 = true;
  mouvementSix();
});

pause1.addEventListener("click", () => {
  animationActive6 = false;
});
//7
function mouvementSept() {
  if (!animationActive7) return;

  if (rightPosition7 == -700) {
    direction7 = 1;
  } else if (rightPosition7 >= 1250) {
    rightPosition7 = rightPosition7 - 1250;
    sept = 5 + Math.floor(Math.random() * 345) + 50;
  }
  rightPosition7 += simple7 * direction7;
  missile7.style.right = `${rightPosition7 + 20}px`;
  missile7.style.top = `${sept}px`;
  requestAnimationFrame(mouvementSept);
}

play1.addEventListener("click", () => {
  if (animationActive7) return;
  animationActive7 = true;
  mouvementSept();
});

pause1.addEventListener("click", () => {
  animationActive7 = false;
});
//8
function mouvementHuit() {
  if (!animationActive8) return;

  if (rightPosition8 == -800) {
    direction8 = 1;
  } else if (rightPosition8 >= 1250) {
    rightPosition8 = rightPosition8 - 1250;
    huit = 5 + Math.floor(Math.random() * 345) + 50;
  }
  rightPosition8 += simple8 * direction8;
  missile8.style.right = `${rightPosition8 + 20}px`;
  missile8.style.top = `${huit}px`;
  requestAnimationFrame(mouvementHuit);
}

play1.addEventListener("click", () => {
  if (animationActive8) return;
  animationActive8 = true;
  mouvementHuit();
});

pause1.addEventListener("click", () => {
  animationActive8 = false;
});
//9
function mouvementNeuf() {
  if (!animationActive9) return;

  if (rightPosition9 == -900) {
    direction9 = 1;
  } else if (rightPosition9 >= 1250) {
    rightPosition9 = rightPosition9 - 1250;
    neuf = 5 + Math.floor(Math.random() * 345) + 50;
  }
  rightPosition9 += simple9 * direction9;
  missile9.style.right = `${rightPosition9 + 20}px`;
  missile9.style.top = `${neuf}px`;
  requestAnimationFrame(mouvementNeuf);
}

play1.addEventListener("click", () => {
  if (animationActive9) return;
  animationActive9 = true;
  mouvementNeuf();
});

pause1.addEventListener("click", () => {
  animationActive9 = false;
});
//10
function mouvementDix() {
  if (!animationActive10) return;

  if (rightPosition10 == -1000) {
    direction10 = 1;
  } else if (rightPosition10 >= 1250) {
    rightPosition10 = rightPosition10 - 1250;
    dix = 5 + Math.floor(Math.random() * 345) + 50;
  }
  rightPosition10 += simple10 * direction10;
  missile10.style.right = `${rightPosition10 + 20}px`;
  missile10.style.top = `${dix}px`;
  requestAnimationFrame(mouvementDix);
}

play1.addEventListener("click", () => {
  if (animationActive10) return;
  animationActive10 = true;
  mouvementDix();
});

pause1.addEventListener("click", () => {
  animationActive10 = false;
});
