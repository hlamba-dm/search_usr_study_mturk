export const updateIndex = (response) => {
    console.log("update Index");
    return {
        type: 'homePage/UPDATEINDEX',
        payload: response,
        pushState: true,
        pushAction: true
    }
}

export const syncHomePage = (response) => {
    console.log("sync homepage");
    return {
        type: 'homePage/SYNC',
        payload: response,
        pushState:false,
        pushAction:false
    }
}