import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

import './SearchForm.css';

import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function SearchForm(props) {

  const [keyword, setKeyword] = useState('');

  const [errorInputSearchFormText, setErrorInputSeaerchFormText] = useState('');  
  const [isSearchFormValid, setIsSearchFormValid] = useState(false);

  const location = useLocation();

  useEffect(() => {
    if (props.searchKeyword && location.pathname === '/movies') {
      setKeyword(props.searchKeyword);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSearchFormSubmit = (evt) => {
    evt.preventDefault();
    setIsSearchFormValid(evt.target.closest('form').checkValidity());
    if (!isSearchFormValid) {
      return setErrorInputSeaerchFormText('Нужно ввести ключевое слово');
    }
    props.onSubmit(keyword);
  };

  const handleChangeSearchInput = (evt) => {
    setKeyword(evt.target.value);
    setIsSearchFormValid(evt.target.closest('form').checkValidity());
  };

  return (
    <section className='search'>
      <div className='search__container'>
        <form action='#' 
          className='search__form'
          onSubmit={handleSearchFormSubmit}
          noValidate
        >
          <input
            type='text' 
            className='search__input' 
            minLength='1'
            maxLength='30'            
            placeholder='Фильм' 
            onChange={handleChangeSearchInput}
            value={keyword}
            name="keyword"            
            required
          />
          <button 
            className='search__btn'
            type='submit'             
          >
            Поиск
          </button>          
        </form>
        <span className='search__error'>{!isSearchFormValid && errorInputSearchFormText}</span>
        <FilterCheckbox
          checked={props.checked} 
          onCheckbox={props.onCheckbox}                  
          checkedSavedMovies={props.checkedSavedMovies} 
        ></FilterCheckbox>
      </div>
    </section>
  )
};

export default SearchForm;