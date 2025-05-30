import { Outlet } from "react-router-dom"

import Navbar from "../components/Navbar"
import MainNavigation from "../components/MainNavigation/MainNavigation"

function RootLayout() {
	return (
		<>
			<Navbar />
			<main>
				<Outlet />
			</main>
		</>
	)
}

export default RootLayout