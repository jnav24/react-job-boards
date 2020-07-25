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
    link: ApolloLink.from([
        auth,
        new HttpLink({
            uri: endpoint,
        }),
    ]),
    cache: new InMemoryCache(),
});

const jobQuery = gql`
    query JobQuery($id: ID!) {
        job(id: $id) {
            id
            title
            company {
                id
                name
            }
            description
        }
    }
`;

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

    const { data: { company } } = await client.query({ query, variables: { id } })
    return company;
}

export async function createJob(input) {
    const mutation = gql`mutation CreateJob($input: CreateJobInput) {
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

    const { data: { job } } = await client.mutate({
        mutation,
        variables: { input },
        update: (cache, { data }) => {
            cache.writeQuery({
                query: jobQuery,
                variables: { id: data.job.id },
                data,
            })
        },
    });
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

    const { data: { jobs } } = await client.query({ query, fetchPolicy: 'no-cache' });
    return jobs;
}

export async function loadJob(id) {
    const { data: { job } } = await client.query({ query: jobQuery, variables: { id } });
    return job;
}
