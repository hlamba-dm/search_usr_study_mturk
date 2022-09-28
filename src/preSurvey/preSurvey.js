import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import {
  updateGender,
  updateAge,
  updateEdu,
  updateFreq,
  updateSS,
  updateDesire,
  updateUID
} from "./preSurveyActions";

const inputShortStyle = {
  backgroundColor: "white",
  borderRadius: "6px",
  color: "black",
  marginTop: "0.5rem",
  marginBottom: "0.5rem",
  marginRight: "0.5rem",
  height: 50,
  width: 250,
  fontSize: "24px",
  border: "2px solid black",
};

const inputMiddleStyle = {
  backgroundColor: "white",
  borderRadius: "6px",
  color: "black",
  marginTop: "2rem",
  // marginBottom: "0.5rem",
  marginLeft: "0.5rem",
  height: 300,
  width: 850,
  fontSize: "24px",
  border: "2px solid black",
};

const PreSurveyForm = () => {
  const dispatch = useDispatch();

  const [user, setUser] = useState({
    gender: "",
    age: "",
    edu: "",
    uid: "",
  });

  function handleGenderChange(e) {
    dispatch(updateGender(e.target.value));
    setUser({ gender: e.target.value, age: user.age, edu: user.edu, uid: user.uid })
  }

  function handleAgeChange(e) {
    dispatch(updateAge(e.target.value));
    setUser({ gender: user.gender, age: e.target.value, edu: user.edu, uid: user.uid })
  }

  function handleEduChange(e) {
    dispatch(updateEdu(e.target.value));
    setUser({ gender: user.gender, age: user.age, edu: e.target.value, uid: user.uid })
  }

  function handleUIDChange(e) {
    dispatch(updateUID(e.target.value));    
    setUser({ gender: user.gender, age: user.age, edu: user.edu, uid: e.target.value})
  }

  const [userExp, setUserExp] = useState({
    freq: "",
    ss: "",
    desire: "",
  });
  
  function handleFreqChange(e) {
    dispatch(updateFreq(e.target.value));
    setUserExp({ freq: e.target.value, ss: userExp.ss, desire: userExp.desire })
  }

  function handleDesireChange(e) {
    dispatch(updateDesire(e.target.value));
    setUserExp({ freq: userExp.freq, ss: userExp.ss, desire: e.target.value })
  }

  function handleSSChange(e) {
    dispatch(updateSS(e.target.value));
    setUserExp({ freq: userExp.freq, ss: e.target.value, desire: userExp.desire })
  }

  return (
    <div>
      <span><br /> <br /> <br /></span>
      <div className="parallax w3-display-container w3-opacity-min" id="home">
        <div className="w3-display-middle" style={{ whiteSpace: "nowrap" }}>
          <span className="w3-center w3-padding-large w3-black w3-xlarge w3-wide w3-animate-opacity">
          Pre-study Survey
          </span>
          <span><br /> <br /> <br /></span>
        </div>
      </div>
      <center>
      <div style={{paddingLeft: "25%", textAlign: "left",}}>
        <div style={{marginTop: "2rem", marginRight: "2.8rem", fontSize: "24px", color: "black"}}>
          <div style={{marginBottom: "2rem"}}>Before the study, please answer the questions below.</div>

          <div style={{marginTop: "2rem", marginRight: "2.8rem", fontSize: "24px", color: "black"}}>
            <div>Enter your unique userID (This is your Prolific ID). Enter NA, otherwise. </div>
            
            <textarea style={inputShortStyle}
            type="text" value={user.uid}
            onChange={handleUIDChange}
            placeholder="Please write UID here" name="uid" />

          </div>

          <div>
            What gender do you identify as? 
            <div>
            <select value={user.gender} onChange={handleGenderChange} style={inputShortStyle}>
              <option value={"Null"}>--Please select--</option>
              <option value={"Male"}>Male</option>
              <option value={"Female"}>Female</option>
              <option value={"Non-binary"}>Non-binary</option>
              <option value={"Other"}>Other</option>
              <option value={"Prefer not to say"}>Prefer not to say</option>
            </select>
            </div>
            </div>
            <div style={{marginTop: "2rem", marginBottom: "2rem"}}>
            <div>What is your age (years)?</div>
            <textarea style={inputShortStyle} 
            type="textarea" value={user.age}
            onChange={handleAgeChange} 
            placeholder="e.g. 30" name="age" />
            </div>
          </div>
          <div style={{marginTop: "2rem", marginRight: "2.8rem", fontSize: "24px", color: "black"}}>
            What is the highest degree or level of education you have completed? 
            <div>
            <select value={user.edu} onChange={handleEduChange} style={inputShortStyle}>
              <option value={"Null"}>--Please select--</option>
              <option value={"Some High School or High School"}>Some High School or High School</option>
              <option value={"Bachelor's Degree"}>Bachelor's Degree</option>
              <option value={"Master's Degree"}>Master's Degree</option>
              <option value={"Ph.D. or higher"}>Ph.D. or higher</option>
              <option value={"Trade School"}>Trade School</option>
              <option value={"Prefer not to say"}>Prefer not to say</option>
            </select>
            </div>
          </div>
          <div style={{marginTop: "2rem", marginRight: "2.8rem", fontSize: "24px", color: "black"}}>
          <div>How often do you search on Web (e.g. Google, Bing) ? </div>
            <div>
            <select value={userExp.freq} onChange={handleFreqChange} style={inputShortStyle}>
              <option value={"Null"}>--Please select--</option>
              <option value={"A few times a day"}>A few times a day</option>
              <option value={"A few times a week"}>A few times a week</option>
              <option value={"A few times a month"}>A few times a month</option>
              <option value={"A few times a year"}>A few times a year</option>
              <option value={"Less than a few times a year or never"}>Less than a few times a year or never</option>
            </select>
            </div>
          </div>
            
            <div style={{marginTop: "2rem", marginRight: "2.8rem", fontSize: "24px", color: "black"}}>
          <div>How often do you find search results delivered to you satisfy your information need ?</div>
            <select value={userExp.search_satisfaction} onChange={handleSSChange} style={inputShortStyle}>
              <option value={"Null"}>--Please select--</option>
              <option value={"Always"}>Always</option>
              <option value={"Very Often"}>Very Often</option>
              <option value={"Sometimes"}>Sometimes</option>
              <option value={"Rarely"}>Rarely</option>
              <option value={"Never"}>Never</option>
            </select>
            </div>

            <div style={{marginTop: "2rem", marginRight: "2.8rem", fontSize: "24px", color: "black"}}>
            <div>What information do you look for in search results page that helps you inform which result to choose?</div>
            <textarea style={inputMiddleStyle}
            type="textarea" value={userExp.searchDesire}
            onChange={handleDesireChange}
            placeholder="Please write your answer here." name="searchDesire" />
            </div>

          <div className="bottom-padding">
            <Link to="/Instructions">
              <Button
                style={{
                  borderRadius: "12px",
                  borderColor: "black",
                  height: 50,
                  width: 150,
                  fontSize: "22px",
                  fontColor: "black",
                  marginLeft: "16em"
                }}
                variant="light"
              >
                Next
              </Button>
            </Link>
          </div>  
          </div>
          </center>
        </div>
  );
};

export default PreSurveyForm;
