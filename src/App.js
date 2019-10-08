import React, { Component } from 'react';
import {isLoggedIn} from './helpers/auth';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import JobBoard from './components/JobBoard';
import NavBar from './components/NavBar';
import CompanyDetail from './components/CompanyDetail';
import LoginForm from './components/LoginForm';
import JobDetail from './components/JobDetail';
import JobForm from './components/JobForm';

export default class App extends Component {
    state = {
        loggedIn: isLoggedIn(),
    };

    handleLogin = () => {
        this.setState({ loggedIn: true });
        this.router.history.push('/');
    };

    handleLogout = () => {
        this.setState({ loggedIn: false });
        this.router.history.push('/');
    };

    render() {
        return (
            <Router ref={(router) => this.router = router}>
                <div>
                    <NavBar loggedIn={this.state.loggedIn} onLogout={this.handleLogout}></NavBar>

                    <section className="section">
                        <div className="container">
                            <Switch>
                                <Route exact path="/" component={JobBoard}></Route>
                                <Route path="/companies/:companyId" component={CompanyDetail}></Route>
                                <Route path="/jobs/new" component={JobForm}></Route>
                                <Route path="/jobs/:jobId" component={JobDetail}></Route>
                                <Route path="/login" render={() => <LoginForm onLogin={this.handleLogin} />}></Route>
                            </Switch>
                        </div>
                    </section>
                </div>
            </Router>
        );
    }
}
