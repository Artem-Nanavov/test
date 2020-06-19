import React from "react"
import { connect } from "react-redux"

//======================================

import s from './App__nav.module.sass'
import App__networks from "../networks/App__networks"
import App__stations from "../stations/App__stations";
import App__loader from "../ui/loader/App__loader";

interface IProps {
    isGetNetworks: boolean,
    isGetStations: boolean
}

const App__nav = ({ isGetNetworks, isGetStations }: IProps ) => {
    return (
        <nav className={ s.nav } >
            <App__networks/>

            <div className={ s.border } ></div>

            <App__stations/>

            {
                !isGetStations || !isGetNetworks ? (
                    <div className={ s.loader } >
                        <App__loader/>
                    </div>
                ) : null
            }
        </nav>
    )
}

const mapStateToProps = ( store: any ) => {
    return {
        isGetNetworks: store.network.isGet,
        isGetStations: store.station.isGet
    }
}

export default connect( mapStateToProps )( App__nav )