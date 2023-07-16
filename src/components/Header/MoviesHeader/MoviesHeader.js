import BurgerMenu from '../BurgerMenu/BurgerMenu';
import Navigation from '../../Navigation/Navigation';
import { useState } from 'react';
import './MoviesHeader.css';
import { useLocation } from 'react-router-dom';

function MoviesHeader() {
  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState('');
  const handleBurgerMenuOpen = () => setIsBurgerMenuOpen('open');
  const handleBurgerMenuClose = () => setIsBurgerMenuOpen('');
  const location = useLocation();

  return (
    <>
      {(location.pathname === '/')   
        ? (<Navigation location={'navigation_location_main'} />)
        : (<Navigation location={'navigation_location_movies'} />)       
      }
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
