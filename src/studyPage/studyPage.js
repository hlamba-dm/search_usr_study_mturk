// import React from "react";
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
// import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from 'react-bootstrap/Form';
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

import {
  addQueryResponse
} from "./studyPageActions";
import data from '../local-json/queries_for_study.json';

console.log(data);

const fonts = { fontSize: "25px" };
const topMargin = { marginTop: "1rem" };


// const notice = { marginTop: "1rem", fontSize: "24px" };

const StudyPage = () => {
  const br = `\n`;
  const dispatch = useDispatch();

  const con = useSelector((state) => state.assignment.assignment);
  var Index = useSelector((state) => state.homePage.index);
  
  const totalQueries = 19;
  const history = useHistory();
  
  const [docIDX, setdocIDX] = useState(-1);
  const [queryIDX, setqueryIDX] = useState(0);
  const [eType, seteType] = useState(Math.floor(Math.random() * 2)+1);
  console.log("eType:"+eType);
  const e_type = Math.floor(Math.random() * 2) + 1 ;

  console.log("ASSIGNMENT:"+con);

  useEffect(() => {
    console.log('Query ID is: ', queryIDX);
  }, [queryIDX]);

  const handleRadioChange = event => {
    const { name, value } = event.target;
    console.log(name, value);
    setdocIDX(value);
    console.log("DocIDX:" + docIDX);
  };

  const saveQueryResponse = () => {
    var send_data = {
      query_idx: queryIDX,
      explanationType: eType,
      docid: docIDX
    };

    dispatch(addQueryResponse(send_data));
    console.log(send_data);
    setqueryIDX(queryIDX + 1);
    console.log(queryIDX);

    seteType(Math.floor(Math.random() * 2));
    (queryIDX === totalQueries+1) ? history.push("/postStudy"): console.log("LIMIT NOT REACHED");

    setdocIDX(-1);
  }

  console.log("ARRAYYYY")
  console.log(eType);
  console.log("STOP");
  
  return (
    <div>
      <div className="container w3-center" style={fonts}>
          <div style={{textAlign: "center", color: "black", marginTop: "2rem"}}>
            Study Page
          </div>
      </div>
      <div className="container w3-center" style={fonts}>
        <div style={topMargin}>
          <div style={{textAlign: "left",color: "black",marginTop: "0rem",margin: "3rem",fontSize: "22px",}}>
            <div>
            <div style={{textAlign: "left", color: "green", marginTop: "0rem", margin:"3rem", fontSize: "18px",}}>
                Information Need: {data[queryIDX].information_need}
              </div>
            <div style={{textAlign: "left", color:"black", marginTop: "0rem", margin:"3rem", fontSize: "18px",}}>
              Query: {data[queryIDX].query}
            </div>
            <div style={topMargin}>
              <Form>
              <div style={{textAlign: "left", color:"black", marginTop: "0rem", margin:"3rem", fontSize: "18px",}}>
                <Form.Group controlId="LabelGroupQuery">
                  <Form.Check value="1" type='radio' name="docSelected" 
                    label={ data[queryIDX].options[0].title } id='radio_query1' checked = { docIDX === "1"}
                    onChange={handleRadioChange}/>
                  <p style={{textAlign: "left", color:"black", marginTop: "0rem", margin:"0rem", fontSize: "14px",}}>{data[queryIDX].options[0].snippet + "\n"}</p>
                  <p></p>

                  <Form.Check value="2" type='radio' name="docSelected" id='radio_query2' checked = { docIDX === "2"}
                    label={ data[queryIDX].options[1].title } onChange={handleRadioChange} />
                  <p style={{textAlign: "left", color:"green", marginTop: "0rem", margin:"0rem", fontSize: "14px", backgroundColor: "yellow"}}>{
                      (con===1)? "For more search results like this, use the following query: \""+data[queryIDX].options[1].counterfactual+ "\"":""}</p>
                  {/* <p style={{textAlign: "left", color:"black", marginTop: "0rem", margin:"0rem", fontSize: "14px", fontStyle: "italic", }}>{
                      (eType===1)? data[queryIDX].options[1].counterfactual:""}</p> */}
                  <p style={{textAlign: "left", color:"black", marginTop: "0rem", margin:"0rem", fontSize: "14px",}}>{data[queryIDX].options[1].snippet + "\n"}</p>
                  
                  <p></p>
                  
                  <Form.Check value="3" type='radio' name="docSelected" id='radio_query3' checked = { docIDX === "3"}
                    label={ data[queryIDX].options[2].title } onChange={handleRadioChange}/>
                  <p style={{textAlign: "left", color:"green", marginTop: "0rem", margin:"0rem", fontSize: "14px", backgroundColor: "yellow"}}>{
                      (con===1)? "For more search results like this, use the following query: \""+data[queryIDX].options[2].counterfactual+ "\"":""}</p>
                  {/*<p style={{textAlign: "left", color:"black", marginTop: "0rem", margin:"0rem", fontSize: "14px",}}>{
                      (eType===1)? data[queryIDX].options[2].counterfactual:""}</p> */}
                  <p style={{textAlign: "left", color:"black", marginTop: "0rem", margin:"0rem", fontSize: "14px",}}>{data[queryIDX].options[2].snippet + "\n"}</p>
                  
                  <p></p>
                  
                  <Form.Check value="4" type='radio' name="docSelected" id='radio_query4' checked = { docIDX === "4"}
                    label={ data[queryIDX].options[3].title } onChange={handleRadioChange}/>
                  <p style={{textAlign: "left", color:"green", marginTop: "0rem", margin:"0rem", fontSize: "14px", backgroundColor: "yellow"}}>{
                      (con===1)? "For more search results like this, use the following query: \""+data[queryIDX].options[3].counterfactual+ "\"":""}</p>
                  {/*<p style={{textAlign: "left", color:"black", marginTop: "0rem", margin:"0rem", fontSize: "14px",}}>{
                      (eType===1)? data[queryIDX].options[2].counterfactual:""}</p> */}
                  <p style={{textAlign: "left", color:"black", marginTop: "0rem", margin:"0rem", fontSize: "14px",}}>{data[queryIDX].options[3].snippet + "\n"}</p>

                  <p></p>
                  <Form.Check value="5" type='radio' name="docSelected" id='radio_query5' checked = { docIDX === "5"}
                    label={ data[queryIDX].options[4].title } onChange={handleRadioChange}/>
                  <p style={{textAlign: "left", color:"green", marginTop: "0rem", margin:"0rem", fontSize: "14px", backgroundColor: "yellow"}}>{
                      (con===1)? "For more search results like this, use the following query: \""+data[queryIDX].options[4].counterfactual+ "\"":""}</p>
                  {/*<p style={{textAlign: "left", color:"black", marginTop: "0rem", margin:"0rem", fontSize: "14px",}}>{
                      (eType===1)? data[queryIDX].options[2].counterfactual:""}</p> */}
                  <p style={{textAlign: "left", color:"black", marginTop: "0rem", margin:"0rem", fontSize: "14px",}}>{data[queryIDX].options[4].snippet + "\n"}</p>

                </Form.Group>
              </div>
              <div className="d-flex justify-content-center" style={{ fontSize: "30px", marginTop: "3rem", paddingBottom: "3rem" }}>
                <Button style={{ marginRight: "1rem" }} variant="outline-secondary" size="lg" onClick={saveQueryResponse}> Next Query </Button>
              </div>
              </Form>
            </div>
            </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default StudyPage;