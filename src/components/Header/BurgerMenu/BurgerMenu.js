import { Link } from 'react-router-dom';
import './BurgerMenu.css';

function BurgerMenu({ isOpen, isClosed }) {
  return (
    <div className={`burger-menu ${isOpen && 'open'}`}>
      <div className='burger-menu__container'>
        <button
          className='burger-menu__close-btn'
          onClick={isClosed}
          type='button'
        />
        <nav className='burger-menu__link-wrapper'>
          <Link to='/' className='burger-menu__link'>
            Главная
          </Link>
          <Link to='/movies' className='burger-menu__link'>
            Фильмы
          </Link>
          <Link to='/saved-movies' className='burger-menu__link'>
            Сохраненные фильмы
          </Link>
        </nav>
        <nav className='burger-menu__profile-link'>
          <Link to='/profile' className='burger-menu__btn-profile'>
            Аккаунт
          </Link>
          <Link to='/profile'  className='burger-menu__account-icon'/>
        </nav>     
      </div>
    </div>
  );
}

export default BurgerMenu;