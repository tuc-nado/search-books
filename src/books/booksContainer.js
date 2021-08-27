import React from "react";

import BooksCard from "./booksCard";

function BooksContainer ({books}){
    return (
        <div className='books'>
            {
            books.map(book => {
                return <BooksCard 
                        img={book.volumeInfo.imageLinks !==  undefined ? book.volumeInfo.imageLinks.thumbnail : "https://mebel-egoist.ru/catalog/nophoto_55.jpg" }
                        title={book.volumeInfo.title !== undefined ? book.volumeInfo.title : ''} 
                        authors={book.volumeInfo.authors !== undefined ? book.volumeInfo.authors : []} 
                        categories={book.volumeInfo.categories !== undefined ? book.volumeInfo.categories : []}
                        descr={book.volumeInfo.description !== undefined ? book.volumeInfo.description : 'There is no description'}
                        key={book.id} />})
            }

        </div>
    )
}

export default BooksContainer