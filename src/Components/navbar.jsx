import React from "react";
import MySVG from "../images/zee5-seeklogo.svg"
import { Link, useNavigate } from "react-router-dom";

const Navbar = (props) => {
    const navigate = useNavigate();

    function handleLoginState() {
        props.setLoginStatus(false);
    }

    return (
        <div className="navbar fixed top-0 left-0 right-0 bg-black p-3 flex justify-between z-10">
            <div onClick={() => navigate("/")} className="">
                <img className="w-14" src={MySVG} alt="logo" />
            </div>
            <Link to={props.loginStatus ? "/signup" : "/login"}>
                <div onClick={handleLoginState} className="text-white border-2 border-solid p-2 rounded-md cursor-pointer">
                    <span>{props.loginStatus ? "Sign out" : "Sign in"}</span>
                </div>
            </Link>
        </div>
    );
}

export default Navbar;
