import React from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { consent } from "./ConsentFormActions";
import { useDispatch } from "react-redux";

// var consentContent = require("../matrix/consent.json");

const ConsentForm = () => {
  const dispatch = useDispatch();

  const submit = () => {
    dispatch(consent());
  };

  return (
    <div>
      <div className="parallax w3-display-container w3-opacity-min" id="home">
        <div className="w3-display-middle" style={{ whiteSpace: "nowrap" }}>
          <span> <br /><br />  </span>
          <span className="w3-center w3-padding-large w3-black w3-xlarge w3-wide w3-animate-opacity">
          Consent Form
          </span>
        </div>
      </div>
      <div className="w3-content w3-container w3-padding-32" id="about">
        {/* <div style={{whiteSpace: "pre-line", textAlign: "left", fontSize: "18px"}}>{consentContent[0]}</div> */}
        <p>
            <br />
            <b>Introduction</b>
            <br />
            This task is a part of a research study conducted by Search Team at Dataminr. The purpose of this study is to understand how does different variations of search results page assist users in finding the relevant results. If you have any questions, please  contact Zhichao Xu (zxu@dataminr.com) and Hemank Lamba (hlamba@dataminr.com).
          </p>
          <p>
            <b>Procedures</b>
            <br />
            During this task, you will be analyzing different versions of search engine results page for 20 different pre-filled queries. Afterwards, you will answer a few survey questions about your experience.
          </p>
          <p>
            <b>Expected Duration and Compensation</b>
            <br />
            The task will take approximately 25 minutes and you will receive $20 for your participation.
          </p>
          <p>
            <b>Participant Requirements</b>
            <br />
            Participants must be at least 18 years old, and living in the United States.
          </p>
          <p>
            <b>Voluntary Participation and Data Collection</b>
            <br />
            Your participation is voluntary. If you would like to stop participating at any time, just let us know. This interface only captures your interaction with the system and the headlines created. We will not collect personal data in addition to that.
          </p>
          <p>
            <b>Quality Requirements</b>
            <br />
            We have the right to not approve your work if you: (a) do not respond to all the questions, (b) fail attention checks.
          </p>
          <p>By clicking the "next" button you certify the following:</p>
          <p>1. You are 18 years of age or older and live in the United States.</p>
          <p>2. You have read and understand the information above.</p>
          <p>3. You want to participate in this research and continue with the task.</p>
      </div>
      <div className="w3-center bottom-padding">
        <Link to="/PreSurvey">
        {/* <Link to="/newSurveyForm"> */}
          <Button
            style={{
              borderRadius: "12px",
              borderColor: "black",
              height: 50,
              width: 150,
              fontSize: "22px",
              fontColor: "black",
            }}
            variant="light"
            className="w3-center"
            onClick={submit}
          >
            Next
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default ConsentForm;