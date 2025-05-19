import ImgLogo from '/pokemon-logo.svg'
import Solrock from '/pokemon-solrock.svg'
import Lunatone from '/pokemon-lunatone.svg'
import IconSearch from '/icon-search.png'

export const Logo = () => {
	 return (
		 <img className="navbar-brand h-10 w-auto" src={ImgLogo} alt={ImgLogo.name}/>
	 )
}

export const Sun = () => {
	return (
		<img className="h-10 w-auto" src={Solrock} alt={Solrock.name} />
	)
}

export const Moon = () => {
	return (
		<img className="h-10 w-auto" src={Lunatone} alt={Lunatone.name} />
	)
}

export const SearchIcon = () => {
	return (
		<img className='h-5 w-auto invert' src={IconSearch} alt="Search" />
	)
}