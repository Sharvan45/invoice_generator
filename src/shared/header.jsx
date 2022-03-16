import { React } from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <>
            <NavLink to="/">Create</NavLink>
            <NavLink to="/lists">List</NavLink>
            <NavLink to="/edit">Edit</NavLink>
        </>
    );
}

export default Header;