import Navbar from "./components/Navabar.jsx";
import SearchBar from "./components/SearchBar.jsx";
import Pokemones from "./components/Pokemones/Pokemones.jsx";

function App() {

	return (
		<>
			<Navbar />
			<div className="App flex flex-nowrap flex-col items-center">
				<h1 className="App uppercase text-5xl font-mono font-bold text-center pb-4">Pokédex</h1>
				<SearchBar />
				<Pokemones />
			</div>
		</>
	)
}

export default App
