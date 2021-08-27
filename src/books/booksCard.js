import React from 'react';
import PropTypes from 'prop-types';
import { Link, Route } from 'react-router-dom';
import BooksInfo from '../booksInfo';

function BooksCard ({img, title, categories, authors, descr}){    
    return(
        <Link to={{pathname: '/book',
                    state:{
                        img,
                        title,
                        categories,
                        authors,
                        descr
                    }}}>

            <div className='books__card'>
                <div className='books__img'>
                    <img src={img} alt="book's"/>
                </div>
                <div className='books__content'>
                    <p className='books__title'>
                        {title}
                    </p>
                    <p className='books__authors'>
                        {authors.map(author => {
                            return <span key={author.key}>{author}, </span>
                        })}
                    </p>
                    <p className='books__categories'>
                        {categories[0]}
                    </p>
                </div>
            </div>
        </Link>

    )
}

BooksCard.propTypes = {
    img: PropTypes.string,
    title: PropTypes.string,
    categories: PropTypes.array,
    authors: PropTypes.array.isRequired
}

export default BooksCard