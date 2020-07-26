import React from "react";
import Button from "react-bootstrap/cjs/Button";

import Container from "react-bootstrap/cjs/Container";
import Row from "react-bootstrap/cjs/Row";
import Accordion from "react-bootstrap/cjs/Accordion";
import Card from "react-bootstrap/cjs/Card";

import 'bootstrap/dist/css/bootstrap.min.css';

let how_tos= [
    {
        "question": "What is GDrive-Party?",
        "answer": "GDrive Party is a service which lets you watch synchronised video with your friends \
        similar to 'Netflix Party'."
    },
    {
        "question": "What video(s) can I watch with my friends?",
        "answer": "GDrive Party currently supports YouTube, Facebook, Twitch, SoundCloud, Streamable, Vimeo, Wistia, Mixcloud, DailyMotion, \
        \ and ofcourse Videos from Google Drive."
    },
    {
        "question": "Is GDrive-Party Free?",
        "answer": "GDrive-Party is absolutely free! You can help improve it at https://github.com/RafaeNoor/GDrive-Party ."
    },
    {
        "question": "How can I use GDrive-Party?",
        "answer": "On the main page, you would enter a Display name which will be shown in your party chat. Then you\ " +
            "you would copy the video URL from the previously mentioned support platforms and paste that into the Video Address \
            textbox. Clicking the 'Start Party' button below that would create a new lobby where you would be shown a 'room_id'. Your \ \
            friends would use that room_id and enter that into the Room ID textbox on the main page and press 'Join Party' below that. They would \ \
            then be added into your lobby. From their, only the Host can control video playback such as Play/Pause and seeking."
    },
    {
        "question":"What other features does GDrive-Party offer?",
        "answer": "Once a Room is created, the host has additional controls; They can create a video queue \
        and as such can use the room to watch multiple videos. These videos can span all the platforms listed \
        above."
    }

];


class HowToUse extends React.Component {
    constructor(props) {
        super(props);
        this.state = {"pairs": how_tos};
    }

    build_accord(pairs){
        let cards = [];

        pairs.forEach( (pair,idx) => {
            cards.push(
                <Card style={{ width: '50rem' }} bg={"info"} text={"light"}>
                    <Card.Header>
                        <Accordion.Toggle as={Button} variant="outline-light" eventKey={idx.toString()}>
                            {pair.question}
                        </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey={idx.toString()}>
                        <Card.Body>{pair.answer}</Card.Body>
                    </Accordion.Collapse>
                </Card>
            )
        });

        return (
            <Accordion>
                {cards}
            </Accordion>
        );

    }

    render() {
        return(
            <div>
                <Container fluid>
                    <br/>
                    <Row className={"justify-content-md-center"}>
                        {this.build_accord(this.state.pairs)}
                    </Row>
                </Container>
            </div>
        );
    }
}

export default HowToUse;