import Navbar from '../components/Navbar'
import Pokemones from '../components/Pokemones/Pokemones';
import MainNavigation from '../components/MainNavigation/MainNavigation';

function HomePage() {
	return (
		<>
			<div className="App flex flex-nowrap flex-col items-center">
				<h1 className="App uppercase text-5xl font-mono font-bold text-center mt-4 pb-4">
					Pokédex
				</h1>
				<MainNavigation />
				<Pokemones />
			</div>
		</>
	);
}

export default HomePage;
