import { signInSuccess, signInFailure, synced } from "./fbActions";
import { syncHomePage } from "../../homePage/homePageActions";
import { syncConsent } from "../../consentForm/ConsentFormActions";
import { syncPre } from "../../preSurvey/preSurveyActions";
import { syncStudyPage } from "../../studyPage/studyPageActions";
import { syncPost } from "../../postStudy/postStudyActions";
// no preSurvey
// import { syncSurvey } from "../../postSurvey/SurveyFormActions";
// import { syncOnboardPage } from "../../onboardPage/onboardPageActions";
// import { syncCon0 } from "../../con0/con0Actions";
// import { syncCon1 } from "../../con1/con1Actions";
// import { syncCon2 } from "../../con2/con2Actions";
// import { syncCon3 } from "../../con3/con3Actions";
// import { syncVerification } from "../../verificationForm/VerificationActions";
import { getCountFail, syncAssignment, setAssignment } from "../../assigner/assignerActions";

export function pushToFireBase(getFirebase) {
  return ({ getState, dispatch }) => (next) => (action) => {
    const firebase = getFirebase();

    const pickCondition = (counts) => {
      var min = Math.min.apply(Math, counts);
      var indexes = [];
      console.log("counts", counts);
      counts.forEach(function (item, idx, arr) {
        if (item === min) {
          indexes.push(idx);
        }
      });

      const randomeIndex = indexes[Math.floor(Math.random() * indexes.length)];
      return randomeIndex;
    };

    //pre-dispatch
    if (action.type === "fb/SIGNIN") {

      firebase
        .auth()
        .signInAnonymously()
        .then(() => {
          const user = firebase.auth().currentUser;
          const uid = user.uid;
          dispatch(signInSuccess(uid));
          firebase.database().ref("data/" + uid).once("value").then((res) => {
              console.log("res", res.val());
              const fbState = res.val();
              console.log("fbState is", fbState);
              if (fbState) {
                dispatch(syncHomePage(fbState.homePage));
                dispatch(syncAssignment(fbState.assignment));
                dispatch(syncConsent(fbState.consent));
                dispatch(syncPre(fbState.preSurvey));
                dispatch(syncStudyPage(fbState.StudyPage));
                dispatch(syncPost(fbState.postStudy));
                // dispatch(syncOnboardPage(fbState.onboardPage));
                // dispatch(syncSurvey(fbState.postSurvey));
                // dispatch(syncCon0(fbState.con0));
                // dispatch(syncCon1(fbState.con1));
                // dispatch(syncCon2(fbState.con2));
                // dispatch(syncCon3(fbState.con3));
                // dispatch(syncVerification(fbState.verification));
              }
              dispatch(synced());
            });
        })
        .catch(() => {
          dispatch(signInFailure());
        });
    }

    if (action.type === "assigner/GET") {
      firebase
        .auth()
        .signInAnonymously()
        .then(() => {
          firebase
            .database()
            .ref("condition")
            .once("value")
            .then((res) => {
              let assignment = pickCondition(res.val());
              console.log("assignment", assignment);
              // setAssignment only assign value in redux, but not in the Firebase
              // only when the participant finishes the study, updateCondition will +1 to the condition
              // to avoid participant to drop out in the middle
              dispatch(setAssignment(assignment));
            });
        })
        .catch(() => {
          dispatch(getCountFail());
        });
      console.log("action", action);
    }
    const returnValue = next(action);

    // post - dispatch;
    // if (action.type === "assigner/SET") {
    if (action.type === "verification/UPDATE") {
      var counts = [];
      firebase
        .database()
        .ref("condition")
        .once("value")
        .then((res) => {
          counts = res.val(); // put count data here
          // console.log("original count is", counts);
          counts[action.payload] = counts[action.payload] + 1;
          firebase.ref("condition").set(counts);
        });
    }

    const state = getState();
    console.log("STATE", state);
    if (state.fb.userId) {
      const user = firebase.auth().currentUser;
      const uid = user.uid;
      console.log(action, action.pushState, action.pushAction);
      if (action.pushState) {
        console.log("PUSHING STATE");
        firebase.ref("data/" + uid).set(state);
      }
      if (action.pushAction) {
        console.log("PUSHING ACTION");
        let cleanedAction = Object.assign({}, returnValue);
        cleanedAction.time = Date.now();
        delete cleanedAction.pushState;
        delete cleanedAction.pushAction;

        firebase.ref("action/" + uid).push({
          startedAt: firebase.database.ServerValue.TIMESTAMP,
          cleanedAction,
        });
      }
    }
    return returnValue;
  };
}

