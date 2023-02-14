

for (var i = 0; i < localStorage.length; i++) {

    var key = localStorage.key(i);
  
    // use key name to retrieve the corresponding value
    var value = localStorage.getItem(key);
  
    var list=[]
    list.push(value)
    console.log(list[0])
 console.log( list[0].includes("pikachu"))
        const textsection= document.createElement("p");
    const paratext = document.createTextNode(key + ": " + value);
    textsection.appendChild(paratext);
    
    const appenddiv = document.getElementById("div1");
    appenddiv.appendChild(textsection);
    window.localStorage.removeItem(`debug`);
    window.localStorage.removeItem(`randomName`)

if(value[3]==="pikachu"){
    cardImage.attr({
        src: "assets/images/pikachu_mini.png",
        alt: "pikachu"});;
}else if (value[3]=== "bulbasaur"){
cardImage.attr({
        src: "assets/images/bulbasaur_mini.png",
        alt: "bulbasaur"});
  }else if(value[3]==="squirtle"){
    cardImage.attr({
        src: "assets/images/squirtle_mini.png",
        alt: "squirtle"});;
  }else if(value[3]==="charmander"){
    cardImage.attr({
        src: "assets/images/charmander_mini.png",
        alt: "charmander"});;
  } else {
    cardImage.attr({
      src: "assets/images/meowth_mini.png",
      alt: "meowth"});;
  }}