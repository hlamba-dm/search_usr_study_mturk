import Config from "../config";

import React from "react";
import "./homePage.css";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

const HomePage = () => {
    // const dispatch = useDispatch();
  
    // store Prolific ID
    // const queryString = window.location.search.replace("?", "").split("&")[0].split("=")[1];
    // dispatch(getID(queryString));
    // dispatch(getID("placeholder"));
  
    // initialize the index of news 
    // dispatch(setnewsindex());
  
    return (
      <div className="bg">
        <div 
          style={{
            fontFamily: 'Times New Roman',
            paddingTop: "8em",
            display: "flex",
            justifyContent: "center",
            color: "black",
            fontSize: "60px",
          }}
        >Search Results Explanation Study</div>
        {/* <div 
          style={{
            // backgroundColor: "black",
            // width: "200px",
            // borderRadius: "12px",
            // borderColor: "white",
            paddingTop: "3em",
            display: "flex",
            justifyContent: "center",
            color: "black",
            fontSize: "50px",
          }}
          >Are you ready for thinking with AI?</div>*/}
        <div
          className="fixed-bottom"
          style={{
            display: "flex",
            justifyContent: "center",
            marginBottom: "6rem",
          }}
        > 
          <Link to="/ConsentForm">
            <Button
              style={{
                backgroundColor: "black",
                borderRadius: "12px",
                borderColor: "white",
                height: 60,
                width: 230,
                fontSize: "25px",
              }}
            >
              Start {">"}
            </Button>
          </Link>
          {Config["pfButton"] ? (
            <Link
              to="/Menu"
              style={{
                paddingLeft: "2rem",
              }}
            >
              <Button
                style={{
                  backgroundColor: "black",
                  borderRadius: "12px",
                  borderColor: "white",
                  height: 60,
                  width: 230,
                  fontSize: "25px",
                }}
              >
                Developer?
              </Button>
            </Link>
          ) : (
            <div />
          )}
        </div>
      </div>
    );
};

export default HomePage;