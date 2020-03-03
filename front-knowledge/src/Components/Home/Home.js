// import React, { Component } from "react";
// import { Container, Label } from "reactstrap";
// import Navbar2 from "../Navbar/navbar";
// import Table1 from "./table1";
// import Table3 from "./table3";

// export default class Home extends Component {
//   render() {
//     return (        
//       <div fluid style={{ background: "#ECECEC", height: 965 }}>
//         <Navbar2 />
//         <br />
//         <Container>
//           <Label style={{ fontSize: "15px" }} sm={2}>
//             Knowledge
//           </Label>
//           <Table1 />
//           <br />
//           <Label style={{ fontSize: "15px" }} sm={2}>
//             My Sender Knowledge
//           </Label>
//           <Table3 />
//         </Container>
//       </div>
//     );
//   }
// }

import React from 'react'
import { Container, Label } from "reactstrap";
import Navbar2 from "../Navbar/navbar";
import Table1 from "./table1";
import Table3 from "./table3";
 const Home = () => {
  return (
      <div fluid style={{ background: "#ECECEC", height: 965 }}>
        <Navbar2 />
        <br />
        <Container>
          <Label style={{ fontSize: "15px" }} sm={2}>
            Knowledge
          </Label>
          <Table1 />
          <br />
          <Label style={{ fontSize: "15px" }} sm={2}>
            My Sender Knowledge
          </Label>
          <Table3 />
        </Container>
      </div>
  )
}
export default Home