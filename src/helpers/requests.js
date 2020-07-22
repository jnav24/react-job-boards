const endpoint = 'http://localhost:9000/graphql';

const graphqlRequest = async (query, variables = {}) => {
    const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
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
    const query = `query CompanyQuery($id: ID!){
        company(id: $id) {
            id
            name
            description
        }
    }`;
    const { company } = await graphqlRequest(query, { id });
    return company;
}

export async function loadJobs() {
    const query = `{
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
    const { jobs } = await graphqlRequest(query);
    return jobs;
}

export async function loadJob(id) {
    const query = `query JobQuery($id: ID!){
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
    const { job } = await graphqlRequest(query, { id });
    return job;
}
