export const signIn = () => {
    return {
        type: 'fb/SIGNIN',
        pushState:false,
        pushAction:true
    }
}

export const signInSuccess = (response) => {
    console.log("Running SignIN Success");
    return {
        type: 'fb/SIGNINSUCCESS',
        payload: response,
        pushState:false,
        pushAction:true
    }
}

export const signInFailure = () => {
    return {
        type: 'fb/SIGNINFAIL',
        pushState:false,
        pushAction:true
    }
}

export const synced = () => {
    return {
        type: 'fb/SYNCED',
        pushState:false,
        pushAction:true
    }
}