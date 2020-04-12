import React from "react";
import PropTypes from "prop-types"
import movie from "./movie";

const getMovies=(movies)=>{
    return(
        <div className="card-deck">
            movies.map(movie=><MovieCard key={movie.id} movie={movie}/>)
        </div>
    )
}

const MovieList=(props)=>{
    <div>
        {getMovies(props.movies)}
    </div>
}

MovieList.defaultProps={
    movies:[]
}
MovieList.prototype={
    movies: PropTypes.array
}

export default MovieList;