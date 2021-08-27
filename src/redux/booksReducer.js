import { ADD_BOOKS } from "./types";

const initialState = {
    books : []
}

export const bookReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_BOOKS:
            return { ...state, books: state.books.concat(action.payload) };   
        default:
            return state;
    }
}