import React from 'react'

const SecondContent = () => {
	return (
		<section className="laptop content-box">
			<section className="laptop__split content-box__split">
				<div className="laptop__split__content laptop__split__content--image content-box__split__content content-box__split__content--image"></div>
				<div className="laptop__split__content content-box__split__content">
					<article>
						<header data-aos="fade-in" className="free-open-simple">
							<h3>Free, open, simple</h3>
						</header>
						<p
							data-aos-anchor=".free-open-simple"
							data-aos="fade-right"
							data-aos-delay="250"
						>
							Blogr is a free and open source application backed by a large
							community of helpful developers. It supports features such as code
							syntax highlighting, RSS feeds, social media integration,
							third-party commenting tools, and works seamlessly with Google
							Analytics. The architecture is clean and is relatively easy to
							learn.
						</p>
					</article>
					<article>
						<header className="powerful-tooling" data-aos="fade-in">
							<h3>Powerful tooling</h3>
						</header>
						<p
							data-aos-anchor=".powerful-tooling"
							data-aos="fade-left"
							data-aos-delay="250"
						>
							Batteries included. We built a simple and straightforward CLI tool
							that makes customization and deployment a breeze, but capable of
							producing even the most complicated sites.
						</p>
					</article>
				</div>
			</section>
		</section>
	)
}

export default SecondContent
