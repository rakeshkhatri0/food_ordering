import React from 'react';
import {NavLink} from 'react-router-dom';

const Header = () => (
    <header>
        <h1>Loan Calculator</h1>
        <NavLink to={'/get'} className="nav-link">Get Loan</NavLink>
        <NavLink to={'/details'} className="nav-link">Loan Details</NavLink>

    </header>
);

export default Header;