import React from "react";

export default class Filter extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			type: 'all'
		}
	}

	handleClick = (evt) => {
		if (evt.target.tagName.toLowerCase() === 'input') {
			this.setState({type: evt.target.value});
		}
	}

	render() {
		return (
			<div className='filters' onClick={this.handleClick}>
				<p>
					<label>
						<input className="with-gap" name="category" type="radio" value="all" defaultChecked />
						<span>All</span>
					</label>
				</p>
				<p>
					<label>
						<input className="with-gap" name="category" type="radio" value="movie"/>
						<span>Movies only</span>
					</label>
				</p>
				<p>
					<label>
						<input className="with-gap" name="category" type="radio" value="series"/>
						<span>Series only</span>
					</label>
				</p>
			</div>
		)
	}
}
