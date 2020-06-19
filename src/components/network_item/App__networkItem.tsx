import React from "react"

//===================================================

import s from './App__networkItem.module.sass'

interface IProps {
    id: string,
    company: string,
    location: ILocation
}

interface ILocation {
    latitude: number,
    longitude: number
    country: string
    city: string
}

const App__networkItem = ({ id, company, location }: IProps ) => {
    return (
        <div className={ s.network } >
            <p> Company - { company } </p>

            <p> City - { location.city } </p>
        </div>
    )
}

export default App__networkItem