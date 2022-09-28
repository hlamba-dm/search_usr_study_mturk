const initialState = {
    index: 0,
  };
  
  const homePageReducer = (state = initialState, action) => {
    switch (action.type) {
      case "homePage/UPDATEINDEX":
        return Object.assign({}, state, { index: action.payload });
      case "homePage/SYNC":
        return Object.assign({}, state, action.payload);
      default:
        return state;
    }
  };
  
export default homePageReducer;