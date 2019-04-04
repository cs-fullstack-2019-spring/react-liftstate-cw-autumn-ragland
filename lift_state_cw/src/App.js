import React, { Component } from 'react';
import './App.css';
import Player from './Player'

class App extends Component {
  //set variable clicked last with state
  constructor(props){
    super(props);
    this.state={
      clickedLast:''
    }
  }
  //change state of variable clicked last
  whoClickedLast =(playerClicked) =>{
    this.setState({clickedLast:playerClicked})
  };

  render() {

    return (
      <div className="App">
        {/*Display who clicked last*/}
        <h1>Player {this.state.clickedLast} Clicked Last</h1>
        {/*render player components with player name and clicked last function*/}
        <Player player={1} whoClickedLast={this.whoClickedLast}/>
        <Player player={2} whoClickedLast={this.whoClickedLast}/>

      </div>
    );
  }
}

export default App;
