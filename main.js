function drinkDrive()
{
    garbageCollector();

    document.getElementById("myDiv").style.color = "red"
    document.getElementById("myDiv").style.fontSize = "200px"

    document.getElementById("myImg").style.height = "100%"
    document.getElementById("myImg").style.width = "100%"

}

function betaLoser()
{
    garbageCollector();

    document.getElementById("myDiv2").style.color = "red"
    document.getElementById("myDiv2").style.fontSize = "200px"

    document.getElementById("myImg3").style.height = "100%"
    document.getElementById("myImg3").style.width = "100%"

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
