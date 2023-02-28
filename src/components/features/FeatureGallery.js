import React, { useState, useEffect } from 'react';
import img1 from '../heroSection/jcb.png';
import img2 from '../heroSection/agri.png';
import img3 from '../heroSection/jcb1.png';
import tipper from './tipper.png';
import freight from './freight.png';
import van from './van.png';
import './FeatureGallery.scss';
import backhoe from './backhoe.png';
import backhoe2 from './backhoe2.png';

const TABS = [
	{
		title: 'Tipper',
		description:
			'<p>Transport heavy goods in a large truck that can carry up to 30 tons.</p>',
		imageUrl: [tipper],

		baseColor: '50,50,50',
		secondColor: '200,200,200'
	},
	{
		title: 'Tractor',
		description:
			'<p>Transport goods and materials with a tractor that can pull heavy loads and equipment.</p>',
		imageUrl: freight,
		baseColor: '31,143,183',
		secondColor: '20,91,115'
	},
	{
		title: 'Truck',
		description:
			'<p>Transport goods and materials in a medium or heavy-duty truck that can carry up to 20 tons.</p>',
		imageUrl: freight,
		baseColor: '255,204,0',
		secondColor: '255,180,0'
	},
	{
		title: 'Backhoe Loader',
		description:
			'<p>Move earth and materials with a versatile backhoe loader that can dig, lift, and load.</p>',
		imageUrl: [backhoe, backhoe2],
		baseColor: '51,102,153',
		secondColor: '38,76,114'
	},
	{
		title: 'Van',
		description:
			'<p>Transport small to medium-sized goods and materials in a van that can carry up to 3 tons.</p>',
		imageUrl: van,
		baseColor: '38,50,56',
		secondColor: '18,23,26'
	}
];
const imagesMap = {
	0: img1,
	1: img2,
	2: img3
};

export default function FeaturesGallery() {
	const [currentTab, setCurrentTab] = useState(TABS[0]);

	// automatically update the current tab in particular time interval
	useEffect(() => {
		const interval = setInterval(() => {
			const currentIdx = TABS.findIndex(
				(singleTab) => singleTab.title === currentTab.title
			);
			const nextIdx = currentIdx + 1 === TABS.length ? 0 : currentIdx + 1;
			setCurrentTab(TABS[nextIdx]);
		}, 5000);
		return () => clearInterval(interval);
	}, [currentTab]);

	function handleTabClick(idx) {
		setCurrentTab(TABS[idx]);
	}

	return (
		<div className="GalleryWrapper">
			<div className="tabs-container">
				{TABS.map(function (singleTab, idx) {
					const isActive = singleTab.title === currentTab.title;
					return (
						<div
							className={`tab ${isActive ? 'active' : ''}`}
							key={idx}
							onClick={() => handleTabClick(idx)}
						>
							<div className="tab-title-container">
								<div className="circle-container">
									<div
										className="three-layers-circle"
										style={{
											backgroundColor: isActive
												? 'transparent'
												: `rgb(${singleTab.baseColor})`
										}}
									>
										<div
											className="inner-circle"
											style={{
												backgroundColor: `rgb(${singleTab.secondColor})`
											}}
										></div>
									</div>
								</div>
								<h4>{singleTab.title}</h4>
							</div>
						</div>
					);
				})}
			</div>
			<div className="image-container">
				{/* if currentTab.imageUrl is an array render random image */}
				{Array.isArray(currentTab.imageUrl) ? (
					<div className={currentTab.title}>
						<img
							src={
								currentTab.imageUrl[
									Math.floor(Math.random() * currentTab.imageUrl.length)
								]
							}
							alt={currentTab.title}
							className={currentTab.title}
						/>
					</div>
				) : (
					<div className={currentTab.title}>
						<img src={currentTab.imageUrl} alt={currentTab.title} />
					</div>
				)}
			</div>
		</div>
	);
}
