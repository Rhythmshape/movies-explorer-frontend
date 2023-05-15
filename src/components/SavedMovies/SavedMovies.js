import Header from '../Header/Header';
import MainMovies from '../Header/MoviesHeader/MoviesHeader';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';
import SearchForm from '../SearchForm/SearchForm';

function SavedMovies() {
  return (
    <>
      <Header
        location={'header__container_movies'}
        colorscheme={'header_color_white'}
      >
        <MainMovies />
      </Header>
      <main className='save-movies'>
        <SearchForm/>
        <MoviesCardList 
          extraButton={false}>   
        </MoviesCardList>
      </main>
      <Footer/>
    </>
  );
}

export default SavedMovies;