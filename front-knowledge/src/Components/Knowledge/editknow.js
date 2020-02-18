import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Navbar2 from "../Navbar/navbar";
import { Card,Button } from "antd";
import { getKnowbyID } from "../redux/action/knowledge";
import {editKnowledge} from '../redux/action/knowledge';
import { Col, Form, FormGroup, Label, Input } from "reactstrap";

const Editknow = ({
  editKnowledge, 
  // know: { know },
  getKnowbyID,
  match,
  history
}) => {
  useEffect(() => {
    getKnowbyID(match.params.id);
  }, [getKnowbyID]);

  const [formKnows, setFormKnows] = useState({
    id: match.params.id,
    title: "",
    discription: ""
  });

  const { title, discription } = formKnows;
  const onChange = e =>
    setFormKnows({ ...formKnows, [e.target.name]: e.target.value });
  const onSubmit = e => {
    e.preventDefault();
    editKnowledge(formKnows,history);
  };
  console.log(formKnows);

  return (
    <div>
      <Navbar2 />
      <div style={{ background: "#ECECEC", padding: "30px", height: 915 }}>
        <Card
          // title={know.title}
          bordered={false}
          style={{ width: 600, height: 700 }}
        >
          {/* <p style={{ fontSize: 15 }}>{know.discription}</p> */}
          <Form >
            <FormGroup row>
              <Label for="" sm={2}>
                Title
              </Label>
              <Col sm={10}>
                <Input
                  type="title"
                  name="title"
                  id="title"
                  placeholder="หัวเรื่องในการสอน"
                  value={title}
                  onChange={e => onChange(e)}
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="exampleText" sm={2}>
                Discription
              </Label>
              <Col sm={10}>
                <Input
                  type="discription"
                  name="discription"
                  id="discription"
                  placeholder="รายละเอียดในการสอน"
                  value={discription}
                  onChange={e => onChange(e)}
                />
              </Col>
            </FormGroup>
            <FormGroup check row>
              <Col sm={{ size: 10, offset: 2 }}>
                <Button onClick={e => onSubmit(e)} type="primary" shape="round" icon="edit">
                  Edit
                </Button>
              </Col>
            </FormGroup>
          </Form>
        </Card>
      </div>
    </div>
  );
};
Editknow.propTypes = {
  editKnowledge: PropTypes.func.isRequired,
  getKnowbyID: PropTypes.func.isRequired,
  // knowledge: PropTypes.object.isRequired,
  know: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  know: state.know
});

export default connect(mapStateToProps, { getKnowbyID, editKnowledge })(Editknow);

