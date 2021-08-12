import React, { Component } from 'react'

export class Header extends Component {
	constructor(props) {
		super(props)

		this.handleWidthChange = () => {
			this.setState({ ...this.state, w: window.innerWidth })
		}

		this.state = {
			open: false,
			w: 0,
			drop: '',
		}
	}

	componentDidMount = () => {
		window.addEventListener('resize', this.handleWidthChange)
	}

	componentWillUnmount = () => {
		window.removeEventListener('resize', this.handleWidthChange)
	}

	render() {
		return (
			<header className="header">
				<div className="banner__bg"></div>

				<nav className="header__nav">
					<img
						className="header__nav__logo"
						src="./images/logo.svg"
						alt="Blogr"
						data-aos="zoom-in-right"
						data-aos-duration="700"
					/>

					{/* Desktop menu */}
					<ul
						className="header__nav__menu"
						aria-hidden={this.state.w < 768 ? 'true' : 'false'}
					>
						<li data-aos="fade-in" data-aos-delay="300">
							<a href="#">Product</a>

							<ul>
								<li>
									<a href="#">Info</a>
								</li>
								<li>
									<a href="#">Pricing</a>
								</li>
								<li>
									<a href="#">Reviews</a>
								</li>
							</ul>
						</li>
						<li data-aos="fade-in" data-aos-delay="400">
							<a href="#">Company</a>

							<ul>
								<li>
									<a href="#">Careers</a>
								</li>
								<li>
									<a href="#">About</a>
								</li>
							</ul>
						</li>
						<li data-aos="fade-in" data-aos-delay="500">
							<a href="#">Connect</a>

							{/* Hovering li shows ul dropdown */}
							<ul>
								<li>
									<a href="#">Contact</a>
								</li>
								<li>
									<a href="#">Newsletter</a>
								</li>
								<li>
									<a href="#">LinkedIn</a>
								</li>
							</ul>
						</li>
					</ul>

					{/* Mobile menu */}

					<ul
						className={
							this.state.open
								? 'header__nav__menu--mobile header__nav__menu--mobile-open'
								: 'header__nav__menu--mobile'
						}
						aria-hidden={this.state.w < 768 ? 'false' : 'true'}
					>
						<li
							className={this.state.drop === 'product' ? 'expanded' : ''}
							onClick={() => {
								this.state.drop !== 'product'
									? this.setState({ ...this.state, drop: 'product' })
									: this.setState({ ...this.state, drop: '' })
							}}
						>
							<p>Product</p>

							<ul>
								<li>
									<a href="#">Info</a>
								</li>
								<li>
									<a href="#">Pricing</a>
								</li>
								<li>
									<a href="#">Reviews</a>
								</li>
							</ul>
						</li>
						<li
							className={this.state.drop === 'company' ? 'expanded' : ''}
							onClick={() => {
								this.state.drop !== 'company'
									? this.setState({ ...this.state, drop: 'company' })
									: this.setState({ ...this.state, drop: '' })
							}}
						>
							<p>Company</p>

							<ul>
								<li>
									<a href="#">Careers</a>
								</li>
								<li>
									<a href="#">About</a>
								</li>
							</ul>
						</li>
						<li
							className={this.state.drop === 'connect' ? 'expanded' : ''}
							onClick={() => {
								this.state.drop !== 'connect'
									? this.setState({ ...this.state, drop: 'connect' })
									: this.setState({ ...this.state, drop: '' })
							}}
						>
							<p>Connect</p>

							{/* Clicking li shows ul dropdown */}
							<ul>
								<li>
									<a href="#">Contact</a>
								</li>
								<li>
									<a href="#">Newsletter</a>
								</li>
								<li>
									<a href="#">LinkedIn</a>
								</li>
							</ul>
						</li>

						<div className="actions">
							<button className="btn btn--transparent btn--no-border hover-bottom-border">
								Login
							</button>
							<button className="btn btn--solid btn--side-padding">
								Sign Up
							</button>
						</div>
					</ul>

					<button
						aria-label={this.state.open ? 'Close Menu' : 'Open Menu'}
						className="btn--mobile-menu"
						onClick={() => {
							this.setState({ open: !this.state.open })
						}}
					>
						{this.state.open && (
							<img src="./images/icon-close.svg" alt="Close Menu" />
						)}
						{!this.state.open && (
							<img src="./images/icon-hamburger.svg" alt="Open Menu" />
						)}
					</button>
				</nav>

				<div
					className="header__actions"
					aria-hidden={this.state.w < 768 ? 'true' : 'false'}
				>
					<button
						className="btn btn--transparent btn--no-border hover-bottom-border"
						data-aos="zoom-out"
						data-aos-delay="1600"
					>
						Login
					</button>
					<button
						className="btn btn--solid btn--side-padding"
						data-aos="zoom-in"
						data-aos-delay="1900"
					>
						Sign Up
					</button>
				</div>
			</header>
		)
	}
}

export default Header
