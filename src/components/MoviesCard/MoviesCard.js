import './MoviesCard.css';

import React from 'react';
import { useLocation } from 'react-router-dom';

function MoviesCard({ name, duration, image }) {
  let hrs = Math.floor(duration / 60);
  let min = Math.floor(duration % 60);
  
  const [favorite, setFavorite] = React.useState(false);

  function handleFavoriteMovie() {
    setFavorite(!favorite);
  }

  const { pathname } = useLocation();

  return (
    <li className='movie-card'>
      <img src={image} alt={name} className='movie-card__image' />
      <div className='movie-card__block'>
        <div className='movie-card__description'>
          <h3 className='movie-card__title'>{name}</h3>
          {pathname === '/saved-movies' ? (
          <button          
            className="movie-card__btn movie-card__btn_delete"
            type='button'/>
          ) : (
            <button
            type="button"
            className={`movie-card__btn movie-card__btn${favorite ? '_save' : ''}`}
            onClick={handleFavoriteMovie}
          />
        )}
        </div>
        <div className='movie-card__time'>
          {hrs}ч{min}м
        </div>
      </div>
    </li>
  );
}

export default MoviesCard;