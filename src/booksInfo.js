import { cloneNode } from "@babel/types";
import React from "react";
import { useLocation} from "react-router";

function BooksInfo(){
    const location = useLocation();
    const book  = location.state;
    return (
        
        <div className='book-info'>
            <div className='book-info__img'>
                <img src={book.img} alt={book.title} />
            </div>
            <div className='book-info__content'>
                <div className='book-info__categories'>
                    <p>{book.categories.map(category => {
                        return <span>{category}/</span> 
                    })}</p>
                </div>
                <div className='book-info__title'>
                    <p>{book.title}</p>
                </div>
                <div className='book-info__authors'>
                    <p>{book.authors.map(author => {
                            return <span key={author.key}>{author}, </span>
                        })}</p>
                </div>
            </div>
            <div className='book-info__descr' id="descr">
                <p>{book.descr}</p>
            </div>
        </div>
    )
}

export default BooksInfo