var hitbox = document.getElementById("hitbox");
var sm = document.getElementById("sub");
//deplacement par key event sur chaque key
const movesm = (requestAnimationFrame) => {
  switch (event.key) {
    case "z":
      if (sm.offsetTop > hitbox.offsetTop) {
        sm.style.top = `${sm.offsetTop - 10}px`;
      }
      break;
    case "q":
      if (sm.offsetLeft > hitbox.offsetLeft) {
        sm.style.left = `${sm.offsetLeft - 10}px`;
      }
      break;
    case "s":
      if (
        sm.offsetTop + sm.offsetHeight <
        hitbox.offsetHeight + hitbox.offsetTop
      ) {
        sm.style.top = `${sm.offsetTop + 10}px`;
      }
      break;
    case "d":
      if (
        sm.offsetLeft + sm.offsetWidth <
        hitbox.offsetWidth + hitbox.offsetLeft
      ) {
        sm.style.left = `${sm.offsetLeft + 10}px`;
      }
      break;
    case "Z":
      if (sm.offsetTop > hitbox.offsetTop) {
        sm.style.top = `${sm.offsetTop - 10}px`;
      }
      break;
    case "Q":
      if (sm.offsetLeft > hitbox.offsetLeft) {
        sm.style.left = `${sm.offsetLeft - 10}px`;
      }
      break;
    case "S":
      if (
        sm.offsetTop + sm.offsetHeight <
        hitbox.offsetHeight + hitbox.offsetTop
      ) {
        sm.style.top = `${sm.offsetTop + 10}px`;
      }
      break;
    case "D":
      if (
        sm.offsetLeft + sm.offsetWidth <
        hitbox.offsetWidth + hitbox.offsetLeft
      ) {
        sm.style.left = `${sm.offsetLeft + 10}px`;
      }
      break;
    case "ArrowUp":
      if (sm.offsetTop > hitbox.offsetTop) {
        sm.style.top = `${sm.offsetTop - 10}px`;
      }
      break;
    case "ArrowDown":
      if (
        sm.offsetTop + sm.offsetHeight <
        hitbox.offsetHeight + hitbox.offsetTop
      ) {
        sm.style.top = `${sm.offsetTop + 10}px`;
      }
      break;
    case "ArrowRight":
      if (
        sm.offsetLeft + sm.offsetWidth <
        hitbox.offsetWidth + hitbox.offsetLeft
      ) {
        sm.style.left = `${sm.offsetLeft + 10}px`;
      }
      break;
    case "ArrowLeft":
      if (sm.offsetLeft > hitbox.offsetLeft) {
        sm.style.left = `${sm.offsetLeft - 10}px`;
      }
      break;
  }
};
window.addEventListener("keydown", movesm);
