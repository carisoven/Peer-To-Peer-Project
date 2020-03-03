import React, { Fragment, useEffect }  from 'react'
import {getKnowSenderByID} from '../redux/action/sender'
import Loadpage from '../other/Loadpage';
import renderHTML from "react-render-html";
import { connect } from "react-redux";
import { Card } from "antd";
import PropTypes from "prop-types";
import Navbar2 from "../Navbar/navbar";
const Sender = ({getKnowSenderByID,sender:{sen},match}) => {
    useEffect(() => {
        getKnowSenderByID(match.params.id);
    }, [getKnowSenderByID])
    return sen == null ? (
        <Loadpage/>
      ) : (
        <Fragment>
          <Navbar2 />
          <div style={{ background: "#ECECEC", padding: "30px" }}>
            <Card title={sen.title} bordered={false}>
              <p>{renderHTML(sen.discription)}</p>
            </Card>
          </div>
        </Fragment>
      );
}
const mapStateToProps = state => ({
    sender: state.sender,
    sen: state.sen
  });
export default connect(mapStateToProps,{getKnowSenderByID})(Sender)