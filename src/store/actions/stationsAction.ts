import axios from 'axios'
import {
    STATIONS_REQUEST,
    STATIONS_SUCCESS,
    STATIONS_FAIL
} from "../constants/stations"

interface IProps {
    id: string
}

export const getStations = ({ id }: IProps ) => {
    return function ( dispatch: any ) {
        const URL = `https://api.citybik.es/v2/networks/${ id }`

        try {
            axios.get( URL ).then( response => {
                if ( response.status >= 200 && response.status <= 300 ) {
                    dispatch({
                        type: STATIONS_SUCCESS,
                        stations: response.data
                    })
                }
            } )
        } catch ( e ) {
            dispatch({ type: STATIONS_FAIL })
        }
    }
}