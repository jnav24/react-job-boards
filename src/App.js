import React, { Component } from 'react';
import {isLoggedIn} from "./helpers/auth";

export default class App extends Component {
    state = {
        loggedIn: isLoggedIn(),
    };

    render() {
        return (
            <div>
                Hello World
                <pre>{this.state.loggedIn}</pre>
            </div>
        );
    }
}
