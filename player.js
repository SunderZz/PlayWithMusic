var home = document.getElementById("menu");
var allume = document.getElementById("power");
var son1 = document.getElementById("easy");
var son2 = document.getElementById("medium");
var son3 = document.getElementById("hard");
var son4 = document.getElementById("impossible");
var audio1 = new Audio("Stairway to Heaven (Remaster).mp3");
var audio2 = new Audio("The Cure - Boys Dont Cry.mp3");
var audio3 = new Audio("Master of Puppets - Metallica [Short version].mp3");
var audio4 = new Audio("Slayer - Raining Blood (Remixed and Remastered).mp3");
var decor = document.getElementById("decor");
var first = document.getElementsByClassName("pausefirst");
var second = document.getElementsByClassName("pausesecond");
var third = document.getElementsByClassName("pausethird");
var fourth = document.getElementsByClassName("pausefourth");
var annonceur1 = document.getElementsByClassName("annonceur1");
var annonceur2 = document.getElementsByClassName("annonceur2");
var annonceur3 = document.getElementsByClassName("annonceur3");
var annonceur4 = document.getElementsByClassName("annonceur4");
var play1 = document.getElementById("play1");
var play2 = document.getElementById("play2");
var play3 = document.getElementById("play3");
var play4 = document.getElementById("play4");
var pause1 = document.getElementById("pause1");
var pause2 = document.getElementById("pause2");
var pause3 = document.getElementById("pause3");
var pause4 = document.getElementById("pause4");
var hitbox = document.getElementById("hitbox");
var wave = document.getElementById("wave");

//ensemble musical hover
son1.addEventListener("mouseover", () => {
  audio1.play();
  audio2.pause();
  audio3.pause();
  audio4.pause();
  audio1.currentTime = 0;
});
// son1.addEventListener("mouseout", () => {
// });
son1.addEventListener("click", () => {
  audio1.pause();
  audio1.currentTime = 0;
  audio2.currentTime = 0;
  audio3.currentTime = 0;
  audio4.currentTime = 0;
});
son2.addEventListener("mouseover", () => {
  audio2.play();
  audio1.pause();
  audio3.pause();
  audio4.pause();
  audio2.currentTime = 0;
});
// son2.addEventListener("mouseout", () => {
//   audio2.currentTime = 0;
// });
son2.addEventListener("click", () => {
  audio2.pause();
  audio1.currentTime = 0;
  audio2.currentTime = 0;
  audio3.currentTime = 0;
  audio4.currentTime = 0;
});
son3.addEventListener("mouseover", () => {
  audio3.play();
  audio2.pause();
  audio1.pause();
  audio4.pause();
  audio3.currentTime = 0;
});
// son3.addEventListener("mouseout", () => {
//   audio3.currentTime = 0;
// });
son3.addEventListener("click", () => {
  audio3.pause();
  audio3.currentTime = 0;
  audio2.currentTime = 0;
  audio3.currentTime = 0;
  audio4.currentTime = 0;
});
son4.addEventListener("mouseover", () => {
  audio4.play();
  audio2.pause();
  audio3.pause();
  audio1.pause();
  audio4.currentTime = 0;
});
// son4.addEventListener("mouseout", () => {
//   audio4.currentTime = 0;
// });
son4.addEventListener("click", () => {
  audio4.pause();
  audio4.currentTime = 0;
  audio2.currentTime = 0;
  audio3.currentTime = 0;
  audio4.currentTime = 0;
});

son1.addEventListener("dblclick", function () {
  audio1.play();
  decor.classList.replace("decor", "decorfacile");
  first[0].style.display = "block";
  annonceur1[0].style.display = "block";
  annonceur3[0].style.display = "none";
  annonceur2[0].style.display = "none";
  annonceur4[0].style.display = "none";
  second[0].style.display = "none";
  third[0].style.display = "none";
  fourth[0].style.display = "none";
  animationActive = true;
  mouvement();
  animationActive2 = true;
  mouvementDeux();
  animationActive3 = true;
  mouvementTrois();
  animationActive4 = true;
  mouvementQuatre();
  animationActive5 = true;
  mouvementCinq();
  animationActive6 = true;
  mouvementSix();
  animationActive7 = true;
  mouvementSept();
  animationActive8 = true;
  mouvementHuit();
  animationActive9 = true;
  mouvementNeuf();
  animationActive10 = true;
  mouvementDix();
  kaboom();
});
son2.addEventListener("dblclick", function () {
  audio2.play();
  decor.classList.replace("decor", "decormedium");
  annonceur2[0].style.display = "block";
  annonceur3[0].style.display = "none";
  annonceur4[0].style.display = "none";
  annonceur1[0].style.display = "none";
  second[0].style.display = "block";
  first[0].style.display = "none";
  third[0].style.display = "none";
  fourth[0].style.display = "none";
  animationActiveMoyen = true;
  mouvementMoyen();
  animationActiveMoyen2 = true;
  mouvementMoyenDeux();
  animationActiveMoyen3 = true;
  mouvementMoyenTrois();
  animationActiveMoyen4 = true;
  mouvementMoyenQuatre();
  animationActiveMoyen5 = true;
  mouvementMoyenCinq();
  animationActiveMoyen6 = true;
  mouvementMoyenSix();
  animationActiveMoyen7 = true;
  mouvementMoyenSept();
  animationActiveMoyen8 = true;
  mouvementMoyenHuit();
  animationActiveMoyen9 = true;
  mouvementMoyenNeuf();
  animationActiveMoyen10 = true;
  mouvementMoyenDix();
  kaboomm();
});
son3.addEventListener("dblclick", function () {
  audio3.play();
  decor.classList.replace("decor", "decorhard");
  annonceur3[0].style.display = "block";
  annonceur4[0].style.display = "none";
  annonceur2[0].style.display = "none";
  annonceur1[0].style.display = "none";
  third[0].style.display = "block";
  second[0].style.display = "none";
  first[0].style.display = "none";
  fourth[0].style.display = "none";
  animationActiveDur = true;
  mouvementDur();
  animationActiveDur2 = true;
  mouvementDurDeux();
  animationActiveDur3 = true;
  mouvementDurTrois();
  animationActiveDur4 = true;
  mouvementDurQuatre();
  animationActiveDur5 = true;
  mouvementDurCinq();
  animationActiveDur6 = true;
  mouvementDurSix();
  animationActiveDur7 = true;
  mouvementDurSept();
  animationActiveDur8 = true;
  mouvementDurHuit();
  animationActiveDur9 = true;
  mouvementDurNeuf();
  animationActiveDur10 = true;
  mouvementDurDix();
  kaboomh();
});
son4.addEventListener("dblclick", function () {
  audio4.play();
  decor.classList.replace("decor", "decorimpossible");
  annonceur4[0].style.display = "block";
  annonceur3[0].style.display = "none";
  annonceur2[0].style.display = "none";
  annonceur1[0].style.display = "none";
  fourth[0].style.display = "block";
  second[0].style.display = "none";
  third[0].style.display = "none";
  first[0].style.display = "none";
  animationActiveHard = true;
  mouvementHard();
  animationActiveHard2 = true;
  mouvementHardDeux();
  animationActiveHard3 = true;
  mouvementHardTrois();
  animationActiveHard4 = true;
  mouvementHardQuatre();
  animationActiveHard5 = true;
  mouvementHardCinq();
  animationActiveHard6 = true;
  mouvementHardSix();
  animationActiveHard7 = true;
  mouvementHardSept();
  animationActiveHard8 = true;
  mouvementHardHuit();
  animationActiveHard9 = true;
  mouvementHardNeuf();
  animationActiveHard10 = true;
  mouvementHardDix();
  kaboomi();
});

//menu
home.addEventListener("click", function () {
  audio1.pause();
  decor.classList.replace("decoreasy", "decor");
  animationActive = false;
  animationActive2 = false;
  animationActive3 = false;
  animationActive4 = false;
  animationActive5 = false;
  animationActive6 = false;
  animationActive7 = false;
  animationActive8 = false;
  animationActive9 = false;
  animationActive10 = false;
});
home.addEventListener("click", function () {
  audio2.pause();
  decor.classList.replace("decormedium", "decor");
  animationActiveMoyen = false;
  animationActiveMoyen2 = false;
  animationActiveMoyen3 = false;
  animationActiveMoyen4 = false;
  animationActiveMoyen5 = false;
  animationActiveMoyen6 = false;
  animationActiveMoyen7 = false;
  animationActiveMoyen8 = false;
  animationActiveMoyen9 = false;
  animationActiveMoyen10 = false;
});
home.addEventListener("click", function () {
  audio3.pause();
  decor.classList.replace("decorhard", "decor");
  animationActiveDur = false;
  animationActiveDur2 = false;
  animationActiveDur3 = false;
  animationActiveDur4 = false;
  animationActiveDur5 = false;
  animationActiveDur6 = false;
  animationActiveDur7 = false;
  animationActiveDur8 = false;
  animationActiveDur9 = false;
  animationActiveDur10 = false;
});
home.addEventListener("click", function () {
  audio4.pause();
  decor.classList.replace("decorimpossible", "decor");
  animationActiveHard = false;
  animationActiveHard2 = false;
  animationActiveHard3 = false;
  animationActiveHard4 = false;
  animationActiveHard5 = false;
  animationActiveHard6 = false;
  animationActiveHard7 = false;
  animationActiveHard8 = false;
  animationActiveHard9 = false;
  animationActiveHard10 = false;
});
//power
allume.addEventListener("click", function () {
  if (audio1.currentTime > 1) {
    location.reload();
  }
});
allume.addEventListener("click", function () {
  if (audio2.currentTime > 1) {
    location.reload();
  }
});
allume.addEventListener("click", function () {
  if (audio3.currentTime > 1) {
    location.reload();
  }
});
allume.addEventListener("click", function () {
  if (audio4.currentTime > 1) {
    location.reload();
  }
});
//play
function p1() {
  if (audio1.pause) {
    audio1.play();
  }
}
function p2() {
  if (audio2.pause) {
    audio2.play();
  }
}
function p3() {
  if (audio3.pause) {
    audio3.play();
  }
}
function p4() {
  if (audio4.pause) {
    audio4.play();
  }
}
//pause
function pa1() {
  if (audio1.play) {
    audio1.pause();
  }
}
function pa2() {
  if (audio2.play) {
    audio2.pause();
  }
}
function pa3() {
  if (audio3.play) {
    audio3.pause();
  }
}
function pa4() {
  if (audio4.play) {
    audio4.pause();
  }
}
let volume = document.getElementById("niveau");
volume.addEventListener("change", function (e) {
  audio1.volume = e.currentTarget.value / 100;
  audio2.volume = e.currentTarget.value / 100;
  audio3.volume = e.currentTarget.value / 100;
  audio4.volume = e.currentTarget.value / 100;
});
