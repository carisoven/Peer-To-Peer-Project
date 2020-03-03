import React, { useEffect, useState } from "react";
import { getSender, applySender } from "../redux/action/sender";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Table, Button, Popconfirm } from "antd";
import { Link } from "react-router-dom";

const Table3 = ({ getSender, sender: { sender }, applySender }) => {
  useEffect(() => {
    getSender();
  }, [getSender]);

  const [formApp, setFormApp] = useState({
    title: "",
    discription: ""
  });
  const columns = [
    { title: "หัวข้อ", dataIndex: "title", key: "title" },
    { title: "ชื่อ Resever name", dataIndex: "name", key: "name" },
    { title: "สถานะ", dataIndex: "status", key: "status" },
    {
      title: "Set Status",
      key: "Edit",
      render: record => {
        const onSubmit = e => {
          setFormApp({ title: record.title, discription: record.discription });
          applySender(formApp);
        };
        if (record.status !== "true") {
          return (
            <span>
              <Link to={`/knowledgeSend/${record._id}`}>
                <Button type="primary" shape="round" icon="eye">
                  View
                </Button>
              </Link>
              <Link to="/">
                <Popconfirm title="Sure to Apply?" onConfirm={e => onSubmit(e)}>
                  <Button onClick={e => onSubmit()} shape="round">
                    Apply
                  </Button>
                </Popconfirm>
              </Link>
            </span>
          );
        }
      }
    }
  ];

  return (
    <div style={{ backgroundColor: "#DCDCDC", borderRadius: "5px" }}>
      <Table
        columns={columns}
        dataSource={sender}
        scroll={{ x: 300, y: 250 }}
      />
    </div>
  );
};

Table3.propsTypes = {
  getSender: PropTypes.func.isRequired,
  applySender: PropTypes.func.isRequired,
  sender: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  sender: state.sender
});
export default connect(mapStateToProps, { getSender, applySender })(Table3);
