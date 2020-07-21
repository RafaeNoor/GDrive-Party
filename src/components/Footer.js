import React from "react";
import Navbar from "react-bootstrap/Navbar";


class Footer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
        };
    }



    render() {
        return (
            <div >
                <Navbar collapseOnSelect fixed={"fixed"} expand="lg" bg="light" variant="light">
                    <Navbar.Text>Footer Text</Navbar.Text>
                </Navbar>

            </div>
        );
    }
}


export default Footer;