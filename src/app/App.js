import Config from "../config";

import React, { useEffect } from "react";
import {
  Redirect,
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";

import { signIn } from "../api/firebaseApi/fbActions";

import HomePage from "../homePage/homePage";
import Menu from "../menu/menu";
import ConsentForm from "../consentForm/ConsentForm";
import PreSurveyForm from "../preSurvey/preSurvey";
import Instructions from "../instructions/instructions";
import StudyPage from "../studyPage/studyPage";
import PostStudyForm from "../postStudy/postStudy";
import FinalPage from "../finalPage/finalPage";
import { Assign } from "../assigner/assigner";

export default function App() {
    const dispatch = useDispatch();
    const synced = useSelector((state) => state.fb.synced);
    let consent = useSelector((state) => state.consent.consent);
    console.log(consent);
    // let submitted = useSelector((state) => state.postSurvey.submittedPost);
    // let dev = false;
    // const assignment = useSelector((state) => state.assignment.assignment);
  
    if (!Config["routeProtect"]) {
      consent = true;
      // dev = true;
    }
  
    useEffect(() => {
        dispatch(signIn());
      });
    console.log("USE EFFECT COMPLETED");
      return (
        <Router>
          <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css" />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Lato"
          />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Raleway"
          />
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
          />
          {synced ? (
            <div>
              <Assign />
              <Switch>
                <Route path="/" exact>
                  <HomePage />
                </Route>
                <Route path="/Menu">
                  <Menu />
                </Route>
                <Route path="/ConsentForm">
                  <ConsentForm />
                </Route>
                <Route path="/PreSurvey">
                  {consent ? <PreSurveyForm /> : <Redirect to="/" />}
                </Route>
                <Route path="/Instructions">
                  {consent ? <Instructions /> : <Redirect to="/" />}
                </Route>
                <Route path="/StudyPage">
                  {consent ? <StudyPage /> : <Redirect to="/" />}
                </Route>
                <Route path="/PostStudy">
                  {consent ? <PostStudyForm /> : <Redirect to="/" />}
                </Route>
                <Route path="/FinalPage">
                  {consent ? <FinalPage /> : <Redirect to="/" />}
                </Route>
              </Switch>
            </div>
          ) : (
            <div />
          )}
        </Router>
      );
    }        