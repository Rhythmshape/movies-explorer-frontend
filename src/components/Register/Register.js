import './Register.css';
import { Link } from 'react-router-dom';

import { useValidation } from '../../hooks/useValidation';


function Register(props) {
  const controlInput = useValidation();
  const { name, email, password } = controlInput.errors;

  const errorRegisterClassName = !controlInput.isValid
    ? 'register__error register__error_visible'
    : 'register__error';  

  const errorRegisterButtonClassName = props.isErrorRegisterButton
    ? 'register__error register__error_visible'
    : 'register__error';

  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    const { name, email, password } = controlInput.values;
    props.onRegister(name, email, password);
    controlInput.resetForm();
  };


  return (
    <> 
      <main className='register'>
        <div className='register__container'>
          <header className='register__header'>
            <Link to='/' className='register__logo'></Link>
            <h2 className='register__title'>Добро пожаловать!</h2>
          </header>
          <form action='#' className='register__form' onSubmit={handleRegisterSubmit} noValidate>
            <fieldset className='register__content'>
              <label className='register__field'>
                <span className='register__span'>Имя</span>
                <input
                  name='name'
                  type='text'         
                  value={controlInput?.values?.name || ''}         
                  placeholder='Введите имя'                                
                  minLength='2'
                  maxLength='40'
                  className={`register__input ${controlInput.errors.name ? 'register__input_type_error' : ''}`} 
                  onChange={controlInput.handleChange}             
                  autoComplete='off'    
                  required
                />
                <span className={errorRegisterClassName}>{name}</span>
              </label>
              <label className='register__field'>
                <span className='register__span'>E-mail</span>
                <input
                  name='email'
                  type='email'        
                  value={controlInput?.values?.email || ''}          
                  placeholder='Введите Email'
                  className={`register__input ${controlInput.errors.email ? 'register__input_type_error' : ''}`}                               
                  minLength='5'
                  maxLength='40'
                  onChange={controlInput.handleChange}
                  autoComplete='off'  
                  required
                />
                <span className={errorRegisterClassName}>{email}</span>
              </label>
              <label className='register__field'>
                <span className='register__span'>Пароль</span>
                <input
                  name='password'
                  type='password'
                  value={controlInput?.values?.password || ''}                  
                  placeholder='Введите пароль'                  
                  className={`register__input ${controlInput.errors.password ? 'register__input_type_error' : ''}`} 
                  minLength='5'
                  maxLength='40'
                  onChange={controlInput.handleChange}
                  autoComplete='off'
                  required
                />
                <span className={errorRegisterClassName}>{password}</span>
              </label>
              <span className={errorRegisterButtonClassName}>{props.isRegisterMessage}</span>
              <button className='register__submit-btn' type='submit'  disabled={!controlInput.isValid}>
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
  )
};

export default Register;