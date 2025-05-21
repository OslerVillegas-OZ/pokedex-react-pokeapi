import {useEffect, useState} from "react";

const URL_DEFAULT = 'https://pokeapi.co/api/v2/pokemon?limit=20&offset=0';
const URL_ENDPOINT = 'https://pokeapi.co/api/v2/pokemon/';

export default function usePokemones() {
	const [pokemones, setPokemones] = useState([]);
	const [nextURL, setNextURL] = useState('');
	const [showScroll, setShowScroll] = useState(true);   // Variable for the Infinite Scroll

	const fetchPokemones = async (url) => {
		const res = await fetch(url);
		const pokemonesInfoJSON = await res.json();

		// Get info for modal
		const abilities = pokemonesInfoJSON.abilities.map(a => a.ability.name );
		const stats = pokemonesInfoJSON.stats.map(s => {
			return {
				name: s.stat.name,
				base: s.base_stat,
			}
		});
		const types = pokemonesInfoJSON.types.map(t => t.type.name);

		return {
			id: pokemonesInfoJSON.id,
			name: pokemonesInfoJSON.name,
			image: pokemonesInfoJSON.sprites.other.dream_world.front_default || pokemonesInfoJSON.sprites.front_default,
			abilities,
			stats,
			types,
		}
	}

	const fetchNewPokemones = async (url = URL_DEFAULT) => {
		// Get list of pokemones
		const res = await fetch(url)
		const listPokemones = await res.json()
		const { next, results } = listPokemones;

		const newPokemones = await Promise.all(
			results.map((pokemon) => fetchPokemones(pokemon.url))   // Move fetch logic to an external function
		);

		return { next, newPokemones };
	}

	const getPokemones = async () => {
		const { next, newPokemones } = await fetchNewPokemones();
		setPokemones(newPokemones);
		setNextURL(next)
	}

	const morePokemones = async () => {
		const { next, newPokemones } = await fetchNewPokemones(nextURL);
		setPokemones(prevPokemones => [...prevPokemones, ...newPokemones]);
		next === null && setShowScroll(false);
		setNextURL(next);
	}

	useEffect(() => {
		getPokemones();
	}, [])

	const searchPokemon = async (search) => {
		const url = `${URL_ENDPOINT}${search.toLocaleLowerCase()}`;
		return await fetchPokemones(url);
	}

	return {pokemones, morePokemones, showScroll, searchPokemon};
}