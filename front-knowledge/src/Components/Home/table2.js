import React, { useEffect } from "react";
import { getResever } from "../redux/action/resever";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import {Table} from "antd";

const Table2 = ({ getResever, resever:{resever}}) => {
  useEffect(() => {
    getResever();
  }, [getResever]);

  const columns = [
    // {title: "รหัส",dataIndex: "id",key: "id"},
    {title: "หัวข้อ",dataIndex: "title",key: "title"},
    {title: "รายละเอียด",dataIndex: "discription",key: "discription"},
    {title: "ชื่อ",dataIndex: "name",key: "name"}
  ];

  return (
    <div>
      <Table columns={columns} dataSource={resever} scroll={{ x: 300 }}/>
    </div>
  );
};
Table2.propTypes = {
  getResever: PropTypes.func.isRequired,
  resever: PropTypes.object.isRequired
}
const mapStateToProps = state =>({
  resever:state.resever
});
export default connect(mapStateToProps, { getResever })(Table2);
