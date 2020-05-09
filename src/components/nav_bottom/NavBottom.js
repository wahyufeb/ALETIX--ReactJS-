import React from 'react'
import {Link} from "react-router-dom"
import {Row, Col} from "reactstrap";

import "./nav_bottom.css"

// icon
import iconHome from "../assets/icon/home.png"
import iconProfile from "../assets/icon/profile.png"
import iconTicket from "../assets/icon/ticket.png"

const NavBottom = () => {
    return (
    <footer>
        <div className="navbar_bottom">
            <Row>
                <Col>
                    <Link className="icons" to="/">
                        <img width="20px" src={iconHome} alt="icon Home"/>
                        <p>Home</p>
                    </Link>
                </Col>
                <Col id="midle-menu">
                    <Link id="ticket" to="/tickets">
                        <img width="40px" src={iconTicket} alt="Icon Ticket" />
                    </Link>
                </Col>
                <Col>
                    <Link className="icons" to="/profile">
                        <img width="20px" src={iconProfile} alt="Icon Profile" />
                        <p>Profile</p>
                    </Link>
                </Col>
            </Row>
        </div>
    </footer>
    )
}

export default NavBottom
