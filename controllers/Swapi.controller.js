module.exports = class Swapi {
	constructor(link, entities){

		this.link = link;
		this.entities = entities;

		this.entity = null;
		this.foundEntities = {};
	}

	async scan(entity, found = [], page = 1){
		const res = await (await fetch(`${this.link}${entity.property}?page=${page}`)).json();

		if(!res.next){

			this.foundEntities[entity.property] = found.map(e=>entity.getFilterDescription(e));

			return;
		}

		return this.scan(entity, [...found, ...res.results.filter(entity => new RegExp(this.entity, 'gi').test(entity.name))], page + 1);
	}

	async find(entity){
		this.entity = entity;

		await Promise.all(this.entities.map(entity => this.scan(entity))).catch(e=>this.foundEntities = -1);

		return this.foundEntities;	
	}
}
