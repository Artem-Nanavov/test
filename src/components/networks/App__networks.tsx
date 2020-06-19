import React, { useEffect } from 'react'
import { connect } from "react-redux"
import { getNetworks } from "../../store/actions/networkAction"

//========================================

import s from './App__networks.module.sass'
import App__networkItem from "../network_item/App__networkItem";

interface IProps {
    dispatch: any
    networks: any[]
}

const App__networks = ({ dispatch, networks }: IProps ) => {
    useEffect( () => {
        dispatch( getNetworks() )
    }, [] )

    return (
        <div className={ s.networks } >
            {
                networks.map( ( item: any, i: number ) => (
                    <App__networkItem
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
        networks: store.network.networks
    }
}

export default connect( mapStateToProps )( App__networks )