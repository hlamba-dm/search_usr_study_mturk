const initialState = {
    assignment: -1,
  };
  
  const assignerReducer = (state = initialState, action) => {
    switch (action.type) {
      case "assigner/SET":
        return Object.assign({}, state, { assignment: action.payload });
      case "assigner/SYNC":
        return Object.assign({}, state, action.payload);
      default:
        return state;
    }
  };
  
  export default assignerReducer;