import React from "react";
import {LinkContainer} from 'react-router-bootstrap';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Form from 'react-bootstrap/Form';
import Button from "react-bootstrap/cjs/Button";
import Container from "react-bootstrap/cjs/Container";
import ListGroup from "react-bootstrap/cjs/ListGroup";

import 'bootstrap/dist/css/bootstrap.min.css';

class VideoQueue extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            "queue": props.list || ["https://www.youtube.com/watch?v=Ajq7PXkfke4",
            "https://www.youtube.com/watch?v=QZw-rgaQVfI"],
            "current":0,
            "changeVideo": props.changeVideo,
        };

        this.makeList = this.makeList.bind(this);
    }

    makeList(){

        let items = [];
        this.state.queue.forEach( (vid,idx) => {
            let item = "";
            if(this.state.current == idx){
                item = (<ListGroup.Item as={"li"} onClick={()=>{
                    this.setState({"current":idx});
                    this.state.changeVideo(vid);
                }} active>{vid}</ListGroup.Item>);
            } else {
                item = (<ListGroup.Item as={"li"} onClick={()=>{
                    this.setState({"current":idx});
                    this.state.changeVideo(vid);
                }}>{vid}</ListGroup.Item>);
            }

            items.push(item);
        });

        return (
            <ListGroup as={"ul"}>
                {items}
            </ListGroup>
        );


    }





    render() {
        return(
            <Container fluid>
                {this.makeList()}
            </Container>
        );
    }
}

export default VideoQueue;