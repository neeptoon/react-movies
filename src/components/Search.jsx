import React from 'react';

export default class Search extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			search: '',
		}
	}

	handleChange = (evt) => {
		let searchValue = evt.target.value;
		this.setState({search: searchValue});
	}

	handleKey = (evt) => {
		if(evt.key === 'Enter') {
			this.props.searchMovies(this.state.search)

		}
	}

	render() {
		let {search} = this.state;
		return (
			<div className="row">
				<div className="col s12">
					<div className="input-field">
						<input
							placeholder='Search'
							id="email_inline"
							type="search"
							className="validate"
							value={search}
							onChange={this.handleChange}
							onKeyDown={this.handleKey}
						/>
						<button className='btn' onClick={() => this.props.searchMovies(this.state.search)}>SEARCH</button>
					</div>
				</div>
			</div>
		)
	}
}
