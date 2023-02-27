import React from 'react';
import './Header.scss';
import logo from './Logo2.png';

const Header = () => {
	// function toggleTheme() {
	// 	const themeSwitch = document.getElementById('theme-switch');
	// 	const header = document.querySelector('.header');

	// 	if (themeSwitch?.checked) {
	// 		// Set dark theme
	// 		header.classList.add('dark');
	// 	} else {
	// 		// Set light theme
	// 		header?.classList.remove('dark');
	// 	}
	// }
	return (
		<div className="header">
			<div className="logodiv" title="All Wheels">
				<img src={logo} alt="All Wheels" className="logo" />
			</div>

			<div className="nav">
				<div>
					<ul>
						<li>
							<a href="home">Home</a>
						</li>
						<li>
							<a href="about">About</a>
						</li>
						<li>
							<a href="contact">Contact Us</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Header;
