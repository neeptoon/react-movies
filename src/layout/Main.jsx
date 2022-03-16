import React from "react";
import Movies from '../components/Movies';
import Preloader from "../components/Preloader";
import Search from "../components/Search";


export default class Main extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			movies: [],
		}
	}

	componentDidMount() {
		fetch(`http://www.omdbapi.com/?apikey=136a527&s=matrix`)
			.then(response => response.json())
			.then(data => this.setState({movies: data.Search}))
	}

	searchMovies = (str = 'matrix', type = 'all') => {
		fetch(`http://www.omdbapi.com/?apikey=136a527&s=${str}${type !== 'all' ? `&type=${type}` : '' }`)
			.then(response => response.json())
			.then(data => this.setState({movies: data.Search}))
	}


	render() {
		let {movies} = this.state;
		console.log(movies)
		return (
			<main className="main">
				<Search searchMovies={this.searchMovies}/>
				{movies.length ? <Movies movies={movies}/> : <Preloader/>}
			</main>
		)
	}

}
