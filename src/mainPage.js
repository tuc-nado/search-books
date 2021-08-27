import React, {useState} from "react";
import axios from "axios";

import {connect} from 'react-redux';
import { addBooks, inputValue, changeCategory, changeSorting, setStartIndex, setTotalItems, setLoading } from "./redux/actions";

import BooksContainer from "./books/booksContainer";
import Loader from "./Loader";

const apiKey = 'AIzaSyBMV51ufVuapcomie6aboKfjlCxCphPcaU';//apiKey

function MainPage({
                    value, category, sorting, startIndex, totalItems, loading,
                    addBooks, inputValue, changeCategory, changeSorting, setStartIndex, setTotalItems, setLoading 
                    }){


    function query(){//func for exec query on click 'Load more'
        setLoading(true);
        axios.get(`https://www.googleapis.com/books/v1/volumes?q=intitle:${value}+subject:${category}&orderBy=${sorting}&maxResults=30&startIndex=${startIndex}&${apiKey}`).then(res => {
            if(res.data.items !== undefined){
                if(res.data.items.length > 0 ){
                    addBooks(res.data.items);
                    setLoading(false);
                }
            }
        }).catch(err => {
            console.log(err);
        });
    }


    function submitHandler(e){//func for exec query on search
        e.preventDefault();
        setStartIndex(0);
        setLoading(true);
        if(value.trim()){
            axios.get(`https://www.googleapis.com/books/v1/volumes?q=${value}+subject:${category}&orderBy=${sorting}&maxResults=30&startIndex=0&${apiKey}`).then(res => {
                if(res.data.items.length > 0){
                    addBooks(res.data.items);
                    setLoading(false);
                }

                setTotalItems(res.data.totalItems);    
                }).catch(err => {
                    console.log(err);
            });
            // query();
            // setTotalItems(res.data.totalItems);    
            
        }
    }


    return (
        <div>
            <header className='header'>
            <div className='container'>
                <h1 className='header__title'>
                    Search for books
                </h1>

                <div className='search'>
                    <form className='search__form' onSubmit={submitHandler} >
                        <input className='search__input' value={value} onChange={e => inputValue(e.target.value)} placeholder="Input book's title..." />
                        <button className='search__btn btn' type='submit' >
                            Search
                        </button>

                    </form>
                </div>
                
                <div className='filter'>

                <div className='filter__categories filter__input'>
                    <select className='filter__input' value={category} onChange={e => {changeCategory(e.target.value)}} >
                    <option value='' >all</option>
                    <option value='art' >art</option>
                    <option value='biography' >biography</option>
                    <option value='computers' >computers</option>
                    <option value='history' >history</option>
                    <option value='medical' >medical</option>
                    <option value='poetry' >poetry</option>
                    </select>
                </div>

                <div className='filter__sorting'>
                    <select className='filter__input' value={sorting} onChange={e => {changeSorting(e.target.value)}} >
                    <option value='relevance' >relevance</option>
                    <option value='newest' >newest</option>
                    </select>
                </div>
                </div>
                
            </div>
            </header>

            <main>
                <div className='container' >
                    <div className='totalAmount'>
                    {totalItems ? 'Found ' + totalItems : ""}
                    </div>
                    <BooksContainer />
                    {loading && <Loader /> }
                </div>

                {(startIndex < totalItems) ?  <div className='btn-load-more'>
                    <button className='btn' onClick={() => {
                    setStartIndex(startIndex+30)
                    query(value, category, sorting, startIndex);
                    }} >Load more</button>
                </div> : ""}
            
            </main>
        </div>
    );
}

const mapDispatchToProps = {
    addBooks,
    inputValue,
    changeCategory,
    changeSorting,
    setStartIndex,
    setTotalItems,
    setLoading
}

const mapStateToProps = state => {
    return {
        value: state.value.value,
        category: state.category.category,
        sorting: state.sorting.sorting,
        startIndex: state.startIndex.startIndex,
        totalItems: state.totalItems.totalItems,
        loading: state.loading.loading
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainPage)