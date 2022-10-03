import React from 'react';
const IMAGE_API ='https://image.tmdb.org/t/p/w1280';

const movie = ({title, poster_path, overview, release_date}) => 
    <div className='Movie'>
        <img 
            src={
                poster_path 
                ? IMAGE_API + poster_path 
                : 'https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=856&q=80'
            } 
            alt={title} 
        />
        <div className='movie-description'>
            <h3>{title}</h3>
            <span>{release_date}</span>
        </div>
        <div className='movie-description-pop-up'>
            <h2>
                Overview:
            </h2>
            <p>
                {overview}
            </p>
        </div>
    </div>

export default movie;