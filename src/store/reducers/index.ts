import { combineReducers } from 'redux'
import network from './networkReducer'
import station from './stationsReducer'

export const rootReducer = combineReducers({
    network,
    station
})