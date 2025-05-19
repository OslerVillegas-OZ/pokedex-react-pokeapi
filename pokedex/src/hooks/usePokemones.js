import {useEffect, useState} from "react";

const URL_DEFAULT = 'https://pokeapi.co/api/v2/pokemon?limit=20&offset=0';

export default function usePokemones() {
	const [pokemones, setPokemones] = useState([]);
	const [nextURL, setNextURL] = useState('');

	const fetchPokemones = async (url = URL_DEFAULT) => {
		// Obtener listado de pokemones
		const res = await fetch(url)
		const listPokemones = await res.json()
		const { next, results } = listPokemones;

		const pokemonesInfoFetch = await Promise.all(
			results.map(async (pokemon) => {
				const res = await fetch(pokemon.url);
				const pokemonesInfoJSON = await res.json();

				return {
					id: pokemonesInfoJSON.id,
					name: pokemonesInfoJSON.name,
					image: pokemonesInfoJSON.sprites.other.dream_world.front_default,
				}
			})
		);
		// ?
		//setPokemones(pokemonesInfoFetch);
		return { next, pokemonesInfoFetch };
	}

	const getPokemones = async () => {
		const { next, pokemonesInfoFetch: newPokemones } = await fetchPokemones();
		setPokemones(newPokemones);
		setNextURL(next)
	}

	const morePokemones = async () => {
		const { next, pokemonesInfoFetch: newPokemones } = await fetchPokemones(nextURL);
		setPokemones(prevPokemones => [...prevPokemones, ...newPokemones]);
		setNextURL(next);
	}

	useEffect(() => {
		//fetchPokemones();
		getPokemones();
	}, [])

	return {pokemones, morePokemones};
}