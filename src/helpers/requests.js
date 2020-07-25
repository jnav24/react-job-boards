import { ApolloClient, ApolloLink, HttpLink, InMemoryCache } from 'apollo-boost';
import gql from 'graphql-tag';
import { getAccessToken, isLoggedIn } from './auth';

const endpoint = 'http://localhost:9000/graphql';
const auth = new ApolloLink((operation, forward) => {
    if (isLoggedIn()) {
        operation.setContext({
            headers: {
                'Authorization': `Bearer ${getAccessToken()}`,
            },
        });
    }

    return forward(operation);
});
const client = new ApolloClient({
    link: new HttpLink({
        uri: endpoint,
    }),
    cache: new InMemoryCache(),
});

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
