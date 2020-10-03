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


// my attempt at pulling in the movies ####
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

function* addMovieSaga (action){
    console.log('hit addMovieSaga', action)
    let response = yield axios({
    method: "POST",
    url: 'api/movie'
});
    console.lof('Got New Movie',response.data)
        yield put ({
            type: 'SET_MOVIES',
            payload: response.data
        })
}


// Create the rootSaga generator function
function* rootSaga() {
yield takeEvery('FETCH_MOVIES', fetchMoviesSaga);
yield takeEvery('FETCH_DETAIL', fetchDetailsSaga);
yield takeEvery('ADD_MOVIE', addMovieSaga)
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

const details = (state = [], action) => {
    switch (action.type) {
        case 'SET_DETAIL':
            return action.payload
        default:
            return state;
    }
}
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
