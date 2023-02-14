

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

if(value==="pikachu"){
    cardImage.attr({
        src: "assets/images/pikachu_mini.png",
        alt: "pikachu"});;
}else if (value=== "bulbasaur"){
cardImage.attr({
        src: "assets/images/bulbasaur_mini.png",
        alt: "bulbasaur"});
  }else if(value=){

  }


 var inputval= nameinput.value

 if (inputval=null){
     document.getElementById("startBtn").disabled = true;
 }else{   
      document.getElementById("startBtn").disabled = false;
}

