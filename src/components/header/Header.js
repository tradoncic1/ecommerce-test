import React from 'react';
import { Link, NavLink } from "react-router-dom";

import { ReactComponent as Logo } from '../../assets/crown.svg';
import './header.styles.scss';

const Header = () => {
    return (
        <div className="header">
            <Link className="logo-container" to="/">
                <Logo className="logo" />
            </Link>
            <div className="options">
                <NavLink className="option" to="/shop">SHOP</NavLink>
                <NavLink className="option" to="/contact">CONTACT</NavLink>
            </div>
        </div>
    )
}

export default Header;