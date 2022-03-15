import React from "react";

export default class Filter extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			category: ''
		}
	}

	render() {
		return (
			<div className='filters'>
				<p>
					<label>
						<input className="with-gap" name="category" type="radio" checked/>
						<span>All</span>
					</label>
				</p>
				<p>
					<label>
						<input className="with-gap" name="category" type="radio"/>
						<span>Movies only</span>
					</label>
				</p>
				<p>
					<label>
						<input className="with-gap" name="category" type="radio"/>
						<span>Series only</span>
					</label>
				</p>
			</div>
		)
	}
}
