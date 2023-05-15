import Header from '../Header/Header';
import MoviesHeader from '../Header/MoviesHeader/MoviesHeader';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';

function Movies() {
  return (
    <>
      <Header
        location={'header__container_movies'}
        colorscheme={'header_color_white'}
      >
        <MoviesHeader />
      </Header>
      <main className='movies'>
        <SearchForm />
        <MoviesCardList 
          extraButton={true} 
          data
        />
        <Footer />
      </main>
    </>
  );
}

export default Movies;