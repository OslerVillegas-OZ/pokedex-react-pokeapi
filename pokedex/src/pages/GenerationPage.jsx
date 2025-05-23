import { useParams, Link, useLoaderData } from "react-router-dom";

import PokemonCard from "../components/PokemonCard";
import pokeData from "../data/pokemonData";
import usePokemones from "../hooks/usePokemones";
import MainNavigation from "../components/MainNavigation/MainNavigation";

const URL_ENDPOINT = "https://pokeapi.co/api/v2/pokemon/?";

const getRegion = (id) => {
	const region = pokeData.find((reg) => reg.id === Number(id));
	return region;
};

function GenerationPage() {
	// Get pokemon data
	const pokeData = useLoaderData();

	const { genID } = useParams();
	const region = getRegion(genID);

	if (!region) {
		return <p>Region not found!</p>;
	}

	return (
		<>
			<MainNavigation />
			<h1>{region.name}</h1>
			<p>List of pokemones from</p>
			<p>
				<span>{region.dexStart}</span> to {region.dexEnd}
			</p>
			<ol className="pokemon-container-list">
				{pokeData.map((pokemon) => (
					<li className={pokemon.id} key={pokemon.id}>
						<PokemonCard {...pokemon} />
					</li>
				))}
			</ol>
			<button>
				<Link to="../.." relative="path">
					Back
				</Link>
			</button>
		</>
	);
}

export default GenerationPage;

export async function loader({ request, params }) {
	const id = params.genID;
	const region = getRegion(id);
	const url =
		URL_ENDPOINT + "limit=" + region.dexTotal + "&offset=" + region.dexStart;
	const response = await fetch(url);

	if (!response.ok) {
		throw new Response(
			JSON.stringify({ message: "Could not fetch the region details" }),
			{ status: 500 }
		);
	} else {
		const pokemonList = await response.json();
		console.log(pokemonList);
		const { next, results } = pokemonList;

		const fetchPokemonesDetails = async (url) => {
			const res = await fetch(url);
			const pokemonesInfo = await res.json();

			// Get info for modal
			const abilities = pokemonesInfo.abilities.map((a) => a.ability.name);
			const stats = pokemonesInfo.stats.map((s) => {
				return {
					name: s.stat.name,
					base: s.base_stat,
				};
			});
			const types = pokemonesInfo.types.map((t) => t.type.name);

			return {
				id: pokemonesInfo.id,
				name: pokemonesInfo.name,
				image:
					pokemonesInfo.sprites.other.dream_world.front_default ||
					pokemonesInfo.sprites.front_default,
				abilities,
				stats,
				types,
			};
		};

		const newPokemones = await Promise.all(
			results.map((pokemon) => fetchPokemonesDetails(pokemon.url))
		);

		// console.log(pokemonList);

		//return newPokemones;
		console.log(newPokemones)

		return newPokemones
	}
}
