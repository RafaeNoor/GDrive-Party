import React from 'react';
import logo from './logo.svg';
import './App.css';


import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
} from "react-router-dom";
import Container from "react-bootstrap/Container";
import Header from "./components/Header";
import Footer from "./components/Footer";
import VideoPlayer from "./components/VideoPlayer";
import LandingPage from "./pages/LandingPage";

function App() {
    return (
        <Router>
            <div>
                <Header/>
                <Container fluid>

                    <Switch>
                        <Route path={"/about"}>
                            <h1>ABOUT</h1>
                        </Route>
                        <Route path={"/"}>
                            <LandingPage/>
                        </Route>
                    </Switch>
                </Container>
                <Footer/>
            </div>
        </Router>
    );
}

export default App;
