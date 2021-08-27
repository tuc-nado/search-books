import React, {useState} from "react";
import axios from "axios";

import BooksContainer from "./books/booksContainer";
import Loader from "./Loader";


function MainPage(){
    const [value, setValue] = useState('');//state for input
    const [category, setCategory] = useState('');//state for categories
    const [sorting, setSorting] = useState('relevance');//state for sorting

    const [startIndex, setStartIndex] = useState(0);//state for startINdex

    const [books, setBooks] = useState([]);//state for books
    const [totalItems, setTotalItems] = useState(0);//state for total items

    const apiKey = 'AIzaSyBMV51ufVuapcomie6aboKfjlCxCphPcaU';//apiKey
    const [loading, setLoading] = useState(false);


    function query(value, category, sorting, startIndex){
        setLoading(true);
        axios.get(`https://www.googleapis.com/books/v1/volumes?q=intitle:${value}+subject:${category}&orderBy=${sorting}&maxResults=30&startIndex=${startIndex}&${apiKey}`).then(res => {
            if(res.data.items !== undefined){
            if(res.data.items.length > 0 ){
                setBooks(books.concat(res.data.items));
                setLoading(false);
            }
            }
            console.log(res.data);
            console.log(books);
            console.log('total items ' + totalItems);
        }).catch(err => {
            console.log(err);
        });
    }


    function submitHandler(e){
        e.preventDefault();
        setLoading(true);
        if(value.trim()){
            axios.get(`https://www.googleapis.com/books/v1/volumes?q=${value}+subject:${category}&orderBy=${sorting}&maxResults=30&startIndex=0&${apiKey}`).then(res => {
            if(res.data.items.length > 0){
                setBooks(res.data.items);
                setLoading(false);
            }
            console.log(res.data);
            console.log(books);

            setTotalItems(res.data.totalItems);    
            console.log('total items ' + totalItems);
            }).catch(err => {
            console.log(err);
            });
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
                    <input className='search__input' value={value} onChange={e => setValue(e.target.value)} placeholder="Input book's title..." />
                    <button className='search__btn btn' type='submit' >
                        Search
                </button>

                </form>
                </div>
                
                <div className='filter'>

                <div className='filter__categories filter__input'>
                    <select className='filter__input' value={category} onChange={e => {setCategory(e.target.value)}} >
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
                    <select className='filter__input' value={sorting} onChange={e => {setSorting(e.target.value)}} >
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
                <BooksContainer books={books}/>
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

export default MainPage