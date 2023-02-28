import { useState } from 'react';
import img1 from '../heroSection/jcb.png';
import img2 from '../heroSection/agri.png';
import img3 from '../heroSection/jcb1.png';
import './FeatureGallery.scss';

const TABS = [
	{
		title: 'Lorry',
		description:
			'<p>Transport heavy goods in a large truck that can carry up to 30 tons.</p>',
		imageUrl: 'https://example.com/lorry-image.png',
		baseColor: '50,50,50',
		secondColor: '200,200,200'
	},
	{
		title: 'Tractor',
		description:
			'<p>Transport goods and materials with a tractor that can pull heavy loads and equipment.</p>',
		imageUrl: 'https://example.com/tractor-image.png',
		baseColor: '31,143,183',
		secondColor: '20,91,115'
	},
	{
		title: 'Truck',
		description:
			'<p>Transport goods and materials in a medium or heavy-duty truck that can carry up to 20 tons.</p>',
		imageUrl: 'https://example.com/truck-image.png',
		baseColor: '255,204,0',
		secondColor: '255,180,0'
	},
	{
		title: 'Backhoe Loader',
		description:
			'<p>Move earth and materials with a versatile backhoe loader that can dig, lift, and load.</p>',
		imageUrl: 'https://example.com/backhoe-loader-image.png',
		baseColor: '51,102,153',
		secondColor: '38,76,114'
	},
	{
		title: 'Van',
		description:
			'<p>Transport small to medium-sized goods and materials in a van that can carry up to 3 tons.</p>',
		imageUrl: 'https://example.com/van-image.png',
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

	// const imagesMarkup = TABS.map((singleTab, idx) => {
	// 	const isActive = singleTab.title === currentTab.title;
	// 	const isFirst = idx === 0;

	// 	return (
	// 		<div
	// 			key={singleTab.title}
	// 			className={`image-container ${isActive ? 'active' : ''}`}
	// 		>
	// 			<img src={singleTab.imageUrl} alt={singleTab.title} />
	// 		</div>
	// 	);
	// });

	// const tabsMarkup = TABS.map((singleTab, idx) => {
	// 	const isActive = singleTab.title === currentTab.title;

	// 	return (
	// 		<div
	// 			className={`tab ${isActive ? 'active' : ''}`}
	// 			key={idx}
	// 			onClick={() => handleTabClick(idx)}
	// 		>
	// 			<div className="tab-title-container">
	// 				<div className="circle-container">
	// 					<div
	// 						className="three-layers-circle"
	// 						style={{
	// 							backgroundColor: isActive
	// 								? 'transparent'
	// 								: `rgb(${singleTab.baseColor})`
	// 						}}
	// 					>
	// 						<div
	// 							className="inner-circle"
	// 							style={{ backgroundColor: `rgb(${singleTab.secondColor})` }}
	// 						/>
	// 					</div>
	// 				</div>
	// 				<h4>{singleTab.title}</h4>
	// 			</div>
	// 			<div className={`tab-content ${isActive ? 'open' : ''}`}>
	// 				<div
	// 					dangerouslySetInnerHTML={{ __html: singleTab.description }}
	// 				></div>
	// 			</div>
	// 		</div>
	// 	);
	// });

	function handleTabClick(idx) {
		setCurrentTab(TABS[idx]);
	}

	return (
		<div className="FeaturesGalleryWrapper ">
			<div className="GalleryWrapper">
				<div className="tabs-container">
					{/* loop the Tabs */}
					{TABS.map(function (singleTab, idx) {
						const isActive = singleTab.title === currentTab.title;
						return (
							<>
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
												/>
											</div>
										</div>
										<h4>{singleTab.title}</h4>
									</div>
									<div className={`tab-content ${isActive ? 'open' : ''}`}>
										<div
											dangerouslySetInnerHTML={{
												__html: singleTab.description
											}}
										></div>
									</div>
								</div>
							</>
						);
					})}
				</div>
				{
					// render currentTab
					<div className="image-container">
						<img src={currentTab.imageUrl} alt={currentTab.title} />
					</div>
				}
			</div>
		</div>
	);
}
