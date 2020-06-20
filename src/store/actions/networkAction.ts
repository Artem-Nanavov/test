import axios from 'axios'
import {
    NETWORK_SUCCESS,
    NETWORK_FAIL,

    SET_NAME_NETWORK
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

interface IProps {
    networkName: string
}

export const setCheckedNetwork = ({ networkName }: IProps ): any => ({ type: SET_NAME_NETWORK, networkName })