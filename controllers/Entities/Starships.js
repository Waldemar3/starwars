const Entity = require('./Entity.js');

module.exports = class Starships extends Entity {
	constructor(){
		super([
			'name', 
			'length', 
			'passengers',
		]);
	}
}