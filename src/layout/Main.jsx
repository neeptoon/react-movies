import React from "react";
import Movies from '../components/Movies';
import Preloader from "../components/Preloader";
import Search from "../components/Search"
import Filter from "../components/Filter"


export default class Main extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			movies: [],
			search: ''
		}
	}

	componentDidMount() {
		fetch(`http://www.omdbapi.com/?apikey=136a527&s=matrix`)
			.then(response => response.json())
			.then(data => this.setState({movies: data.Search}))
	}

	searchMovies = (str) => {
		fetch(`http://www.omdbapi.com/?apikey=136a527&s=${str}`)
			.then(response => response.json())
			.then(data => this.setState({movies: data.Search}))
	}


	render() {
		let {movies} = this.state;
		return (
			<main className="main">
				<Search searchMovies={this.searchMovies}/>
				<Filter/>
				{movies.length ? <Movies movies={movies}/> : <Preloader/>}
			</main>
		)
	}

}
