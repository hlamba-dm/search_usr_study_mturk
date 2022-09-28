export const syncAssignment = (response) => {
    return {
      type: "assigner/SYNC",
      payload: response,
      pushState: false,
      pushAction: false,
    };
  };
  
  export const getAssignment = () => {
    return {
      type: "assigner/GET",
      pushState: false,
      pushAction: false,
    };
  };
  
  export const setAssignment = (response) => {
    return {
      type: "assigner/SET",
      payload: response,
      pushState: false,
      pushAction: false,
    };
  };
  
  export const getCountFail = () => {
    console.log("FAIL COunt fial");
    return {
      type: "assigner/COUNTFAIL",
      pushState: false,
      pushAction: true,
    };
  };