import BurgerMenu from '../BurgerMenu/BurgerMenu';
import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './MoviesHeader.css';

function MoviesHeader() {
  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState('');
  const handleBurgerMenuOpen = () => setIsBurgerMenuOpen('open');
  const handleBurgerMenuClose = () => setIsBurgerMenuOpen('');

  return (
    <>
      <nav className='navigation'>
        <ul className='navigation__list'>
          <li className='navigation__item'>
            <NavLink to='/movies' className='navigation__movies'>
              Фильмы
            </NavLink>
          </li>
          <li className='navigation__item'>
            <NavLink to='/saved-movies' className='navigation__movies'>
              Сохранённые фильмы
            </NavLink>
          </li>
        </ul>  
        <div className='navigation__profile'>
            <Link to='/profile' className='navigation__account'>
              Аккаунт
            </Link>
            <Link to='/profile' className='navigation__account-icon'/>    
        </div>              
      </nav>
      <button
        className='navigation-button-open'
        onClick={handleBurgerMenuOpen}
      ></button>
      <BurgerMenu
        isOpen={isBurgerMenuOpen}
        isClosed={handleBurgerMenuClose}
      ></BurgerMenu>
    </>
  );
}

export default MoviesHeader;
