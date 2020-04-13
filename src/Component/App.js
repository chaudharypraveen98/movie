import React,{Component} from 'react';
import '../App.css';
import Header from "./Header";
import Movies from "./Movie/movie";

export default class App extends Component{
    constructor() {
        super();

        this.state = {
            title: 'React Movie Cards'
        };
    }
  render() {
    return(
        <div>
          <Header title={this.state.title} />
          <div>
            <Movies />>
          </div>
        </div>
    );
  }
}


