import React from "react";

import Container from "react-bootstrap/cjs/Container";
import Row from "react-bootstrap/cjs/Row";
import Col from "react-bootstrap/cjs/Col";
import Button from "react-bootstrap/cjs/Button";

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
            'is_join': props.is_join || false,
            'name': props.name,
        };

        console.log(`IS JOIN ${this.state.is_join}`);


    }
    componentDidMount() {
        if(!this.state.is_join) {
            this.state.database.createRoom({
                "url": this.state.url, "title": this.state.title,
                "mode": "pause", "time": 0.000,"chats":[{"from":"GDrive-Party!","text":"Welcome to GDrive Party!","title":
                this.state.title}],
            }).then(ref => {
                this.state.room_id = ref.id;
                console.log(ref.id);
                ref.onSnapshot(doc => {
                    console.log("Current data: ", doc.data());
                })
                this.setState({'room_id':ref.id});
            })
        } else {
            console.log('fetching room info')
            this.state.database.getRef(this.state.room_id).then(ref => {
                this.state.room_id = ref.id;
                ref.get().then(doc=>{
                    console.log(doc.data());
                    this.setState({'room_id':ref.id, url: doc.data['url'],title:doc.data['title']});
                })
            })
        }

    }

    render() {

        let delete_room  = "";

        if(!this.state.is_join){
            delete_room = (<Button onClick={()=>this.state.database.deleteRoom()}>Delete Room</Button>);
        }

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
                            <VideoPlayer url={this.state.url} database={this.state.database} is_join={this.state.is_join}/>
                        </Col>
                        <Col md={'auto'}>
                            <ChatRoom name={this.state.name} database={this.state.database}/>
                        </Col>
                    </Row>
                    <Row className={"justify-content-md-center"}>
                        {delete_room}
                    </Row>
                </Container>

            </div>
        );
    }
}

export default PartyRoom;