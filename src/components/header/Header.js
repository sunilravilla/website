import React, { useEffect } from 'react';
import './Header.scss';
import logo from './Logo2.png';

const Header = () => {
	const scrollToSection = (e, sectionId) => {
		e.preventDefault();
		document.querySelector(`#${sectionId}`).scrollIntoView({
			behavior: 'smooth'
		});
	};
	useEffect(() => {
		const header = document.querySelector('.header');
		window.addEventListener('scroll', () => {
			const scrollPosition = window.scrollY;
			if (scrollPosition) {
				header.classList.add('shadow');
			} else {
				header.classList.remove('shadow');
			}
		});
	}, []);

	return (
		<div className={`header`}>
			<div className="logodiv" title="All Wheels">
				<img src={logo} alt="All Wheels" className="logo" />
			</div>

			<div className="nav">
				<div>
					<ul>
						<li>
							<a href="home" onClick={(e) => scrollToSection(e, 'home')}>
								Home
							</a>
						</li>
						<li>
							<a href="about" onClick={(e) => scrollToSection(e, 'about')}>
								About
							</a>
						</li>
						<li>
							<a href="contact" onClick={(e) => scrollToSection(e, 'contact')}>
								Contact Us
							</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Header;
