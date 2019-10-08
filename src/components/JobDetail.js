import React, { Component } from 'react';

export default class JobDetail extends Component {
    jobId = () => this.props.match.params;

    state = {
        job: jobs.find(job => job.id === this.jobId()),
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
