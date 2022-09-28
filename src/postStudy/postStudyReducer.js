const initialState = {
    // submitted: false,
    // startTime: 0,
    helpfulness: "",
    relevance: "",
    exptype: "",
    research: "",
    suggestions: ""
  };
  
  
  const postStudyReducer = (state = initialState, action) => {
    switch (action.type) {
      // case "preSurvey/SUBMIT":
      //   return Object.assign({}, state, { submitted: true });
      case "postStudy/UPDATEHELPFULNESS":
        return Object.assign({}, state, { helpfulness: action.payload });
      case "postStudy/UPDATERELEVANCE":
        return Object.assign({}, state, { relevance: action.payload });
      case "postStudy/UPDATEEXPTYPE":
        return Object.assign({}, state, { exptype: action.payload });
      case "postStudy/UPDATERESEARCH":
        return Object.assign({}, state, { research: action.payload });
      case "postStudy/UPDATESUGG":
        return Object.assign({}, state, { suggestions: action.payload });
      case "postStudy/SYNC":
        return Object.assign({}, state, action.payload);
      default:
        return state;
    }
  };
  
export default postStudyReducer;  