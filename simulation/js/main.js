var mto=0.5;
var menu_score = 0;
var naoh = 25;
var sand = 50;
function dispmenu(val)
{
   val.classList.toggle("change");
  menu_score = menu_score+1;
  if(menu_score==1)
  {
    document.getElementById("navbar").setAttribute("style","display:block");
    document.getElementById("simulation-cont").setAttribute("style","opacity:0.5");
      if(mto!=1)
        document.getElementById("matwork").setAttribute("style","opacity:1");
    menu_score=-1;
    document.body.style.backgroundColor="black";
  }
  else
    {
      if(mto!=1)
        document.getElementById("matwork").setAttribute("style","opacity:10");
         document.body.style.backgroundColor="white";
          document.getElementById("simulation-cont").setAttribute("style","opacity:01");
      document.getElementById("navbar").setAttribute("style","display:none");
	  }
}

function water()
{
	document.getElementById("simulation").innerHTML="<img src='images/water475.gif' width='200px'>";
	document.getElementById("water").style.display = "none";
	setTimeout(() => {
	document.getElementById("naoh").style.display = "block";
	}, 1500);
}

function naohSol()
{
	document.getElementById("naoh").style.display = "none";
	document.getElementById("sliderContainer").style.display = "block";
	document.getElementById("simulation").innerHTML="<img src='images/naoh25ml.jpg'>";
	var slider = document.getElementById("naohRange");
	var output = document.getElementById("naohValue");
	output.innerHTML = slider.value;
	
	slider.oninput = function() {
	naoh = output.innerHTML = this.value;
	}
}

function okNoah()
{
	if(naoh!=25)
	document.getElementById("simulation").innerHTML="<img src='images/alertNaoh.gif'>";
	else {
	document.getElementById("simulation").innerHTML="<img src='images/naoh25.gif' width=''>";
	document.getElementById("sliderContainer").style.display = "none";
	setTimeout(() => {
	document.getElementById("sand").style.display = "block";
	}, 5000);
	}
}

function weightMachine()
{
	document.getElementById("simulation").innerHTML="<img src='images/weighingMachine.jpg'>";
	document.getElementById("sand").style.display = "none";
	document.getElementById("sandContainer").style.display = "block";
	var slider = document.getElementById("sandRange");
	var output = document.getElementById("sandValue");
	output.innerHTML = slider.value;
	
	slider.oninput = function() {
	sand = output.innerHTML = this.value;
	}
}

function okSand()
{
	if(sand!=50)
	document.getElementById("simulation").innerHTML="<img src='images/alertSand.gif'>";
	else {
	document.getElementById("simulation").innerHTML="<img src='images/sand50gm.gif'>";
	document.getElementById("sandContainer").style.display = "none";
	setTimeout(() => {
	document.getElementById("sandSample").style.display = "block";
	}, 1000);
}
}

function sandSample()
{
	document.getElementById("simulation").innerHTML="<img src='images/CylFlask.jpg' width='50%'>";
	document.getElementById("sandSample").style.display = "none";
	document.getElementById("sandFlask").style.display = "block";
}

function sandFlask()
{
	document.getElementById("simulation").innerHTML="<img src='images/sandFlask.gif' width='50%'>";
	document.getElementById("sandFlask").style.display = "none";
	setTimeout(() => {
	document.getElementById("sandNaoh").style.display = "block";
	}, 3000);
}

function sandNaoh()
{
	document.getElementById("simulation").innerHTML="<img src='images/sandNaoh.gif' width='50%'>";
	document.getElementById("sandNaoh").style.display = "none";
	setTimeout(() => {
	document.getElementById("clayWasher").style.display = "block";
	}, 9000);
}

function clayWasher()
{
	document.getElementById("simulation").innerHTML="<img src='images/ClWasher.gif' width='50%'>";
	document.getElementById("clayWasher").style.display = "none";
	document.getElementById("clayMixer").style.display = "block";
}

function clayMixer()
{
	document.getElementById("simulation").innerHTML="<img src='images/clayMixer.gif' width='50%'>";
	document.getElementById("clayMixer").style.display = "none";
	document.getElementById("stopMixer").style.display = "block";
}

function stopMixer()
{
	document.getElementById("simulation").innerHTML="<img src='images/pourWater.gif' width='35%'>";
	document.getElementById("stopMixer").style.display = "none";
	setTimeout(() => {
	document.getElementById("pourWater").style.display = "block";
	}, 2000);
}

function pourWater()
{
	document.getElementById("simulation").innerHTML="<img src='images/wetSand.gif' width='50%'>";
	document.getElementById("pourWater").style.display = "none";
	setTimeout(() => {
	document.getElementById("oven").style.display = "block";
	}, 4000);
}

function oven()
{
	document.getElementById("simulation").innerHTML="<img src='images/driedOven.gif'>";
	document.getElementById("oven").style.display = "none";
	setTimeout(() => {
	document.getElementById("driedSand").style.display = "block";
	}, 1500);
}

function driedSand()
{
	document.getElementById("simulation").innerHTML="<img src='images/driedSand.gif' width='50%'>";
	document.getElementById("driedSand").style.display = "none";
	setTimeout(() => {
	document.getElementById("result").style.display = "block";
	}, 1000);
}

function result()
{
	document.getElementById("result").style.display = "none";
	document.getElementById("simulation").style.display = "none";
	document.getElementById("observations").style.display = 'block';
}

function resetfun()
{
	alert("Simulation will get restart.");
	location.reload();
}