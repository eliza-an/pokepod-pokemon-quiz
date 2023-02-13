const urlParams = new URLSearchParams(window.location.search);
const scores = JSON.parse(urlParams.get("scores"));
console.log(scores);

let pokeInfo = $("#poke-data");
var pokemon = "bulbasaur"; //takes att of THIS element
const displayDiv = $("<div>");
//let pokeInfo = $("#poke-data");
let gifReturn = $("#gif-return");

$("body").append(displayDiv);

//function pokemonSearch() {
  var queryURL = "https://pokeapi.co/api/v2/pokemon/" + pokemon;
  $.ajax({
    url: queryURL,
    method: "GET",
  }).then(function (response) {
    // console.log(response);
    let pokemon = response.name;

    let pPokemon = $("<p>");
    pPokemon.text(pokemon);

    let indexNo = response.game_indices[12].game_index;
    let pIndex = $("<p>");
    pIndex.text(indexNo);

    let pokemonType = response.types[0].type.name;
    let pType = $("<p>");
    pType.text(pokemonType);

    let pokemonAbility = response.abilities[1].ability.name;
    let pAbility = $("<p>");
    pAbility.text(pokemonAbility);

    pokeInfo.append(pPokemon);
    pokeInfo.append(pIndex);
    pokeInfo.append(pType);
    pokeInfo.append(pAbility);
  });
  // pokeInfo.append(pPokemon);
  // pokeInfo.append(pIndex);
  // pokeInfo.append(pType);
  // pokeInfo.append(pAbility);
}

// pokemonSearch();

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
  return randomName;
}

//FORM for certificate//

document.getElementById("download-btn").addEventListener("click", function () {
  var doc = new jsPDF();
  var name = document.getElementById("name").value;
  var image = new Image();
  image.src =
    "https://i0.wp.com/katzenworld.co.uk/wp-content/uploads/2019/06/funny-cat.jpeg?w=1920&ssl=1";
  doc.text(20, 20, "Name: " + name);
  doc.addImage(image, "JPEG", 15, 40, 180, 160);
  doc.save("form.pdf");
});
