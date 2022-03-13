import { React } from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
    let navigate = useNavigate();
    return (
        <>
            <p onClick={() => { navigate("/lists") }}>List</p>
        </>
    );
}

export default Header;