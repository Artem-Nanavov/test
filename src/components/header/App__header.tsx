import React from "react"
import { connect } from "react-redux"

//=======================================

import s from './App__header.module.sass'

interface IProps {
    nameCheckedNetwork: string,
    lengthStations: number
}

const App__header = ({ nameCheckedNetwork, lengthStations }: IProps ) => {
    return (
        <header className={ s.head } >
            <div className={ s.head__info } >
                <p> { nameCheckedNetwork } - { lengthStations } </p>
            </div>
        </header>
    )
}

const mapStateToProps = ( store: any ) => {
    return {
        nameCheckedNetwork: store.network.networkName,
        lengthStations: store.station.stations.length
    }
}

export default connect( mapStateToProps )( App__header )