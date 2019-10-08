import React from 'react';
import JobList from './JobList.js';

const JobBoard = () => {
    const tempJobs = [
        {
            id: 'job1',
            title: 'Job 1',
            company: {
                id: 'company1',
                name: 'Company A',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
            },
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        },
        {
            id: 'job2',
            title: 'Job 2',
            company: {
                id: 'company2',
                name: 'Company B',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
            },
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        },
    ];

    return (
        <div>
            <h1 className="title">Job Board</h1>
            <JobList jobs={tempJobs}></JobList>
        </div>
    );
};

export default JobBoard;
