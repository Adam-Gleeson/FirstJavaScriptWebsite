function changeAll() 

{ 

  //Make sure function is being executed 

  alert("In function changeAll!"); 

  //Declare variables and set to null 

  let myImage = null; 

  let myDiv = null; 

  let myH1 = null; 

  let myPar = null; 

 
 

  //Access the first image and store a reference to it in the variable myImage. 

  //Then by manipulating the variable, we can manipulate the image 

 
 

  myImage = document.getElementById('img1'); 

  //Change the opacity of the image 

  myImage.style.opacity= '0.25'; 

  myImage.style.marginLeft='150px'; 

 
 

  //Get access to the div and make two changes 

  myDiv = document.getElementById('myDiv');
  myDiv.style.backgroundColor="red";
  myDiv.style.border = "2px solid";
 

  //Get access to the H1 and make 2 different changes 

  myH1 = document.getElementById('header');
  myH1.style.fontFamily="webdings";
  myH1.style.color="blue";
 

  //Get access to the paragraph and make 2 different changes again 
  myPar=document.getElementById('par1');
  myPar.style.fontSize="24px";
  myPar.style.direction="rtl";

} 