import React from "react";
import PropTypes from 'prop-types'
import StarRating from "../StarRating";

const MovieCard=(props)=>(
    <div className="movie-card">
        <div className="card">
            <img className="card-img-top" src={props.movie.imageUrl} alt="movie" />
            <div className="card-body">
                <h4 className="card-title">{props.movie.title}</h4>
                <h6 className="card-subtitle">{props.movie.subtitle}</h6>
                <p className="description">{props.movie.description}</p>
            </div>
            <div className="card-footer">
                <div>
                    <StarRating rating={props.movie.rating}/>
                </div>
                <div className="card-footer-badge badge-primary badge-pill">{props.movie.rating}</div>
            </div>
        </div>
    </div>
);

MovieCard.defaultProps={
    movies:{}
};

MovieCard.prototype={
    movies:PropTypes.object
};

export default MovieCard;