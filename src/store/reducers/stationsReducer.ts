import {
    STATIONS_REQUEST,
    STATIONS_SUCCESS,
    STATIONS_FAIL,

    STATION_SET
} from "../constants/stations"

interface ISate {
    isGet: boolean,
    isFetching: boolean,
    isError: boolean,
    stations: any[]
    favoriteStations: string[]
}

const initialState = {
    isGet: false,
    isFetching: true,
    isError: false,
    stations: [],
    favoriteStations: []
}

export default function ( state: ISate = initialState, action: any ): object {
    switch ( action.type ) {
        case STATIONS_REQUEST:
            return { isGet: false, isFetching: true, isError: false, stations: [], favoriteStations: state.favoriteStations }

        case STATIONS_SUCCESS:
            return { isGet: true, isFetching: false, isError: false, stations: action.stations, favoriteStations: state.favoriteStations }

        case STATION_SET:
            const favoriteItems = new Set( state.favoriteStations )

            favoriteItems.has( action.id ) ? favoriteItems.delete( action.id ) : favoriteItems.add( action.id )

            return { isGet: true, isFetching: false, isError: false, stations: state.stations, favoriteStations: Array.from( favoriteItems ) }

        case STATIONS_FAIL:
            return { isGet: false, isFetching: false, isError: true, stations: [], favoriteStations: [] }

        default:
            return state
    }
}