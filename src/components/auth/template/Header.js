import React from "react";
import logo from "../../assets/logo.png"
import "./header.css"
const Header = () => {
    return (
        <div>
            <div className="logo">
                <img src={logo} width="150" alt="logo aletix" />
            </div>
        </div>
    )
}

export default Header