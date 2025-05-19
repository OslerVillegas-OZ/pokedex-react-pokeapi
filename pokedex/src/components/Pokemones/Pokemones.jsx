//import {useEffect, useState} from "react";
import "./Pokemones.css";
import usePokemones from "../../hooks/usePokemones.js";

function Pokemon({id, name, image}) {
	return (
		<>
			<div
				className="pokemon-card flex flex-col flex-nowrap justify-center items-center transition-all ease-in-out hover:scale-105">
				<img className="pokemong-image h-32 w-32" src={image} alt={name}/>
				<p className="pokemon-info flex justify-center">
					<span className="pokemon-id">#{id}</span>
					<span className="pokemon-name capitalize"> {name}</span>
				</p>
			</div>
		</>
	)
}

export default function Pokemones() {
	// const [pokemones, setPokemones] = useState([])
	//
	// useEffect(() => {
	// 	const getPokemones = async () => {
	// 		// Obtener listado de pokemones
	// 		const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=20&offset=0')
	// 		const listPokemones = await res.json()
	// 		const {results} = listPokemones;
	//
	// 		const pokemonesInfoFetch = results.map(async (pokemon) => {
	// 			const res = await fetch(pokemon.url);
	// 			const pokemonesInfoJSON = await res.json();
	//
	// 			return {
	// 				id: pokemonesInfoJSON.id,
	// 				name: pokemonesInfoJSON.name,
	// 				image: pokemonesInfoJSON.sprites.other.dream_world.front_default,
	// 			}
	// 		});
	//
	// 		setPokemones(await Promise.all(pokemonesInfoFetch));
	// 	}
	//
	// 	getPokemones();
	//
	// }, [])

	const {pokemones, morePokemones} = usePokemones();

	return (
		<>
			<section className="pokemon-container">
				<ol className="pokemon-container-list">
					{pokemones.map((pokemon) => (
						<li key={pokemon.id}>
							<Pokemon {...pokemon} />
						</li>
					))}
				</ol>
				<button
					className="search-button m-auto px-4 py-2 mb-8 bg-gray-800 text-gray-200 flex flex-row rounded-lg px-4 hover:scale-110 transition-all ease-in-out"
					onClick={morePokemones}>
					Show more Pokemons
				</button>
			</section>
		</>
	)
}