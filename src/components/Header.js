import React from "react";
import {LinkContainer} from 'react-router-bootstrap';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";


import 'bootstrap/dist/css/bootstrap.min.css';

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return(
            <div>
                <Navbar bg="info" variant="dark">
                    <LinkContainer to={"/"}>
                    <Navbar.Brand >GDrive Party</Navbar.Brand>
                    </LinkContainer>
                    <Nav className="mr-auto">
                        <LinkContainer to={"/how_to_use"}>
                            <Nav.Link >How To Use</Nav.Link>
                        </LinkContainer>
                    </Nav>
                    <Nav className="mr-auto">
                        <LinkContainer to={"/suggestions"}>
                            <Nav.Link >Got Ideas?</Nav.Link>
                        </LinkContainer>
                    </Nav>

                </Navbar>

            </div>
        );
    }
}

export default Header;