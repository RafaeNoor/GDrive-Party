import React from "react";
import {LinkContainer} from 'react-router-bootstrap';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Form from 'react-bootstrap/Form';
import Button from "react-bootstrap/cjs/Button";
import ReactPlayer from "react-player";
import Container from "react-bootstrap/cjs/Container";

import 'bootstrap/dist/css/bootstrap.min.css';

class VideoPlayer extends React.Component {
    constructor(props) {
        super(props);
        this.onProgress= this.onProgress.bind(this);
        this.onPause= this.onPause.bind(this);

        this.ref = React.createRef();
        this.state = {
            'duration': 0.0,
            'url': props.url ||'https://drive.google.com/uc?export=download&id=1ukI_1oNyH6snfFZfNztbWUA1hdNpQjn4',

            'player': (<ReactPlayer
                                    ref={this.ref}
                                    url={props.url}
                                    controls={true}
                                    light={false}
                                    onPlay={this.onPlay}
                                    onPause={this.onPause}
                                    onBuffer={this.onBuffer}
                                    onSeek={this.onSeek}
                                    onReady={this.onReady}
                                    onProgress={this.onProgress}
            />),
        };

    }

    onReady(){
        console.log("Player is ready to play...");
    }

    onPlay(){
        console.log("User has pressed play...");
    }

    onPause(){
        console.log("User has paused the video")
    }

    onSeek(sec){
        console.log(`User has seeked to ${sec}`);
    }

    onBuffer(){
        console.log("User is buffering...");

    }

    onProgress(dur){
        this.state.duration = dur['playedSeconds'];
        console.log(this.state.duration)
    }



    render() {
        return(
            <div>
                <Container>
                    {this.state.player}
                    <br/>
                    <Button onClick = {()=> this.ref.current.seekTo(5,'seconds')}>FIVE</Button>
                </Container>
            </div>
        );
    }
}

export default VideoPlayer;