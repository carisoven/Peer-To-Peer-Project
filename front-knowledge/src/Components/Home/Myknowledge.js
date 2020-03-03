import React, { Fragment } from 'react'
import { Label } from "reactstrap";
import Table2 from "./table2";
import Navbar2 from "../Navbar/navbar";

export const Myknowledge = () => {
    return (
        <Fragment>
        <Navbar2 />
            <div style={{ background: '#ECECEC', padding: '30px',height:905}}>
                <Label style={{fontSize:'15px'}} sm={2} >
                    My Knowledge
                </Label>
            <Table2 />
            </div>
      </Fragment>
    )
}
