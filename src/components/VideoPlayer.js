import React from "react";
import ReactPlayer from "react-player";
import Container from "react-bootstrap/cjs/Container";
import Row from "react-bootstrap/cjs/Row";
import VideoQueue from "./VideoQueue";


import 'bootstrap/dist/css/bootstrap.min.css';


class VideoPlayer extends React.Component {
    constructor(props) {
        console.log("VIDEOOOOO")
        super(props);
        this.onProgress= this.onProgress.bind(this);
        this.onPause= this.onPause.bind(this);
        this.onPlay = this.onPlay.bind(this);
        this.onSeek = this.onSeek.bind(this);
        this.onReady = this.onReady.bind(this);

        let url = "";
        if (props.url == ""){
            url ='https://www.youtube.com/watch?v=QZw-rgaQVfI';
        } else {
            url = props.url;
        }

        console.log(url);



        this.ref = React.createRef();
        this.state = {
            'duration': 0.0,
            "database": props.database,
            'url': url ,
            'is_join': props.is_join || false,
            'playing':true,
        };

        console.log(`is_join ${this.state.is_join}`)

        setTimeout(()=>{
            this.state.database.state.ref.onSnapshot(doc=>{
                console.log(doc.data());
                if(doc.data() != undefined) {
                    this.setState({'url': doc.data()['url'], 'playing': doc.data()['mode'] == 'play'})
                }

            });

        },2000);


    }


    onReady(){
        console.log("Player is ready to play...");
        if(this.state.is_join){
            console.log('Initiating join')
            this.state.database.state.ref.onSnapshot(doc => {
                let data = doc.data();
                if(Math.abs(data['time'] - this.state.duration) >= 4.0) {
                    this.ref.current.seekTo(data['time'], 'seconds');
                }
            })

        }
    }

    onPlay(){
        //console.log(this.state.database)
        console.log("User has pressed play...");
        if(!this.state.is_join) {
            this.state.database.togglePlay("play");
        }
    }

    onPause(){
        console.log("User has paused the video")
        //console.log(this.state.database)
        if(!this.state.is_join) {
            this.state.database.togglePlay("pause");
        }
    }

    onSeek(){
        console.log('onSeek')
        ///console.log(`User has seeked to ${sec}`);
        //this.state.database.setSeek(sec);
    }

    onBuffer(){
        console.log("User is buffering...");

    }

    onProgress(dur){
        //if(Math.abs(this.state.duration - dur['playedSeconds']) >= 5.0) {
        this.state.duration = dur['playedSeconds'];

        if(!this.state.is_join) {
            this.state.database.setSeek(dur['playedSeconds']);
        }

        //}
        console.log(this.state.duration)


    }



    render() {
        console.log(`Rendering video with url ${this.state.url}`)
        return(
            <div>
                <Container fluid>
                    <Row>
                    <ReactPlayer
                        ref={this.ref}
                        url={this.state.url}
                        controls={!this.state.is_join} // Only host can control
                        light={false}
                        onPlay={this.onPlay}
                        onPause={this.onPause}
                        onBuffer={this.onBuffer}
                        onSeek={this.onSeek}
                        onReady={this.onReady}
                        onProgress={this.onProgress}
                        playing={this.state.playing}
                    />
                    </Row>
                    <br/>
                    <Row>
                        <VideoQueue changeVideo={(vid)=>{
                            this.state.database.setURL(vid);
                            //this.setState({"url":vid})
                        }}
                                    database={this.state.database}
                                    is_join ={this.state.is_join}
                        />
                    </Row>

                </Container>
            </div>
        );
    }
}

export default VideoPlayer;