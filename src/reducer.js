const newData = localStorage.getItem('dataStore')

export const initialState = {
    term : newData
}

export const actionTypes = {
    SET_SEARCH_TERM : "SET_SEARCH_TERM"
}

const reducer = (state, action) => {
    localStorage.setItem('dataStore', action.term)

    switch(action.type) {
        case actionTypes.SET_SEARCH_TERM:
            return {
                ...state, 
                term: action.term,
            };
        default: {
            return state;
        }
    }
}

export default reducer;