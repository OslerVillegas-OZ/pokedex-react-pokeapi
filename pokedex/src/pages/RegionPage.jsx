import RegionNavigation from "../components/RegionNavigation/RegionNavigation";
import MainNavigation from "../components/MainNavigation/MainNavigation";

function RegionPage() {
	return (
		<>
			<MainNavigation />
			<h1>List of Regions</h1>
			<RegionNavigation />
		</>
	);
}

export default RegionPage;
