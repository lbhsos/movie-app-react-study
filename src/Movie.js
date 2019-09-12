import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './Movie.css';

function Movie({title, poster, genres, synopsis}){
    return (
        <div className="Movie">
            <div className="Movie__Column">
                <MoviePoster poster={poster} alt={title}/>
            </div>
            <div className="Movie__Column">
                <h1>{title}</h1>
                <div className="Movie__Genres">
                    {genres.map((genre, index) => <MovieGenre genre={genre} key={index}/>)}
                </div>
                <p className="Movie__Synopsis">
                    {synopsis}
                </p>
            </div>
            
        </div>
    )
}

function MovieGenre({genre}){
    return(
        <span className="Movie__Genre">{genre}</span>
    )
}
//state 없이 props만 있을 때는 function으로 class대신
//state를 하면 update를 할 수 있음
function MoviePoster({poster, alt}){
    return(
        <img src={poster} alt={alt} title={alt} className="Movie__Poster"/>
    )
}
Movie.propTypes = {
    poster: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    genres: PropTypes.string.isRequired,
    synopsis:PropTypes.string.isRequired,

}
MoviePoster.propTypes = {
    poster: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired
}
MovieGenre.propTypes = {
   genre: PropTypes.string.isRequired
}
export default Movie;