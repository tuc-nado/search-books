import { CHANGE_SORTING } from "./types";

const initialState = {
    sorting: 'relevance' 
}

export const sortingReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_SORTING:
            return { sorting: action.payload }   
        default:
            return state;
    }
}