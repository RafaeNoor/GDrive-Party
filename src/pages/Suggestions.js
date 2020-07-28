import React from "react";
import Button from "react-bootstrap/cjs/Button";

import Container from "react-bootstrap/cjs/Container";
import Row from "react-bootstrap/cjs/Row";
import Form from "react-bootstrap/cjs/Form";

import DatabaseBackend from "../components/DatabaseBackend";
import 'bootstrap/dist/css/bootstrap.min.css';



class Suggestions extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            "text":"",
            "database": new DatabaseBackend(),
        }
    }

    render(){
        return (
            <Container fluid>
                <br/>
                <Row className={"justify-content-md-center"}>
                    <Form>
                        <Form.Group controlId="suggestion form">
                            <Form.Label><h1>Help Improve GDrive-Party by offering suggestions!</h1></Form.Label>
                            <Form.Control as="textarea" rows="5" placeholder={"I would love your ideas!"}
                                          onChange={(evt)=>this.state.text = evt.target.value.trim()}
                                          onKeyDown={(evt)=>{
                                              if(evt.key == "Enter" && this.state.text != ""){
                                                  this.state.database.addSuggestion({
                                                      'idea':this.state.text,
                                                      'time': new Date(),
                                                  });
                                                  evt.target.value = "";
                                              }
                                          }}/>
                        </Form.Group>
                    </Form>

                </Row>

            </Container>
        );
    }

}

export default Suggestions;