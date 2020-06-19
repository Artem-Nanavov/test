import React, { useEffect, useState } from 'react'
import { connect } from "react-redux"
import { getNetworks } from "../../store/actions/networkAction"
import { getStations } from "../../store/actions/stationsAction"

//========================================

import s from './App__networks.module.sass'
import App__networkItem from "../network_item/App__networkItem";

interface IProps {
    dispatch: any
    network: any
    station: any
}

const App__networks = ({ dispatch, network, station }: IProps ) => {
    const [ onesRequest, setOnesRequest ] = useState< string >( '' )

    useEffect( () => {
        dispatch( getNetworks() )
    }, [] )

    useEffect( () => {
        if ( network.isGet ) {
            dispatch( getStations({ id: network.networks[ 0 ].id }) )

            setOnesRequest( network.networks[ 0 ].id )
        }
    }, [ network.isGet ] )

    return (
        <div className={ s.networks } >
            {
                network.networks.map( ( item: any, i: number ) => (
                    <App__networkItem
                        onesRequest={ onesRequest }
                        setOnesRequest={ setOnesRequest }
                        key={ i }
                        id={ item.id }
                        company={ item.company }
                        location={ item.location }
                    />
                ) )
            }
        </div>
    )
}

const mapStateToProps = ( store: any ) => {
    return {
        network: store.network,
        station: store.station
    }
}

export default connect( mapStateToProps )( App__networks )