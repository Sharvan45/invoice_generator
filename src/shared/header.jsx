import { React } from "react";
import { NavLink } from "react-router-dom";

import "./header.scss";

const Header = () => {
    return (
        <div className="header print_hide border-bottom">
            <a href="/" className="logo"> Invoice Generator</a>
            <p className="header-right">
                <NavLink to="/">Create</NavLink>
                <NavLink to="/lists">List</NavLink>
                <NavLink to="/edit">Edit</NavLink>
            </p >
        </div>
    );
}

export default Header;