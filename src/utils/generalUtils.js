export const WINSIZE_1280 = 1280;
export const WINSIZE_990 = 990;
export const WINSIZE_768 = 768;
export const WINSIZE_480 = 480;

export const MOVIES_ALL_DISPLAY_5 = 5;
export const MOVIES_ALL_DISPLAY_8 = 8;
export const MOVIES_ALL_DISPLAY_9 = 9;
export const MOVIES_ALL_DISPLAY_12 = 12;
export const MOVIES_ALL_DISPLAY_16 = 16;

export const MOVIES_ADDED_2 = 2;
export const MOVIES_ADDED_3 = 3;
export const MOVIES_ADDED_4 = 4;

export const SHORT_FILMS_MAX_DURATION = 40;


export const REQUEST_SEARCH_ERROR =`Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен.
  Подождите немного и попробуйте ещё раз`;
export const NOT_FOUND_SEARCH_ERROR = 'Ничего не найдено';

export const SERVER_ERROR = 'На сервере произошла ошибка';

export const UPDATE_SUCCESS_MESSAGE = 'Данные пользователя обновлены!';

const RESPONSE_ERRORS = {
  // Ошибка сервера
  SERVER_ERROR: 'На сервере произошла ошибка', 

  // Ошибки register
  SIGNUP_NOT_UNIQUE_EMAIL: 'Пользователь с таким Email уже существует.', 
  SIGNUP_DEFAULT: 'При регистрации пользователя произошла ошибка.',

  // Ошибки login
  SIGNIN_NOT_FOUND: 'Пользователя с таким Email не существует.', 
  SIGNIN_DEFAULT: 'При входе произошла ошибка.',

  // Ошибки update
  UPDATE__NOT_UNIQUE_EMAIL: 'Пользователь с таким Email уже существует.', 
  UPDATE_DEFAULT: 'При обновлении  произошла ошибка.',  
};

export function checkRegisterError(err) {
  if (err === 'Ошибка: 409') return RESPONSE_ERRORS.SIGNUP_NOT_UNIQUE_EMAIL;
  if (err === 'Ошибка: 500') return RESPONSE_ERRORS.SERVER_ERROR;
  return RESPONSE_ERRORS.SIGNUP_DEFAULT;
}

export function checkLoginError(err) {
  if (err === 'Ошибка: 401') return RESPONSE_ERRORS.SIGNIN_NOT_FOUND;
  if (err === 'Ошибка: 500') return RESPONSE_ERRORS.SERVER_ERROR;
  return RESPONSE_ERRORS.SIGNIN_DEFAULT;
}

export function checkUserUpdateError(err) {
  if (err === 'Ошибка: 409') return RESPONSE_ERRORS.UPDATE__NOT_UNIQUE_EMAIL;
  if (err === 'Ошибка: 500') return RESPONSE_ERRORS.SERVER_ERROR;
  return RESPONSE_ERRORS.UPDATE_DEFAULT;
}
