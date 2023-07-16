class MoviesApi {
  constructor({url}) {
    this._url = url;
    
  }

  _checkError(res) {
    if (res.ok) {
      return res.json();
    } else {

    return Promise.reject(`Ошибка: ${res.status}`);
    }
  }

  getAllExistingMovies() {
    return fetch(`${this._url}/beatfilm-movies`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
    }).then(this._checkError);
  }
}

const moviesApi = new MoviesApi({
  url: 'https://api.nomoreparties.co',
  
});

export default moviesApi;