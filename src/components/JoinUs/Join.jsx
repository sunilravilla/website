import React from 'react';
import './Joinus.scss';

function FeatureCard({ imgSrc, imgAlt, heading, text, btnLabel, btnUrl }) {
	return (
		<div className="c-feature-card-spot__card">
			<div className="c-feature-card-spot__image">
				<div className="u-lazy">
					<img
						data-src={imgSrc}
						alt={imgAlt}
						className="lazy"
						data-ll-status="loaded"
						src={imgSrc}
					/>
				</div>
			</div>
			<div className="c-feature-card-spot__body">
				<h3 className="font-maisonDemi">{heading}</h3>
				<p className="font-maisonBook">{text}</p>
				<a
					href={btnUrl}
					aria-label={heading}
					className="btn"
					data-gtm="2021_homepage_employee_join"
				>
					{btnLabel}
				</a>
			</div>
		</div>
	);
}

function FeatureCardGrid() {
	const featureCards = [
		{
			imgSrc: 'https://lelogama.go-jek.com/prime/upload/image/employees.svg',
			imgAlt: 'Gojek Indonesia',
			heading: 'Consumers',
			text: 'The app offers an extensive selection of equipment, including tractors, backhoe loaders, trucks, lorries, and more, to suit a range of project requirements.',
			btnLabel: 'App Coming Soon...',
			btnUrl: './employee'
		},
		{
			imgSrc:
				'https://lelogama.go-jek.com/prime/upload/image/driver_partner.svg',
			imgAlt: 'Driver',
			heading: 'Driver partners',
			text: 'As a driver partner, you are essentially your own boss. You have control over your schedule, your earnings, and the type of deals you accept. This independence can be very appealing to some individuals.',
			btnLabel: 'App Coming Soon...',
			btnUrl: './driver'
		},
		{
			imgSrc:
				'https://lelogama.go-jek.com/prime/upload/image/merchant_partner.svg',
			imgAlt: 'Merchant',
			heading: 'Agent partners',
			text: "Becoming an Agent or broker for All Wheels can be a great way to earn extra income. As a partner, you'll receive a commission on each ride that your referred drivers complete.",
			btnLabel: 'App Coming Soon...',
			btnUrl: './merchant'
		}
	];

	return (
		<div className="joinUs" id="about">
			<div>
				<h2 className="caption">Join With Us</h2>
			</div>
			<div className="cards">
				{featureCards.map((card) => (
					<FeatureCard
						imgSrc={card.imgSrc}
						imgAlt={card.imgAlt}
						heading={card.heading}
						text={card.text}
						btnLabel={card.btnLabel}
						btnUrl={card.btnUrl}
					/>
				))}
			</div>
		</div>
	);
}
export default FeatureCardGrid;
