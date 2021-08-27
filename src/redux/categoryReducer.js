import { CHANGE_CATEGORY } from "./types";

const initialState = {
    category: '' 
}

export const categoryReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_CATEGORY:
            return { category: action.payload }   
        default:
            return state;
    }
}