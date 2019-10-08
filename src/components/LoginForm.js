import React, { Component } from 'react';
import { login } from '../helpers/auth';

export default class LoginForm extends Component {
    state = {
        email: '',
        error: false,
        password: '',
    };

    handleChange = (e) => {
        e.preventDefault();
        const {name, value} = e.target;
        this.setState({ [name]: value });
    };

    handleClick = async (e) => {
        e.preventDefault();
        const response = await login(this.state.email, this.state.password);

        if (response) {
            this.props.onLogin();
        } else {
            this.setState({ error: true });
        }
    };

    render() {
        return (
            <form>
                <div className="field">
                    <label className="label">Email</label>
                    <div className="control">
                        <input
                            className="input"
                            name="email"
                            onChange={this.handleChange}
                            type="text"
                            value={this.state.email} />
                    </div>
                </div>

                <div className="field">
                    <label className="label">Password</label>
                    <div className="control">
                        <input
                            className="input"
                            name="password"
                            onChange={this.handleChange}
                            type="password"
                            value={this.state.password} />
                    </div>
                </div>

                <div className="field">
                    <p className="help is-danger">{this.state.error && 'Invalid credentials'}</p>
                    <div className="control">
                        <button
                            className="button is-link"
                            onClick={this.handleClick}>
                            Login
                        </button>
                    </div>
                </div>
            </form>
        );
    }
}
