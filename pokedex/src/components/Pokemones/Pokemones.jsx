import { useState } from "react";

import usePokemones from "../../hooks/usePokemones.js";
import InfiniteScroll from "react-infinite-scroll-component";
import Loader from "../Loader/Loader.jsx";
import PokemonDetails from "../PokemonDetails.jsx";
import SearchBar from "../SearchBar.jsx"
import "./Pokemones.css";


function Pokemon({id, name, image, showModal}) {
	return (
		<>
			<div
				className="pokemon-card flex flex-col flex-nowrap justify-center items-center transition-all ease-in-out hover:scale-105"
				onClick={showModal}
			>
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
	const { pokemones, morePokemones, showScroll, searchPokemon} = usePokemones();
	const [isPokemonDetailsOpen, setIsPokemonDetailsOpen] = useState({
		show: false,
		pokemon: {

		}
	});
	const [search, setSearch] = useState("");

	// Get pokemon info and open modal details
	const showPokemonDetails = (pokemon) => setIsPokemonDetailsOpen({
		show: true,
		pokemon,
	})

	// Clear state
	const hidePokemonDetails = () => {
		setIsPokemonDetailsOpen({
			show: false,
			pokemon: {}
		})
		setSearch("");
	}

	/*  Move useEffect() and fetchInfoPokemones() into the
			custom hook.  */

	const handleSubmit = async (e) => {
		e.preventDefault();
		// to avoid page reload
		if(!search) return;

		try {
			const pokemon = await searchPokemon(search);
			setIsPokemonDetailsOpen({ show: true, pokemon });
		} catch (error) {
			console.error("Pokemon not found:", error);
			setIsPokemonDetailsOpen({ show: true, pokemon: { name: "Pokemon Not found"} });
		}
	}

	return (
		<>
			<SearchBar  search={search} setSearch={setSearch} handleSearch={handleSubmit} />
			<PokemonDetails {...isPokemonDetailsOpen} closeModal={hidePokemonDetails} />
			<InfiniteScroll
				className="pokemon-container mb-56 !overflow-visible"
				dataLength={pokemones.length}   // Array length of information to fetch
				next={morePokemones}            // Function to call when scrolling down
				hasMore={showScroll}            // Boolean to load info
				loader={<Loader />}             // Component to show when loading
				endMessage={
					<h3>No more pokemones to catch.</h3>
				}
			>
				<ol className="pokemon-container-list">
					{pokemones.map((pokemon) => (
						<li key={pokemon.id}>
							<Pokemon
								{...pokemon}
								showModal={() => showPokemonDetails(pokemon)}
							/>
						</li>
					))}
				</ol>
			</InfiniteScroll>

			{/*<section className="pokemon-container">*/}
			{/*	<ol className="pokemon-container-list">*/}
			{/*		{pokemones.map((pokemon) => (*/}
			{/*			<li key={pokemon.id}>*/}
			{/*				<Pokemon {...pokemon} />*/}
			{/*			</li>*/}
			{/*		))}*/}
			{/*	</ol>*/}
			{/*	<button*/}
			{/*		className="search-button m-auto px-4 py-2 mb-8 bg-gray-800 text-gray-200 flex flex-row rounded-lg px-4 hover:scale-110 transition-all ease-in-out"*/}
			{/*		onClick={morePokemones}>*/}
			{/*		Show more Pokemons*/}
			{/*	</button>*/}
			{/*</section>*/}
		</>
	)
}