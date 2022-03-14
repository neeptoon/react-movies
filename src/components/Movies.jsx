import React from "react";
import Movie from "./Movie";


export default function Movies(props) {
	const movies = props.movies
	return (
		<ul className="movie__list">
			{movies.map(movie => <Movie key={movie.imdbID} movie={movie}/>)}
		</ul>
	)
}
