const accessTokenKey = 'accessToken';

export const isLoggedIn = () => !!localStorage.getItem(accessTokenKey);
