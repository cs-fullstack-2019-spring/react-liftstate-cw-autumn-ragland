import React, { Component } from 'react';

class Player extends Component {
    //set variable score with state
    state={
        score:0
    };
    //run who clicked last function
    constructor(props) {
        super(props);
        this.whoClickedLast();
    }
    //determine who clicked last
    whoClickedLast = () => {
        this.props.whoClickedLast(this.props.player);
        //add one to score of corresponding player
        this.setState({score:this.state.score+1})
    };

    render() {
        return (
            <div>
                {/*display player name and button*/}
                <h2>Player {this.props.player}</h2>
                <h3>Score:{this.state.score}</h3>
                {/*when the button is clicked run who clicked last*/}
                <button onClick={this.whoClickedLast}><p>1pt</p></button>
            </div>
        );
    }
}

export default Player;
