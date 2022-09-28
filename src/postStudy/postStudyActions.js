export const syncPost = (response) => {
    return {
      type: "postStudy/SYNC",
      payload: response,
      pushState: false,
      pushAction: false,
    };
  };

  
  export const updateHelpfulness = (response) => {
    return {
      type: "postStudy/UPDATEHELPFULNESS",
      payload: response,
      pushState: true,
      pushAction: true,
    };
  };
  
  export const updateRelevance = (response) => {
    return {
      type: "postStudy/UPDATERELEVANCE",
      payload: response,
      pushState: true,
      pushAction: true,
    };
  };
  
  export const updateExplanationType = (response) => {
    return {
      type: "postStudy/UPDATEEXPTYPE",
      payload: response,
      pushState: true,
      pushAction: true,
    };
  };
  
  export const updateReSearch = (response) => {
    return {
      type: "postStudy/UPDATERESEARCH",
      payload: response,
      pushState: true,
      pushAction: true,
    };
  };
  
  export const updateSuggestions = (response) => {
    return {
      type: "postStudy/UPDATESUGG",
      payload: response,
      pushState: true,
      pushAction: true,
    };
  };
  