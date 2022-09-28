export const syncPre = (response) => {
    return {
      type: "preSurvey/SYNC",
      payload: response,
      pushState: false,
      pushAction: false,
    };
  };
  
  export const updateGender = (response) => {
    return {
      type: "preSurvey/UPDATEGENDER",
      payload: response,
      pushState: true,
      pushAction: true,
    };
  };
  
  export const updateAge = (response) => {
    return {
      type: "preSurvey/UPDATEAGE",
      payload: response,
      pushState: true,
      pushAction: true,
    };
  };
  
  export const updateEdu = (response) => {
    return {
      type: "preSurvey/UPDATEEDU",
      payload: response,
      pushState: true,
      pushAction: true,
    };
  };
  
  export const updateUID = (response) => {
    return {
      type: "preSurvey/UPDATEUID",
      payload: response,
      pushState: true,
      pushAction: true,
    };
  };

  export const updateFreq = (response) => {
    return {
      type: "preSurvey/UPDATEFREQ",
      payload: response,
      pushState: true,
      pushAction: true,
    };
  };
  
  export const updateSS = (response) => {
    return {
      type: "preSurvey/UPDATESS",
      payload: response,
      pushState: true,
      pushAction: true,
    };
  };
  
  export const updateDesire = (response) => {
    return {
      type: "preSurvey/UPDATEDESIRE",
      payload: response,
      pushState: true,
      pushAction: true,
    };
  };
  
  // export const startTimer = (response) => {
  //   return {
  //     type: "preSurvey/STARTTIMER",
  //     payload: response,
  //     pushState: true,
  //     pushAction: true,
  //   };
  // };
  