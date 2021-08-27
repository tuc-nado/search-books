import { SET_TOTAL_ITEMS } from "./types";

const initialState = {
    totalItems: 0 
}

export const totalItemsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_TOTAL_ITEMS:
            return { totalItems: action.payload }   
        default:
            return state;
    }
}