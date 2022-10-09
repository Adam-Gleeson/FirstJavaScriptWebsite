//Final Choice = Choice between Wise Mystical Tree and Skyler White

//variables
let Balls = 0;
let amountChugs = 0;
let excessDrinking =1;

 //-----------------------Final Choice Pictures
function change(joeBiden, arabJoeBiden){

  if(joeBiden == myDiv2){
    Balls=1;
    amountChugs = 1;
  }

  if (Balls == 1){
    if(amountChugs>=1){
  joeBiden.style.cssText = "color: red;  font-size: 165px";
  arabJoeBiden.style.cssText = "height: 100%;  width: 100%";

  //removing when Final Choice is activated
  for(let i = 1; i < 8; i++) 
  {
    document.getElementById("Joe"+i).remove(); //Remove pictures
  } 

  document.getElementById("Fat").remove(); //Remove of car keys section
}
  else
  alert("How are you planning on drink driving without any drink???"); //not drinking
}
else 
alert("Stop right there, how are you planning on drink driving? Without a car?") //no car chosen
}

//-----------------Choosing car---------------------------
function selectOption(){
    var Choice = document.getElementById("Joe5").value; //Finding the car of choice
    if(Choice==0)
      Balls = 0;
    else
    document.getElementById("CarPic").style ="background-image: url('Images/Car"+Choice+".jpg');" //Gets image of car of choice
    Balls = 1;
}

//-----------------Audio for Drinking---------------------------
function playAudio(Audio){
  if(Balls==1 && amountChugs==1){
    document.getElementById("audio"+Audio).play();
  }
}

//-----------------Getting a drink---------------------------
function chugJug() {
  if(amountChugs == 0){
  document.getElementById("george").style="background-image: url('Images/george.jpg');" //Once you begin drinking
  }
  document.getElementById("chugNoise").pause(); //cancels sound of drinking
  document.getElementById("chugNoise").currentTime = 0.5; //skips part of the audio
  amountChugs++;
  document.getElementById("chugCounter").innerHTML="You have chugged "+amountChugs+" times!"; //text that pops up once you drink
  document.getElementById("chugNoise").play(); //plays audio for drinking

  //alert for drinking
  if(amountChugs/10 == excessDrinking)
  {
    alert("Whoa!, slow down")
    excessDrinking++;
  }
}
