import React from "react";
import "../Style/App.scss";
import logo from "../img/logo.png";
import { Container, Row, Col } from "react-bootstrap";
import watch from "../img/icon_watch.png";
import money from "../img/icon_money_bag.png";
import cloud from "../img/icon_cloud.png";
import cost from "../img/icon_hight_cost.png";
import icon from "../img/icon_missing.png";
import struggling from "../img/icon_struggling.png";

export default function SectionTwo() {
  return (
    <Container>
      <Row xs={1} classname=" parkingProblems justify-content-center">
        <Col classname="parkingProblems_header">
          <p>
            <b>COMMON PARKING PROBLEMS</b>
          </p>
        </Col>

        <div classname="w-100"></div>
        <Col xs={10} sm={5} md={4} classname="parkingProblems_left">
          <p classname="parkingProblems--paddingboton5 parkingProblems_sectionHeader">
            <b>
              While trying to find a parking spot each week an average driver
              will:
            </b>
          </p>
          <Row classname="parkingProblems--paddingboton5">
            <Col xs={3} sm={3} lg={2}>
              <img src={watch} alt="hodiny" />
            </Col>
            <Col xs={8} sm={9} lg={7}>
              <p>
                Lose <b classname="parkingProblems--color">80 minutes</b> of
                personal free time
              </p>
            </Col>
          </Row>
          <Row classname="parkingProblems--paddingboton5">
            <Col xs={3} sm={3} lg={2}>
              <img src={money} alt="peníze" />
            </Col>
            <Col xs={8} sm={9} lg={7}>
              <p>
                Waste <b classname="parkingProblems--color">€25.75</b> on fuel &
                lost income
              </p>
            </Col>
          </Row>
          <Row>
            <Col xs={3} sm={3} lg={2}>
              <img src={cloud} alt="co2" />
            </Col>
            <Col xs={8} sm={9} lg={7}>
              <p>
                Produce an extra <b classname="parkingProblems--color">5 kg</b>{" "}
                of CO2.
              </p>
            </Col>
          </Row>
        </Col>
        <Col xs={1} md={2}></Col>
        <Col xs={11} sm={5} md={4} classname="parkingProblems_left">
          <p classname="parkingProblems--paddingboton5 parkingProblems_sectionHeader">
            <b>While managing parking, an average city is:</b>
          </p>
          <Row classname="parkingProblems--paddingboton5">
            <Col xs={2} sm={3} lg={2}>
              <img src={cost} alt="košík" />
            </Col>
            <Col xs={10} sm={9} lg={10}>
              <p>
                Paying <b classname="parkingProblems--color">high costs</b> to
                install and maintain sensors.
              </p>
            </Col>
          </Row>
          <Row classname="parkingProblems--paddingboton5">
            <Col xs={2} sm={3} lg={2}>
              <img src={icon} alt="graf" />
            </Col>
            <Col xs={10} sm={9} lg={10}>
              <p>
                <b classname="parkingProblems--color">Missing</b> centralised
                online statistics.
              </p>
            </Col>
          </Row>
          <Row>
            <Col xs={2} sm={3} lg={2}>
              <img src={struggling} alt="peněžka" />
            </Col>
            <Col xs={10} sm={9} lg={10}>
              <p>
                <b classname="parkingProblems--color">Struggling</b> with
                payments collection.
              </p>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}
