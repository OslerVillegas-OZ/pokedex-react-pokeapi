import Navbar from "./components/Navbar.jsx";
import Pokemones from "./components/Pokemones/Pokemones.jsx";

function App() {

	return (
		<>
			<Navbar />
			<div className="App flex flex-nowrap flex-col items-center">
				<h1 className="App uppercase text-5xl font-mono font-bold text-center mt-4 pb-4">Pokédex</h1>
				<Pokemones />
			</div>
		</>
	)
}

export default App
