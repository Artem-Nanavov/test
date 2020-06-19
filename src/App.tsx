import React from 'react'
import axios from 'axios'

//=========================================================

import App__header from "./components/header/App__header"
import App__nav from "./components/nav/App__nav"

const App = () => {

    axios.get( 'https://api.citybik.es/v2/networks?fields=id,company' ).then( res => console.log( res.data ) )

    return (
        <>
            <App__header/>

            <App__nav/>
        </>
    );
}

export default App
