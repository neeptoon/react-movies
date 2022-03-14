import React from "react";
import Movies from '../components/Movies';

let url = 'http://www.omdbapi.com/?apikey=136a527&s=matrix';

export default class Main extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			movies: []
		}

		this.init();
	}

	init = () => {
		this.getMovies()
	}

	async getMovies() {
		let response = await fetch(url);
		let data = await response.json();

		this.setState({movies: data.Search})
	}

	render() {
		let movies = this.state.movies;
		return (
			<main className="main">
				<Movies movies={movies}/>
			</main>
		)
	}

}
