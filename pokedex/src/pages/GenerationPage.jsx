import { useParams, Link } from "react-router-dom";


import pokeData from "../data/pokemonData";

function GenerationPage() {
	const { genID } = useParams();
	const region = pokeData.find(reg => reg.id === Number(genID))

	if (!region) {
		return <p>Region not found!</p>
	}

	return (
		<>
			<h1>{region.name}</h1>
			<p>List of pokemones from</p>
			<p><span>{region.dexStart}</span> to {region.dexEnd}</p>
			<button><Link to="../.." relative='path'>Back</Link></button>
		</>
	)
}

export default GenerationPage