const settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://pokedex2.p.rapidapi.com/pokedex/uk",
	"method": "GET",
	"headers": {
		"X-RapidAPI-Key": "96154dea89mshcbfd4f768aacf0ap185158jsn4bd30598cf6f",
		"X-RapidAPI-Host": "pokedex2.p.rapidapi.com"
	}
};

$.ajax(settings).then(function (response) {
	console.log(response);
});