import React from "react";
import {LinkContainer} from 'react-router-bootstrap';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/cjs/Button";
import Container from "react-bootstrap/cjs/Container";
import Row from "react-bootstrap/cjs/Row";
import Form from "react-bootstrap/cjs/Form";
import PartyRoom from "../components/PartyRoom";

import 'bootstrap/dist/css/bootstrap.min.css';


class LandingPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            'url' :'',
            'room':'',
        };
    }

    render() {
        return(
            <div>
                <Container fluid>
                    <Row className={"justify-content-md-center"}>
                        <h1>GDrive Party</h1>
                    </Row>
                    <Row className={"justify-content-md-center"}>
                        <Form>
                            <Form.Group controlId="landingForm.ControlInput1">
                                <Form.Label>Google Drive Address</Form.Label>
                                <Form.Control onChange={(evt)=>this.state.url = evt.target.value}  placeholder="Google Drive" />
                            </Form.Group>
                        </Form>
                    </Row>
                    <Row className={"justify-content-md-center"}>
                        <Button onClick={() => {
                            console.log(this.state.url);
                            this.setState({'room': (<PartyRoom url={this.state.url}/>)});
                        }
                        }>GO!</Button>
                    </Row>
                    <Row className={"justify-content-md-center"}>
                        {this.state.room}
                    </Row>



                </Container>

            </div>
        );
    }
}

export default LandingPage;