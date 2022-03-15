import React from "react";
import Movies from '../components/Movies';
import Preloader from "../components/Preloader";

let url = 'http://www.omdbapi.com/?apikey=136a527&s=matrix';

export default class Main extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			movies: []
		}
	}

	componentDidMount() {
		this.init();
	}

	async getMovies() {
		let response = await fetch(url);
		let data = await response.json();

		this.setState({movies: data.Search})
	}

	init = () => {
		this.getMovies()
	}

	render() {
		let {movies} = this.state;
		return (
			<main className="main">
				{movies.length ? <Movies movies={movies}/> : <Preloader/>}
			</main>
		)
	}

}
