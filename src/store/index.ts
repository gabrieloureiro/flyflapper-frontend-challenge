import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { persistStore, persistReducer } from 'redux-persist'

import rootReducer from './modules/rootReducer'
import rootSaga from './modules/rootSaga'

import createSagaMiddleware from 'redux-saga'

import storage from 'redux-persist/lib/storage'

const sagaMiddleware = createSagaMiddleware()

const middlewares = [sagaMiddleware]

const configPersist = {
  key: 'flyflapper',
  storage
}

const persistedReducer = persistReducer(configPersist, rootReducer)

export const store = createStore(
  persistedReducer,
  composeWithDevTools(applyMiddleware(...middlewares))
)

sagaMiddleware.run(rootSaga)

export const persistor = persistStore(store)
