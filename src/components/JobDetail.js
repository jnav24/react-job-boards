import React, { Component } from 'react';

export default class JobDetail extends Component {
    jobId = () => this.props.match.params;

    state = {
        job: {
            id: '',
            title: '',
            company: {
                id: '',
                name: '',
                description: '',
            },
            description: '',
        },
    };

    componentDidMount = () => {
        this.setState({
            job: {
                id: 'job1',
                title: 'Job 1',
                company: {
                    id: 'company1',
                    name: 'Company A',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
                },
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
            }
        });
    };

    render() {
        return (
            <div>
                <h1 className="title">{this.state.job.title}</h1>
                <h2 className="subtitle">{this.state.job.company.name}</h2>

                <div className="description">
                    {this.state.job.description}
                </div>
            </div>
        );
    }
}
