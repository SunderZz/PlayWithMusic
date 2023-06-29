var btZ = document.getElementById("z");
var btQ = document.getElementById("q");
var btS = document.getElementById("s");
var btD = document.getElementById("d");
var btUp = document.getElementById("up");
var btDown = document.getElementById("down");
var btRightc = document.getElementById("rightc");
var btLeftc = document.getElementById("leftc");

//decrepated : event keycode

//touche z
window.addEventListener("keydown", (e) => {
  if (e.key === "z") {
    btZ.classList.replace("z", "zactive");
    e.preventDefault();
  }
});
window.addEventListener("keyup", (e) => {
  if (e.key === "z") {
    btZ.classList.replace("zactive", "z");
    e.preventDefault();
  }
});
//touche q
window.addEventListener("keydown", (e) => {
  if (e.key === "q") {
    btQ.classList.replace("q", "qactive");
    e.preventDefault();
  }
});
window.addEventListener("keyup", (e) => {
  if (e.key === "q") {
    btQ.classList.replace("qactive", "q");
    e.preventDefault();
  }
});
//touche s
window.addEventListener("keydown", (e) => {
  if (e.key === "s") {
    btS.classList.replace("s", "sactive");
    e.preventDefault();
  }
});
window.addEventListener("keyup", (e) => {
  if (e.key === "s") {
    btS.classList.replace("sactive", "s");
    e.preventDefault();
  }
});
//touche d
window.addEventListener("keydown", (e) => {
  if (e.key === "d") {
    btD.classList.replace("d", "dactive");
    e.preventDefault();
  }
});
window.addEventListener("keyup", (e) => {
  if (e.key === "d") {
    btD.classList.replace("dactive", "d");
    e.preventDefault();
  }
}); //touche Z
window.addEventListener("keydown", (e) => {
  if (e.key === "Z") {
    btZ.classList.replace("z", "zactive");
    e.preventDefault();
  }
});
window.addEventListener("keyup", (e) => {
  if (e.key === "Z") {
    btZ.classList.replace("zactive", "z");
    e.preventDefault();
  }
});
//touche Q
window.addEventListener("keydown", (e) => {
  if (e.key === "Q") {
    btQ.classList.replace("q", "qactive");
    e.preventDefault();
  }
});
window.addEventListener("keyup", (e) => {
  if (e.key === "Q") {
    btQ.classList.replace("qactive", "q");
    e.preventDefault();
  }
});
//touche S
window.addEventListener("keydown", (e) => {
  if (e.key === "S") {
    btS.classList.replace("s", "sactive");
    e.preventDefault();
  }
});
window.addEventListener("keyup", (e) => {
  if (e.key === "S") {
    btS.classList.replace("sactive", "s");
    e.preventDefault();
  }
});
//touche D
window.addEventListener("keydown", (e) => {
  if (e.key === "D") {
    btD.classList.replace("d", "dactive");
    e.preventDefault();
  }
});
window.addEventListener("keyup", (e) => {
  if (e.key === "D") {
    btD.classList.replace("dactive", "d");
    e.preventDefault();
  }
});
//arrow up
window.addEventListener("keydown", (e) => {
  if (e.key === "ArrowUp") {
    btUp.classList.replace("up", "upactive");
    e.preventDefault();
  }
});
window.addEventListener("keyup", (e) => {
  if (e.key === "ArrowUp") {
    btUp.classList.replace("upactive", "up");
    e.preventDefault();
  }
});
//arrow down
window.addEventListener("keydown", (e) => {
  if (e.key === "ArrowDown") {
    btDown.classList.replace("down", "downactive");
    e.preventDefault();
  }
});
window.addEventListener("keyup", (e) => {
  if (e.key === "ArrowDown") {
    btDown.classList.replace("downactive", "down");
    e.preventDefault();
  }
});
//arrow left
window.addEventListener("keydown", (e) => {
  if (e.key === "ArrowLeft") {
    btLeftc.classList.replace("leftc", "leftcactive");
    e.preventDefault();
  }
});
window.addEventListener("keyup", (e) => {
  if (e.key === "ArrowLeft") {
    btLeftc.classList.replace("leftcactive", "leftc");
    e.preventDefault();
  }
});
//arrow right
window.addEventListener("keydown", (e) => {
  if (e.key === "ArrowRight") {
    btRightc.classList.replace("rightc", "rightcactive");
    e.preventDefault();
  }
});
window.addEventListener("keyup", (e) => {
  if (e.key === "ArrowRight") {
    btRightc.classList.replace("rightcactive", "rightc");
    e.preventDefault();
  }
});
