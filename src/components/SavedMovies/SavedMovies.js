import './SavedMovies.css';

import Header from '../Header/Header';
import MoviesHeader from '../Header/MoviesHeader/MoviesHeader';

import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';

function SavedMovies(props) {

  return (
    <>
      <Header
        location={'header__container_movies'}
        colorscheme={'header_color_white'}
      >
        <MoviesHeader />
      </Header>
      <main className='saved-movies'>
        <SearchForm
          defaultValue=""
          searchKeyword={props.searchKeyword}
          checked={props.checked}
          checkedSavedMovies={props.checkedSavedMovies}
          onCheckbox={props.onCheckbox}
          onSubmit={props.onSubmit}                  
        />
        <MoviesCardList 
          movies={props.movies}
          savedMovies={props.savedMovies}
          allSavedMovies={props.allSavedMovies}
          checked={props.checked}
          checkedSavedMovies={props.checkedSavedMovies}
          onSave={props.onSave}
          isOnlySaved={true}
          onDelete={props.onDelete}
          isNotFound={props.isNotFound}
          isFailedServer={props.isFailedServer}        
          loading={props.loading}                
        >  
        </MoviesCardList>         
      </main>
      <Footer/>
    </>
  )
};

export default SavedMovies;