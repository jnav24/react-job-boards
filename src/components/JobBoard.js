import React, { useEffect, useState } from 'react';
import JobList from './JobList.js';
import { loadJobs } from '../helpers/requests';

const JobBoard = () => {
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        (async () => setJobs(await loadJobs()))();
    }, []);

    return (
        <div>
            <h1 className="title">Job Board</h1>
            <JobList jobs={jobs}></JobList>
        </div>
    );
};

export default JobBoard;
