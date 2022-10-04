function drinkDrive()
{
    garbageCollector();

    document.getElementById("myDiv").style.cssText = "color: red;  font-size: 200px";
    document.getElementById("myImg").style.cssText = "height: 100%;  width: 100%";
}

function betaLoser()
{
    garbageCollector();

    document.getElementById("myDiv2").style.cssText = "color: red;  font-size: 200px";
    document.getElementById("myImg3").style.cssText = "height: 100%;  width: 100%";
}


function garbageCollector()
{
  //Remove Header
  document.getElementById("header").remove();
  //Remove Keys
  document.getElementById("myImg2").remove();

  //Remove Buttons
  document.getElementById("myInput").remove();
  document.getElementById("myInput1").remove();
}
