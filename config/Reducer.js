export const initialState = {
    users : undefined,
}

//reducer with chage state function.
export const reducer = ( state , action ) => {
    switch (action.type) {
        case "SET_USERS":
            return(
                {
                    ...state,
                    theme : action.theme,
                }
            );
    
        default:
            return state;
    }
}

export default reducer;