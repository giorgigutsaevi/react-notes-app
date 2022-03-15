import logo from "../images/logo.png"

const Header = (props) => {
	return (
		<div className='notes-header'>
			<div className='logo-wrapper'>
				<img className='app-logo' src={logo} alt='react-logo'></img>
				<h1>React Notes</h1>
			</div>
			<button 
				className='toggle-mode-button'
				onClick={props.handleDarkMode}
				>
					{props.darkMode ? "Light Mode" : "Dark Mode"}
			</button>
		</div>
	)
}

export default Header;