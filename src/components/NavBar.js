import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = (props) => {
    const loggedInContent = (
        <>
            <Link className="navbar-item" to="/">Post a Job</Link>
            <Link className="navbar-item" to="/" onClick={props.onLogout}>Logout</Link>
        </>
    );

    const loggedOutContent = (
        <>
            <Link className="navbar-item" to="/login">Login</Link>
        </>
    );

    return (
        <nav className="navbar">
            <div className="navbar-start">
                <Link className="navbar-item" to="/">Home</Link>
                { props.loggedIn ? loggedInContent : loggedOutContent }
            </div>
        </nav>
    );
};

export default NavBar;
