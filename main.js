function change(joeBiden, arabJoeBiden){ 
    joeBiden.style.cssText = "color: red;  font-size: 200px";
    arabJoeBiden.style.cssText = "height: 100%;  width: 100%";
      
    for(let i = 1; i < 5; i++) {
        document.getElementById("Joe"+i).remove();
    }
     }
