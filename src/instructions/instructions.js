// import React from "react";
import React, { useState } from "react";
// import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Image from 'react-bootstrap/Image'

import { useHistory } from "react-router-dom";

import { useSelector } from "react-redux";

import exp1img from "../img/snippet_explanation.jpg";
import exp2img from "../img/Expl_Counterfactual.jpg";


const fonts = { fontSize: "25px" };
const topMargin = { marginTop: "1rem" };

// const notice = { marginTop: "1rem", fontSize: "24px" };

const Instructions = () => {

  const con = useSelector((state) => state.assignment.assignment);

  var Index = useSelector((state) => state.homePage.index);

  const totalQueries = 20;

  const history = useHistory();
  
  function move2study() {
    history.push("/StudyPage");
  }

  function goBack() {
      history.push("/preSurvey")
  }

  // number of rounds for creating articles
  // const totalRound = 2;

  // const history = useHistory();

  // const [finishReading1, setFinishReading1] = useState(
  //  false
  //);

  //const [finishReading2, setFinishReading2] = useState(
  //    false
  //  );

  //function move2study() {
  //  if (newsIndex === (totalRound-1))
  //  {
  //    history.push("/NewSurveyForm");
  //  } else {
  //    history.push("/Practice");
  //  }
  
return (
    <div>
      <div className="parallax2 w3-display-container w3-opacity-min" id="home">
        <div className="w3-display-middle" style={{ whiteSpace: "nowrap" }}>
          <span className="w3-center w3-padding-large w3-black w3-xlarge w3-wide w3-animate-opacity">
          Task Instructions.
          </span>
        </div>
      </div>
      <div className="container w3-center" style={fonts}>
        <div style={topMargin}>
          <div
            style={{ textAlign: "left", color: "black", marginTop: "0rem", margin: "3rem", fontSize: "22px", }}>
            {/* <div style={{ color: "#1758FF", marginTop: "1rem" }}>
              Design Prompt
            </div> */}
            {/* <div
              className="d-flex"
              style={{
                color: "black",
                marginTop: "1rem",
                // marginBottom: "1rem",
                fontSize: "25px",
                fontWeight: "bold",
              }}
            >
              Treasure Hunt
            </div> */}
            <div>
            <p style={topMargin}>
            
            <p>Thanks for signing up for our study.</p>

            </p>
            <p style={topMargin}>
                1. In this study, you will be asked to conduct a few searches and evaluate the returned results. Each search is associated with a given “information need” about a particular topic.
            </p>
            <p style={topMargin}>
                2. For each search, we will describe the information need and provide a pre-filled query that can be used for searching. The pre-filled query is a claim and the information need generally is to find information that can either support or refute the claim. 
            </p>
            <p style={topMargin}>
                3. When search with this query, five (5) results will be returned. 
            </p>
            <p style={topMargin}>
                4. Along with each result, we provide an explanation of why this webpage/document was returned.
            </p>
            <p style={topMargin}>
                Example of explanations.
                <p></p>
                <i>Explanation Type: Snippet-Based</i>
                <Image src = {exp1img} border="5px solid #555" className='img-thumbnail' />
                <p></p>
                <i>Explanation Type: Counterfactual</i>
                <Image src = {exp2img} border="5px solid #555" className='img-thumbnail' />
            </p>
            <p style={topMargin}>
                5. You can use these sets of documents to identify the result that best satisfies the information need.
            </p>

            <p style={{textAlign: "left", color:"red", marginTop: "0rem", margin:"0rem", fontSize: "14px", }}>
              NOTE: We are recording response time for every query. Please ensure that you are doing this study in one continuous sitting.
            </p>
            </div>
            </div>
        </div>
      </div>
      <div className="d-flex justify-content-center" style={{ fontSize: "30px", marginTop: "3rem", paddingBottom: "3rem" }}>
        <Button style={{ marginRight: "1rem" }} variant="outline-secondary" size="lg" onClick={goBack}>{"<"} Back</Button>
        <Button variant="outline-secondary" size="lg" onClick={move2study}>Begin {">"}</Button>
      </div>
    </div>
  );
};
export default Instructions;