import React, { Component } from "react";
import {
  LineChart,
  XAxis,
  CartesianGrid,
  Line,
  YAxis,
  Tooltip
} from "recharts";
import { Container } from "react-bootstrap";

const styles = {
  containerClass: { paddingTop: "10%", paddingBottom: "3%" },
  warningClass: { color: "red", fontWeight: "900" },
  labelClass: {
      paddingTop:"1%",
    position: "absolute",
    left: "53%",
    color: "white"
  }
};

export class Timeline extends Component {
  render() {
    return (
      <div>
        <div className="d-xl-none  pt-3 red" style={styles.warningClass}>
          Please switch to a larger screen to view the Timeline!
        </div>
        <div className="d-none d-xl-block">
          <Container style={styles.containerClass}>
            <LineChart width={900} height={180} data={this.props.data}>
              <XAxis dataKey="month" />
              <YAxis domain={[0, 50]} />
              <Tooltip />
              <CartesianGrid stroke="#eee" strokeDasharray="12 12" />
              <Line
                type="monotone"
                dataKey="complaints"
                stroke="#F50057"
                strokeWidth="3"
                strokeOpacity="0.85"
                activeDot={{ r: 8 }}
              />
            </LineChart>
            <h6 style={styles.labelClass}> Complaints vs Months</h6>
          </Container>
        </div>
      </div>
    );
  }
}

export default Timeline;
