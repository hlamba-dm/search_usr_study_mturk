const initialState = {
    // submitted: false,
    // startTime: 0,
    gender: "",
    age: "",
    edu: "",
    freq: "",
    exp: "",
    uid: ""
  };
  
  const preSurveyReducer = (state = initialState, action) => {
    switch (action.type) {
      // case "preSurvey/SUBMIT":
      //   return Object.assign({}, state, { submitted: true });
      case "preSurvey/UPDATEGENDER":
        return Object.assign({}, state, { gender: action.payload });
      case "preSurvey/UPDATEAGE":
        return Object.assign({}, state, { age: action.payload });
      case "preSurvey/UPDATEEDU":
        return Object.assign({}, state, { edu: action.payload });
      case "preSurvey/UPDATEUID":
        return Object.assign({}, state, { uid: action.payload });
      case "preSurvey/UPDATEFREQ":
        return Object.assign({}, state, { freq: action.payload });
      case "preSurvey/UPDATESS":
        return Object.assign({}, state, { ss: action.payload });
        case "preSurvey/UPDATEDESIRE":
          return Object.assign({}, state, { desire: action.payload });
      case "preSurvey/SYNC":
        return Object.assign({}, state, action.payload);
      // case "preSurvey/STARTTIMER":
      //   return Object.assign({}, state, { startTime: action.payload });
      default:
        return state;
    }
  };
  
export default preSurveyReducer;  