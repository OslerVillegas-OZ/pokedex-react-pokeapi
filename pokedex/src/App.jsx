import { createBrowserRouter, RouterProvider } from "react-router-dom";

import RootLayout from "./pages/Root.jsx";
import HomePage from "./pages/HomePage.jsx";
import GenerationPage from "./Pages/GenerationPage.jsx";
import RegionPage from "./pages/RegionPage.jsx";
import RegionRootLayout from "./pages/RegionRoot.jsx";

// Create Router
const router = createBrowserRouter([
	{
		path: "/",
		element: <RootLayout />,
		children: [
			{ index: true, element: <HomePage /> },
			{
				path: "region",
				element: <RegionRootLayout />,
				children: [
					{ index: true, element: <RegionPage /> },
					{ path: "generation/:genID", element: <GenerationPage /> },
				],
			},
		],
	},
]);

function App() {
	return (
		<>
			<RouterProvider router={router} />
		</>
	);
}

export default App;
