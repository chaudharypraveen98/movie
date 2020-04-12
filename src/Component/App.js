import React,{Component} from 'react';
import '../App.css';

export default class App extends Component{
  constructor(){
    super();
  }
  render() {
    return(
        <div>
          <Header title="React Movies"/>
          <div>
            <Movie />>
          </div>
        </div>
    );
  }
}


