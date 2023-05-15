import './App.css';
import React from 'react';
import { Route, Routes} from 'react-router-dom';

import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import Profile from '../Profile/Profile';
import Login from '../Login/Login';
import Register from '../Register/Register';
import SavedMovies from '../SavedMovies/SavedMovies';
import PageNotFound from '../PageNotFound/PageNotFound';

function App() {
  return (
      <div className="App">
          <div className="page">
            <Routes>
              <Route path="/" element={<Main />} />
              <Route path='/movies' element={<Movies />} />
              <Route path='/saved-movies' element={<SavedMovies />} />
              <Route path='/profile' element={<Profile />} />
              <Route path='/signup' element={<Register />} />
              <Route path='/signin' element={<Login />} />
              <Route path='*' element={<PageNotFound />} />                     
            </Routes>  
          </div>
      </div>
  );
}

export default App;