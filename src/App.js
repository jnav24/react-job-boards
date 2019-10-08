import React, { Component } from 'react';
import {isLoggedIn} from './helpers/auth';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import JobBoard from './components/JobBoard';
import NavBar from './components/NavBar';

export default class App extends Component {
    state = {
        loggedIn: isLoggedIn(),
    };

    render() {
        return (
            <Router ref={(router) => this.router = router}>
                <div>
                    <NavBar></NavBar>

                    <section className="section">
                        <div className="container">
                            <Switch>
                                <Route exact path="/" component={JobBoard}></Route>
                            </Switch>
                        </div>
                    </section>
                </div>
            </Router>
        );
    }
}
