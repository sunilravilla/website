import React from 'react';
import logo from '../header/Logo1.png';
import './Footer.scss';

function Footer() {
	const footerData = {
		logo: logo,
		socialLinks: [
			{
				name: 'Facebook',
				icon: 'fab fa-facebook-f',
				link: 'https://www.facebook.com'
			},
			{
				name: 'Twitter',
				icon: 'fab fa-twitter',
				link: 'https://www.twitter.com'
			},
			{
				name: 'Instagram',
				icon: 'fab fa-instagram',
				link: 'https://www.instagram.com'
			}
		],
		routes: [
			{
				title: 'About Us',
				links: [
					{
						title: 'Our Story',
						url: '/about/story'
					},
					{
						title: 'Leadership',
						url: '/about/leadership'
					},
					{
						title: 'Careers',
						url: '/about/careers'
					}
				]
			},
			{
				title: 'Services',
				links: [
					{
						title: 'Tipper',
						url: '/services/service1'
					},
					{
						title: 'Trucks',
						url: '/services/service2'
					},
					{
						title: 'Backhoe Loaders',
						url: '/services/service3'
					},
					{
						title: 'Excavators',
						url: '/services/service4'
					},
					{
						title: 'Bulldozers',
						url: '/services/service5'
					},
					{
						title: 'Skid Steer Loaders',
						url: '/services/service6'
					},
					{
						title: 'Wheel Loaders',
						url: '/services/service7'
					}
				]
			}
		],
		copyRight: '© 2023 All Wheels All rights reserved.',
		otherLinks: [
			{
				title: 'Privacy Policy',
				url: '/privacy'
			},
			{
				title: 'Terms of Use',
				url: '/terms'
			}
		],
		dropdown: {
			title: 'Select Country',
			icon: 'fa fa-chevron-circle-down  ',
			options: ['USA', 'Canada', 'Australia', 'United Kingdom']
		}
	};

	return (
		<footer className="footer" id="contact">
			<div className="footerContainer" id="footerContainer">
				<div className="footerTopContainer">
					<div className="socialContainer">
						<div className="web">
							<img
								src={footerData.logo || ''}
								alt="All Wheels"
								title="All Wheels"
							/>
							<div className="social_links">
								{footerData?.socialLinks?.map((item) => (
									<a
										href={item.link}
										className="event-elem"
										target="_blank"
										key={item.name}
										rel="noreferrer"
									>
										{/* fontawesome icons */}
										<i className={item.icon}></i>
									</a>
								))}
							</div>
						</div>
						<div className="routeContainer">
							{footerData?.routes?.map((route) => (
								<div className="routes" key={route.title}>
									<ul>
										{route?.links?.map((link) => (
											<li key={link.title}>
												<a href={link.url} className="event-elem">
													{link.title}
												</a>
											</li>
										))}
									</ul>
								</div>
							))}
						</div>
						{/* add addresses */}
						<div className="address">
							<ul>
								<li>
									<a href="tel:+919701531066" className="phone">
										<i className="fa fa-phone"></i>
										+91 9701531066
									</a>
								</li>
								<li>
									<a href="mailto:gunasekharravilla@gmail.com" className="mail">
										<i className="fa fa-envelope"></i>
										gunasekharravilla@gmail.com
									</a>
								</li>
								<li>
									<a
										href="https://goo.gl/maps/4Q4Q4Q4Q4Q4Q4Q4Q4"
										className="location"
									>
										<i className="fa fa-map-marker"></i>
										1234, 5th Avenue, New York, NY 10001
									</a>
								</li>
							</ul>
						</div>
					</div>
				</div>

				<div className="divider web"></div>

				<div className="footerBottomContainer">
					<div className="desc web">{footerData?.copyRight || ''}</div>
					<div className="otherlinks">
						<ul>
							{footerData?.otherLinks?.map((link) => (
								<li key={link.title}>
									<a href={link.url} className="event-elem">
										{link.title}
									</a>
								</li>
							))}
						</ul>
					</div>
				</div>
			</div>
		</footer>
	);
}
export default Footer;
