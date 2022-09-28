import { combineReducers } from "redux";

//Experiment handlers


// import onboardReducer from "../onboardPage/onboardPageReducer";
import fbReducer from "../api/firebaseApi/fbReducer"; //handle firebase middleware
import assignerReducer from "../assigner/assignerReducer"
import consentFormReducer from "../consentForm/ConsentFormReducer";
import homePageReducer from "../homePage/homePageReducer";
import preSurveyReducer from "../preSurvey/preSurveyReducer";
import studyPageReducer from "../studyPage/studyPageReducer";
import postStudyReducer from "../postStudy/postStudyReducer";

//import newSurveyFormReducer from "../newSurveyForm/newSurveyFormReducer";
//import practiceReducer from "../practice/practiceReducer";

//import con0Reducer from "../con0/con0Reducer";
//import con1Reducer from "../con1/con1Reducer";

//import verificationReducer from "../verificationForm/VerificationReducer";

const rootReducer = combineReducers({
    homePage: homePageReducer,
    consent: consentFormReducer,
    assignment: assignerReducer,
    fb: fbReducer,
    preSurvey: preSurveyReducer,
    studyPage: studyPageReducer,
    postStudy: postStudyReducer
    // postSurvey: postSurveyReducer,
    //newSurveyForm: newSurveyFormReducer,
    // onboardPage: onboardReducer,
    //practice: practiceReducer,
    //con0: con0Reducer,
    //con1: con1Reducer,
    // con2: con2Reducer,
    //verification: verificationReducer,
  });
  
export default rootReducer;
  
  


