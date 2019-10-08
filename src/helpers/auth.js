const accessTokenKey = 'accessToken';
const serverUrl = 'http://localhost:9000';

export const getAccessToken = () => localStorage.getItem(accessTokenKey);

export const isLoggedIn = () => !!localStorage.getItem(accessTokenKey);

export const login = async (email, password) => {
    try {
        const response = await fetch(serverUrl, {
            method: 'POST',
            headers: {'content-type': 'application/json'},
            body: JSON.stringify({ email, password }),
        });

        if (response.ok) {
            const {token} = await response.json();
            localStorage.setItem(accessTokenKey, token);
        }

        return response.ok;
    } catch (error) {
        return false;
    }
};

export const logout = () => localStorage.removeItem(accessTokenKey);
