function boumi() {
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
    smRect.left < missileRect.right &&
    smRect.right > missileRect.left &&
    smRect.top < missileRect.bottom &&
    smRect.bottom > missileRect.top
  ) {
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

    if (audio4.play()) {
      audio4.currentTime;
      console.log(audio4.currentTime);
      audio4.duration;
      console.log(audio4.duration);

      var Score4;
      Score4 = (audio4.currentTime * 100) / audio4.duration;
      console.log(Score4);
      document.getElementById("valeur").innerHTML = parseInt(Score4) + "%";
      audio4.pause();
    }
  }
}
//f2
function boumi2() {
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

    if (audio4.play()) {
      audio4.currentTime;
      console.log(audio4.currentTime);
      audio4.duration;
      console.log(audio4.duration);

      var Score4;
      Score4 = (audio4.currentTime * 100) / audio4.duration;
      console.log(Score4);
      document.getElementById("valeur").innerHTML = parseInt(Score4) + "%";
      audio4.pause();
    }
  }
}
//f3
function boumi3() {
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
    smRect.left < missile3Rect.right &&
    smRect.right > missile3Rect.left &&
    smRect.top < missile3Rect.bottom &&
    smRect.bottom > missile3Rect.top
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

    if (audio4.play()) {
      audio4.currentTime;
      console.log(audio4.currentTime);
      audio4.duration;
      console.log(audio4.duration);

      var Score4;
      Score4 = (audio4.currentTime * 100) / audio4.duration;
      console.log(Score4);
      document.getElementById("valeur").innerHTML = parseInt(Score4) + "%";
      audio4.pause();
    }
    step7[0].style.display = "flex";
    step6[0].style.display = "none";
    barre[0].style.visibility = "hidden";
  }
}
//f4
function boumi4() {
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
    smRect.left < missile4Rect.right &&
    smRect.right > missile4Rect.left &&
    smRect.top < missile4Rect.bottom &&
    smRect.bottom > missile4Rect.top
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

    if (audio4.play()) {
      audio4.currentTime;
      console.log(audio4.currentTime);
      audio4.duration;
      console.log(audio4.duration);

      var Score4;
      Score4 = (audio4.currentTime * 100) / audio4.duration;
      console.log(Score4);
      document.getElementById("valeur").innerHTML = parseInt(Score4) + "%";
      audio4.pause();
    }
    step7[0].style.display = "flex";
    step6[0].style.display = "none";
    barre[0].style.visibility = "hidden";
  }
}
//f5
function boumi5() {
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
    smRect.left < missile5Rect.right &&
    smRect.right > missile5Rect.left &&
    smRect.top < missile5Rect.bottom &&
    smRect.bottom > missile5Rect.top
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

    if (audio4.play()) {
      audio4.currentTime;
      console.log(audio4.currentTime);
      audio4.duration;
      console.log(audio4.duration);

      var Score4;
      Score4 = (audio4.currentTime * 100) / audio4.duration;
      console.log(Score4);
      document.getElementById("valeur").innerHTML = parseInt(Score4) + "%";
      audio4.pause();
    }
    step7[0].style.display = "flex";
    step6[0].style.display = "none";
    barre[0].style.visibility = "hidden";
  }
}
//f6
function boumi6() {
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
    smRect.left < missile6Rect.right &&
    smRect.right > missile6Rect.left &&
    smRect.top < missile6Rect.bottom &&
    smRect.bottom > missile6Rect.top
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

    if (audio4.play()) {
      audio4.currentTime;
      console.log(audio4.currentTime);
      audio4.duration;
      console.log(audio4.duration);

      var Score4;
      Score4 = (audio4.currentTime * 100) / audio4.duration;
      console.log(Score4);
      document.getElementById("valeur").innerHTML = parseInt(Score4) + "%";
      audio4.pause();
    }
    step7[0].style.display = "flex";
    step6[0].style.display = "none";
    barre[0].style.visibility = "hidden";
  }
}
//f7
function boumi7() {
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
    smRect.left < missile7Rect.right &&
    smRect.right > missile7Rect.left &&
    smRect.top < missile7Rect.bottom &&
    smRect.bottom > missile7Rect.top
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

    if (audio4.play()) {
      audio4.currentTime;
      console.log(audio4.currentTime);
      audio4.duration;
      console.log(audio4.duration);

      var Score4;
      Score4 = (audio4.currentTime * 100) / audio4.duration;
      console.log(Score4);
      document.getElementById("valeur").innerHTML = parseInt(Score4) + "%";
      audio4.pause();
    }
    step7[0].style.display = "flex";
    step6[0].style.display = "none";
    barre[0].style.visibility = "hidden";
  }
}
//f8
function boumi8() {
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
    smRect.left < missile8Rect.right &&
    smRect.right > missile8Rect.left &&
    smRect.top < missile8Rect.bottom &&
    smRect.bottom > missile8Rect.top
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

    if (audio4.play()) {
      audio4.currentTime;
      console.log(audio4.currentTime);
      audio4.duration;
      console.log(audio4.duration);

      var Score4;
      Score4 = (audio4.currentTime * 100) / audio4.duration;
      console.log(Score4);
      document.getElementById("valeur").innerHTML = parseInt(Score4) + "%";
      audio4.pause();
    }
    step7[0].style.display = "flex";
    step6[0].style.display = "none";
    barre[0].style.visibility = "hidden";
  }
}
//f9
function boumi9() {
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
    smRect.left < missile9Rect.right &&
    smRect.right > missile9Rect.left &&
    smRect.top < missile9Rect.bottom &&
    smRect.bottom > missile9Rect.top
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

    if (audio4.play()) {
      audio4.currentTime;
      console.log(audio4.currentTime);
      audio4.duration;
      console.log(audio4.duration);

      var Score4;
      Score4 = (audio4.currentTime * 100) / audio4.duration;
      console.log(Score4);
      document.getElementById("valeur").innerHTML = parseInt(Score4) + "%";
      audio4.pause();
    }
    step7[0].style.display = "flex";
    step6[0].style.display = "none";
    barre[0].style.visibility = "hidden";
  }
}
//f10
function boumi10() {
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
    smRect.left < missile10Rect.right &&
    smRect.right > missile10Rect.left &&
    smRect.top < missile10Rect.bottom &&
    smRect.bottom > missile10Rect.top
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

    if (audio4.play()) {
      audio4.currentTime;
      console.log(audio4.currentTime);
      audio4.duration;
      console.log(audio4.duration);

      var Score4;
      Score4 = (audio4.currentTime * 100) / audio4.duration;
      console.log(Score4);
      document.getElementById("valeur").innerHTML = parseInt(Score4) + "%";
      audio4.pause();
    }
    step7[0].style.display = "flex";
    step6[0].style.display = "none";
    barre[0].style.visibility = "hidden";
  }
}

function kaboomi() {
  boumi();
  boumi2();
  boumi3();
  boumi4();
  boumi5();
  boumi6();
  boumi7();
  boumi8();
  boumi9();
  boumi10();
  requestAnimationFrame(kaboomi);
}
