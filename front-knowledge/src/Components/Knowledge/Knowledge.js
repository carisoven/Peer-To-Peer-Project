import React, { Fragment, useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getKnowbyID } from "../redux/action/knowledge";
import renderHTML from "react-render-html";
import Navbar2 from "../Navbar/navbar";
import { Card } from "antd";
import Loadpage from '../other/Loadpage';

const Knowledge = ({ getKnowbyID, knowledge: { knows, loading }, match }) => {
  useEffect(() => {
    getKnowbyID(match.params.id);
  }, [getKnowbyID]);

  return knows == null ? (
    <Loadpage/>
  ) : (
    <Fragment>
      <Navbar2 />
      <div style={{ background: "#ECECEC", padding: "30px" }}>
        <Card title={knows.title} bordered={false}>
          <p>{renderHTML(knows.discription)}</p>
        </Card>
      </div>
    </Fragment>
  );
};

Knowledge.propTypes = {
  getKnowbyID: PropTypes.func.isRequired,
  knows: PropTypes.object.isRequired,
  knowledge: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  knowledge: state.knowledge,
  knows: state.knows
});

export default connect(mapStateToProps, { getKnowbyID })(Knowledge);
