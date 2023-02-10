var pokemon = "bulbasaur"; //takes att of THIS element
const displayDiv = $("<div>") 

$("body").append(displayDiv);


function pokemonSearch() {
var queryURL = "https://pokeapi.co/api/v2/pokemon/" + pokemon;
    $.ajax({
    url: queryURL,
    method: "GET"
    }).then(function(response) {
    // console.log(response);
    let pokemon = response.name;

    let pPokemon = $("<p>")
    pPokemon.text("you are " + pokemon)


    let indexNo = response.game_indices[12].game_index;
    let pIndex = $("<p>")
    pIndex.text("#" + indexNo)


    let pokemonType = response.types[0].type.name;
    let pType = $("<p>")
    pType.text("type: " + pokemonType)


    let pokemonAbility = response.abilities[1].ability.name;
    let pAbility = $("<p>")
    pAbility.text("Ability: " + pokemonAbility)

    displayDiv.append(pPokemon);
    displayDiv.append(pIndex);
    displayDiv.append(pType);
    displayDiv.append(pAbility);
});
}
pokemonSearch();


let gifTag = $("<img>")
function gifSearch() {
    queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
    pokemon + "&api_key=KHQPUaPoLV1yN6ACsLvxGo4GGtPpy8XF"

    $.ajax({
        url: queryURL,
        method: "GET"
        }).then(function(response) {
        console.log(response);
        console.log(response.data[0].images.fixed_height.url);
        var gifURL = response.data[0].images.fixed_height.url;
        //
        gifTag.attr("src", gifURL);
        displayDiv.append(gifTag);
    });
}
gifSearch();