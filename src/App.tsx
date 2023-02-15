import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";

import "./App.css";
import logo from "./mahomes.jpg";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript with Cole McCaleb
            </header>
            <h1 style={{ backgroundColor: "green" }}>
                UD CISC275, Cole McCaleb, Hello World
            </h1>
            <img src={logo} alt="A picture of Mahomes the Quarterback" />
            <p>Ordered List of favorite Coding Languages:</p>
            <ul style={{ textAlign: "center", listStyle: "inside" }}>
                <li>C++</li>
                <li>Java</li>
                <li>Python</li>
            </ul>
            <Button onClick={() => console.log("Hello World!")}>
                Log Hello World
            </Button>
            <Container>
                <Row>
                    <Col>
                        <div
                            style={{
                                width: 100,
                                height: 100,
                                backgroundColor: "red",
                                margin: "center"
                            }}
                        ></div>
                    </Col>
                    <Col>
                        <div
                            style={{
                                width: 100,
                                height: 100,
                                backgroundColor: "red",
                                margin: "center"
                            }}
                        ></div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default App;
