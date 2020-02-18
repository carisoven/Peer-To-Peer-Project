import React, { useState, useEffect } from "react";
import {
  Container,
  Col,
  Button,
  Form,
  FormGroup,
  Label,
  Input
} from "reactstrap";
import Navbar2 from "../Navbar/navbar";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { addKnowledge } from "../redux/action/knowledge";
import { getUser } from "../redux/action/user";
const Addknow = ({ addKnowledge, getUser, user: { users }, history }) => {
  useEffect(() => {
    getUser();
  }, [getUser]);

  const [formKnow, setFormKnow] = useState({
    title: "",
    discription: "",
    name: "",
    status: "false"
  });

  const { title, discription } = formKnow;

  const onChange = e =>
setFormKnow({ ...formKnow, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    addKnowledge(formKnow, history);
  };
  return (
    <div>
      <Navbar2 />
      <Container style={{ margin: "20px" }}>
        <FormGroup fluid>
          <br />
          <Form onSubmit={e => onSubmit(e)}>
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
            <FormGroup row>
              <Label for="teach">ผู้สอน</Label>
              <Input
                type="select"
                name="name"
                id="teach"
                onChange={e => onChange(e)}
              >
                {users.map(oss => (
                  <option key={oss}>{oss.name}</option>
                ))}
              </Input>
            </FormGroup>
            <FormGroup row>
              <Label for="uploadfile">File</Label>
              <Input type="file" name="upload" id="upload" />
            </FormGroup>
            <FormGroup check row>
              <Col sm={{ size: 10, offset: 2 }}>
         
                  <Button>Submit</Button>

                
              </Col>
            </FormGroup>
          </Form>
        </FormGroup>
      </Container>
    </div>
  );
};

Addknow.propsTypes = {
  addKnowledge: PropTypes.func.isRequired,
  getUser: PropTypes.func.isRequired,
  knowledge: PropTypes.object.isRequired,
  users: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  knowledge: state.knowledge,
  user: state.users,
  auth: state.auth
});

export default connect(mapStateToProps, { addKnowledge, getUser })(Addknow);
