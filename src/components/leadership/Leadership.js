import React, { useState } from 'react';
import './Leadership.scss';
import gunasekhar from './gunasekhar.jpg';
import sunil from './sunil45.jpg';
import prasanth from './prasanth.jpg';

function Leadership() {
	const data = {
		sectionTitle: 'Leadership Team',
		cards: [
			{
				name: 'Gunasekhar Ravilla',
				position: 'Founder & CEO',
				image: gunasekhar,
				link: 'https://www.linkedin.com/in/gunasekharravilla/'
			},
			{
				name: 'Prasanth P R',
				position: 'Co-Founder & CTO',
				image: prasanth,
				link: 'https://www.linkedin.com/in/prasanthpadharthi/'
			},
			{
				name: 'Sunil Ravilla',
				position: 'Co-Founder & COO',
				image: sunil,
				link: 'https://www.linkedin.com/in/sunil-ravilla/'
			}
		]
	};

	const [position, setPosition] = useState(0);

	const handlePrev = () => {
		debugger;
		setPosition((prevPosition) => prevPosition - 1);
	};

	const handleNext = () => {
		setPosition((prevPosition) => prevPosition + 1);
	};

	const showButtons = data.cards.length > 5;

	return (
		<div className="Leadership" id="about">
			<h2>{data.sectionTitle}</h2>
			<div className="card-slider">
				<div className="container-fluid">
					<div className="row justify-content-center">
						{showButtons && position !== 0 && (
							<button className="prev-btn" onClick={handlePrev}>
								<i className="fa fa-chevron-left" />
							</button>
						)}
						<div className="col-md-12">
							<div className="card-deck">
								{data.cards.slice(position, position + 5).map((card, index) => (
									<div className="card text-center" key={index}>
										<div className="card-image">
											<a
												href={card.link}
												target="_blank"
												rel="noopener noreferrer"
											>
												<img
													src={card.image}
													alt={card.name}
													className="img-fluid"
												/>
											</a>
											<div className="card-body">
												<h5 className="card-title">{card.name}</h5>
												<p className="card-text">{card.position}</p>
											</div>
										</div>
									</div>
								))}
							</div>
						</div>
						{showButtons && (
							<button
								className="next-btn"
								onClick={handleNext}
								disabled={position === data.cards.length - 5}
							>
								<i className="fa fa-chevron-right" />
							</button>
						)}
					</div>
				</div>
			</div>
		</div>
	);
}
export default Leadership;
