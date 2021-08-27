import { SET_LOADING } from "./types";

const initialState = {
    loading: false
}

export const loadingReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_LOADING:
            return { loading: action.payload }   
        default:
            return state;
    }
}