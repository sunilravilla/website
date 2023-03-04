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
						title: 'Service 1',
						url: '/services/service1'
					},
					{
						title: 'Service 2',
						url: '/services/service2'
					},
					{
						title: 'Service 3',
						url: '/services/service3'
					}
				]
			}
		],
		copyRight: '© 2023 All rights reserved.',
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
		<footer className="footer">
			<div className="footerContainer" id="footerContainer">
				<div className="footerTopContainer">
					<div className="socialContainer">
						<div className="web">
							<img src={footerData.logo || ''} alt="All Wheels" />
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
						{footerData?.routes?.map((route) => (
							<div className="routeContainer" key={route.title}>
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
							<li className="web">
								<div className="pull-right">
									<div className="country-select" id="country-select">
										<div
											className="select"
											onClick={() => {
												document
													.getElementById('country-options')
													.classList.toggle('hide');
											}}
										>
											<i className={footerData?.dropdown?.icon}></i>
											<div className="selected">
												{footerData?.dropdown?.title}
											</div>
										</div>
										<ul
											className="select-options country-options hide"
											id="country-options"
										>
											{footerData?.dropdown?.options.map((option) => (
												<li key={option}>{option}</li>
											))}
										</ul>
									</div>
								</div>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</footer>
	);
}
export default Footer;
