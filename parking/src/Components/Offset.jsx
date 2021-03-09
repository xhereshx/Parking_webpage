import React from "react";
import { Container, Row, Button, Col } from "react-bootstrap";

export default function Offset() {
  return (
    // <Container className="container_border">
    //   <Row>
    //     <Col className="container_itemsborder" md={4}>
    //       md=4
    //     </Col>
    //     <Col
    //       className="container_itemsborder"
    //       md={{ span: 4, offset: 1 }}
    //     >{`md={{ span: 4, offset: 4 }}`}</Col>
    //   </Row>
    //   <Row>
    //     <Col
    //       className="container_itemsborder"
    //       md={{ span: 3, offset: 4 }}
    //     >{`md={{ span: 3, offset: 3 }}`}</Col>
    //     <Col
    //       className="container_itemsborder"
    //       md={{ span: 3, offset: 2 }}
    //     >{`md={{ span: 3, offset: 3 }}`}</Col>
    //   </Row>
    //   <Row>
    //     <Col
    //       className="container_itemsborder"
    //       md={{ span: 6, offset: 3 }}
    //     >{`md={{ span: 6, offset: 3 }}`}</Col>
    //   </Row>
    // </Container>

    // <Container>
    //   <Row xs={2} md={4} lg={6}>
    //     <Col>1 of 2</Col>
    //     <Col>2 of 2</Col>
    //     <Col>1 of 3</Col>
    //     <Col>2 of 4</Col>
    //     <Col>1 of 5</Col>
    //     <Col>2 of 6</Col>
    //     <Col>1 of 7</Col>
    //     <Col>2 of 8</Col>
    //   </Row>
    //   <Row xs={1} md={2}>
    //     <Col>1 of 3</Col>
    //     <Col>2 of 3</Col>
    //     <Col>3 of 3</Col>
    //     <Col>1 of 3</Col>
    //     <Col>2 of 3</Col>
    //     <Col>3 of 3</Col>
    //   </Row>
    // </Container>
    <>
      {/* <Container className="container_border">
        <Row className="container_itemsborder" xs={2} md={4} lg={6}>
          <Col className="container_itemsborder">1 of 2</Col>
          <Col className="container_itemsborder">2 of 2</Col>
        </Row>
        <Row xs={1} md={2}>
          <Col className="container_itemsborder">1 of 3</Col>
          <Col className="container_itemsborder">2 of 3</Col>
          <Col className="container_itemsborder">3 of 3</Col>
        </Row>
      </Container> */}
      {/* <Container>
        <Row md="4">
          <Col>1 of 3</Col>
          <Col xs="6">2 of 3</Col>
          <Col>3 of 3</Col>
        </Row>
      </Container> */}
      {/* <Container>
        <Row className="justify-content-center">
          <Col xs lg="6">
            1 of 3
          </Col>
          <Row>
            <Col md="6">Variable width content</Col>
            <Col xs lg="6">
              3 of 3
            </Col>
          </Row>
        </Row>
        <Row className="justify-content-end">
          <Col xs lg="2">
            1 of 3
          </Col>
          <Col md="auto">Variable width content</Col>
          <Col xs lg="2">
            3 of 3
          </Col>
        </Row>
      </Container> */}
      {/* <Container className="carpark">
        <Row className="justify-content-center carpark_header" id="home">
          <Col xs={10} className="carpark_padding carpark_header">
            <p>
              <b>
                TO BECOME THE WORLD´S LEADING PARKING PROVIDER WITHNOUT OWNING A
                SINGLE PARKING SPOT!
              </b>
            </p>
          </Col>

          <Col
            xs={10}
            className="carpark_paddingTop carpark_sectionHeader carpark_paddingBotton  "
          >
            <p>
              <b>
                Though strategic partnership with T-Mobile/Deausche Telekom
                across Europe and our unique algorithm.
              </b>
            </p>
          </Col>

          <Col xs={10} classname=" carpark_paddingBotton carpark_paddingTop">
            <Button classname="primary">READ MORE</Button>
          </Col>
        </Row>
        <Row className="justify-content-end">
          <Col>1 of 3</Col>
          <Col md="auto">Variable width content</Col>
          <Col xs lg="2">
            3 of 3
          </Col>
        </Row>
      </Container> */}
    </>
  );
}
