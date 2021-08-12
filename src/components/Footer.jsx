import React from 'react'

const Footer = () => {
	return (
		<footer className="footer">
			<div className="footer__split">
				<div className="footer__split__logo" data-aos="zoom-out">
					<img src="./images/logo.svg" alt="Blogr" />
				</div>
				<nav className="footer__split__nav">
					<ul data-aos="zoom-in" className="product-ul">
						<h3>Product</h3>
						<li
							data-aos="fade-in"
							data-aos-delay="100"
							data-aos-anchor=".product-ul"
						>
							<a href="#">Info</a>
						</li>
						<li
							data-aos="fade-in"
							data-aos-delay="200"
							data-aos-anchor=".product-ul"
						>
							<a href="#">Pricing</a>
						</li>
						<li
							data-aos="fade-in"
							data-aos-delay="300"
							data-aos-anchor=".product-ul"
						>
							<a href="#">Reviews</a>
						</li>
					</ul>

					<ul data-aos="zoom-in" className="company-ul">
						<h3>Company</h3>
						<li
							data-aos="fade-in"
							data-aos-delay="100"
							data-aos-anchor=".company-ul"
						>
							<a href="#">Careers</a>
						</li>
						<li
							data-aos="fade-in"
							data-aos-delay="200"
							data-aos-anchor=".company-ul"
						>
							<a href="#">About</a>
						</li>
					</ul>

					<ul data-aos="zoom-in" className="connect-ul">
						<h3>Connect</h3>
						<li
							data-aos="fade-in"
							data-aos-delay="100"
							data-aos-anchor=".connect-ul"
						>
							<a href="#">Contact</a>
						</li>
						<li
							data-aos="fade-in"
							data-aos-delay="100"
							data-aos-anchor=".connect-ul"
						>
							<a href="#">Newsletter</a>
						</li>
						<li
							data-aos="fade-in"
							data-aos-delay="100"
							data-aos-anchor=".connect-ul"
						>
							<a href="#">LinkedIn</a>
						</li>
					</ul>
				</nav>
			</div>
			<div className="footer__created">
				<p>Created by Sean B | &copy; 2021</p>
			</div>
		</footer>
	)
}

export default Footer
