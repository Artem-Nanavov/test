import {
    NETWORK_REQUEST,
    NETWORK_SUCCESS,
    NETWORK_FAIL,

    SET_NAME_NETWORK
} from "../constants/network"

const initialState = {
    networks: [],
    isError: false,
    isFetching: true,
    isGet: false,
    networkName: ''
}

interface ISate {
    networks: any[],
    isError: boolean,
    isFetching: boolean
    isGet: boolean
    networkName: string
}

export default function ( state: ISate = initialState, action: any ): object {
    switch ( action.type ) {
        case NETWORK_REQUEST:
            return { networks: [], isError: false, isFetching: true, isGet: false, networkName: '' }

        case NETWORK_SUCCESS:
            return { networks: action.networks, isError: false, isFetching: false, isGet: true, networkName: action.networks[ 0 ].company }

        case NETWORK_FAIL:
            return { networks: [], isError: true, isFetching: false, isGet: false, networkName: '' }

        case SET_NAME_NETWORK:
            return { networks: state.networks, isError: false, isFetching: false, isGet: true, networkName: action.networkName }

        default:
            return state
    }
}

