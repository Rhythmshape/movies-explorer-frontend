import './App.css';
import React from 'react';
import { Route, Routes, useNavigate, useLocation, Navigate} from 'react-router-dom';
import { useState, useEffect } from 'react';

import Register from '../Register/Register';
import Login from '../Login/Login';
import Profile from '../Profile/Profile';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';

import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import PageNotFound from '../PageNotFound/PageNotFound';

import { CurrentUserContext } from '../../contexts/CurrentUserContext';

import mainApi from '../../utils/MainApi';
import moviesApi from '../../utils/MoviesApi';

import {
  WINSIZE_1280,
  WINSIZE_990,
  WINSIZE_768,
  WINSIZE_480,
  MOVIES_ALL_DISPLAY_5,
  MOVIES_ALL_DISPLAY_8,
  MOVIES_ALL_DISPLAY_9,  
  MOVIES_ALL_DISPLAY_16,
  MOVIES_ADDED_2,
  MOVIES_ADDED_3,
  MOVIES_ADDED_4,
  UPDATE_SUCCESS_MESSAGE,
  checkRegisterError,
  checkLoginError,
  checkUserUpdateError,  
} from '../../utils/generalUtils'; 

function App() {
  // переменная состояния авторизации:
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // переменная состояния текущего пользователя:
  const [currentUser, setCurrentUser] = useState({});

  // Переменная состояния для страницы movies:
  const [movies, setMovies] = useState([]);
  const [checked, setChecked] = useState(false);

  const [allSavedMovies, setAllSavedMovies] = useState([]);

  // Переменная состояния ширины страницы для отрисовки карточек
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);  

  // переменные состояния для страницы saved-movies:
  const [savedMovies, setSavedMovies] = useState([]);
  const [checkedSavedMovies, setCheckedSavedMovies] = useState(false);

  // переменная состояния для ожидания загрузки:
  const [loading, setLoading] = useState(false);

  // переменные состояния для обработки ошибок:
  const [isNotFound, setIsNotFound] = useState(false);
  const [isFailedServer, setIsFailedServer] = useState(false);  

  // переменные состояния ответов при регистрации и аутентификации 
  const [isRegisterMessage, setIsRegisterMessage] = useState('');
  const [isLoginMessage, setIsLoginMessage] = useState('');

  // переменные состояния ответов при регистрации и аутентификации 
  const [updateSuccessMessage, setUpdateSuccessMessage] = useState('');
  const [isMessageProfile, setIsMessageProfile] = useState('');

  //перменные состояния кнопок при регистрации и авторизации:
  const [isErrorLoginButton, setIsErrorLoginButton] = useState(false);
  const [isErrorRegisterButton, setIsErrorRegisterButton] = useState(false);  

  const location = useLocation();  
  const navigate = useNavigate();

  // Проверка наличия токена
  useEffect(() => {
    tokenCheck();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  //получение данных пользователя и карточек фильмов 
  useEffect(() => {
    //const path = location.pathname
    if (!isLoggedIn) return;
    setLoading(true);
    Promise.all([
      mainApi.getUserInfo(),
      mainApi.getSavedMovies(),
    ])
      .then(([userData, cards]) => {
        //console.log('!!!')
        setIsLoggedIn(true)
        //navigate(path)
        setCurrentUser(userData);
        setSavedMovies(cards);
        setLoading(false);
      //console.log('!!!')
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
        setIsFailedServer(true);
      });
    if (JSON.parse(localStorage.getItem('filteredMovies'))) {
      setMovies(JSON.parse(localStorage.getItem('filteredMovies')));
      setChecked(JSON.parse(localStorage.getItem('checkbox')));
      setCheckedSavedMovies(JSON.parse(localStorage.getItem('checkboxSavedMovies')));
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoggedIn]);

  //функция проверки токена
  const tokenCheck = () => {
    const jwt = localStorage.getItem('jwt');
    if (jwt) {
      mainApi
        .getToken(jwt)
        .then((res) => {
          if (res) {
            setIsLoggedIn(true);
            navigate(location.pathname);
            //navigate('/movies');
          }
        })
        .catch((err) => {
          onSignOut();
          console.error(err);
        });
    }
  };

  //перменные состояния кнопок при регистрации и авторизации:
  const [moreFilmCards, setMoreFilmCards] = useState(0);
  const [shownFilmCards, setShownFilmCards] = useState(0);


  // обработчик добавления дополнительно отображаемых фильмов
  const handleShowMoreFilms = () => {
     setShownFilmCards((movies) => movies + moreFilmCards);
  };

  // функция определения количества изначально отображаемых и подгружаемых карточек
  useEffect(() => {
    const handleWindowResize = () => {
      setWindowWidth(window.innerWidth);
    };
    if (location.pathname === '/movies') {
      if (windowWidth >= WINSIZE_1280) {
        setShownFilmCards(MOVIES_ALL_DISPLAY_16)
        setMoreFilmCards(MOVIES_ADDED_4)
      } else if (windowWidth >990 && windowWidth < 1280) {
        setShownFilmCards(MOVIES_ALL_DISPLAY_9)
        setMoreFilmCards(MOVIES_ADDED_3)
      } else if (windowWidth >= WINSIZE_768 && windowWidth <= WINSIZE_990) {
        setShownFilmCards(MOVIES_ALL_DISPLAY_8)
        setMoreFilmCards(MOVIES_ADDED_2)
      } else if (windowWidth < WINSIZE_768) {
        setShownFilmCards(MOVIES_ALL_DISPLAY_5)
        setMoreFilmCards(MOVIES_ADDED_2)    
      } else if (windowWidth <= WINSIZE_480) {
        setShownFilmCards(MOVIES_ALL_DISPLAY_5)
        setMoreFilmCards(MOVIES_ADDED_2)
      }
    }
    window.addEventListener('resize', handleWindowResize);
    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [windowWidth, location]);

  // функция поиска фильмов по имени в массиве регистронезависимая
  const searchMovies = (movies, name) => {
    return movies.filter((item) =>
      item.nameRU.toLowerCase().includes(name.toLowerCase())
    );
  };

  // функция запуска поиска фильмов по имени на странице movies
  const handleSearchMovies = (name) => {
    if (!JSON.parse(localStorage.getItem('allMovies'))) {
      moviesApi
        .getAllExistingMovies()
        .then((movies) => {
          localStorage.setItem('allMovies', JSON.stringify(movies));
        })
        .then(() => {
          setLoading(true);
          const searchFilmArray = searchMovies(
            JSON.parse(localStorage.getItem('allMovies')),
            name
          );
          setMovies(searchFilmArray);
          setIsNotFound(!movies.length && !isFailedServer);
          localStorage.setItem('checkbox', checked);
          localStorage.setItem('filteredMovies', JSON.stringify(searchFilmArray));
          localStorage.setItem('searchKeyword', name);
          setTimeout(() => setLoading(false), 1000);
        })
        .catch((err) => {
          setIsFailedServer(true);
          console.log(err);
        });
    } else if (JSON.parse(localStorage.getItem('allMovies'))) {
      setLoading(true);
      const searchFilmArray = searchMovies(
        JSON.parse(localStorage.getItem('allMovies')),
        name
      );
      setMovies(searchFilmArray);
      setIsNotFound(!movies.length || !isFailedServer);      
      localStorage.setItem('checkbox', checked);
      localStorage.setItem('filteredMovies', JSON.stringify(searchFilmArray));
      localStorage.setItem('searchKeyword', name);      
      setTimeout(() => setLoading(false), 1000);
    }
  };  

  // обработчик добавления фильмов в сохраненные фильмы
  const handleSaveMovie = (movie) => {
    mainApi
      .addMovie(movie)
      .then((data) => {
        setSavedMovies([data, ...savedMovies]);
      })
      .catch((err) => {
       console.log(err);
      });
  };

  // обработчик кнопки чекбокса
  const handleChangeCheckbox = (evt) => {
    if (location.pathname === '/movies') {
      setChecked(!checked);
      localStorage.setItem('checkbox', !checked);
    } else if (location.pathname === '/saved-movies') {
      setCheckedSavedMovies(!checkedSavedMovies);
      localStorage.setItem('checkboxSavedMovies', !checkedSavedMovies);
    } 
  }; 
  
  // функция запуска поиска фильмов по имени на странице saved-movies
  const handleSearchSavedMovies = (name) => {
    setLoading(true);
    mainApi
      .getSavedMovies()
      .then((movies) => {
        setLoading(true);
        setAllSavedMovies(movies);
        localStorage.setItem('checkboxSavedMovies', checkedSavedMovies);
        const userSavedMovies = movies.filter((movie) => {
          return movie.owner === currentUser._id;
        });
        const searchFilmArray = searchMovies(userSavedMovies, name);
        setSavedMovies(searchFilmArray);
        setIsNotFound(!searchFilmArray.length && !isFailedServer);
        setTimeout(() => setLoading(false), 1000);
      })
      .catch((err) => {
        console.log(err);
        setIsFailedServer(true);
        setLoading(false);
       });

    const searchFilmArray = searchMovies(allSavedMovies, name);
    setSavedMovies(searchFilmArray);
    setIsNotFound(!searchFilmArray.length || !isFailedServer);
    setTimeout(() => setLoading(false), 1000);
  };

  // регистрация и переход в систему
  function onRegister(name, email, password) {
    setIsRegisterMessage('');
    mainApi
      .registerUser(name, email, password)
      .then((data) => {
        if (data) {
          onLogin(email, password);
        }
        setIsErrorRegisterButton(false);
      })
      .catch((err) => {
        console.log(err);
        const message = checkRegisterError(err);        
        setIsRegisterMessage(message);     
        setIsErrorRegisterButton(true);   
      })
      .finally(() => {
        setTimeout(() => setIsRegisterMessage(''), 2000);
      });
  };
  
  //вход в систему на страницу movies
  function onLogin(email, password) {
    setIsLoginMessage('');
    mainApi
      .loginUser(email, password)
      .then((res) => {
        if (res.token) {
          localStorage.setItem('jwt', res.token);
          setIsErrorLoginButton(false);
          mainApi.getToken(res.token).then((res) => {
            if (res) {
              navigate('/movies');
              setIsLoggedIn(true);
            }
          });
        }
      })
      .catch((err) => {
        console.log(err);
        const message = checkLoginError(err);
        setIsLoginMessage(message);
        setIsErrorLoginButton(true);
      })
      .finally(() => {
        setTimeout(() => setIsLoginMessage(''), 2000);
      });      
  };

  // обновление данных о пользователе
  function onUpdateUser(name, email) {
    setUpdateSuccessMessage('');
    setIsMessageProfile('');
    mainApi
      .updateUserInfo(name, email)
      .then((data) => {
        setCurrentUser(data);
        showSuccessMessage();       
      })
      .catch((err) => {
        console.log(err);
        const message = checkUserUpdateError(err);
        setIsMessageProfile(message);        
      })
     .finally(() => {
        setTimeout(() => setIsMessageProfile(''), 1000);
      });      
  };

  // выход из системы
  function onSignOut() {
    localStorage.clear();
    setCurrentUser({}); 
    navigate('/');    
    setIsLoggedIn(false);      
    setIsNotFound(false);
    setIsFailedServer(false) 
    setIsRegisterMessage('');
    setIsLoginMessage('');
    setIsErrorLoginButton(false);
    setIsErrorRegisterButton(false);
    setMovies([]);    
    setCheckedSavedMovies(false);
    setChecked(false);
  };

  // показать успешность запроса об изменении данных пользователя
  function showSuccessMessage() {
    setUpdateSuccessMessage(UPDATE_SUCCESS_MESSAGE);
    setTimeout(() => setUpdateSuccessMessage(''), 1000);
  }

  // обработчик удаления карточки
  const handleDeleteMovie = (movie) => {
    const savedMovie = savedMovies.find(
      (item) => item.movieId === movie.movieId
    );
    mainApi
      .deleteMovie(savedMovie._id)
      .then(() => {
        const newMoviesList = savedMovies.filter(
          (item) => item._id !== savedMovie._id
        );
        setSavedMovies(newMoviesList);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // Возвращаем разметку
  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="App">
        <div className="page">
          <Routes>
            <Route path='/' element={<Main isLoggedIn={isLoggedIn} />} /> 
            <Route
              path='/movies'
              element={
                <ProtectedRoute isLoggedIn={isLoggedIn}>
                  <Movies    
                    isLoggedIn={isLoggedIn}                
                    onSubmit={handleSearchMovies}
                    movies={movies}
                    loading={loading}
                    isFailedServer={isFailedServer}
                    isNotFound={isNotFound}
                    searchKeyword={localStorage.getItem('searchKeyword')}
                    onCheckbox={handleChangeCheckbox}
                    checked={checked}
                    checkedSavedMovies={checkedSavedMovies}
                    savedMovies={savedMovies}
                    onSave={handleSaveMovie}
                    onDelete={handleDeleteMovie}
                    allSavedMovies={allSavedMovies}
                    shownFilmCards={shownFilmCards}                    
                    handleShowMoreFilms={handleShowMoreFilms}
                  ></Movies>
                </ProtectedRoute>
              }
            />
            <Route
              path='/saved-movies'
              element={
                <ProtectedRoute isLoggedIn={isLoggedIn}>
                  <SavedMovies
                    isLoggedIn={isLoggedIn}
                    onSubmit={handleSearchSavedMovies}
                    movies={movies}
                    isLoading={loading}
                    isFailedServer={isFailedServer}
                    isNotFound={isNotFound}
                    searchKeyword={localStorage.getItem('searchKeyword')}
                    onCheckbox={handleChangeCheckbox}
                    checked={checked}
                    checkedSavedMovies={checkedSavedMovies}
                    savedMovies={savedMovies}
                    onSave={handleSaveMovie}
                    onDelete={handleDeleteMovie}
                    allSavedMovies={allSavedMovies}                              
                  ></SavedMovies>
                </ProtectedRoute>
              }
            />
            <Route 
              path='/profile'
              element={
                <ProtectedRoute isLoggedIn={isLoggedIn}>
                  <Profile
                    onUpdateUser={onUpdateUser}
                    isMessageProfile={isMessageProfile}                    
                    onSignOut={onSignOut}  
                    successMessage={updateSuccessMessage} 
                                 
                  />
                </ProtectedRoute>
              }
            />
            <Route
              path='/signup'
              element={isLoggedIn
                ? <Navigate to="/" />
                : <>
                    <Register
                      onRegister={onRegister}
                      isErrorRegisterButton={isErrorRegisterButton}
                      isRegisterMessage={isRegisterMessage}
                    />
                  </>  
              }
            />
            <Route
              path='/signin'
              element={isLoggedIn
                ? <Navigate to="/" />
                : <>
                    <Login
                      onLogin={onLogin}
                      isLoginMessage={isLoginMessage}
                      isErrorLoginButton={isErrorLoginButton}
                    />
                  </>   
              }
            />
            <Route path='*' element={<PageNotFound />} />                     
          </Routes>  
        </div>
      </div>
    </CurrentUserContext.Provider>  
  );
}

export default App;