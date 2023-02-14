

// iterate localStorage
for (var i = 0; i < localStorage.length; i++) {

    // set iteration key name
    var key = localStorage.key(i);
  
    // use key name to retrieve the corresponding value
    var value = localStorage.getItem(key);
  
    // console.log the iteration key and value
    console.log(key + ": " + value);  
    const textsection= document.createElement("p");
    const paratext = document.createTextNode(key + ": " + value);
    textsection.appendChild(paratext);
    
    const appenddiv = document.getElementById("div1");
    appenddiv.appendChild(textsection);
    window.localStorage.removeItem(`debug`);
  }

var inputval= nameinput.value

if (inputval=null){
    document.getElementById("startBtn").disabled = true;
}else{   
     document.getElementById("startBtn").disabled = false;
}