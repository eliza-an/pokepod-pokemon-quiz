const APIKey = `qEfp8gLbO9z879S740uTEQeF`
const limit = `&limit=50`
let pokeNames = []


let generatorURL = (`https://api.fungenerators.com/name/generate?category=pokemon` + limit + `&api_key=` + APIKey)
$.ajax({
	url: generatorURL,
	method: `GET`
}).then(function (response) {
	console.log(response)
	let names = response.contents.names
	console.log(names)
	for (let i = 0; i < names.length; i++)
		if (pokeNames.includes(names[i])) {
			return;
		} else {
			pokeNames.push(names[i])
		}
		console.log(pokeNames);
		getRandom();
})

function getRandom(response) {
	let randomName = [];
	randomName.push(pokeNames[Math.floor(Math.random() * pokeNames.length)]);
	console.log(randomName);
return randomName;

}
