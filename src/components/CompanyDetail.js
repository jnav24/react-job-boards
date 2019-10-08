import React, { Component } from 'react';

export default class CompanyDetail extends Component {
    companyId = () => this.props.match.params;

    state = {
        company: {
            description: '',
            name: '',
        },
    };

    componentDidMount = () => {
        this.setState({
            company: {
                id: 'company1',
                name: 'Company A',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
            },
        });
    };

    render() {
        return (
            <div>
                <h1 className="title">{this.state.company.name}</h1>
                <div className="box">{this.state.company.description}</div>
            </div>
        );
    }
}
