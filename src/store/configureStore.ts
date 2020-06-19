import { createStore, applyMiddleware, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import { rootReducer } from './reducers/index'

export default function configureStore() {
    const store = compose(
        applyMiddleware( thunkMiddleware ),
        applyMiddleware( createLogger() )
    )( createStore )( rootReducer )

    return store
}