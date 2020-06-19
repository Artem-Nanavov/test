import {
    STATIONS_REQUEST,
    STATIONS_SUCCESS,
    STATIONS_FAIL
} from "../constants/stations"

interface ISate {
    isGet: boolean,
    isFetching: boolean,
    isError: boolean,
    stations: any[]
}

const initialState = {
    isGet: false,
    isFetching: true,
    isError: false,
    stations: []
}

export default function ( state: ISate = initialState, action: any ): object {
    switch ( action.type ) {
        case STATIONS_REQUEST:
            return { isGet: false, isFetching: true, isError: false, stations: [] }

        case STATIONS_SUCCESS:
            return { isGet: true, isFetching: false, isError: false, stations: action.stations }

        case STATIONS_FAIL:
            return { isGet: false, isFetching: false, isError: true, stations: [] }

        default:
            return state
    }
}