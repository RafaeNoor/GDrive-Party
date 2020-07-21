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
            'room_id':'',
            'name': 'Anonymous',
            'room_set': false,
        };
    }

    render() {

        let pre_room = "";
        if(!this.state.room_set) {
            pre_room = (
                <div>

                    <Row className={"justify-content-md-center"}>
                        <h1>GDrive Party</h1>
                    </Row>
                    <Row className={"justify-content-md-center"}>
                        <Form>
                            <Form.Group controlId="landingForm.ControlInput1">
                                <Form.Label>Display Name</Form.Label>
                                <Form.Control onChange={(evt) => this.state.name = evt.target.value}
                                              placeholder="Anonymous"/>
                            </Form.Group>
                            <Form.Group controlId="landingForm.ControlInput1">
                                <Form.Label>Google Drive Address</Form.Label>
                                <Form.Control onChange={(evt) => this.state.url = evt.target.value}
                                              placeholder="Video URL"/>
                            </Form.Group>
                        </Form>
                    </Row>
                    <Row className={"justify-content-md-center"}>
                        <Button onClick={() => {
                            console.log(this.state.url);
                            this.setState({'room': (<PartyRoom url={this.state.url} name={this.state.name}/>),
                            "room_set":true});
                        }
                        }>GO!</Button>
                    </Row>
                    <Row className={"justify-content-md-center"}>
                        <Form>
                            <Form.Group controlId="landingForm.ControlInput1">
                                <Form.Label>Room ID</Form.Label>
                                <Form.Control onChange={(evt) => this.state.room_id = evt.target.value}
                                              placeholder="Room Id"/>
                            </Form.Group>
                        </Form>
                    </Row>
                    <Row className={"justify-content-md-center"}>
                        <Button onClick={() => {
                            console.log(this.state.url);
                            this.setState({"room_set":true,'room': (<PartyRoom name={this.state.name} room_id={this.state.room_id} is_join={true}/>)});
                        }
                        }>GO!</Button>
                    </Row>
                </div>

            );
        }
        return(
            <div>
                <Container fluid>

                    {pre_room}
                    <Row className={"justify-content-md-center"}>
                        {this.state.room}
                    </Row>



                </Container>

            </div>
        );
    }
}

export default LandingPage;