import React, { Component } from 'react';
import { loadCompany } from '../helpers/requests';
import JobList from './JobList';

export default class CompanyDetail extends Component {
    state = {
        company: {
            description: '',
            name: '',
            jobs: [],
        },
    };

    componentDidMount = async () => {
        const { companyId } = this.props.match.params;
        this.setState({
            company: await loadCompany(companyId),
        });
    };

    render() {
        return (
            <div>
                <h1 className="title">{this.state.company.name}</h1>
                <div className="box">{this.state.company.description}</div>
                <JobList jobs={this.state.company.jobs} />
            </div>
        );
    }
}
