import React, { Component } from "react";
import { Container } from "reactstrap";
import Navbar2 from "../Navbar/navbar";
import Table1 from "./table1";
import Table2 from "./table2";
import Table3 from "./table3";

export default class Home extends Component {
  render() {
    return (
      <div>
        <Navbar2 />
        <Container fluid>
          <Table1 />
          <Table2 />
          <Table3 />
        </Container>
      </div>
    );
  }
}
