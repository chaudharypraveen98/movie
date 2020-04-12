const MovieCard=(props)=>{
    <div className="movie-card">
        <div className="card">
            <img className="card-img-top" src={props.movie.imageUrl} alt="movie image" />
            <div className="card-body">
                <h4 className="card-title">{props.movie.}</h4>
                <h6 className="card-subtitle"></h6>
                <p className="description"></p>
            </div>
        </div>
    </div>
}