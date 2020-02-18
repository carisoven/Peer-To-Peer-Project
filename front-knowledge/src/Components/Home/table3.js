import React, { useEffect, useState } from "react";
import { getSender, applySender } from "../redux/action/sender";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Table, Button, Popconfirm } from "antd";
import { Link } from "react-router-dom";

const Table3 = ({
  getSender,
  sender: { sender },
  applySender
}) => {
  useEffect(() => {
    getSender();
  }, [getSender]);

  const [formApp, setFormApp] = useState({
    title: "",
    discription: ""
  });
  const columns = [
    // {title: "รหัส",dataIndex: "id",key: "id"},
    { title: "หัวข้อ", dataIndex: "title", key: "title" },
    { title: "รายละเอียด", dataIndex: "discription", key: "discription" },
    { title: "ชื่อ", dataIndex: "name", key: "name" },
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
              <Link to="/">
                <Popconfirm title="Sure to Apply?" onConfirm={e => onSubmit()}>
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
    <div>
      <Table columns={columns} dataSource={sender} scroll={{ x: 300 }} />
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
