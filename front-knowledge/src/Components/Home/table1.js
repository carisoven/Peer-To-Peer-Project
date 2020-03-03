import React, { useEffect } from "react";
import { getKnowledge } from "../redux/action/knowledge";
import renderHTML from "react-render-html";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Table, Button } from "antd";

import { Link } from "react-router-dom";

const Table1 = ({ getKnowledge, knowledge: { knowledge } }) => {
  useEffect(() => {
    getKnowledge();
  }, [getKnowledge]);

  const columns = [
    { title: "หัวข้อ", dataIndex: "title", key: "title" },
    { title: "status", dataIndex: "status", key: "status" },
    {
      title: "Edit",
      key: "Edit",
      render: record => {
        renderHTML(record.discription);
        return (
          <span>
            <Link to={`/knowledge/${record._id}`}>
              <Button type="primary" shape="round" icon="eye">
                View
              </Button>
            </Link>
            <Link to={`/edit-knowledge/${record._id}`}>
              <Button type="primary" shape="round" icon="edit">
                Edit
              </Button>
            </Link>
            <Link to={`/del-knowledge/${record._id}`}>
              <Button type="danger" shape="round" icon="delete">
                Delete
              </Button>
            </Link>
          </span>
        );
      }
    }
  ];

  return (
    <div style={{ backgroundColor: "#DCDCDC", borderRadius: "5px" }}>
      <Table
        columns={columns}
        dataSource={knowledge}
        pagination={{ pageSize: 20 }}
        scroll={{ x: 300, y: 250 }}
      />
    </div>
  );
};

Table1.propsTypes = {
  getKnowledge: PropTypes.func.isRequired,
  knowledge: PropTypes.object.isRequired,
  knows: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  knowledge: state.knowledge,
  knows: state.knows
});

export default connect(mapStateToProps, { getKnowledge })(Table1);
