import React from "react"

//==============================================

import s from './App__loader.module.scss'

const App__loader = () => {
    return (
        <div className={ s.skFlow } >
            <div className={ s.skFlowDot + ' ' + s.color_1 } />
            <div className={ s.skFlowDot + ' ' + s.color_2 } />
            <div className={ s.skFlowDot + ' ' + s.color_3 } />
        </div>
    )
}

export default App__loader