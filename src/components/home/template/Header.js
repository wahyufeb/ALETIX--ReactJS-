import React from 'react'


import logo from "../../assets/logo.png"
import  "./header.css"
import {
    FormGroup,
    Input,
    Col
} from "reactstrap"

const Header = () => {
    return (
        <div className="header">
            <Col xs="3">
                <img src={logo} width="80" height="40" alt="logo-aletix"/>
            </Col>
            <Col xs="9">
                <div className="search-bar">
                    <FormGroup>
                        <Input type="text" name="search-bar" placeholder="Cari Film ..." />
                    </FormGroup>
                </div>
            </Col>
        </div>
    )
}

export default Header
