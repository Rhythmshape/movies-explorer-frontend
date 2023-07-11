import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';
import Preloader from '../Preloader/Preloader';
import { useLocation } from 'react-router-dom';

import {
  SHORT_FILMS_MAX_DURATION,
  NOT_FOUND_SEARCH_ERROR,
  REQUEST_SEARCH_ERROR,  
} from '../../utils/generalUtils'; 

function MoviesCardList(props) {
  const location = useLocation();

  const searchShortFilms = (movies) => {
    const searchShortFilmsArray = movies.slice(0);
    return searchShortFilmsArray.filter((item) => item.duration <= SHORT_FILMS_MAX_DURATION);
  };

  let saveFilmsFilterArray = props.checkedSavedMovies
    ? searchShortFilms(props.savedMovies)
    : props.savedMovies;

  let filmsFilterArray = props.checked ? searchShortFilms(props.movies) : props.movies;


  let buttonStatus =
    !(props.movies.length > 4) ||
    props.shownFilmCards >= props.movies.length ||
    props.shownFilmCards >= filmsFilterArray.length
      ? 'movies-list__btn_hidden'
      : 'movies-list__btn';

 
  if (props.loading) return <Preloader />;
 
  return (
    <>
      <section className='movies-list'>        
        {(location.pathname === '/movies') ? (         
          <> 
            <ul className='movies-list__container'>
              {filmsFilterArray.slice(0, props.shownFilmCards).map((movie) => {
                return (
                  <MoviesCard                       
                    savedMovies={props.savedMovies}
                    movie={movie}
                    allSavedMovies={props.allSavedMovies}                        
                    key={movie.id}
                    isSaved={props.isSaved}                        
                    onSave={props.onSave}
                    onDelete={props.onDelete}
                  />
                )
              })}           
              {filmsFilterArray.length === 0 && props.isNotFound
                ? <span className="movies-list__not-found_visible ">{NOT_FOUND_SEARCH_ERROR}</span>
                : ''
              }
              {filmsFilterArray.length === 0 && props.isFailedServer && !props.isNotFound
                ? <span className="movies-list__not-found_visible ">{REQUEST_SEARCH_ERROR}</span>
                : ''
              }
            </ul>
            <button
              type='button'
              className={buttonStatus}
              onClick={props.handleShowMoreFilms}
            >
              Еще
            </button>         
          </>           
        ) : (
            <ul className='movies-list__container'>
              {saveFilmsFilterArray.map((movie) => {
                return (
                  <MoviesCard
                    key={movie._id}
                    savedMovies={props.savedMovies}
                    onSave={props.onSave}
                    onDelete={props.onDelete}
                    movie={movie}
                    allSavedMovies={props.allSavedMovies}
                    isOnlySaved={props.isOnlySaved}
                  />
                );
              })}
              {saveFilmsFilterArray.length === 0 && props.isNotFound
                ? <span className="movies-list__not-found_visible ">{NOT_FOUND_SEARCH_ERROR}</span>
                : ''
              }
              {saveFilmsFilterArray.length === 0 && props.isFailedServer && !props.isNotFound
                ? <span className="movies-list__not-found_visible ">{REQUEST_SEARCH_ERROR}</span>
                : ''
              }            
            </ul>
          )}
      </section>
    </>  
  );
}


export default MoviesCardList;