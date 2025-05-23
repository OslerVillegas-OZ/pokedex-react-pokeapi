import { NavLink } from "react-router-dom";
import pokeData from "../data/pokemonData";

function RegionNavigation() {
	return (
		<>
			<header>
				<nav>
					<ul className="flex justify-center">
						{pokeData.map((region) => (
							<li key={region.id}>
								<NavLink  to={`generation/${region.id}`}>
									{region.name}
								</NavLink>
							</li>
						))}
					</ul>
				</nav>
			</header>
		</>
	);
}

export default RegionNavigation;
