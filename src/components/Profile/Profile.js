import Header from '../Header/Header';
import MoviesHeader from '../Header/MoviesHeader/MoviesHeader';
import './Profile.css';

import { useContext, useEffect} from 'react';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

import { useValidation } from '../../hooks/useValidation';

function Profile(props) {
  const currentUser = useContext(CurrentUserContext);

  const controlInput = useValidation({name: '', value: ''});
  const handleInputValidation = controlInput.handleChange;

  const errorProfileClassName = !controlInput.isValid
  ? 'profile__error profile__error_visible'
  : 'profile__error';

  const disableUserCurrentCheck =
  (currentUser.name === controlInput?.values?.name &&
     controlInput?.values?.email === '') ||
  (currentUser.email === controlInput?.values?.email &&
    controlInput?.values?.email === '');
 

  const isNotValues = currentUser.email === controlInput.values.email &&
    currentUser.name === controlInput.values.name;

  const toggleProfileInput = () =>{    
    props.setUpdateSuccessMessage('');
    props.setIsOnEdit(true);
  };

  const handleProfileSubmit = (e) =>{
    e.preventDefault();
    const { name, email } = controlInput.values;
    if (!name) {
      props.onUpdateUser(currentUser.name, email);
    } else if (!email) {
      props.onUpdateUser(name, currentUser.email);
    } else {
     props.onUpdateUser(name, email);
    }   
    controlInput.resetForm({ name: currentUser.name, email: currentUser.email })
  };

  const successMessageBtn = props.successMessage
    ? 'profile__btn-msg-success'
    : 'profile__btn-msg-success profile__btn-msg-success_hidden';
    
  
  const errorProfileMessageButton = props.isMessageProfile
    ? 'profile__btn-msg-error'
    : 'profile__btn-msg-error profile__btn-msg-error_hidden';

    useEffect(() => {      
      if (currentUser.name && currentUser.email) {
        controlInput.resetForm({ name: currentUser.name, email: currentUser.email });
      }
    // eslint-disable-next-line react-hooks/exhaustive-deps  
    }, [currentUser,  props.isOnEdit ]);

  return (
    <>
      <Header
        location={'header__container_movies'}
        colorscheme={'header_color_white'}
      >
        <MoviesHeader/>
      </Header>
      <main className='profile'>
        <div className='profile__container'>
          <h1 className='profile__title'>Привет, {currentUser.name}!</h1>
          <form className='profile__form' onSubmit={handleProfileSubmit} noValidate>
            <label className='profile__input-container'>
              <span className='profile__span'>Имя</span>
              <input                
                type='text'
                name='name'
                className={`profile__input ${controlInput.errors.name ? 'profile__input_type_error' : ''}`}
                minLength='2'
                maxLength='30'               
                value={controlInput.values.name || ''} 
                placeholder={currentUser.name}
                onChange={handleInputValidation}
                required                
                {...( props.isOnEdit ? {} : { disabled: true })}
              />
            </label>
            <span className={errorProfileClassName}>{controlInput.errors.name}</span>
            <label className='profile__input-container'>
              <span className='profile__span'>E-mail</span>
              <input                
                type='email'
                name='email'                
                value={controlInput.values.email || ''}                 
                minLength='4'
                maxLength='40'                
                className={`profile__input ${controlInput.errors.email ? 'profile__input_type_error' : ''}`}                
                placeholder={currentUser.email}
                onChange={handleInputValidation}
                required
                {...( props.isOnEdit ? {} : { disabled: true })}
              />
            </label>
            <span className={errorProfileClassName}>{controlInput.errors.email}</span>
          <span className={successMessageBtn}>
            {props.successMessage}
          </span>
          <span className={errorProfileMessageButton}>
            {props.isMessageProfile}
          </span>      
            {( props.isOnEdit ) && (
              <>              
                <button
                  className='profile__btn'                  
                  disabled={disableUserCurrentCheck || !controlInput.isValid || isNotValues || props.loading }
                >
                  Сохранить
                </button>
              </>
            )}
          
          </form>          
          {(!props.isOnEdit) &&  (
            <ul className='profile__list'>
              <li className='profile__item'>
                <button className='profile__edit' onClick={toggleProfileInput}>
                  Редактировать
                </button>
              </li>
              <li className='profile__item'>
                <button className='profile__logout' onClick={props.onSignOut}>
                  Выйти из аккаунта
                </button>
              </li>
            </ul>
          )}
        </div>
      </main>
    </>
  );
}

export default Profile;


