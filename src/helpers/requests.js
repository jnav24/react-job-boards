import { ApolloClient, HttpLink, InMemoryCache } from 'apollo-boost';
import gql from 'graphql-tag';
import { getAccessToken, isLoggedIn } from './auth';

const endpoint = 'http://localhost:9000/graphql';
const client = new ApolloClient({
    link: new HttpLink({
        uri: endpoint,
    }),
    cache: new InMemoryCache(),
});

const graphqlRequest = async (query, variables = {}) => {
    const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${getAccessToken()}`,
            'content-type': 'application/json',
        },
        body: JSON.stringify({
            query,
            variables,
        }),
    });

    const { data, errors } = await response.json();

    if (errors) {
        const message = errors.map(error => error.message).join("\n");
        throw new Error(message);
    }

    return data;
};

export async function loadCompany(id) {
    const query = gql`query CompanyQuery($id: ID!){
        company(id: $id) {
            id
            name
            description
            jobs {
                id
                title
            }
        }
    }`;
    // const { company } = await graphqlRequest(query, { id });
    const { data: { company } } = await client.query({ query, variables: { id } })
    return company;
}

export async function createJob(input) {
    const query = gql`mutation CreateJob($input: CreateJobInput) {
        job: createJob(input: $input) {
            id
            title
            description
            company {
                name
                description
            }
        }
    }`;
    // const { job } = await graphqlRequest(query, { input });
    const { data: { job } } = await client.mutate({ mutation: query, variables: { input } });
    return job;
}

export async function loadJobs() {
    const query = gql`{
        jobs {
            id
            title
            description
            company {
                name
                description
            }
        }
    }`;
    // const { jobs } = await graphqlRequest(query);
    const { data: { jobs } } = await client.query({ query });
    return jobs;
}

export async function loadJob(id) {
    const query = gql`query JobQuery($id: ID!){
        job(id: $id) {
            id
            title
            description
            company {
                id
                name
                description
            }
        }
    }`;
    // const { job } = await graphqlRequest(query, { id });
    const { data: { job } } = await client.query({ query, variables: { id } });
    return job;
}
