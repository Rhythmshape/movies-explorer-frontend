import './Movies.css'
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import MoviesHeader from '../Header/MoviesHeader/MoviesHeader';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';

function Movies(props) {

  return (
    <>
      <Header
        colorscheme={'header_color_white'}
        location={'header__container_movies'}        
      >
        <MoviesHeader />
      </Header>
      <main className='movies'>
        <SearchForm
          checked={props.checked}
          checkedSavedMovies={props.checkedSavedMovies}
          onCheckbox={props.onCheckbox}    
          searchKeyword={props.searchKeyword}
          onSubmit={props.onSubmit}       
        />
        <MoviesCardList  
          movies={props.movies}
          savedMovies={props.savedMovies}
          allSavedMovies={props.allSavedMovies} 
          checked={props.checked}
          checkedSavedMovies={props.checkedSavedMovies}
          onCheckbox={props.onCheckbox}
          searchKeyword={props.searchKeyword}
          handleShowMore={props.handleShowMore}
          onSave={props.onSave}
          isSaved={props.isSaved}
          isOnlySaved={false}
          onDelete={props.onDelete}
          loading={props.loading}
          isNotFound={props.isNotFound}
          isFailedServer={props.isFailedServer}           
          handleShowMoreFilms={props.handleShowMoreFilms}
          shownFilmCards={props.shownFilmCards}
        />
      </main>
      <Footer />
    </>
  );
}

export default Movies;
