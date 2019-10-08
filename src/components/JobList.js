import React from 'react';
import { Link } from 'react-router-dom';

const JobList = (props) => {
    const getJob = (job) => {
        const title = !!job.company && !!job.company.name ? `${job.title} at ${job.company.name}` : job.title;
        return (
            <li className="media" key={job.id}>
                <div className="media-content">
                    <Link to={`/jobs/${job.id}`}>{title}</Link>
                </div>
            </li>
        );
    };

    const emptyJobs = () => {
        return (
            <li className="media">
                <div className="media-content">
                    There are no job postings.
                </div>
            </li>
        );
    };

    return (
        <ul className="box">
            {props.jobs.length ? props.jobs.map((job) => getJob(job)) : emptyJobs()}
        </ul>
    );
};

export default JobList;
