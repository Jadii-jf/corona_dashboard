import React from 'react'
import { ChartBox } from './chartBox/ChartBox'
import { Dashboard } from './dashboard/Dashboard'
import { Header } from './Header/Header'
import './index.css'
import { Main } from './main/Main'
export const App = () => {
    return (
        <div className="app">
            <Header/>
            <Main/>
        </div>
    )
}
