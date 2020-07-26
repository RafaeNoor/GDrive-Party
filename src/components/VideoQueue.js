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
            "is_join": props.is_join || false,
            "database": props.database,
        };

        this.makeList = this.makeList.bind(this);
        setTimeout(()=>{
            this.state.database.state.ref.onSnapshot(doc=>{
                console.log(doc.data());
                if(doc.data() != undefined) {
                    this.setState({"queue":doc.data()['video_list']})
                }

            });

        },2000);
    }

    makeList(){

        let items = [];
        this.state.queue.forEach( (vid,idx) => {
            let item = "";
            if(this.state.current == idx){
                item = (<ListGroup.Item as={"li"} variant={"info"} disabled={this.state.is_join} onClick={()=>{
                    if(!this.state.is_join) {
                        this.setState({"current": idx});
                        this.state.changeVideo(vid);
                    }
                }} >{vid}</ListGroup.Item>);
            } else {
                item = (<ListGroup.Item as={"li"} variant={"light"} text={"dark"} disabled={this.state.is_join} onClick={()=>{
                    if(!this.state.is_join) {
                        this.setState({"current": idx});
                        this.state.changeVideo(vid);
                    }
                }}>{vid}</ListGroup.Item>);
            }

            items.push(item);
        });

        return (
            <ListGroup as={"ul"} >
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