import React,{Component} from "react";
import MovieList from "./MovieList";
import MovieServices from "../../Services/MovieServices";

export default class Movies extends Component{
    constructor(){
        super();
        this.state={
            movies:[]
        }
    }
    componentDidMount() {
        this.setState(()=>({movies:MovieServices.getMovies()}));
    }

    render() {
        return(
            <div className="container-fluid">
                <div className='d-flex flex-row'>
                    <MovieList movies={this.state.movies}/>
                </div>
            </div>
        );
    }
}