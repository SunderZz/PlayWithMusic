var souris = document.getElementById("mouse");
var tapis = document.getElementById("tapis");
//fonction deplacement souris
window.addEventListener("mousemove", (e) => {
  // variable deplacement (vrai souris)
  var newTop = e.clientY;
  var newLeft = e.clientX;
  //limitation tapis axe Y
  if (newTop < tapis.offsetTop) {
    newTop = tapis.offsetTop;
  } else if (
    newTop >
    tapis.offsetTop + tapis.offsetHeight - souris.offsetHeight
  ) {
    newTop = tapis.offsetTop + tapis.offsetHeight - souris.offsetHeight;
  }
  // limitation tapis axe x
  if (newLeft < tapis.offsetLeft) {
    newLeft = tapis.offsetLeft;
  } else if (
    newLeft >
    tapis.offsetLeft + tapis.offsetWidth - souris.offsetWidth
  ) {
    newLeft = tapis.offsetLeft + tapis.offsetWidth - souris.offsetWidth;
  }
  //affichage deplacement
  souris.style.top = newTop + "px";
  souris.style.left = newLeft + "px";
});
