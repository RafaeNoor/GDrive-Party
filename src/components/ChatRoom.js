import React from "react";
import Container from "react-bootstrap/cjs/Container";
import Card from "react-bootstrap/cjs/Card";
import Form from 'react-bootstrap/cjs/Form';
import Dropdown from "react-bootstrap/cjs/Dropdown";

import 'bootstrap/dist/css/bootstrap.min.css';

let messages = [



]

class ChatRoom extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            'chat': messages,
            'cur_msg':"",
            "database": props.database,
            'name': props.name,
            "color":"info",
            "text_color":"white",
        };
        this.chatRef = React.createRef();
        this.renderAllMessages = this.renderAllMessages.bind(this);
        this.scrollToBottom = this.scrollToBottom.bind(this);
        this.setChatColor = this.setChatColor.bind(this);

        setTimeout(()=>{
            this.state.database.state.ref.onSnapshot(doc => {
                let data = doc.data();
                if(data != undefined) {
                    this.setState({"chat": data['chats']});
                }
            })

        },2000)
    }

    displayMessage(msg,isLast){
        if(!isLast) {
            return (
                <Container>
                    <Card bg={msg.color} style={{ width: '20rem' }} text={msg.text_color}>
                        <Card.Header><b>{msg.from}</b></Card.Header>
                        <Card.Body>{msg.text}</Card.Body>
                    </Card>
                    <br/>

                </Container>
            );
        } else {
            return (
                <div ref={this.chatRef}>
                <Container>
                    <Card bg={msg.color} style={{ width: '20rem' }} text={msg.text_color}>
                        <Card.Header><b>{msg.from}</b></Card.Header>
                        <Card.Body>{msg.text}</Card.Body>
                    </Card>
                    <br/>

                </Container>
                </div>
            );

        }
    }

    renderAllMessages(){
        let rendered = [];

        this.state.chat.forEach((msg,idx) => {
            rendered.push(this.displayMessage(msg,(idx == (this.state.chat.length - 1))));
        })

        console.log(this.chatRef);

        return rendered;//(<div id="chat_div" style={{"overflow-y":"scroll","height": "400px"}} >{rendered}</div>);

    }

    componentDidMount () {
        console.log("Component mounted");
        setTimeout(this.scrollToBottom,1500)
    }
    componentDidUpdate () {
        console.log("Component updated");
        setTimeout(this.scrollToBottom,1500)
    }
    scrollToBottom = () => {
        console.log("Scroll to bottom invoked")

        if(this.state.chat != [] && this.chatRef.current != null) {
            this.chatRef.current.scrollIntoView({behavior: "smooth"})
        }
    }

    setChatColor(color,text_color){
        this.setState({'color':color,'text_color':text_color});
    }

    render() {
        return(
            <div>
                <Container fluid>
                    <div style={{"overflow-y":"scroll","height": "400px"}} >{this.renderAllMessages()}</div>
                        <Form>
                            <Form.Group>
                                <Form.Control as={'textarea'} rows={'2'}
                                              placeHolder={'Enter Text to send to chat'}
                                              onChange={(evt)=>this.state.cur_msg = evt.target.value}
                                              onKeyDown={(evt)=>{
                                                  if(evt.key == "Enter" && this.state.cur_msg != "" && this.state.cur_msg !="\n"){
                                                      this.state.database.addChat({"from":this.state.name,"text":this.state.cur_msg,"color":this.state.color,
                                                          "text_color":this.state.text_color,"time":new Date()});
                                                      evt.target.value = "";
                                                  }
                                              }}

                                />
                            </Form.Group>
                        </Form>
                    <Dropdown>
                        <Dropdown.Toggle variant={this.state.color} text={this.state.text_color}>
                            Chat Color
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item onClick={()=>this.setChatColor('info','white')}>Blue</Dropdown.Item>
                            <Dropdown.Item onClick={()=>this.setChatColor('light','dark')}>White</Dropdown.Item>
                            <Dropdown.Item onClick={()=>this.setChatColor('dark','white')}>Black</Dropdown.Item>
                            <Dropdown.Item onClick={()=>this.setChatColor('primary','white')}>Dark Blue</Dropdown.Item>
                            <Dropdown.Item onClick={()=>this.setChatColor('secondary','white')}>Gray</Dropdown.Item>
                            <Dropdown.Item onClick={()=>this.setChatColor('success','white')}>Green</Dropdown.Item>
                            <Dropdown.Item onClick={()=>this.setChatColor('danger','white')}>Red</Dropdown.Item>
                            <Dropdown.Item onClick={()=>this.setChatColor('warning','white')}>Yellow</Dropdown.Item>
                        </Dropdown.Menu>

                    </Dropdown>



                </Container>

            </div>
        );
    }
}

export default ChatRoom;