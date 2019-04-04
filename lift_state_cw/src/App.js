import React, { Component } from 'react';
import './App.css';
import Player from './Player'

class App extends Component {
  //set variable clicked last with state
  constructor(props){
    super(props);
    this.state={
      clickedLast:'',
      winner:''
    }
  }
  //change state of variable clicked last
  whoClickedLast =(playerClicked) =>{

    // this.setState({clickedLast:playerClicked});

    console.log(playerClicked);

    let scoreOne = 0;
    let scoreTwo = 0;

    if(playerClicked === 1){
      scoreOne += 1;
    }
    else if(playerClicked === 2){
      scoreTwo += 1;
    }

    if(scoreOne > scoreTwo){
      this.setState({winner:1});
    }
    else if(scoreTwo > scoreOne){
      this.setState({winner:2});
    }
  };

  render() {

    return (
      <div className="App">
        {/*render player components with player name and clicked last function*/}
        <div className={'playerGrid'}>
          <Player player={1} whoClickedLast={this.whoClickedLast}/>
          <h1>Winner: Player {this.state.winner}</h1>
          <Player player={2} whoClickedLast={this.whoClickedLast}/>
        </div>

      </div>
    );
  }
}

export default App;
