import React from "react";
import Movie from "./Movie";

let url = 'http://www.omdbapi.com/?apikey=136a527&s=matrix';

export default class Movies extends React.Component{
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
		let movies = this.state.movies
		return (
			<ul className='movie__list'>
				{movies.map(movie => <Movie key={movie.imdbID} movie={movie}/>)}
			</ul>
		)
	}
}
