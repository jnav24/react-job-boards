import React, { Component } from 'react';
import { createJob } from '../helpers/requests';

export default class JobForm extends Component {
    state = {
        description: '',
        title: '',
    };

    handleChange = (e) => {
        const {name, value} = e.target;
        this.setState({ [name]: value });
    };

    handleClick = (e) => {
        e.preventDefault();
        createJob({
            companyId: "5d9df4b0b01527c99b96ea9f",
            description: this.state.description,
            title: this.state.title,
        });
        this.props.history.push('/');
        console.log('add new posting', this.state);
    };

    render() {
        return (
            <div>
                <h1 className="title">New Job</h1>

                <div className="box">
                    <form>
                        <div className="field">
                            <label className="label">Title</label>
                            <div className="control">
                                <input
                                    className="input"
                                    name="title"
                                    onChange={this.handleChange}
                                    type="text"
                                    value={this.state.title} />
                            </div>
                        </div>

                        <div className="field">
                            <label className="label">Description</label>
                            <div className="control">
                                <textarea
                                    className="input"
                                    name="description"
                                    onChange={this.handleChange}
                                    style={{height: '10rem'}}
                                    value={this.state.description} />
                            </div>
                        </div>

                        <div className="field">
                            <div className="control">
                                <button
                                    className="button is-link"
                                    onClick={this.handleClick}>Submit</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}
