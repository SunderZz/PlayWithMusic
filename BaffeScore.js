var pseudo = document.getElementById("pseudo");
var Score1;
var Score2;
var Score3;
var Score4;
var valeur = document.getElementById("valeur");
valeur.style.fontSize = "80px";
document.getElementById("pseudo").innerHTML = pseudo;
//affichage du score par calcul, temps musique actuelle - temps musique entiere
function tempsm1() {
  if (audio1.play) {
    audio1.currentTime;
    console.log(audio1.currentTime);
    audio1.duration;
    console.log(audio1.duration);

    var Score1 = (audio1.currentTime * 100) / audio1.duration;
    console.log(Score1);
    document.getElementById("valeur").innerHTML = parseInt(Score1) + "%";
    audio1.pause();
  } else {
  }
}

function tempsm2() {
  if (audio2.play()) {
    audio3.currentTime;
    console.log(audio2.currentTime);
    audio2.duration;
    console.log(audio2.duration);

    var Score2 = (audio2.currentTime * 100) / audio2.duration;
    console.log(Score2);
    document.getElementById("valeur").innerHTML = parseInt(Score2) + "%";
    audio2.pause();
  } else {
  }
}

function tempsm3() {
  audio3.currentTime;
  console.log(audio3.currentTime);
  audio3.duration;
  console.log(audio3.duration);

  var Score3 = (audio3.currentTime * 100) / audio3.duration;
  console.log(Score3);
  document.getElementById("valeur").innerHTML = parseInt(Score3) + "%";
  audio3.pause();
}

function tempsm4() {
  audio1.currentTime;
  console.log(audio4.currentTime);
  audio1.duration;
  console.log(audio4.duration);

  var Score4 = (audio4.currentTime * 100) / audio4.duration;
  console.log(Score4);
  document.getElementById("valeur").innerHTML = parseInt(Score4) + "%";
  audi4.pause();
}
