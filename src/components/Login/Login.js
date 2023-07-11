import { Link } from 'react-router-dom';
import { useValidation } from '../../hooks/useValidation';
import './Login.css';

function Login(props) {
  const controlInput = useValidation();
  const { email, password } = controlInput.errors;

  const errorLoginClassName = !controlInput.isValid
    ? 'login__error login__error_visible'
    : 'login__error';

  const errorLoginButtonClassName = props.isErrorLoginButton
    ? 'login__error login__error_visible'
    : 'login__error';

  const handleLoginSubmit = (e) =>  {
    e.preventDefault();
    const { email, password } = controlInput.values;
    props.onLogin(email, password);
    controlInput.resetForm();
  };

  return (
    <>
      <main className='login'>
        <div className='login__container'>
          <header className='login__header'>
            <Link to='/' className='login__logo'></Link>
            <h2 className='login__title'>Рады видеть!</h2>
          </header>
          <form 
            action='#' 
            onSubmit={handleLoginSubmit}
            className='login__form'            
            noValidate
          >
            <fieldset className='login__form-content'>
              <label className='login__field'>
                <span className='login__span'>E-mail</span>
                <input
                  type='email'
                  name='email'
                  value={controlInput?.values?.email || ''}   
                  placeholder='Email'                  
                  minLength='5'
                  maxLength='40'
                  className={`login__input ${controlInput.errors.email ? 'login__input_type_error' : ''}`}                   
                  required
                  onChange={controlInput.handleChange}  
                  autoComplete='off'                               
                />
                <span className={errorLoginClassName}>{email}</span>
              </label>
              <label className='login__field'>
                <span className='login__span'>Пароль</span>
                <input
                  type='password'    
                  value={controlInput?.values?.password || ''}              
                  minLength='5'
                  maxLength='40'
                  placeholder='Пароль'                  
                  className={`login__input ${controlInput.errors.password ? 'login__input_type_error' : ''}`}          
                  name='password'            
                  onChange={controlInput.handleChange}   
                  autoComplete='off'               
                  required
                />
                <span className={errorLoginClassName}>{password}</span>
              </label>
              <span className={errorLoginButtonClassName}>{props.isLoginMessage}</span>
              <button 
                className='login__submit-btn'
                type='submit'                 
                disabled={!controlInput.isValid}
              >
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