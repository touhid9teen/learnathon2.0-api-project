import React from "react";
import {Link} from "react-router-dom";
import './styles.css'
const Navbar = () => {
    return (
        <div className="nav-content">
            <ul className="nav">
                <li className="nav-item">
                    <Link to={`/`}>Home</Link>
                </li>
                <li className="nav-item">
                    <Link to={`/About`}>About</Link>
                </li>
                <li className="nav-item">
                    <Link to={`/Counter`}>Counter</Link>
                </li>
            </ul>
        </div>
    );
};
export default Navbar;
