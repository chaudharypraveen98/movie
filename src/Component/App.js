import React,{Component} from 'react';
import '../App.css';
import Header from "./Header";
import Movies from "./Movie/movie";

export default class App extends Component{
  constructor(){
    super();
  }
  render() {
    return(
        <div>
          <Header title="React Movies"/>
          <div>
            <Movies />>
          </div>
        </div>
    );
  }
}


