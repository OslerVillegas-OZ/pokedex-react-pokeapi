
function PokemonCard({id, name, image, showModal}) {
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

export default PokemonCard