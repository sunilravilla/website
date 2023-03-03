import React from 'react';
import './Footer.scss';

function Footer() {
	const socialLinks = [
		{
			id: 1,
			label: 'Facebook',
			url: 'https://www.facebook.com/gunasekharravilla'
		},
		{ id: 2, label: 'Twitter', url: 'https://twitter.com/' },
		{
			id: 3,
			label: 'Instagram',
			url: 'https://www.instagram.com/gunasekharravilla/'
		}
	];
	return (
		<footer className="footer" id="contact">
			<div className="container">
				<div className="row">
					<div className="col-md-6">
						<ul className="list-inline">
							{socialLinks.map((link) => (
								<li key={link.id} className="list-inline-item">
									{/* open link in new tab */}
									<a href={link.url} target="_blank" rel="noopener noreferrer">
										{link.label}
									</a>
								</li>
							))}
						</ul>
					</div>
					<div className="col-md-6 text-md-right">
						<p>
							&copy; {new Date().getFullYear()} All Wheels. All rights reserved.
						</p>
					</div>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
