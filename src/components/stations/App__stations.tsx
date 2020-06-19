import React, { useState } from "react"
import { connect } from "react-redux"

//==================================

import s from './App__stations.module.sass'
import App__stationItem from "../station_item/App__stationItem";

interface IProps {
    station: IStore
}

interface IStore {
    isGet: boolean,
    isFetching: boolean,
    isError: boolean,
    stations: any[]
}

const App__stations = ({ station }: IProps ) => {
    return (
        <div className={ s.stations } >
            {
                station.stations.map( item => (
                    <App__stationItem
                        key={ item.id }
                        id={ item.id }
                        name={ item.name }
                    />
                ) )
            }
        </div>
    )
}

const mapStateToProps = ( store: any ) => {
    return {
        station: store.station
    }
}

export default connect( mapStateToProps )( App__stations )