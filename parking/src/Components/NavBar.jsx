import React from "react";
import "../Style/App.scss";
import { Container, Row, Button, Col } from "react-bootstrap";
import logo from "../img/logo.png";

export default function NavBar() {
  return (
    <>
      <Container className="nav_bar">
        <Row className="justify-content-end">
          {" "}
          <Col lg={4}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col
            lg={8}
            classname="navbar--top navbar_div"
            style={{ marginTop: "1rem" }}
          >
            <Row classname="justify-content-end">
              <Col sm={4} md={2}>
                <a href="#home">
                  <h5>Home</h5>
                </a>
              </Col>
              <Col sm={4} md={2}>
                <a href="#solution">
                  <h5>Solution</h5>
                </a>
              </Col>
              <Col sm={4} md={2}>
                <a href="#solution">
                  <h5>Benefits</h5>
                </a>
              </Col>
              <Col sm={4} md={2}>
                <a href="#concept">
                  <h5>Concept</h5>
                </a>
              </Col>
              <Col sm={4} md={2} classname="navbar--margin">
                <a
                  style={{ whiteSpace: "nowrap" }}
                  classname="navbar--nowrap"
                  href="#map"
                >
                  <h5>Road map</h5>
                </a>
              </Col>
              <Col sm={4} md={2}>
                <a href="#partners">
                  <h5>Partners</h5>
                </a>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
}
