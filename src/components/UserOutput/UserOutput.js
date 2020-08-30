import React, { Component } from 'react';

import './UserOutput.css';


class UserOutput extends Component {
    render() {
        return(
            <div className="UserOutput">
                <p>Hello! I am {this.props.name}</p>
                <p>Lets play</p>
            </div>
        )
    }
}

export default UserOutput;
