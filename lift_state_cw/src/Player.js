import React, { Component } from 'react';

class Player extends Component {

    //run who clicked last function
    constructor(props) {
        super(props);
        this.whoClickedLast()
    }
    //determine who clicked last
    whoClickedLast = () => {
        this.props.whoClickedLast(this.props.player)
    };

    render() {

        return (
            <div>
                {/*display player name and button*/}
                <h3>Player {this.props.player}</h3>
                {/*when the button is clicked run who clicked last*/}
                <button onClick={this.whoClickedLast}><h3>Click Me</h3></button>
            </div>
        );
    }
}

export default Player;
