//fonction colision
function boum() {
  var smRect = sm.getBoundingClientRect();
  var missileRect = missile.getBoundingClientRect();
  var missile2Rect = missile2.getBoundingClientRect();
  var missile3Rect = missile3.getBoundingClientRect();
  var missile4Rect = missile4.getBoundingClientRect();
  var missile5Rect = missile5.getBoundingClientRect();
  var missile6Rect = missile6.getBoundingClientRect();
  var missile7Rect = missile7.getBoundingClientRect();
  var missile8Rect = missile8.getBoundingClientRect();
  var missile9Rect = missile9.getBoundingClientRect();
  var missile10Rect = missile10.getBoundingClientRect();
  //condition
  if (
    (smRect.left < missileRect.right &&
      smRect.right > missileRect.left &&
      smRect.top < missileRect.bottom &&
      smRect.bottom > missileRect.top) ||
    audio1.currentTime == audio1.duration
  ) {
    //effet
    console.log("Ca va peter");
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
    step7[0].style.display = "flex";
    step6[0].style.display = "none";
    barre[0].style.visibility = "hidden";
    //affichage du score
    if (audio1.play) {
      audio1.currentTime;
      console.log(audio1.currentTime);
      audio1.duration;
      console.log(audio1.duration);

      var Score1;
      Score1 = (audio1.currentTime * 100) / audio1.duration;
      console.log(Score1);
      document.getElementById("valeur").innerHTML = parseInt(Score1) + "%";
      audio1.pause();
    }
  }
}
//f2
function boum2() {
  var smRect = sm.getBoundingClientRect();
  var missileRect = missile.getBoundingClientRect();
  var missile2Rect = missile2.getBoundingClientRect();
  var missile3Rect = missile3.getBoundingClientRect();
  var missile4Rect = missile4.getBoundingClientRect();
  var missile5Rect = missile5.getBoundingClientRect();
  var missile6Rect = missile6.getBoundingClientRect();
  var missile7Rect = missile7.getBoundingClientRect();
  var missile8Rect = missile8.getBoundingClientRect();
  var missile9Rect = missile9.getBoundingClientRect();
  var missile10Rect = missile10.getBoundingClientRect();

  if (
    (smRect.left < missile2Rect.right &&
      smRect.right > missile2Rect.left &&
      smRect.top < missile2Rect.bottom &&
      smRect.bottom > missile2Rect.top) ||
    audio4.currentTime == audio4.duration
  ) {
    console.log("Ca va peter2");
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
    step7[0].style.display = "flex";
    step6[0].style.display = "none";
    barre[0].style.visibility = "hidden";
    if (audio1.play) {
      audio1.currentTime;
      console.log(audio1.currentTime);
      audio1.duration;
      console.log(audio1.duration);

      var Score1;
      Score1 = (audio1.currentTime * 100) / audio1.duration;
      console.log(Score1);
      document.getElementById("valeur").innerHTML = parseInt(Score1) + "%";
      audio1.pause();
    }
  }
}
//f3
function boum3() {
  var smRect = sm.getBoundingClientRect();
  var missileRect = missile.getBoundingClientRect();
  var missile2Rect = missile2.getBoundingClientRect();
  var missile3Rect = missile3.getBoundingClientRect();
  var missile4Rect = missile4.getBoundingClientRect();
  var missile5Rect = missile5.getBoundingClientRect();
  var missile6Rect = missile6.getBoundingClientRect();
  var missile7Rect = missile7.getBoundingClientRect();
  var missile8Rect = missile8.getBoundingClientRect();
  var missile9Rect = missile9.getBoundingClientRect();
  var missile10Rect = missile10.getBoundingClientRect();

  if (
    (smRect.left < missile3Rect.right &&
      smRect.right > missile3Rect.left &&
      smRect.top < missile3Rect.bottom &&
      smRect.bottom > missile3Rect.top) ||
    audio4.currentTime == audio4.duration
  ) {
    console.log("Ca va peter3");
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
    if (audio1.play) {
      audio1.currentTime;
      console.log(audio1.currentTime);
      audio1.duration;
      console.log(audio1.duration);

      var Score1;
      Score1 = (audio1.currentTime * 100) / audio1.duration;
      console.log(Score1);
      document.getElementById("valeur").innerHTML = parseInt(Score1) + "%";
      audio1.pause();
    }

    step7[0].style.display = "flex";
    step6[0].style.display = "none";
    barre[0].style.visibility = "hidden";
  }
}
//f4
function boum4() {
  var smRect = sm.getBoundingClientRect();
  var missileRect = missile.getBoundingClientRect();
  var missile2Rect = missile2.getBoundingClientRect();
  var missile3Rect = missile3.getBoundingClientRect();
  var missile4Rect = missile4.getBoundingClientRect();
  var missile5Rect = missile5.getBoundingClientRect();
  var missile6Rect = missile6.getBoundingClientRect();
  var missile7Rect = missile7.getBoundingClientRect();
  var missile8Rect = missile8.getBoundingClientRect();
  var missile9Rect = missile9.getBoundingClientRect();
  var missile10Rect = missile10.getBoundingClientRect();

  if (
    (smRect.left < missile4Rect.right &&
      smRect.right > missile4Rect.left &&
      smRect.top < missile4Rect.bottom &&
      smRect.bottom > missile4Rect.top) ||
    audio4.currentTime == audio4.duration
  ) {
    console.log("Ca va peter4");
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
    if (audio1.play) {
      audio1.currentTime;
      console.log(audio1.currentTime);
      audio1.duration;
      console.log(audio1.duration);

      var Score1;
      Score1 = (audio1.currentTime * 100) / audio1.duration;
      console.log(Score1);
      document.getElementById("valeur").innerHTML = parseInt(Score1) + "%";
      audio1.pause();
    }

    step7[0].style.display = "flex";
    step6[0].style.display = "none";
    barre[0].style.visibility = "hidden";
  }
}
//f5
function boum5() {
  var smRect = sm.getBoundingClientRect();
  var missileRect = missile.getBoundingClientRect();
  var missile2Rect = missile2.getBoundingClientRect();
  var missile3Rect = missile3.getBoundingClientRect();
  var missile4Rect = missile4.getBoundingClientRect();
  var missile5Rect = missile5.getBoundingClientRect();
  var missile6Rect = missile6.getBoundingClientRect();
  var missile7Rect = missile7.getBoundingClientRect();
  var missile8Rect = missile8.getBoundingClientRect();
  var missile9Rect = missile9.getBoundingClientRect();
  var missile10Rect = missile10.getBoundingClientRect();

  if (
    (smRect.left < missile5Rect.right &&
      smRect.right > missile5Rect.left &&
      smRect.top < missile5Rect.bottom &&
      smRect.bottom > missile5Rect.top) ||
    audio4.currentTime == audio4.duration
  ) {
    console.log("Ca va peter5");
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
    if (audio1.play) {
      audio1.currentTime;
      console.log(audio1.currentTime);
      audio1.duration;
      console.log(audio1.duration);

      var Score1;
      Score1 = (audio1.currentTime * 100) / audio1.duration;
      console.log(Score1);
      document.getElementById("valeur").innerHTML = parseInt(Score1) + "%";
      audio1.pause();
    }

    step7[0].style.display = "flex";
    step6[0].style.display = "none";
    barre[0].style.visibility = "hidden";
  }
}
//f6
function boum6() {
  var smRect = sm.getBoundingClientRect();
  var missileRect = missile.getBoundingClientRect();
  var missile2Rect = missile2.getBoundingClientRect();
  var missile3Rect = missile3.getBoundingClientRect();
  var missile4Rect = missile4.getBoundingClientRect();
  var missile5Rect = missile5.getBoundingClientRect();
  var missile6Rect = missile6.getBoundingClientRect();
  var missile7Rect = missile7.getBoundingClientRect();
  var missile8Rect = missile8.getBoundingClientRect();
  var missile9Rect = missile9.getBoundingClientRect();
  var missile10Rect = missile10.getBoundingClientRect();

  if (
    (smRect.left < missile6Rect.right &&
      smRect.right > missile6Rect.left &&
      smRect.top < missile6Rect.bottom &&
      smRect.bottom > missile6Rect.top) ||
    audio4.currentTime == audio4.duration
  ) {
    console.log("Ca va peter6");
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
    if (audio1.play) {
      audio1.currentTime;
      console.log(audio1.currentTime);
      audio1.duration;
      console.log(audio1.duration);

      var Score1;
      Score1 = (audio1.currentTime * 100) / audio1.duration;
      console.log(Score1);
      document.getElementById("valeur").innerHTML = parseInt(Score1) + "%";
      audio1.pause();
    }

    step7[0].style.display = "flex";
    step6[0].style.display = "none";
    barre[0].style.visibility = "hidden";
  }
}
//f7
function boum7() {
  var smRect = sm.getBoundingClientRect();
  var missileRect = missile.getBoundingClientRect();
  var missile2Rect = missile2.getBoundingClientRect();
  var missile3Rect = missile3.getBoundingClientRect();
  var missile4Rect = missile4.getBoundingClientRect();
  var missile5Rect = missile5.getBoundingClientRect();
  var missile6Rect = missile6.getBoundingClientRect();
  var missile7Rect = missile7.getBoundingClientRect();
  var missile8Rect = missile8.getBoundingClientRect();
  var missile9Rect = missile9.getBoundingClientRect();
  var missile10Rect = missile10.getBoundingClientRect();

  if (
    (smRect.left < missile7Rect.right &&
      smRect.right > missile7Rect.left &&
      smRect.top < missile7Rect.bottom &&
      smRect.bottom > missile7Rect.top) ||
    audio4.currentTime == audio4.duration
  ) {
    console.log("Ca va peter7");
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
    if (audio1.play) {
      audio1.currentTime;
      console.log(audio1.currentTime);
      audio1.duration;
      console.log(audio1.duration);

      var Score1;
      Score1 = (audio1.currentTime * 100) / audio1.duration;
      console.log(Score1);
      document.getElementById("valeur").innerHTML = parseInt(Score1) + "%";
      audio1.pause();
    }

    step7[0].style.display = "flex";
    step6[0].style.display = "none";
    barre[0].style.visibility = "hidden";
  }
}
//f8
function boum8() {
  var smRect = sm.getBoundingClientRect();
  var missileRect = missile.getBoundingClientRect();
  var missile2Rect = missile2.getBoundingClientRect();
  var missile3Rect = missile3.getBoundingClientRect();
  var missile4Rect = missile4.getBoundingClientRect();
  var missile5Rect = missile5.getBoundingClientRect();
  var missile6Rect = missile6.getBoundingClientRect();
  var missile7Rect = missile7.getBoundingClientRect();
  var missile8Rect = missile8.getBoundingClientRect();
  var missile9Rect = missile9.getBoundingClientRect();
  var missile10Rect = missile10.getBoundingClientRect();

  if (
    (smRect.left < missile8Rect.right &&
      smRect.right > missile8Rect.left &&
      smRect.top < missile8Rect.bottom &&
      smRect.bottom > missile8Rect.top) ||
    audio4.currentTime == audio4.duration
  ) {
    console.log("Ca va peter8");
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
    if (audio1.play) {
      audio1.currentTime;
      console.log(audio1.currentTime);
      audio1.duration;
      console.log(audio1.duration);

      var Score1;
      Score1 = (audio1.currentTime * 100) / audio1.duration;
      console.log(Score1);
      document.getElementById("valeur").innerHTML = parseInt(Score1) + "%";
      audio1.pause();
    }

    step7[0].style.display = "flex";
    step6[0].style.display = "none";
    barre[0].style.visibility = "hidden";
  }
}
//f9
function boum9() {
  var smRect = sm.getBoundingClientRect();
  var missileRect = missile.getBoundingClientRect();
  var missile2Rect = missile2.getBoundingClientRect();
  var missile3Rect = missile3.getBoundingClientRect();
  var missile4Rect = missile4.getBoundingClientRect();
  var missile5Rect = missile5.getBoundingClientRect();
  var missile6Rect = missile6.getBoundingClientRect();
  var missile7Rect = missile7.getBoundingClientRect();
  var missile8Rect = missile8.getBoundingClientRect();
  var missile9Rect = missile9.getBoundingClientRect();
  var missile10Rect = missile10.getBoundingClientRect();

  if (
    (smRect.left < missile9Rect.right &&
      smRect.right > missile9Rect.left &&
      smRect.top < missile9Rect.bottom &&
      smRect.bottom > missile9Rect.top) ||
    audio4.currentTime == audio4.duration
  ) {
    console.log("Ca va peter9");
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
    if (audio1.play) {
      audio1.currentTime;
      console.log(audio1.currentTime);
      audio1.duration;
      console.log(audio1.duration);

      var Score1;
      Score1 = (audio1.currentTime * 100) / audio1.duration;
      console.log(Score1);
      document.getElementById("valeur").innerHTML = parseInt(Score1) + "%";
      audio1.pause();
    }

    step7[0].style.display = "flex";
    step6[0].style.display = "none";
    barre[0].style.visibility = "hidden";
  }
}
//f10
function boum10() {
  var smRect = sm.getBoundingClientRect();
  var missileRect = missile.getBoundingClientRect();
  var missile2Rect = missile2.getBoundingClientRect();
  var missile3Rect = missile3.getBoundingClientRect();
  var missile4Rect = missile4.getBoundingClientRect();
  var missile5Rect = missile5.getBoundingClientRect();
  var missile6Rect = missile6.getBoundingClientRect();
  var missile7Rect = missile7.getBoundingClientRect();
  var missile8Rect = missile8.getBoundingClientRect();
  var missile9Rect = missile9.getBoundingClientRect();
  var missile10Rect = missile10.getBoundingClientRect();

  if (
    (smRect.left < missile10Rect.right &&
      smRect.right > missile10Rect.left &&
      smRect.top < missile10Rect.bottom &&
      smRect.bottom > missile10Rect.top) ||
    audio4.currentTime == audio4.duration
  ) {
    console.log("Ca va peter10");
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
    if (audio1.play) {
      audio1.currentTime;
      console.log(audio1.currentTime);
      audio1.duration;
      console.log(audio1.duration);

      var Score1;
      Score1 = (audio1.currentTime * 100) / audio1.duration;
      console.log(Score1);
      document.getElementById("valeur").innerHTML = parseInt(Score1) + "%";
      audio1.pause();
    }

    step7[0].style.display = "flex";
    step6[0].style.display = "none";
    barre[0].style.visibility = "hidden";
  }
}
//application par frame
function kaboom() {
  boum();
  boum2();
  boum3();
  boum4();
  boum5();
  boum6();
  boum7();
  boum8();
  boum9();
  boum10();
  requestAnimationFrame(kaboom);
}
