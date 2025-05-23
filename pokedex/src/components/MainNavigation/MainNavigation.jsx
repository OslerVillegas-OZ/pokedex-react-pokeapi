import { NavLink } from "react-router-dom";
import classes from "./MainNavigation.module.css";

function MainNavigation() {
	return (
		<>
			<header>
				<nav>
					<ul className="text-center flex items-center justify-center">
						<li>
							<NavLink
								to="/"
								className={({ isActive }) => (isActive ? "active" : undefined)}
							>
								Home
							</NavLink>
						</li>
						<li>
							<NavLink
								to="/region"
								className={({ isActive }) => (isActive ? "active" : undefined)}
								style={({isActive}) => ({
									display: 'block',
									pointerEvents: isActive ? 'none' : 'auto'
								})}
								end
							>
								Regions
							</NavLink>
						</li>
					</ul>
				</nav>
			</header>
		</>
	);
}

export default MainNavigation;
