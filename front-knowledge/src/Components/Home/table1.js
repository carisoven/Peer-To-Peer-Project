import React, { useEffect } from "react";
import { getKnowledge } from "../redux/action/knowledge";

import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Table } from "antd";

import { Link } from "react-router-dom";
import { Button } from "antd";

const Table1 = ({ getKnowledge, knowledge: { knowledge } }) => {
  useEffect(() => {
    getKnowledge();
  }, [getKnowledge]);

  const columns = [
    // {title: "รหัส",dataIndex: "id",key: "id"},
    { title: "หัวข้อ", dataIndex: "title", key: "title" },
    { title: "รายละเอียด", dataIndex: "discription", key: "discription" },
    { title: "status", dataIndex: "status", key: "status" },
    {
      title: "Edit",
      key: "Edit",
      render: (text, record) => (
        <span>
          <Link to={`/edit-knowledge/${record._id}`}>
            <Button type="primary" shape="round" icon="edit">
              Edit
            </Button>
          </Link>
          {   }
          <Link to={`/del-knowledge/${record._id}`}>
            <Button type="danger" shape="round" icon="delete">
              Delete
            </Button>
          </Link>
        </span>
      )
    }
  ];
  // const know = [];

  //     knowledge.forEach(doc => {
  //       const {_id, title, discription,status} = doc.data();
  //       know.push({
  //         title: title,
  //         discription: discription,
  //         status: status,
  //         edit:(
  //           <Link to={`/room-show/${_id}`}>
  //           <Button type="primary" shape="round" icon="edit">
  //             Edit
  //           </Button>
  //         </Link>
  //         )
  //       })
  //     });

  // const res = knowledge.map((eaa)=> know.push({
  //   title: eaa.title,
  //   discription: eaa.discription,
  //   status: eaa.status,
  //   edit:(
  //     <Link to={`/room-show/${eaa._id}`}>
  //     <Button type="primary" shape="round" icon="edit">
  //       Edit
  //     </Button>
  //   </Link>
  //   )
  // }))

  // const result = knowledge.filter((know) => {
  //   return know.status !== "true"
  // })

  return (
    <div>
      <Table columns={columns} dataSource={knowledge} scroll={{ x: 300 }} />
    </div>
  );
};

Table1.propsTypes = {
  getKnowledge: PropTypes.func.isRequired,
  knowledge: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  knowledge: state.knowledge
});

export default connect(mapStateToProps, { getKnowledge })(Table1);
