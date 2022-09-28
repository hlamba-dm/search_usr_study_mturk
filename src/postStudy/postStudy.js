import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import {
  updateHelpfulness,
  updateRelevance,
  updateExplanationType,
  updateReSearch,
  updateSuggestions
} from "./postStudyActions";



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

const PostStudyForm = () => {
  const dispatch = useDispatch();

  const [response, setResponse] = useState({
    helpfulness: "",
    relevance: "",
    exptype: "",
    research: "",
    suggestions: ""
  });

  function handleHelpfulnessChange(e){
    dispatch(updateHelpfulness(e.target.value));
    setResponse({ helpfulness: e.target.value, relevance: response.relevance, exptype: response.exptype,
    research: response.research, suggestions: response.suggestions})
  }

  function handleRelevanceChange(e){
    dispatch(updateRelevance(e.target.value));
    setResponse({ helpfulness: response.helpfulness, relevance: e.target.value, exptype: response.exptype,
      research: response.research, suggestions: response.suggestions})
  }

  function handleExpTypeChange(e){
    dispatch(updateExplanationType(e.target.value));
    setResponse({ helpfulness: response.helpfulness, relevance: response.relevance, exptype: e.target.value,
      research: response.research, suggestions: response.suggestions})
  }

  function handleResearchChange(e){
    dispatch(updateReSearch(e.target.value));
    setResponse({ helpfulness: response.helpfulness, relevance: response.relevance, exptype: response.exptype,
      research: e.target.value, suggestions: response.suggestions})
  }

  function handleSuggestionChange(e){
    dispatch(updateSuggestions(e.target.value));
    setResponse({ helpfulness: response.helpfulness, relevance: response.relevance, exptype: response.exptype,
      research: response.research, suggestions: e.target.value})
  }

  return (
    <div>
      <span><br /> <br /> <br /></span>
      <div className="parallax w3-display-container w3-opacity-min" id="home">
        <div className="w3-display-middle" style={{ whiteSpace: "nowrap" }}>
          <span className="w3-center w3-padding-large w3-black w3-xlarge w3-wide w3-animate-opacity">
          Post-Study Survey
          </span>
          <span><br /> <br /> <br /></span>
        </div>
      </div>
      <center>
      <div style={{paddingLeft: "25%", textAlign: "left",}}>
        <div style={{marginTop: "2rem", marginRight: "2.8rem", fontSize: "24px", color: "black"}}>
          <div style={{marginBottom: "2rem"}}>Before the study, please answer the questions below.</div>
          <div>
            In general, how helpful or not were the explanations for understanding the document content ?
            <div>
            <select value={response.helpfulness} onChange={handleHelpfulnessChange} style={inputShortStyle}>
              <option value={"Null"}>--Please select--</option>
              <option value={"1"}>Not at all helpful</option>
              <option value={"2"}>Slightly helpful</option>
              <option value={"3"}>Somewhat helpful</option>
              <option value={"4"}>Very helpful</option>
              <option value={"5"}>Extremely helpful</option>
            </select>
            </div>
            </div>
        </div>
        <div style={{marginTop: "2rem", marginRight: "2.8rem", fontSize: "24px", color: "black"}}>
            <div style={{marginTop: "2rem", marginBottom: "2rem"}}>
            <div>In general, how helpful or not are explanations for locating the relevant document quickly?</div>
            <select value={response.relevance} onChange={handleRelevanceChange} style={inputShortStyle}>
              <option value={"Null"}>--Please select--</option>
              <option value={"1"}>Not at all helpful</option>
              <option value={"2"}>Slightly helpful</option>
              <option value={"3"}>Somewhat helpful</option>
              <option value={"4"}>Very helpful</option>
              <option value={"5"}>Extremely helpful</option>
            </select>
            </div>
        </div>
        <div style={{marginTop: "2rem", marginRight: "2.8rem", fontSize: "24px", color: "black"}}>
            <div style={{marginTop: "2rem", marginBottom: "2rem"}}>
            <div>If you were not satisfied with the search results, how helpful or not were the explanations for 
              reformulating the search query?</div>
            <select value={response.research} onChange={handleResearchChange} style={inputShortStyle}>
              <option value={"Null"}>--Please select--</option>
              <option value={"1"}>Not at all helpful</option>
              <option value={"2"}>Slightly helpful</option>
              <option value={"3"}>Somewhat helpful</option>
              <option value={"4"}>Very helpful</option>
              <option value={"5"}>Extremely helpful</option>
            </select>
            </div>
          </div>
        </div>  
        <div style={{marginTop: "2rem", marginRight: "2.8rem", fontSize: "24px", color: "black"}}>
          <div>If you are not satisfied with the explanations, please state on how to improve the explanations?</div>
          <textarea style={inputMiddleStyle} type="textarea" value={response.suggestions} onChange={handleSuggestionChange}
            placeholder="Please write your answer here." name="suggestions" />
        </div>
        
        <div className="bottom-padding">
            <Link to="/FinalPage">
              <Button style={{borderRadius: "12px",borderColor: "black",height: 50,width: 150,
                  fontSize: "22px",fontColor: "black",marginLeft: "16em"}} variant="light">
                Next
              </Button>
            </Link>
        </div>  
      </center>
    </div>
  );
};

export default PostStudyForm;
