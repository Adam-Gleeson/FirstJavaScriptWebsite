
function change(joeBiden, arabJoeBiden){

  joeBiden.style.cssText = "color: red;  font-size: 200px";
  arabJoeBiden.style.cssText = "height: 100%;  width: 100%";

  for(let i = 1; i < 5; i++) 
  {
    document.getElementById("Joe"+i).remove();
  } 
  
  document.getElementById("audio").play();
}

function selectOption(){
    var Choice = document.getElementById("Car").value;
    document.getElementById("CarPic").style ="background-image: url('Images/Car"+Choice+".jpg');"
}
