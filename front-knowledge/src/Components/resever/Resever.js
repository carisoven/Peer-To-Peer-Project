import React, { Fragment, useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Navbar2 from "../Navbar/navbar";
import { getResevByID } from "../redux/action/resever";
import { Card } from "antd";
import renderHTML from "react-render-html";
import Loadpage from '../other/Loadpage';

const Resever = ({ getResevByID, resever: { resev }, match }) => {
  useEffect(() => {
    getResevByID(match.params.id);
  }, [getResevByID]);

  return resev == null ? (
    <Loadpage/>
  ) : (
    <Fragment>
      <Navbar2 />
      <div style={{ background: "#ECECEC", padding: "30px" }}>
        <Card title={resev.title} bordered={false}>
          <p>{renderHTML(resev.discription)}</p>
        </Card>
      </div>
    </Fragment>
  );
};

Resever.propTypes = {
  getResevByID: PropTypes.func.isRequired,
  resever: PropTypes.object.isRequired,
  resev: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  resever: state.resever,
  resev: state.resev
});
export default connect(mapStateToProps, { getResevByID })(Resever);
