import React, { Component } from 'react';
import {isLoggedIn} from './helpers/auth';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import JobBoard from './components/JobBoard';
import NavBar from './components/NavBar';

export default class App extends Component {
    state = {
        loggedIn: isLoggedIn(),
    };

    handleLogout() {
        console.log('logging out');
    }

    render() {
        return (
            <Router ref={(router) => this.router = router}>
                <div>
                    <NavBar loggedIn={this.state.loggedIn} onLogout={this.handleLogout}></NavBar>

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
