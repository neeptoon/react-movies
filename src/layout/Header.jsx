import React from 'react';

export default function Header() {
	return  (
		<React.Fragment>
			<nav className="green darken-1">
				<div className="nav-wrapper">
					<a href="#" className="brand-logo">React Movies</a>
					<ul id="nav-mobile" className="right hide-on-med-and-down">
						<li><a href="#">repo</a></li>
					</ul>
				</div>
			</nav>
		</React.Fragment>
	)
}
