import React from "react";
import "../Style/App.scss";
import logo from "../img/logo.png";
import { Container, Row, Button, Col } from "react-bootstrap";

export default function SectionOne() {
  return (
    <Container className="carpark">
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
              Though strategic partnership with T-Mobile/Deausche Telekom across
              Europe and our unique algorithm.
            </b>
          </p>
        </Col>

        <Col xs={10} classname=" carpark_paddingBotton carpark_paddingTop">
          <Button classname="primary">READ MORE</Button>
        </Col>
      </Row>
    </Container>
  );
}
{
  /* <h4>
              Though strategic partnership with T-Mobile/Deausche Telekom across
              Europe and our unique algorithm.
            </h4> */
}

{
  /* <Col xs={12} classname="carpark_paddingTop carpark_header"> */
}

{
  /* <h2 classname="carpark_header">
            TO BECOME THE WORLD´S LEADING PARKING PROVIDER WITHNOUT OWNING A
            SINGLE PARKING SPOT!
          </h2> */
}
