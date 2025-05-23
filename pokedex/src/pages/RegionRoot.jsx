import { Outlet } from "react-router-dom"
import RegionNavigation from "../components/RegionNavigation"

function RegionRootLayout() {
	return(
		<>
			<Outlet />
		</>
	)
}

export default RegionRootLayout