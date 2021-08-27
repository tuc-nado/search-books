import { SET_START_INDEX } from "./types";

const initialState = {
    startIndex: 0 
}

export const startIndexReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_START_INDEX:
            return { startIndex: action.payload }   
        default:
            return state;
    }
}