import React from "react";
import Button from "react-bootstrap/cjs/Button";
import Container from "react-bootstrap/cjs/Container";
import Row from "react-bootstrap/cjs/Row";
import Col from "react-bootstrap/cjs/Col";
import Form from "react-bootstrap/cjs/Form";
import PartyRoom from "../components/PartyRoom";


import URLFormatter from "../components/URLFormatter";
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
            'title': 'GDrive-Party!',
            'url_formatter': new URLFormatter(),
        };
    }

    render() {

        let pre_room = "";
        if(!this.state.room_set) {
            pre_room = (
                <div>
                    <br/>

                    <Row className={"justify-content-md-center"}>
                        <h1>GDrive Party!</h1>
                    </Row>
                    <Row className={"justify-content-md-center"}>
                        <Form >
                            <Form.Group controlId="landingForm.ControlInput1">
                                <Form.Label className={"form_style"}>Display Name</Form.Label>
                                <Form.Control onChange={(evt) => this.state.name = evt.target.value}
                                              placeholder="Anonymous"/>
                            </Form.Group>
                            <Form.Group controlId="landingForm.ControlInput2">
                                <Form.Label className={"form_style"}>Party Title</Form.Label>
                                <Form.Control onChange={(evt) => this.state.title = evt.target.value}
                                              placeholder="GDrive-Party!"/>
                            </Form.Group>
                            <Form.Group controlId="landingForm.ControlInput1">
                                <Form.Label className={"form_style"}>Video Address</Form.Label>
                                <Form.Control onChange={(evt) => this.state.url = evt.target.value}
                                              placeholder="Video URL"/>
                            </Form.Group>
                        </Form>
                    </Row>
                    <Row className={"justify-content-md-center"}>
                        <Button variant={"info"} onClick={() => {
                            console.log(this.state.url);
                            this.setState({'room': (<PartyRoom url={this.state.url_formatter.rewrite_url(this.state.url)} title={this.state.title} name={this.state.name}/>),
                                "room_set":true});
                        }
                        }>Start Party</Button>
                    </Row>
                    <Row className={"justify-content-md-center"}>
                        <Form>
                            <Form.Group controlId="landingForm.ControlInput1">
                                <Form.Label className={"form_style"}>Room ID</Form.Label>
                                <Form.Control onChange={(evt) => this.state.room_id = evt.target.value}
                                              placeholder="Room Id"/>
                            </Form.Group>
                        </Form>
                    </Row>
                    <Row className={"justify-content-md-center"}>
                        <Button variant={"info"}  onClick={() => {
                            console.log(this.state.url);
                            this.setState({"room_set":true,'room': (<PartyRoom name={this.state.name} room_id={this.state.room_id} is_join={true}/>)});
                        }
                        }>Join Party</Button>
                    </Row>
                    <br/>


                </div>

            );
        }
        return(
            <div>
                <Container fluid={"md"}>

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