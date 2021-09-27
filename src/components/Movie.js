import React from 'react';
import { Link } from 'react-router-dom';
import propTypes from 'prop-types';
import './Movie.css';

const Movie = ({ id, year, title, summary, poster, genres }) => {
     return (
          <div className="movie">
               <Link to={{
                    pathname: `movie/${id}`,
                    state: {
                         year, title, summary, poster, genres
                    }
               }}>
               <img src={poster} alt={title} title={title}/>
               <div className="movie__data">
                    <h3 className="movie__title">{title}</h3>
                    <h5 className="movie__year">{year}</h5>
                    <ul className="genres">
                         {genres.map((genre, index) => <li className="genres__genre" key={index}>{genre}</li>)}
                    </ul>
                    <p className="movie__summary">{summary.slice(0, 180)}...</p>
               </div>
               </Link>
          </div>
     )
};

Movie.propTypes = {
     id: propTypes.number.isRequired,
     year: propTypes.number.isRequired,
     title: propTypes.string.isRequired,
     summary: propTypes.string.isRequired,
     poster: propTypes.string.isRequired,
     genre: propTypes.arrayOf(propTypes.string)
};

export default Movie;