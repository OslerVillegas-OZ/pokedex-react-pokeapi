import {styled} from "styled-components";

const StyledModal = styled.div`
	&.modal-pokemon-details {
		background-color: rgba(0, 0, 0, 0.5);
		position: fixed;
		top: 0;
		left: 0;
		width: 100vw;
		height: 100vh;
		place-items: center;
		transition: all 0.6s ease-in-out;
		z-index: 1;
	}

	& .modal-body {
		background-color: var(--color-bg);
		width: 40%;
		min-width: 400px;
		border-radius: 10px;
		position: absolute;
		padding: 1rem;
		display: flex;
		color: var(--color-txt)
	}

	& .image-container {
		display: grid;
		place-items: center;
	}

	& .image-details {
		width: 300px;
		aspect-ratio: 8/10;
	}

	& .pokemon-type {
		background-color: #26E;
		color: #eee;
		padding: 4px 6px;
		margin-right: 5px;
		border-radius: 5px;
		text-transform: capitalize;
	}

	& .pokemon-data {
		display: grid;
		padding: 0 .5rem;
		gap: 10px;
		flex: 1;
	}
	
	& .pokemon-data .card-title {
		margin: 0;
		text-transform: capitalize;
		flex: 1;
	}
	
	& .card-section {
		font-weight: 500;
	}
	
	& .pokemon-data section {
		background-color: var(--color-bg);
		border-radius: 10px;
		padding: 5px;
		box-shadow: 4px 4px 4px #21212120;
	}
	
	& .pokemon-stats {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: 10px;
	}
	
	& .pokemon-stats section {
		display: flex;
		align-items: center;
		flex-direction: column;
		text-transform: capitalize;
		background-color: var(--color-card);
		color: var(--color-txt);
	}
	
	& .pokemon-stats-points {
		border: 2px solid #000;
		border-radius: 50%;
		width: 30px;
		height: 30px;
		display: grid;
		place-items: center;
	}
`

export default function DetailsPokemon({show, pokemon, closeModal}) {
	return (
		<>
			<StyledModal
				className="modal-pokemon-details"
				onClick={closeModal}
				style={{display: show ? 'grid' : 'none'}}
			>
				<section className="modal-body">
					<div className="image-container">
						<img
							className="image-details"
							src={pokemon.image}
							alt={pokemon.name}
						/>
						<section>
							{pokemon.types?.map(type => <span key={type} className='pokemon-type capitalize'>{`${type.charAt(0).toUpperCase()}${type.slice(1)}`}</span>)}
						</section>
					</div>
					<div className="pokemon-data">
						<h2 className="card-title">{pokemon.name} #{pokemon.id}</h2>
						<h3 className="card-section">Abilities</h3>
						{pokemon.abilities?.map(ability => <span key={ability} className="pokemon-ability capitalize">{ability}</span>)}
						<h3 className="card-section">Stats</h3>
						<div className="pokemon-stats">
							{pokemon.stats?.map(stat => (
								<section key={stat.name}>
									<span className="pokemon-stats-points">{stat.base}</span>
									<span>{stat.name}</span>
								</section>
							))}
						</div>
					</div>
				</section>
			</StyledModal>
		</>
	)
}