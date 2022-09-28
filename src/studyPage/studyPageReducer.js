const initialState = {
    // submitted: false,
    // startTime: 0,
    query_idx: "",
    explanationType: "",
    docid: {}
  };

const arrayInitialState = {
    responses: [],
    response: {}
}

const studyPageReducer = (state = arrayInitialState, action) => {
    switch(action.type) {
        case "studyPage/PUSH":
            return {
                ...state,
                responses: [...state.responses, action.payload]
            };
        default:
            return state;
    }
};
  

/*const studyPageReducer = (state = initialState, action) => {
    switch (action.type) {
      case "studyPage/UPDATERESPONSE":
          return Object.assign({}, state, action.payload);
      case "studyPage/Push":
          return {
              ...state,
              data: [...state.data, action.payload]
          }
      default:
        return state;
    }
  };
*/
export default studyPageReducer;  