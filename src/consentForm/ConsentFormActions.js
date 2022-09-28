export const consent = () => {
    return {
        type: 'consentForm/CONSENT',
        pushState:true,
        pushAction:true
    }
}

export const syncConsent = (response) => {
    console.log("running consent sync");
    return {
        type: 'consentForm/SYNC',
        payload : response,
        pushState:false,
        pushAction:false
    }
}