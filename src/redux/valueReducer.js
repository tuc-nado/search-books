import { INPUT_VALUE } from "./types";

const initialState = {
    value: '' 
}

export const valueReducer = (state = initialState, action) => {
    switch (action.type) {
        case INPUT_VALUE:
            return { value: action.payload }   
        default:
            return state;
    }
}