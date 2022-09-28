export const syncStudyPage = (response) => {
    return {
      type: "studyPage/SYNC",
      payload: response,
      pushState: false,
      pushAction: false,
    };
  };

export const updateQueryResponse = (response) => {
      return {
          type: "studyPage/UPDATERESPONSE",
          payload: response,
          pushState: true,
          pushAction: true
      }
    };

export const addQueryResponse = (response) => {
    return {
        type: "studyPage/PUSH",
        payload: response,
        pushState: true,
        pushAction: true
    }
};