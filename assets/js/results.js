var pokemon = ""; //This needs to be result of quiz

let pokemonName = $("#pokemon-name-heading");
let pokeType = $("#poke-type");
let pokeIndex = $("#poke-index");
let pokeAbility = $("#poke-ability");
const urlParams = new URLSearchParams(window.location.search);
const scores = JSON.parse(urlParams.get("scores"));
console.log(scores);

let gifReturn = $("#gif-return");

var pikachuscore = scores.Pikachu;
var bulbasaurscore = scores.Bulbasaur;
var charmanderscore = scores.Charmander;
var squirtlescore = scores.Squirtle;

if (
  pikachuscore > bulbasaurscore &&
  pikachuscore > charmanderscore &&
  pikachuscore > squirtlescore
) {
  pokemon = "pikachu";
} else if (
  bulbasaurscore > pikachuscore &&
  bulbasaurscore > charmanderscore &&
  bulbasaurscore > squirtlescore
) {
  pokemon = "bulbasaur";
} else if (
  charmanderscore > pikachuscore &&
  charmanderscore > bulbasaurscore &&
  charmanderscore > squirtlescore
) {
  pokemon = "charmander";
} else if (
  squirtlescore > pikachuscore &&
  squirtlescore > bulbasaurscore &&
  squirtlescore > charmanderscore
) {
  pokemon = "squirtle";
} else {
  pokemon = "snorlax";
}

function pokemonSearch() {
  var queryURL = "https://pokeapi.co/api/v2/pokemon/" + pokemon;
  $.ajax({
    url: queryURL,
    method: "GET",
  }).then(function (response) {
    console.log(response);
    let pokeName = response.name;
    nameDisplay = pokeName.toUpperCase();
    pokemonName.text(nameDisplay);

    let indexNo = response.game_indices[13].game_index;
    let apiIndex = $("<span>");
    apiIndex.text("#" + indexNo);
    pokeIndex.append(apiIndex);

    let pokemonType = response.types[0].type.name;
    let apiType = $("<span>");
    apiType.text(pokemonType);
    pokeType.append(apiType);

    let pokemonAbility = response.abilities[0].ability.name;
    let apiAbility = $("<span>");
    apiAbility.text(pokemonAbility);
    pokeAbility.append(apiAbility);


localStorage.setItem("Pokemon", pokemon )
localStorage.setItem("Index Number", indexNo )
localStorage.setItem("Pokemon Type", pokemonType )
localStorage.setItem("Ability", pokemonAbility )




  });
}
pokemonSearch();

let gifTag = $("<img>");
function gifSearch() {
  queryURL =
    "https://api.giphy.com/v1/gifs/search?q=" +
    pokemon +
    "&api_key=KHQPUaPoLV1yN6ACsLvxGo4GGtPpy8XF";

  $.ajax({
    url: queryURL,
    method: "GET",
  }).then(function (response) {
    // console.log(response);
    // console.log(response.data[0].images.fixed_height.url);
    var gifURL = response.data[0].images.fixed_height.url;
    //
    gifTag.attr({
      src: gifURL,
      id: "gif-img",
    });
    gifReturn.append(gifTag);
  });
}
gifSearch();







const APIKey = `qEfp8gLbO9z879S740uTEQeF`;
const limit = `&limit=50`;
let pokeNames = [];
let randomPokeName = $(`#random-pokename`);
let generatorURL =
`https://api.fungenerators.com/name/generate?category=pokemon` +
limit +
`&api_key=` +
APIKey;

$.ajax({
  url: generatorURL,
  method: `GET`,
}).then(function (response) {
  console.log(response);
  let names = response.contents.names;
  console.log(names);
  for (let i = 0; i < names.length; i++)
  if (pokeNames.includes(names[i])) {
    return;
  } else {
    pokeNames.push(names[i]);
  }
  let nameDisplay = $(`<h1>`);
  nameDisplay.text(`Your pokename is` + ` ` + getRandom());
  randomPokeName.append(nameDisplay);
  
});

function getRandom(response) {
  let randomName = [];
  randomName.push(pokeNames[Math.floor(Math.random() * pokeNames.length)]);
  localStorage.setItem(`randomName`, randomName.toString())
  return randomName;

}


//FORM for certificate//

document.getElementById("download-btn").addEventListener("click", function () {
  var doc = new jsPDF();
  let image2 = new Image();
  image2.src = "assets/images/pokemon-logo-text-png.png";
  var name = document.getElementById("name").value;
  var image = new Image();
  if (pokemon === "bulbasaur") {
    image.src = "assets/images/bulbasaur.png";
  } else if (pokemon === "pikachu") {
    image.src = "assets/images/pikachu.png";
  } else if (pokemon === "squirtle") {
    image.src = "assets/images/squirtle.png";
  } else if (pokemon === "pikachu") {
    image.src = "assets/images/charmander.png";
  } else {
    image.src="assets/images/meowth.png"  
  }
  doc.addImage(image2, "JPEG", 80, 0, 50, 20);
  doc.text(
    20,
    40,
    "I hearby confirm that " +
      name +
      " should now be known as " +
      pokemon +
      " . \n This is required by PokeLaw and applies to all PokeJurisdictions"
  );

  doc.addImage(image, "JPEG", 15, 60, 180, 160);

  doc.save("form.pdf");
});

//if-else for changing main result picture:
let mainImage = $("#result-pokemon");

if (pokemon === "bulbasaur") {
  mainImage.attr("src", "assets/images/bulbasaur.png");
} else if (pokemon === "pikachu") {
  mainImage.attr("src", "assets/images/pikachu.png");
} else if (pokemon === "squirtle") {
  mainImage.attr("src", "assets/images/squirtle.png");
} else if (pokemon === "charmander") {
  mainImage.attr("src", "assets/images/charmander.png");
} else {
  mainImage.attr("src", "assets/images/meowth.png");
}
