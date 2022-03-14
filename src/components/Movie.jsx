import React from 'react'

export default function Movie({movie}) {
	let {
		Poster: poster,
		Title: title,
		Type: type} = movie;
	return (
		<li className="movie__item">
			<div className="col s12 m6">
				<div className="card">
					<div className="card-image">
						<img src={poster}/>
							<span className="card-title">{title}</span>
							<a className="btn-floating halfway-fab waves-effect waves-light red"><i className="material-icons">add</i></a>
					</div>
					<div className="card-content">
						<p>{type}</p>
					</div>
				</div>
			</div>
		</li>
	)
}
