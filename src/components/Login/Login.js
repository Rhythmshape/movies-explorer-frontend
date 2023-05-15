import './Login.css';
import { Link } from 'react-router-dom';

function Login() {
  return (
    <>
      <main className='login'>
        <div className='login__container'>
          <header className='login__header'>
            <Link to='/' className='login__logo'></Link>
            <h2 className='login__title'>Рады видеть!</h2>
          </header>
          <form action='#' className='login__form'>
            <fieldset className='login__form-content'>
              <label className='login__form-field'>
                <span className='login__label'>E-mail</span>
                <input
                  type='email'
                  name='email'
                  placeholder='Email'
                  autoComplete='off'
                  minLength='5'
                  maxLength='40'
                  className='login__input'                  
                  required
                />
              </label>
              <label className='login__form-field'>
                <span className='login__label'>Пароль</span>
                <input
                  type='password'                  
                  minLength='5'
                  maxLength='40'
                  placeholder='Пароль'
                  autoComplete='off'
                  className='login__input'      
                  name='password'            
                  required
                />
              </label>
              <button type='submit' className='login__submit-button'>
                Войти
              </button>
            </fieldset>
          </form>
          <section className='confirmation'>
            <p className='confirmation__text'>Еще не зарегистрированы?</p>
            <Link to='/signup' className='confirmation__login'>
              Регистрация
            </Link>
          </section>
        </div>
      </main>
    </>
  );
}

export default Login;