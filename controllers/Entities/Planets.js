const Entity = require('./Entity.js');

module.exports = class Planets extends Entity {
	constructor(){
		super([
			'name',
			'diameter',
			'population',
		]);
	}
}