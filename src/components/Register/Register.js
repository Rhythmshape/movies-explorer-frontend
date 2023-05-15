import './Register.css';
import { Link } from 'react-router-dom';

function Register() {
  return (
    <>
      <main className='register'>
        <div className='register__container'>
          <header className='register__header'>
            <Link to='/' className='register__logo'></Link>
            <h2 className='register__title'>Добро пожаловать!</h2>
          </header>
          <form action='#' className='register__form'>
            <fieldset className='register__content'>
              <label className='register__form-field'>
                <span className='register__label'>Имя</span>
                <input
                  type='text'
                  name='text'
                  placeholder='Алёна'
                  autoComplete='off'
                  minLength='5'
                  maxLength='40'
                  className='register__input'                  
                  required
                />
              </label>
              <label className='register__form-field'>
                <span className='register__label'>E-mail</span>
                <input
                  type='email'
                  name='email'
                  placeholder='Email'
                  className='register__input'
                  autoComplete='off'                  
                  minLength='5'
                  maxLength='40'
                  required
                />
              </label>
              <label className='register__form-field'>
                <span className='register__label'>Пароль</span>
                <input
                  type='password'
                  name='password'
                  placeholder='Пароль'
                  autoComplete='off'
                  className='register__input register__input_type_error'
                  minLength='5'
                  maxLength='40'
                  required
                />
                <span className='register__error'>Что-то пошло не так...</span>
              </label>
              <button type='submit' className='register__submit-button'>
                Зарегистрироваться
              </button>
            </fieldset>
          </form>
          <section className='confirmation'>
            <p className='confirmation__text'>Уже зарегистрированы?</p>
            <Link to='/signin' className='confirmation__login'>
              Войти
            </Link>
          </section>
        </div>
      </main>
    </>
  );
}

export default Register;