import { ADD_BOOKS, CHANGE_CATEGORY, CHANGE_SORTING, INPUT_VALUE, SET_LOADING, SET_START_INDEX, SET_TOTAL_ITEMS } from "./types";

export function addBooks (books){
    return {
        type: ADD_BOOKS,
        payload: books
    }
}

export function inputValue(value){
    return {
        type: INPUT_VALUE,
        payload: value
    }
}

export function changeCategory(category){
    return {
        type: CHANGE_CATEGORY,
        payload: category
    }
}

export function changeSorting(sorting){
    return {
        type: CHANGE_SORTING,
        payload: sorting
    }
}

export function setStartIndex(startIndex){
    return {
        type: SET_START_INDEX,
        payload: startIndex
    }
}

export function setTotalItems(totalItems){
    return {
        type: SET_TOTAL_ITEMS,
        payload: totalItems
    }
}

export function setLoading(loading){
    return {
        type: SET_LOADING,
        payload: loading
    }
}