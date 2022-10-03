function changeAll()
{

    let myH1 = null;
    let myDiv = null;
    let myImg = null;
    let myImg2 = null;

    myH1 = document.getElementById("header")

    myH1.style.color = "green"
    myH1.style.fontSize = "0"

    myDiv = document.getElementById("myDiv")

    myDiv.style.color = "red"
    myDiv.style.fontSize = "200px"

  myImg = document.getElementById("myImg")

  myImg.style.height = "100%"
  myImg.style.width = "100%"

  myImg2 = document.getElementById("myImg2")

  myImg2.style.height = "0"
  myImg2.style.width = "0"
    
}