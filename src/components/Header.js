import React from "react";
import {LinkContainer} from 'react-router-bootstrap';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Form from 'react-bootstrap/Form';
import Button from "react-bootstrap/cjs/Button";

import 'bootstrap/dist/css/bootstrap.min.css';

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return(
            <div>
                <Navbar bg="dark" variant="dark">
                    <LinkContainer to={"/"}>
                    <Navbar.Brand >GDrive Party</Navbar.Brand>
                    </LinkContainer>
                    <Nav className="mr-auto">
                        <LinkContainer to={"/about"}>
                            <Nav.Link >About</Nav.Link>
                        </LinkContainer>
                    </Nav>
                    <Nav className="mr-auto">
                        <LinkContainer to={"/how_to_use"}>
                            <Nav.Link >How To Use</Nav.Link>
                        </LinkContainer>
                    </Nav>

                </Navbar>

            </div>
        );
    }
}

export default Header;