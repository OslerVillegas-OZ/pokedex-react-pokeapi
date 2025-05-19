import {Logo, Sun, Moon} from "./Icons.jsx";
import { styled } from "styled-components";
import SearchBar from "./SearchBar.jsx";

const StyleNav = styled.nav`
	background-color: yellow;
	& .toggle-switch-btn:checked {
      & + .toggle-switch-slider  {
          transform: translateX(3.5rem);
		      
      }
	}

  & .toggle-switch-slider {
      transform: translateX(0.25rem);
      transition: 0.5s ease;
  }
		
`

export default function Navbar() {
	return (
		<StyleNav className="navbar navbar-expand-lg navbar-dark bg-dark ">
			<div className="navbar-header flex flex-row justify-evenly pt-4 pb-4">
				<Logo />
				<div className="toggle-switch flex items-center justify-center">
					<Sun />
					<label className="toggle-switch__label bg-gray-600 w-20 h-7 rounded-2xl cursor-pointer flex flex-wrap items-center">
						<input type="checkbox" className="toggle-switch-btn w-full" hidden/>
						<span className="toggle-switch-slider w-5 h-5 rounded-full bg-white block"></span>
					</label>
					<Moon />
				</div>
			</div>
		</StyleNav>
	)
}