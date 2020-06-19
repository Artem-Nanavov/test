import React from "react"

//======================================

import s from './App__nav.module.sass'
import App__networks from "../networks/App__networks"
import App__stations from "../stations/App__stations";

const App__nav = () => {
    return (
        <nav className={ s.nav } >
            <App__networks/>

            <div className={ s.border } ></div>

            <App__stations/>
        </nav>
    )
}

export default App__nav