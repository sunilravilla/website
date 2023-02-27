import React from 'react';
import './Hero.scss';
import heroimage from './heroimage.png';

const Hero = () => {
	return (
		<div class="hero-wrapper">
			<div class="contents">
				<h2 class="custom-over-title">
					Welcome to <span>ALL WHEELS</span>
				</h2>
				<h1 class="heading">The Ultimate Vehicle Destination</h1>
				<p class="description">
					Introducing our user-friendly booking app, designed to make the
					process of renting Agricultural, Transport and construction equipment
					as simple and hassle-free as possible. With just a few taps on your
					phone, you can browse our extensive selection of tractors, backhoe
					loaders, trucks, lorries, and other equipment, and book the one that
					suits your project requirements.
				</p>
				<div class="custom-button-group">
					<a href="#whitepaper" class="button transparent">
						Features <span>&rarr;</span>
					</a>
				</div>
			</div>
			<div class="image-container">
				<img src={heroimage} alt="heroimage" />
			</div>
		</div>
	);
};

export default Hero;
