import React, { useEffect } from "react";
import { getResever } from "../redux/action/resever";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Table, Button } from "antd";
import { Link } from "react-router-dom";
const Table2 = ({ getResever, resever: { resever } }) => {
  useEffect(() => {
    getResever();
  }, [getResever]);

  const columns = [
    { title: "หัวข้อ", dataIndex: "title", key: "title" },
    { title: "ชื่อ Sender", dataIndex: "namesend", key: "namesend" },
    {
      title: "View",
      key: "View",
      render: record => {
        return (
          <Link to={`/knowledgeresev/${record._id}`}>
            <Button type="primary" shape="round" icon="eye">
              View
            </Button>
          </Link>
        );
      }
    }
  ];

  return (
    <div style={{ backgroundColor: "#DCDCDC", borderRadius: "5px" }}>
      <Table
        columns={columns}
        dataSource={resever}
        pagination={{ pageSize: 50 }}
        scroll={{ x: 300, y: 700 }}
      />
    </div>
  );
};
Table2.propTypes = {
  getResever: PropTypes.func.isRequired,
  resever: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  resever: state.resever
});
export default connect(mapStateToProps, { getResever })(Table2);
