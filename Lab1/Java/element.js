function changeAll()
{
    alert("In function changeAll!");

    let myImage = null;

let myDiv = null;

let myH1 = null;

let myPar = null;

myImage = document.getElementById("img1");
 myImage.style.marginLeft="150px"


 //header getting changed when button is clicked
 myH1 = document.getElementById("header");

 myH1.style.color = "red";
 myH1.style.textAlign = "center"

 myDiv = document.getElementById("myDiv");

 myDiv.style.backgroundColor = "pink";
 myDiv.style.textAlign = "center"

}