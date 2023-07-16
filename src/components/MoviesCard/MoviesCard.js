import './MoviesCard.css';
import { useLocation } from 'react-router-dom';
import React from 'react';

function MoviesCard(props) {

  const location = useLocation();

  const nameRu = props.movie.nameRU;
  const thumbnail = props.isOnlySaved ?  props.movie.thumbnail : `https://api.nomoreparties.co/${props.movie.image.formats.thumbnail.url}` ;
  const trailerLink = props.movie.trailerLink;
  const duration = props.movie.duration;

  let hrs = Math.floor(duration / 60);
  let min = Math.floor(duration % 60);

  const isSaved = props.savedMovies.some((m) => m.movieId === props.movie.id);
  //const isAllSaved = props.allSavedMovies.some((m) => m.movieId === props.movie.id);

  let likeButtonClassName =
    isSaved /*||/* isAllSaved*/
      ? 'movie-card__btn movie-card__btn_save'
      : 'movie-card__btn';

  const handleCardDelete = () => {
    props.onDelete(props.movie);
  };


  const handleCardSave = () => {
    if (isSaved) {
      props.onDelete(props.savedMovies.filter((m) => m.movieId === props.movie.id)[0]);
    } else {
      props.onSave(props.movie);
    }
  };

  return (
    <li className='movie-card'>
      <div className='movie-card__image-frame'>
        <a
          href={trailerLink}
          className='movie-card__trailer'          
          rel='noreferrer'
          target='_blank'
        >
          <img 
            alt='Иконка фильма' 
            src={thumbnail} 
            className='movie-card__image' 
          />
        </a>
      </div>  
      <div className='movie-card__block'>
        <div className='movie-card__description'>
          <h3 className='movie-card__title'>{nameRu}</h3>
          {location.pathname === '/saved-movies' && (
            <button
              className='movie-card__btn movie-card__btn_delete'
              onClick={handleCardDelete}
              type='button'              
            ></button>
          )}  
          {location.pathname === '/movies' && (
            <button
              className={likeButtonClassName}
              onClick={handleCardSave}
              type='button'              
            ></button>
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