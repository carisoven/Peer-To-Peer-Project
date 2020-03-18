import React, { useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { deleteKnowID } from "../redux/action/knowledge";

const Delknow = ({ deleteKnowID, match, history }) => {
  useEffect(() => {
    deleteKnowID(match.params.id, history);
  }, [deleteKnowID]);
  return <div></div>;
};

Delknow.propTypes = {
  deleteKnowID: PropTypes.func.isRequired,
  knows: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  knows: state.knows
});

export default connect(mapStateToProps, { deleteKnowID })(Delknow);
