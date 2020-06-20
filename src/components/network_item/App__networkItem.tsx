import React from "react"
import { connect } from "react-redux"
import { getStations } from "../../store/actions/stationsAction"
import { setCheckedNetwork } from "../../store/actions/networkAction"

//===================================================

import s from './App__networkItem.module.sass'

interface IProps {
    dispatch: any,
    id: string,
    company: string,
    onesRequest: string,
    setOnesRequest: any,
    location: ILocation
}

interface ILocation {
    latitude: number,
    longitude: number
    country: string
    city: string
}

const App__networkItem = ({ dispatch, id, company, location, onesRequest, setOnesRequest }: IProps ) => {
    const requestStations = () => {
        if ( onesRequest !== id ) {
            dispatch( getStations({ id }) )
            dispatch( setCheckedNetwork({ networkName: company }) )

            setOnesRequest( id )
        }
    }

    return (
        <div onClick={ requestStations } id={ id } className={ onesRequest === id ? s.network_active : s.network } >
            <p> Company - { company } </p>

            <p> City - { location.city } </p>
        </div>
    )
}

export default connect()( App__networkItem )