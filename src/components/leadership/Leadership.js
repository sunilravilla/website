import React, { useState } from 'react';
import './Leadership.scss';

function Leadership() {
	const data = {
		sectionTitle: 'Leadership Team',
		cards: [
			{
				name: 'P.R.Venketrama Raja',
				position: 'Founder, Mentor & Innovator in Chief (Chairman)',
				image: 'https://www.ramco.com/hubfs/PRV.jpg',
				link: 'https://www.ramco.com/leadership/pr-venketrama-raja/'
			},
			{
				name: 'Sandesh Bilagi',
				position: 'Chief Operating Officer',
				image: 'https://www.ramco.com/hubfs/Sandesh-Bilagi.jpg',
				link: 'https://www.linkedin.com/in/sandesh-bilagi-0037921/'
			}
		]
	};
	const [position, setPosition] = useState(0);

	const handlePrev = () => {
		if (position > 0) {
			setPosition(position - 1);
		}
	};

	const handleNext = () => {
		if (position < data.cards.length - 1) {
			setPosition(position + 1);
		}
	};

	return (
		<div className="Leadership">
			<h2>{data.sectionTitle}</h2>
			<div className="card-slider">
				<div className="container-fluid">
					<div className="row justify-content-center">
						<div className="slider-wrapper">
							<div
								className="slider"
								style={{
									transform: `translateX(-${
										position * (100 / data.cards.length)
									}%)`
								}}
							>
								{data.cards.map((card, index) => (
									<div className="col-md-6" key={index}>
										<div className="card text-center">
											<div className="card-image">
												<img
													src={card.image}
													alt={card.name}
													className="card-img-top h-100"
													loading="lazy"
												/>
											</div>
											<div className="card-body">
												<h5 className="card-title">
													<a
														target="_blank"
														href={card.link}
														className="stretched-link"
														rel="noreferrer"
													>
														{card.name}
													</a>
												</h5>
												<p className="card-text">{card.position}</p>
											</div>
										</div>
									</div>
								))}
							</div>
						</div>
						<button className="btn btn-prev" onClick={handlePrev}>
							Prev
						</button>
						<button className="btn btn-next" onClick={handleNext}>
							Next
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Leadership;
