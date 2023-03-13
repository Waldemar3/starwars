const { useState, useRef, Fragment } = React;


function Home(){
	const [ searching, setSearching ] = useState(false),
		  [ entities, setEntities ] = useState(null),
		  input = useRef();

	async function search(){
		const swapi = await (await fetch('http://localhost:3000/search?name='+input.current.value)).json();

		setSearching(false);
		setEntities(swapi);
	}

	return (
		<Fragment>
			{!searching ?
				<div className='search'>
					<input ref={input} type="text" />
					<button onClick={async () => {
						setSearching(true);

						await search();
					}}></button>
				</div> 
					:
				<h1>Идет поиск...</h1>
			}
			{entities ? <EntityList entities={entities} /> : <h1>Заполните поисковую строку</h1>}
		</Fragment>
	);
}

function EntityList({ entities }){
	if(entities == '-1') return <h1>Произошла непредвиденная ошибка. Поробуйте еще раз</h1>;

	const list = [];

	const entityDescription = {
		people: description => <People key={description.name} description={description} />,
		planets: description => <Planets key={description.name} description={description} />,
		starships: description => <Starships key={description.name} description={description} />,
	}

	Object.keys(entities).forEach(key=>list.push(...entities[key].map(entity=>entityDescription[key](entity))));

	return <ul>{list}</ul>
}

function People({description: {name, gender, mass}}){
	return <li><span>Воин по имени {name}</span><span>Характеристики: Пол: {gender}; Вес: {mass}</span></li>
}
function Planets({description: {name, diameter, population}}){
	return <li><span>Планета {name}</span><span>Характеристики: Диаметр: {diameter}; Кол-во население: {population}</span></li>
}
function Starships({description: {name, length, passengers}}){
	return <li><span>Звездолет {name}</span><span>Характеристики: Длина: {length}; Кол-во пассажиров: {passengers}</span></li>
}

const root = ReactDOM.createRoot(document.getElementById("app"));

root.render(
	<Home />
);