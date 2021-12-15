import React from 'react'
import { ChartBox } from '../chartBox/ChartBox'
import { MainListandCalendar } from '../mainListandCalendar/MainListandCalendar'
import './main.css'
export const Main = () => {
    return (
        <div className="main">
            <ChartBox/>
            <MainListandCalendar/>
        </div>
    )
}
