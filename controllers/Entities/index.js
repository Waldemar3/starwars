const People = require('./People.js'),
	  Planets = require('./Planets.js'),
 	  Starships = require('./Starships.js');


module.exports = [
	new People(),
	new Planets(),
	new Starships(),
];