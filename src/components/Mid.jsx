import React from 'react'

const Mid = () => {
	return (
		<section className="mid">
			<div className="mid__bg"></div>
			<div className="mid__split">
				<div
					className="mid__split__content mid__split__content--image"
					data-aos="fade-up"
				>
					<img src="./images/illustration-phones.svg" alt="" />
				</div>
				<div className="mid__split__content">
					<header
						data-aos="fade-right"
						data-aos-delay="100"
						data-aos-anchor=".mid__split__content--image"
					>
						<h2>State of the Art Infrastructure</h2>
					</header>
					<p
						className="mid__split__content__body"
						data-aos="fade-left"
						data-aos-delay="300"
						data-aos-anchor=".mid__split__content--image"
					>
						With reliability and speed in mind, worldwide data centers provide
						the backbone for ultra-fast connectivity. This ensures your site
						will load instantly, no matter where your readers are, keeping your
						site competitive.
					</p>
				</div>
			</div>
		</section>
	)
}

export default Mid
