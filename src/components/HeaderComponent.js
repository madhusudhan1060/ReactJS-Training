import logo from '/res-logo.jpeg';
import React from 'react';
import { Link } from 'react-router-dom';

const Logo = () => {
    return <Link to="/"> <img src={logo} height="50"  alt="logo" /> </Link>
}

const NavItems = () => {
    return (
        <ul className="d-flex list-unstyled mb-0">
            <li className="px-3">
                <Link to="/"> Home </Link>
            </li>
            <li className="px-3">
                <Link to="/about">About</Link></li>
            <li className="px-3">
                <Link to="/contact"> Contact </Link> </li>
        </ul>
    )
}
const HeaderComponent = () => {
    return (
        <div  className='d-flex justify-content-between align-items-center px-5 bg-light border-bottom sticky-top'>
            <Logo />
            <NavItems />
        </div>
    )
}


export default HeaderComponent;