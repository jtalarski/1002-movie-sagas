import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App.js';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
// Provider allows us to use redux within our react app
import { Provider } from 'react-redux';
import logger from 'redux-logger';
// Import saga middleware
import createSagaMiddleware from 'redux-saga';
import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';


// used to make GET request to movies.router in order to
// display all movies currently in the DB
function* fetchMoviesSaga(action) {
    console.log('hit fetchMoviesSaga with', action);
  
    let response = yield axios({
      method: "GET",
      url: '/api/movie'
    });
  
    console.log('Got some movies', response.data);
    yield put({
      type: "SET_MOVIES",
      payload: response.data
    });
  }

function* fetchGenresSaga(action) {
    let response = yield axios({
        method: "GET",
        url: '/api/genre'
      });
    
      console.log('Got some genres', response.data);
      yield put({
        type: "SET_GENRES",
        payload: response.data
      });  
}

// used to make GET request to movies.router for values of one 
// movie id
  function* fetchDetailsSaga(action) {
    console.log('hit fetchDetailsSaga with', action);
  
    let response = yield axios({
      method: "GET",
      url: `/api/movie/${action.payload}`
    });
  
    console.log('Got some details', response.data);
    yield put({
      type: "SET_DETAIL",
      payload: response.data
    });
  }


 // used to send POST request to movie.router and
 // to reset the DOM with the fetchMoviesSaga
function* addMovieSaga (action){
    console.log('hit addMovieSaga', action.payload)
    yield axios({
    method: "POST",
    url: 'api/movie',
    data: action.payload
});
    console.log('Got New Movie')
        yield put ({
            type: 'FETCH_MOVIES',
            
        })
}


// Create the rootSaga generator function
function* rootSaga() {
yield takeEvery('FETCH_MOVIES', fetchMoviesSaga);
yield takeEvery('FETCH_DETAIL', fetchDetailsSaga);
yield takeEvery('ADD_MOVIE', addMovieSaga);
yield takeEvery('FETCH_GENRES', fetchGenresSaga)
}

// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();

// Used to store movies returned from the server
const movies = (state = [], action) => {
    switch (action.type) {
        case 'SET_MOVIES':
            return action.payload;
        default:
            return state;
    }
}

// Used to store the movie genres
const genres = (state = [], action) => {
    switch (action.type) {
        case 'SET_GENRES':
            return action.payload;
        default:
            return state;
    }
}
// used to store attributes about more selected for detail
const details = (state = [], action) => {
    switch (action.type) {
        case 'SET_DETAIL':
            return action.payload
        default:
            return state;
    }
}

//used to store information for new movie
const newMovie = (state = [], action) => {
    switch (action.type) {
        case 'SET_NEWMOVIE':
            return action.payload
        default:
            return state;
    }
}

// Create one store that all components can use
const storeInstance = createStore(
    combineReducers({
        movies,
        genres,
        details,
        newMovie
    }),
    // Add sagaMiddleware to our store
    applyMiddleware(sagaMiddleware, logger),
);

// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(rootSaga);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, 
    document.getElementById('root'));
registerServiceWorker();
