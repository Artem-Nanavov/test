import {
    NETWORK_REQUEST,
    NETWORK_SUCCESS,
    NETWORK_FAIL
} from "../constants/network"

const initialState = {
    networks: [],
    isError: false,
    isFetching: true,
    isGet: false
}

interface ISate {
    networks: any[],
    isError: boolean,
    isFetching: boolean
    isGet: boolean
}

export default function ( state: ISate = initialState, action: any ): object {
    switch ( action.type ) {
        case NETWORK_REQUEST:
            return { networks: [], isError: false, isFetching: true, isGet: false }

        case NETWORK_SUCCESS:
            return { networks: action.networks, isError: false, isFetching: false, isGet: true }

        case NETWORK_FAIL:
            return { networks: [], isError: true, isFetching: false, isGet: false }

        default:
            return state
    }
}

