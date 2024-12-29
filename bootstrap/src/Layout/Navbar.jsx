import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        // <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        //     <div className="container">
        //         <Link className="navbar-brand" to="/">
        //             App Logo
        //         </Link>
        //         <button
        //             className="navbar-toggler"
        //             type="button"
        //             data-bs-toggle="collapse"
        //             data-bs-target="#navbarNav"
        //             aria-controls="navbarNav"
        //             aria-expanded="false"
        //             aria-label="Toggle navigation"
        //         >
        //             <span className="navbar-toggler-icon"></span>
        //         </button>
        //         <div className="collapse navbar-collapse" id="navbarNav">
        //             <ul className="navbar-nav ms-auto">
        //                 <li className="nav-item">
        //                     <Link className="nav-link" to="/home">
        //                         Home
        //                     </Link>
        //                 </li>
        //                 <li className="nav-item">
        //                     <Link className="nav-link" to="/about">
        //                         About
        //                     </Link>
        //                 </li>
        //                 <li className="nav-item">
        //                     <Link className="nav-link" to="/login">
        //                         Login
        //                     </Link>
        //                 </li>
        //             </ul>
        //         </div>
        //     </div>
        // </nav>
        <div>
            <NavLink to="/home" className={({isActive})=>
                isActive ? "text-danger" : ""} >Home</NavLink>
            <NavLink to="/about" className={({isActive})=>
                isActive ? "text-danger" : ""} >About</NavLink>
            <NavLink to="/login" className={({isActive})=>
                isActive ? "text-danger" : ""} >Login</NavLink>
            <NavLink to="/user/1" className={({isActive})=>
                isActive ? "text-danger" : ""} >User</NavLink>
        </div>
    );
};

export default Navbar;