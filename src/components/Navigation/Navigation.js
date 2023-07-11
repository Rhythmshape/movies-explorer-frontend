import { Link, NavLink } from 'react-router-dom';
import './Navigation.css';

function Navigation({location}) {

  return (
    <nav className={`navigation ${location}`}>
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
  )  
}

export default Navigation;
