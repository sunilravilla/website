import React from 'react';
import './Hero.scss';
import heroimage from './heroimage.png';

const Hero = () => {
	const scrollToSection = (e, sectionId) => {
		e.preventDefault();
		document.querySelector(`#${sectionId}`).scrollIntoView({
			behavior: 'smooth'
		});
	};
	return (
		<div className="hero-wrapper" id="home">
			<div className="contents">
				<h2 className="custom-over-title">
					Welcome to <span>ALL WHEELS</span>
				</h2>
				<h1 className="heading">The Ultimate Vehicle Destination</h1>
				<p className="description">
					Introducing our user-friendly booking app, designed to make the
					process of renting Agricultural, Transport and construction equipment
					as simple and hassle-free as possible. With just a few taps on your
					phone, you can browse our extensive selection of tractors, backhoe
					loaders, trucks, lorries, and other equipment, and book the one that
					suits your project requirements.
				</p>
				<div className="custom-button-group">
					<a
						href="features"
						className="button transparent"
						onClick={(e) => scrollToSection(e, 'features')}
					>
						Features <span>&rarr;</span>
					</a>
				</div>
			</div>
			<div className="image-container">
				<img src={heroimage} alt="heroimage" />
			</div>
		</div>
	);
};

export default Hero;
