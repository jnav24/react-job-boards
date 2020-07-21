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
