
  
let Balls = 0;

function change(joeBiden, arabJoeBiden){

  if(joeBiden == myDiv2){
    Balls=1;
  }

  if (Balls == 1){
  joeBiden.style.cssText = "color: red;  font-size: 165px";
  arabJoeBiden.style.cssText = "height: 100%;  width: 100%";

  for(let i = 1; i < 7; i++) 
  {
    document.getElementById("Joe"+i).remove();
  } 

  document.getElementById("CarPic").remove();
  document.getElementById("Fat").remove();
}
else 
alert("Stop right there, how are you planning on drink driving? Without a car?")
}

function selectOption(){
    var Choice = document.getElementById("Joe5").value;
    if(Choice==0)
      Balls = 0;
    else
    document.getElementById("CarPic").style ="background-image: url('Images/Car"+Choice+".jpg');"
    Balls = 1;
}

function playAudio(Audio){
  if(Balls==1){
    document.getElementById("audio"+Audio).play();
  }
}
