/*Redeveloped
Lab: Software Engineering
Exp:Identifying the Requirements from Problem Statements
File Name: simulation.js
Author: Prakriti Dhang */

function playsimulation() {

  document.getElementById("playbtn").style.display = "none";
  document.getElementById("pausebtn").style.display = "block";
  const highlighttxt = document.getElementById('m1');
  highlighttxt.style.webkitAnimationPlayState = "running";
  stopani = setTimeout(displayd11, 5500);

  function displayd11() {

    document.getElementById("pm1").style.display = "block";

    document.getElementById("pm2").style.display = "none";
    document.getElementById("m1").style.backgroundColor = "none";
    document.getElementById("pm3").style.display = "none";
    document.getElementById("m1").style.backgroundColor = "none";
    document.getElementById("d11").style.display = "block";
    document.getElementById("d13").style.display = "none";
    stopani = setTimeout(displayd12, 5000);

  }




  function displayd12() {
    document.getElementById("d12").style.display = "block";
    document.getElementById("d11").style.display = "none";
    document.getElementById("d13").style.display = "none";
    stopani = setTimeout(displayd13, 5500);

  }
  function displayd13() {
    document.getElementById("d13").style.display = "block";
    document.getElementById("d12").style.display = "none";
    document.getElementById("d11").style.display = "none";
    stopani = setTimeout(displaypm2, 4500);

  }
  function displaypm2() {
    const highlighttxt2 = document.getElementById('m2');
    highlighttxt2.style.webkitAnimationPlayState = "running";
    const highlighttxt = document.getElementById('m1');
    highlighttxt.style.background = "linear-gradient(90deg,white 50%, rgba(255, 255, 255, 0) 50%)";
    document.getElementById("d13").style.display = "none";
    document.getElementById("pm1").style.display = "none";
    document.getElementById("m1").style.backgroundColor = "none";

    stopani = setTimeout(displayd21, 5500);
  }

  function displayd21() {

    document.getElementById("pm2").style.display = "block";
    document.getElementById("d21").style.display = "block";

    document.getElementById("pm1").style.display = "none";
    document.getElementById("m1").style.backgroundColor = "none";
    document.getElementById("pm3").style.display = "none";
    stopani = setTimeout(displayd22, 5000);
  }

  function displayd22() {
    document.getElementById("d22").style.display = "block";
    document.getElementById("d21").style.display = "none";
    document.getElementById("d23").style.display = "none";
    stopani = setInterval(displayd23, 5000);

  }
  function displayd23() {
    document.getElementById("d23").style.display = "block";
    document.getElementById("d21").style.display = "none";
    document.getElementById("d22").style.display = "none";
    stopani = setTimeout(displaypm3, 4500);

  }

  function displaypm3() {
    const highlighttxt3 = document.getElementById('m3');
    highlighttxt3.style.webkitAnimationPlayState = "running";
    const highlighttxt2 = document.getElementById('m2');
    highlighttxt2.style.background = "linear-gradient(90deg,white 50%, rgba(255, 255, 255, 0) 50%)";
    document.getElementById("d23").style.display = "none";
    document.getElementById("pm2").style.display = "none";


    stopani = setTimeout(displayd31, 5500);
  }

  function displayd31() {
    document.getElementById("pm3").style.display = "block";
    document.getElementById("d31").style.display = "block";
    document.getElementById("pm2").style.display = "none";
    document.getElementById("m1").style.backgroundColor = "none";
    document.getElementById("pm1").style.display = "none";

    stopani = setTimeout(displayd32, 5000);

  }


  function displayd32() {
    document.getElementById("pm3").style.display = "block";
    document.getElementById("d32").style.display = "block";
    document.getElementById("d31").style.display = "none";
    stopani = setTimeout(stopsimulation, 5000);



  }

  function stopsimulation() {
    document.getElementById("pm3").style.display = "none";
    document.getElementById("d31").style.display = "none";
    document.getElementById("d32").style.display = "none";
    const highlightxt3 = document.getElementById('m3');
    highlightxt3.style.background = " linear-gradient(90deg, white 50%, rgba(255, 255, 255, 0) 50%)";
    stopani = setTimeout(endsimulation, 1000);
  }
  function endsimulation() {
    document.getElementById("playbtn").style.display = "block";
    document.getElementById("pausebtn").style.display = "none";
    clearTimeout(stopani);
  }

  //location.reload();
  /*clearTimeout(stopani);
  document.getElementById("d32").style.display="none";
  document.getElementById("d31").style.display="none";
  document.getElementById("pm3").style.display="none";
  document.getElementById("m3").style.backgroundColor="white";
  document.getElementById("playbtn").style.display="block";
  document.getElementById("pausebtn").style.display="none";*/





}

function pausesimulation() {
  const highlighttxt1 = document.getElementById('m1');
  highlighttxt1.style.webkitAnimationPlayState = "paused";
  const highlighttxt2 = document.getElementById('m2');
  highlighttxt2.style.webkitAnimationPlayState = "paused";
  const highlighttxt3 = document.getElementById('m3');
  highlighttxt3.style.webkitAnimationPlayState = "paused";
  document.getElementById("playbtn").style.display = "block";
  document.getElementById("pausebtn").style.display = "none";
  clearTimeout(stopani);

}

/*
function goback(){
 
  const highlighttxt = document.getElementById('m1');
    highlighttxt.style.webkitAnimationPlayState = "running";
    const highlighttxt3 = document.getElementById('m3');
    highlighttxt3.style.background="linear-gradient(90deg,white 50%, rgba(255, 255, 255, 0) 50%)";
    stopani = setTimeout(gostart, 4000);

    function gostart(){
    document.getElementById("pm1").style.display="block";
    document.getElementById("m1").style.backgroundColor="none";
    document.getElementById("d11").style.display="block";
    document.getElementById("d12").style.display="none";
    document.getElementById("d13").style.display="none";
    document.getElementById("pm2").style.display="none";
    document.getElementById("m2").style.backgroundColor="none";
    document.getElementById("pm3").style.display="none";
    document.getElementById("m3").style.backgroundColor="none";
    document.getElementById("playbtn").style.display="block";
    document.getElementById("pausebtn").style.display="none";
    clearTimeout(stopani);
    
    }
}


function goforward(){
  const highlighttxt3 = document.getElementById('m3');
  highlighttxt3.style.webkitAnimationPlayState = "running";
  const highlighttxt1 = document.getElementById('m1');
    highlighttxt1.style.background="linear-gradient(90deg,white 50%, rgba(255, 255, 255, 0) 50%)";

  stopani = setTimeout(goend, 2000);

  function goend(){
    document.getElementById("pm3").style.display="block";
    document.getElementById("m3").style.backgroundColor="none";
    document.getElementById("d31").style.display="none";
    document.getElementById("d32").style.display="block";
    document.getElementById("pm2").style.display="none";
    document.getElementById("m2").style.backgroundColor="none";
    document.getElementById("pm1").style.display="none";
    document.getElementById("m1").style.backgroundColor="none";
    document.getElementById("playbtn").style.display="block";
    document.getElementById("pausebtn").style.display="none";
   clearTimeout(stopani);
  
}
}*/

