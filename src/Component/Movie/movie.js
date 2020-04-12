import React,{Component} from "react";
import PropTypes from 'prop-types'

export default class Movies extends Component{
    constructor(){
        super();
        this.state={
            movies=[]
        }
    }
    componentDidMount() {
        this.setState(()=>({movies:MovieService.getMovies()}));
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