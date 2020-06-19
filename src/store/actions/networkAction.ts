import axios from 'axios'
import {
    NETWORK_REQUEST,
    NETWORK_SUCCESS,
    NETWORK_FAIL
} from "../constants/network"

const URL = `https://api.citybik.es/v2/networks?fields=id,company,location`

export const getNetworks = (): any => {
    return function ( dispatch: any ) {
        try {
            axios.get( URL ).then( response => {
                if ( response.status >= 200 && response.status <= 300 ) {
                    dispatch({
                        type: NETWORK_SUCCESS,
                        networks: response.data.networks
                    })
                } else
                    dispatch({ type: NETWORK_FAIL })
            } )
        } catch ( e ) {
            dispatch({ type: NETWORK_FAIL })
        }
    }
}