

for (var i = 0; i < localStorage.length; i++) {

    var key = localStorage.key(i);
  
    // use key name to retrieve the corresponding value
    var value = localStorage.getItem(key);
  
    const textsection= document.createElement("p");
    const paratext = document.createTextNode(key + ": " + value);
    textsection.appendChild(paratext);
    
    const appenddiv = document.getElementById("div1");
    appenddiv.appendChild(textsection);
    window.localStorage.removeItem(`debug`);
    window.localStorage.removeItem(`randomName`)
  }


 var inputval= nameinput.value

 if (inputval=null){
     document.getElementById("startBtn").disabled = true;
 }else{   
      document.getElementById("startBtn").disabled = false;
}

