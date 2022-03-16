import React from 'react';

export default class Search extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			search: '',
			type: 'all'
		}
	}

	handleChange = (evt) => {
		let searchValue = evt.target.value;
		this.setState({search: searchValue});
	}

	handleKeyDown = (evt) => {
		if(evt.key === 'Enter') {
			this.props.searchMovies(this.state.search, this.state.type)

		}
	}

	handleClick = (evt) => {
		if (evt.target.tagName.toLowerCase() === 'input') {
			this.setState(() => ({type: evt.target.value}), () => this.props.searchMovies(this.state.search, this.state.type));
		}
	}

	render() {
		let {search} = this.state;
		return (
			<React.Fragment>
				<div className="row">
					<div className="col s12">
						<div className="input-field">
							<input
								placeholder="Search"
								id="email_inline"
								type="search"
								className="validate"
								value={search}
								onChange={this.handleChange}
								onKeyDown={this.handleKeyDown}
							/>
							<button className="btn" onClick={() => this.props.searchMovies(this.state.search, this.state.type)}>SEARCH</button>
						</div>
					</div>
				</div>
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
			</React.Fragment>
		)
	}
}
