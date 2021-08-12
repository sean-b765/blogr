import React from 'react'

const FirstContent = () => {
	return (
		<section className="future content-box">
			<header data-aos="zoom-out" data-aos-delay="100">
				<h2 className="future__title">Designed for the future</h2>
			</header>
			<section className="future__split content-box__split">
				<div className="future__split__content content-box__split__content">
					<article>
						<header data-aos="fade-right">
							<h3>Introducing an extensible editor</h3>
						</header>
						<p data-aos="fade-in" data-aos-delay="300">
							Blogr features an exceedingly intuitive interface which lets you
							focus on one thing: creating content. The editor supports
							management of multiple blogs and allows easy manipulation of
							embeds such as images, videos, and Markdown. Extensibility with
							plugins and themes provide easy ways to add functionality or
							change the looks of a blog.
						</p>
					</article>
					<article>
						<header data-aos="fade-left">
							<h3>Robust content management</h3>
						</header>
						<p data-aos="fade-in" data-aos-delay="300">
							Flexible content management enables users to easily move through
							posts. Increase the usability of your blog by adding customized
							categories, sections, format, or flow. With this functionality,
							you’re in full control.
						</p>
					</article>
				</div>

				<div className="future__split__content future__split__content--image content-box__split__content content-box__split__content--image"></div>
			</section>
		</section>
	)
}

export default FirstContent
