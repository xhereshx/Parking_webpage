import React from "react";
import { Container, Row, Button, Col } from "react-bootstrap";
// import  from "react-bootstrap/Row";
// import  from "react-bootstrap/Button";

export default function Grids() {
  return (
    <div>
      <Container className="container_border">
        <Row className="justify-content-md-center">
          <Col className="container_itemsborder" sm={12}>
            1 of 3
          </Col>
          <Col className="container_itemsborder" sm="3">
            2 of 3
          </Col>
          <Col className="container_itemsborder" sm="3">
            3 of 3
          </Col>
        </Row>
        <Row>
          <Col>
            <Button variant="info">Test čtyři</Button>
          </Col>
        </Row>
      </Container>
      <Container className="container_border">
        <Row className="justify-content-md-center">
          <Col xs lg="2" className="container_itemsborder">
            1 of 3
          </Col>
          <Col className="container_itemsborder" md="auto">
            Variable width content
          </Col>
          <Col className="container_itemsborder" xs lg="2">
            3 of 3
          </Col>
        </Row>
        <Row className="justify-content-md-center">
          <Col className="container_itemsborder">1 of 3</Col>
          <Col className="container_itemsborder" md="auto">
            Variable width content
          </Col>
          <Col className="container_itemsborder" xs lg="2">
            3 of 3
          </Col>
        </Row>
      </Container>
      <Container>
        {/* Stack the columns on mobile by making one full-width and the other half-width */}
        <Row>
          <Col xs={12} md={8}>
            xs=12 md=8
          </Col>
          <Col xs={6} md={4}>
            xs=6 md=4
          </Col>
        </Row>

        {/* Columns start at 50% wide on mobile and bump up to 33.3% wide on desktop */}
        <Row>
          <Col xs={6} md={4}>
            xs=6 md=4
          </Col>
          <Col xs={6} md={4}>
            xs=6 md=4
          </Col>
          <Col xs={6} md={4}>
            xs=6 md=4
          </Col>
        </Row>

        {/* Columns are always 50% wide, on mobile and desktop */}
        <Row>
          <Col xs={6}>xs=6</Col>
          <Col xs={6}>xs=6</Col>
        </Row>
      </Container>

      <Container>
        <Row>
          <Col xs>First, but unordered</Col>
          <Col xs={{ order: 12 }}>Second, but last</Col>
          <Col xs={{ order: 1 }}>Third, but second</Col>
        </Row>
      </Container>

      <Container>
        <Row>
          <Col xs={{ order: -1 }}>First, but last</Col>
          <Col xs>Second, but unordered</Col>
          <Col xs={{ order: "first" }}>Third, but first</Col>
        </Row>
      </Container>
      <Container>
        <Row md={4}>
          <Col>1 of 3</Col>
          <Col xs={6}>2 of 3</Col>
          <Col>3 of 3</Col>
        </Row>
      </Container>
    </div>
  );
}
