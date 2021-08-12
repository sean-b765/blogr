import React from 'react'

const Banner = () => {
	return (
		<div className="banner">
			<div className="banner__bg"></div>

			<section className="banner__content">
				<h1
					className="banner__content__title"
					data-aos="fade-in"
					data-aos-once="true"
				>
					A modern publishing platform
				</h1>

				<p
					className="banner__content__body"
					data-aos="fade-in"
					data-aos-delay="500"
					data-aos-once="true"
				>
					Grow your audience and build your online brand.
				</p>

				<footer className="banner__content__footer">
					<button
						className="btn btn--solid"
						data-aos="fade-in"
						data-aos-delay="1000"
						data-aos-once="true"
						data-aos-anchor="banner__content__title"
					>
						Start for Free
					</button>
					<button
						className="btn btn--transparent"
						data-aos="fade-in"
						data-aos-delay="1250"
						data-aos-once="true"
						data-aos-anchor="banner__content__title"
					>
						Learn More
					</button>
				</footer>
			</section>
		</div>
	)
}

export default Banner
