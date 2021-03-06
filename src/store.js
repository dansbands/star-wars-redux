import { createStore, applyMiddleware } from 'redux';
// import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga'

import rootReducer from './reducers/rootReducer';
import personSaga from './sagas/personSaga'

const sagaMiddleware = createSagaMiddleware()

const initialState = {}

const store = createStore(
        rootReducer,
        initialState,
        applyMiddleware(sagaMiddleware)
    );

export default function configureStore() {
  return store
}

store.runSaga = sagaMiddleware.run
