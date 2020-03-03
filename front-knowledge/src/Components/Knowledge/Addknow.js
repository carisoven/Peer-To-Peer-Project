import React, { useState,  Fragment } from "react";
import {
  
  Col,
  Form,
  FormGroup,
  Label,
  Input
} from "reactstrap";
import { Button , Card } from 'antd'
import Navbar2 from "../Navbar/navbar";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { addKnowledge } from "../redux/action/knowledge";
import { getUserSelect } from "../redux/action/user";
import { Editor } from "@tinymce/tinymce-react";


const Addknow = ({ addKnowledge, getUserSelect,users:{userid}, history }) => {

  const [seaId, setSeaId] = useState({
    uid:""
  });
  const {uid} = seaId;

  const [displaySocialInputs, toggleSocialInputs] = useState(false);

  const [formKnow, setFormKnow] = useState({
    uid:"",
    title: "",
    discription: "",
    name: "",
    status: "false"
  });

  const { title } = formKnow;

  //search id
  const oChange = e => 
  setSeaId({uid: e.target.value});
  const oSubmit = e =>{
    e.preventDefault();
    getUserSelect(seaId)
    toggleSocialInputs(!displaySocialInputs)

  };

  //add knowledge

  const onChange = e =>
    setFormKnow({ ...formKnow, [e.target.name]: e.target.value });

  const handleEditorChange = e => {
    console.log("Content was updated:");
    setFormKnow({ discription: e.target.getContent(), status: "false", name: userid.name,title: title});
  };  
  const onSubmit = e => {
    e.preventDefault();
    addKnowledge(formKnow, history);
  };
  // console.log(user);
  
  console.log(formKnow);
  // console.log(seaId);

  return (
    <Fragment>
      <Navbar2 />
      <div style={{ background: '#ECECEC', padding: '30px' }}>
        <Card style={{height: 845}} bordered={false} >
        <FormGroup fluid>

          <Form>
          <FormGroup row>
              <Label for="" sm={2}>
                Title
              </Label>
              <Col sm={2}>
                <Input
                  type="text"
                  name="title"
                  id="title"
                  placeholder="หัวเรื่องในการสอน"
                  value={title}
                  onChange={e => onChange(e)}
                />
              </Col>
            </FormGroup>

          <FormGroup row>
              <Label for="" sm={2}>Search User</Label>
              <Col sm={2}>
                <Input
                  type="text"
                  name="text"
                  id="exampletext"
                  placeholder=" Insert User ID "
                  value={uid}
                  onChange={e => oChange(e)}
                />
                <Button onClick={e => oSubmit(e)}>Search</Button>
              </Col>
            </FormGroup>
            
            {userid == null ||displaySocialInputs && (
            <FormGroup>
              <Label for="exampleText" sm={2}>ผลลัพธ์ในการค้นหา</Label>
              <Col sm={2}>
                <p>{userid.name}</p>
              </Col>
            </FormGroup>
            )}

            <FormGroup row>
              <Label for="exampleText" sm={2}>
                Discription
              </Label>
              <Col sm={10}>
                <Editor
                apiKey='u9xnjd1zxyorl0cxv29cpdlfgxgr67ypm5gl6t0hw24tq7qs'
                  initialValue="<p></p>"
                  init={{
                    height: 500,
                    menubar: false,
                    plugins: [
                      "advlist autolink lists link image",
                      "charmap print preview anchor help",
                      "searchreplace visualblocks code",
                      "insertdatetime media table paste wordcount"
                    ],
                    toolbar:
                      "formatselect | bold italic | \
                      alignleft aligncenter alignright | \
                      bullist numlist outdent indent | help"
                  }}
                  onChange={e => handleEditorChange(e)}
                />
              </Col>
            </FormGroup>

            {/* <FormGroup row>
              <Label for="uploadfile">File</Label>
              <Input type="file" name="upload" id="upload" />
            </FormGroup> */}
            <FormGroup check row>
              <Col sm={{ size: 10, offset: 2 }}>
                <Button onClick={e => onSubmit(e)}>Submit</Button>
              </Col>
            </FormGroup>
          </Form>
        </FormGroup>
        </Card>
      </div>
    </Fragment>
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
  users: state.users,
  user:state.user,
  auth: state.auth
});

export default connect(mapStateToProps, { addKnowledge, getUserSelect })(
  Addknow
);
