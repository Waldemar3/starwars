const Entity = require('./Entity.js');

module.exports = class People extends Entity {
	constructor(){
		super([
			'name', 
			'gender', 
			'mass',
		]);
	}
}