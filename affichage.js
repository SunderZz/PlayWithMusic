let step1 = document.getElementsByClassName("step1");
let step2 = document.getElementsByClassName("step2");
let step3 = document.getElementsByClassName("step3");
let step4 = document.getElementsByClassName("step4");
let step5 = document.getElementsByClassName("step5");
let step6 = document.getElementsByClassName("step6");
let step7 = document.getElementsByClassName("step7");
let barre = document.getElementsByClassName("barre");
let power = document.getElementById("power");
let anyk = document.getElementById("anyk");
let newgame = document.getElementById("newgame");
let commandes = document.getElementById("commandes");
let outof = document.getElementById("outof");
let easy = document.getElementById("easy");
let medium = document.getElementById("medium");
let hard = document.getElementById("hard");
let impossible = document.getElementById("impossible");
let choisir = document.getElementById("choix");
let menu = document.getElementById("menu");
let restart = document.getElementById("restart");
let difficulty = document.getElementsByClassName("difficulty");
let vague = document.getElementById("wave");

//step1 to step2
power.addEventListener("click", () => {
  if (getComputedStyle(step1[0]).display != "none") {
    step2[0].style.display = "grid";
    step1[0].style.visibility = "hidden";
    power.style.backgroundColor = "#00bb2d";
    power.style.animationName = "none";
  } else {
    step2[0].style.display = "grid";
  }
});

// step 2 to step3
anyk.addEventListener("click", () => {
  if (getComputedStyle(step2[0]).display != "none") {
    step3[0].style.display = "flex";
    step2[0].style.display = "none";
    power.style.backgroundColor = "#00bb2d";
  } else {
    step3[0].style.display = "flex";
  }
});

// step 3 to step4
newgame.addEventListener("click", () => {
  if (getComputedStyle(step3[0]).display != "none") {
    step5[0].style.display = "flex";
    step3[0].style.display = "none";
    barre[0].style.visibility = "visible";
  } else {
    step5[0].style.display = "grid";
  }
});
//step 4 to step5
// choisir.addEventListener("click", () => {
//   if (getComputedStyle(step4[0]).display != "none") {
//     step5[0].style.display = "flex";
//     step4[0].style.display = "none";
//   } else {
//     step5[0].style.display = "grid";
//   }
// });

//step 5 to step6
easy.addEventListener("dblclick", () => {
  if (getComputedStyle(step5[0]).display != "none") {
    step6[0].style.display = "flex";
    step5[0].style.display = "none";
  } else {
    step6[0].style.display = "flex";
    document.getElementById("nommusique").innerText = "Slayer - Rainning blood";
  }
});
//step 5 to step6
medium.addEventListener("dblclick", () => {
  if (getComputedStyle(step5[0]).display != "none") {
    step6[0].style.display = "flex";
    step5[0].style.display = "none";
  } else {
    step6[0].style.display = "flex";
  }
});
//step 5 to step6
hard.addEventListener("dblclick", () => {
  if (getComputedStyle(step5[0]).display != "none") {
    step6[0].style.display = "flex";
    step5[0].style.display = "none";
  } else {
    step6[0].style.display = "flex";
  }
});
//step 5 to step6
impossible.addEventListener("dblclick", () => {
  if (getComputedStyle(step5[0]).display != "none") {
    step6[0].style.display = "flex";
    step5[0].style.display = "none";
  } else {
    step6[0].style.display = "flex";
  }
});

//stepmenu

//step4 to menu
// menu.addEventListener("click", () => {
//   if (getComputedStyle(step4[0]).display != "none") {
//     step3[0].style.display = "flex";
//     step4[0].style.display = "none";
//     barre[0].style.visibility = "hidden";
//   } else {
//     step3[0].style.display = "flex";
//   }
// });
//step5 to menu
menu.addEventListener("click", () => {
  if (getComputedStyle(step5[0]).display != "none") {
    step3[0].style.display = "flex";
    step5[0].style.display = "none";
    barre[0].style.visibility = "hidden";
  } else {
    step3[0].style.display = "flex";
  }
});
//step6 to menu
menu.addEventListener("click", () => {
  if (getComputedStyle(step6[0]).display != "none") {
    step3[0].style.display = "flex";
    step6[0].style.display = "none";
    barre[0].style.visibility = "hidden";
  } else {
    step3[0].style.display = "flex";
  }
});
//step7 to menu
menu.addEventListener("click", () => {
  if (getComputedStyle(step7[0]).display != "none") {
    step3[0].style.display = "flex";
    step7[0].style.display = "none";
    barre[0].style.visibility = "hidden";
  } else {
    step3[0].style.display = "flex";
  }
});

//commandes
commandes.addEventListener("click", () => {
  if (getComputedStyle(step3[0]).display != "none") {
    step2[0].style.display = "grid";
    step3[0].style.display = "none";
  } else {
    step2[0].style.display = "grid";
  }
});
//quitter
outof.addEventListener("click", () => {
  if (getComputedStyle(step3[0]).display != "none") {
    step1[0].style.visibility = "visible";
    step3[0].style.display = "none";
    power.style.backgroundColor = "red";
    power.style.animationName = "pulse";
  } else {
    step1[0].style.display = "grid";
  }
});

//power from step4
// power.addEventListener("click", () => {
//   if (getComputedStyle(step4[0]).display != "none") {
//     step1[0].style.visibility = "visible";
//     step2[0].style.display = "none";
//     step4[0].style.display = "none";
//     barre[0].style.visibility = "hidden";
//     power.style.backgroundColor = "red";
//   } else {
//     step1[0].style.display = "visible";
//   }
// });
//power from step5
power.addEventListener("click", () => {
  if (getComputedStyle(step5[0]).display != "none") {
    step1[0].style.visibility = "visible";
    step5[0].style.display = "none";
    barre[0].style.visibility = "hidden";
    power.style.backgroundColor = "red";
    power.style.animationName = "pulse";
  } else {
    step1[0].style.display = "visible";
  }
});
// //power from step6
power.addEventListener("click", () => {
  if (getComputedStyle(step6[0]).display != "none") {
    step1[0].style.visibility = "visible";
    step6[0].style.display = "none";
    barre[0].style.visibility = "hidden";
    power.style.backgroundColor = "red";
    power.style.animationName = "pulse";
  } else {
    step1[0].style.display = "visible";
  }
});

//step 7
power.addEventListener("click", () => {
  if (getComputedStyle(step7[0]).display != "none") {
    location.reload();
  }
});
