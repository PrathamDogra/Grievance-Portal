import React, { Component } from "react";
import "../../App.css";
import Fade from "react-reveal";

import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import Timeline from "./Timeline";
import CardTile from "./CardTile";
const TeamData = [
  {
    complaints: 15,
    month: 1
  },
  {
    complaints: 23,
    month: 3
  },
  {
    complaints: 2,
    month: 5
  },
  {
    complaints: 77,
    month: 7
  },
  {
    complaints: 10,
    month: 9
  },
  {
    complaints: 50,
    month: 12
  }
];

const styles = {
  containerClass: { paddingTop: "2%", paddingBottom: "2%" },
  primaryColorClass: { color: "#2026D2" },
  secondaryColorClass: { color: "#F1295C" },
  primaryBoldColorClass: { color: "#2026D2", fontWeight: "bold" },
  secondaryBoldColorClass: { color: "#F1295C", fontWeight: "bold" },
  boldClass: { fontWeight: "bold" }
};

export default class AdminDashboard extends Component {
  render() {
    return (
      <div>
        <div className="App">
        <header className="App-header">
          <h3 style={{ color: "white", fontWeight: "bold", paddingTop:"1%" }}>
            G R I E V A N C E S
          </h3>
          
            {/* <p>This page will contain charts and graphs.</p> */}

            <Timeline data={TeamData} />
            <div className="p-4">
            <h5 className="pt-4" style={{textAlign:"left"}}>
         Grievances can be monitored monthly-wise to increase the efficiency of departments. Minimum complaint<br/> threshold can be kept to increase the quality of service.
         
        </h5>
        </div>
            <Container style={styles.containerClass}>
              <h3 style={styles.boldClass}>
                O V E R V I E W
              </h3>
             
              <Row className="justify-content-md-center">
                <Col sm="true">
                  <Fade left delay={9000}>
                  <div className="p-3">
                    <CardTile header="Total" info={"29"} />
                  </div>
                  </Fade>
                </Col>
                <Col sm="true">
                  <Fade delay={9000}>
                  <div className="p-3">
                    <CardTile header="Solved" info={"22"} />
                  </div>
                  </Fade>
                </Col>
                <Col sm="true">
                  <Fade right delay={9000}>
                  <div className="p-3">
                    <CardTile header="Unsolved" info={"23"} />
                  </div>
                  </Fade>
                </Col>
              </Row>
            </Container>
            <Container>
              
            </Container>
            <footer>
            <h6><a
              className="App-link"
              href="http://msit.in/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Team-BaseUX
            </a></h6>
          </footer>
          </header>
         
        </div>
      </div>
    );
  }
}
