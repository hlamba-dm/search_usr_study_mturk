const initialState = {
    userId: "",
    synced: false,
  };
  
  const fbReducer = (state = initialState, action) => {
    switch (action.type) {
      case "fb/SIGNINSUCCESS":
        return Object.assign({}, state, { userId: action.payload });
      case "fb/SYNCED":
        return Object.assign({}, state, { synced: true });
      default:
        return state;
    }
  };
  
export default fbReducer;  