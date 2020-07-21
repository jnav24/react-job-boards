import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { loadJob } from '../helpers/requests';

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

    componentDidMount = async () => {
        const { jobId } = this.props.match.params;
        this.setState({ job: await loadJob(jobId) });
    };

    render() {
        return (
            <div>
                <h1 className="title">{this.state.job.title}</h1>
                <h2 className="subtitle">
                    <Link to={`/companies/${this.state.job.company.id}`}>{this.state.job.company.name}</Link>
                </h2>

                <div className="description">
                    {this.state.job.description}
                </div>
            </div>
        );
    }
}
