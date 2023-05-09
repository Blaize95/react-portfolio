import React from "react";
import { Link } from 'react-router-dom';
import "../styles/Navbar.css";

function Navbar() {
    return (
        <div className="navbar">  
            <div className="links">
                <Link to="/About"> About </Link>
                <Link to="/Portfolio"> Portfolio </Link>
                <Link to="/Contact"> Contact </Link>
                <Link to="/Resume"> Resume </Link>
            </div>   
        </div> 
    );
}

export default Navbar;