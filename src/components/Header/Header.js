import './Header.css';
import { Link } from 'react-router-dom';

function Header({ children, colorscheme, location }) {
  return (
    <header className={`header ${colorscheme}`}>
      <div className={`header__container ${location}`}>
        <Link to='/' className='header__logo'></Link>
        {children}
      </div>
    </header>
  );
}

export default Header;