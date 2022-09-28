const initialState = {
    consent: false
}

const consentFormReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'consentForm/CONSENT':
            return Object.assign({}, state, { consent: true });
        case 'consentForm/SYNC':
            return Object.assign({}, state, action.payload);
        default:
            return state;
    }
}

export default consentFormReducer;