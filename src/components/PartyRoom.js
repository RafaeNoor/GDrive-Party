import React from "react";
import {LinkContainer} from 'react-router-bootstrap';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Form from 'react-bootstrap/Form';
import Button from "react-bootstrap/cjs/Button";
import Container from "react-bootstrap/cjs/Container";
import Row from "react-bootstrap/cjs/Row";
import Col from "react-bootstrap/cjs/Col";

import 'bootstrap/dist/css/bootstrap.min.css';
import VideoPlayer from "./VideoPlayer";
import ChatRoom from "./ChatRoom";
import DatabaseBackend from "./DatabaseBackend";

class PartyRoom extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            'room_id': props.room_id || "NO ROOM ID PROVIDED",
            'title': props.title || "GDrive Party!",
            'url': props.url,
            'database': new DatabaseBackend(),
            'ref': "",
        };


    }
    componentDidMount() {
        this.state.database.createRoom({"url":this.state.url,"title":this.state.title,
        "mode":"pause","current_time":"0.000"}).then(ref => {
            this.state.room_id = ref.id;
            console.log(ref.id);
            ref.onSnapshot(doc => {
                console.log("Current data: ", doc.data());
            })
        })

    }

    render() {
        return(
            <div>
                <Container fluid>
                    <Row className={"justify-content-md-center"}>
                        <h1>{this.state.title}</h1>
                    </Row>
                    <Row className={"justify-content-md-center"}>
                        <h3>Room-ID: {this.state.room_id}</h3>
                    </Row>
                    <Row >
                        <Col md={'auto'}>
                            <VideoPlayer url={this.state.url} />
                        </Col>
                        <Col md={'auto'}>
                            <ChatRoom/>
                        </Col>
                    </Row>
                </Container>

            </div>
        );
    }
}

export default PartyRoom;