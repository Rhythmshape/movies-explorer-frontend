import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';
import Preloader from '../Preloader/Preloader';
import data  from '../../utils/data';
import { useState, useEffect } from 'react';

function MoviesCardList({ extraButton }) {
  const [movies, setMovies] = useState([]);
  const [isLoading, setLoading] = useState(false);


  const handlePreloader = () => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 3000);
  };

  useEffect(() => {
    const windowSize = window.innerWidth;
    if (windowSize <= 320) {
      return setMovies(data.slice(0, 5));
    } else if (windowSize <= 768) {
      return setMovies(data.slice(0, 8));
    } else {
      return setMovies(data);
    }
  }, [setLoading]);

  return (
    <section className='movies-list'>
      <ul className='movies-list__container'>
        {movies.map((movie) => {
          return (
            <MoviesCard
              key={movie.id}
              name={movie.nameRU}
              duration={movie.duration}
              image={movie.image}              
            />
          );
        })}
      </ul>
      {isLoading ? (
        <Preloader />
      ) : (
        extraButton && (
          <button 
            type='button' 
            className='movies-list__btn' 
            name="extra-button"
            onClick={handlePreloader}>
            Еще
          </button>
        )
      )}
    </section>
  );
}

export default MoviesCardList;