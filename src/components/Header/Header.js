import React from 'react';
import './Header.css';
import logo from '../../images/Logo.svg';
import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <nav className='header'>
            <div className="logo">
                <img src={logo} alt="Ema Jhon logo" />
            </div>
            <div className="menu">
                <NavLink className={({ isActive }) => isActive ? 'active' : undefined} to="/shop">Shop</NavLink>
                <NavLink to="/orders">Orders</NavLink>
                <NavLink to="/login">Login</NavLink>
            </div>
        </nav>
    );
};

export default Header;