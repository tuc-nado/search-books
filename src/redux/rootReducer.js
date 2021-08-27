import { combineReducers } from "redux";

import { bookReducer } from "./booksReducer";
import { valueReducer } from './valueReducer';
import { categoryReducer } from './categoryReducer';
import { sortingReducer } from './sortingReducer';
import { startIndexReducer } from './startIndexReducer';
import { totalItemsReducer } from './totalItemsReducer';
import { loadingReducer } from './loadingReducer';

export const rootReducer = combineReducers({
    books: bookReducer,
    value: valueReducer,
    category: categoryReducer,
    sorting: sortingReducer,
    startIndex: startIndexReducer,
    totalItems: totalItemsReducer,
    loading: loadingReducer
})