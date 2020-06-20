import axios from 'axios'
import {
    STATIONS_REQUEST,
    STATIONS_SUCCESS,
    STATIONS_FAIL,

    STATION_SET
} from "../constants/stations"

interface IProps {
    id: string
}

export const getStations = ({ id }: IProps ) => {
    return function ( dispatch: any ) {
        dispatch({ type: STATIONS_REQUEST })

        const URL = `https://api.citybik.es/v2/networks/${ id }?fields=stations`

        try {
            axios.get( URL ).then( response => {
                if ( response.status >= 200 && response.status <= 300 ) {
                    dispatch({
                        type: STATIONS_SUCCESS,
                        stations: response.data.network.stations
                    })
                }
            } )
        } catch ( e ) {
            dispatch({ type: STATIONS_FAIL })
        }
    }
}

export const setFavoriteStation = ({ id }: IProps ) => ({ type: STATION_SET, id })