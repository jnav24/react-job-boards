import React from 'react';

const NavBar = () => {
    const test = true;

    return (
        <nav className="navbar">
            <div className="navbar-start">
                { test ? 'logout' : 'login' }
            </div>
        </nav>
    );
};

export default NavBar;
