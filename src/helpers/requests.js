const endpoint = 'http://localhost:9000/graphql';

export async function loadJobs() {
    const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify({
            query: `{
                jobs {
                    id
                    title
                    description
                    company {
                        name
                        description
                    }
                }
            }`,
        }),
    });

    const res = await response.json();
    return res.data.jobs;
}

export async function loadJob(id) {
    const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify({
            query: `query JobQuery($id: ID!){
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
            }`,
            variables: { id },
        }),
    });

    const res = await response.json();
    return res.data.job;
}
