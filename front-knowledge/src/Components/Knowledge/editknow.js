import React, { Fragment,useEffect, useState } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Navbar2 from "../Navbar/navbar";
import { Card, Button } from "antd";
import { getKnowbyID } from "../redux/action/knowledge";
import { editKnowledge } from "../redux/action/knowledge";
import { Col, Form, FormGroup, Label, Input } from "reactstrap";
import { Editor } from '@tinymce/tinymce-react'; 
import Loadpage from '../other/Loadpage';

const Editknow = ({
  editKnowledge,
  knowledge:{knows,loading},
  getKnowbyID,
  match,
  history
}) => {
  useEffect(() => {
    getKnowbyID(match.params.id);
  }, [getKnowbyID]);
  

  const [formKnows, setFormKnows] = useState({
    id: "",
    title: "",
    discription: ""
  });

  const { title } = formKnows;

  const onChange = e =>
  setFormKnows({ ...formKnows, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    editKnowledge(formKnows, history);
  };
  const handleEditorChange = e =>
    setFormKnows({discription: e.target.getContent(),id:match.params.id,title:title});

  console.log(formKnows);


  return knows == null ? (
    <Loadpage/>
    ):(
      <Fragment>
      <Navbar2 />
      <div  style={{ background: '#ECECEC', padding: '30px' ,height: 920}} >
        <FormGroup fluid>
        <Card title={knows.title} bordered={false} >
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
              <Label for="exampleText" sm={2}>
                Discription
              </Label>
              <Col sm={10}>
                <Editor
                  apiKey='u9xnjd1zxyorl0cxv29cpdlfgxgr67ypm5gl6t0hw24tq7qs'
                  initialValue="<p>Initial content</p>"
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
                  value={knows.discription}
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
          </Card>
        </FormGroup>
        </div>
    </Fragment>
  );
};
Editknow.propTypes = {
  editKnowledge: PropTypes.func.isRequired,
  getKnowbyID: PropTypes.func.isRequired,
  knows: PropTypes.object.isRequired,
  knowledge:PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  knowledge: state.knowledge,
  knows:state.knows
});
export default connect(  mapStateToProps,{ getKnowbyID, editKnowledge })(
  Editknow
);
