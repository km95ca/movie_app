import React from "react"
import PropTypes from "prop-types"
import "./Movie.css"

function Movie({year, title, summary, poster, genres }){
    return <div className="movie">
            <img src={poster} alt={title} title={title}/>
        <div className="movie__data">
            <h3 className="movie__title">{title}</h3>
            <h5 calssName="movie__year">{year}</h5>
            <ul className="genres">{genres.map((genre, index) => (
                <li key={index} className="genres_genre">{genre}</li>
            ))}
            </ul>
            <p className= "movie__summary">{summary}</p>
        </div>

    </div>
}

Movie.prototypes = {
    id: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired
}
export default Movie;