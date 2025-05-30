import {useEffect, useState} from "react";

const URL_DEFAULT = 'https://pokeapi.co/api/v2/pokemon?limit=20&offset=0';
const URL_ENDPOINT = 'https://pokeapi.co/api/v2/pokemon/';

export default function usePokemones() {
	const [pokemones, setPokemones] = useState([]);
	const [nextURL, setNextURL] = useState('');
	const [showScroll, setShowScroll] = useState(true);   // Variable for the Infinite Scroll

	const fetchPokemonesDetails = async (url) => {
		const res = await fetch(url);
		const pokemonesInfo = await res.json();

		// Get info for modal
		const abilities = pokemonesInfo.abilities.map(a => a.ability.name );
		const stats = pokemonesInfo.stats.map(s => {
			return {
				name: s.stat.name,
				base: s.base_stat,
			}
		});
		const types = pokemonesInfo.types.map(t => t.type.name);

		return {
			id: pokemonesInfo.id,
			name: pokemonesInfo.name,
			image: pokemonesInfo.sprites.other.dream_world.front_default || pokemonesInfo.sprites.front_default,
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
			results.map((pokemon) => fetchPokemonesDetails(pokemon.url))
		);

		return { next, newPokemones };
	}

	const getPokemones = async (limit = 20, offset = 0) => {
		const url = `${URL_ENDPOINT}?limit=${limit}&offset=${offset}`
		const { next, newPokemones } = await fetchNewPokemones(url);
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
		return await fetchPokemonesDetails(url);
	}

	return {pokemones, morePokemones, showScroll, searchPokemon};
}