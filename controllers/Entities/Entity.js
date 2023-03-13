//представим некий абстрактный класс который задаст базовое поведение для всех классов наследников, если бы мы использовали typescript

module.exports = class Entity {
	constructor(description){
		this.description = description;
		this.property = this.constructor.name.toLowerCase();
	}
	getFilterDescription(entity){
		const newEntity = {};

		this.description.forEach(key => {
			if(entity.hasOwnProperty(key)) newEntity[key] = entity[key];
		});

		return newEntity;
	}
}