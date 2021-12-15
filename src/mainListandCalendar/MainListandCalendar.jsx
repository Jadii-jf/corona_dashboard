import React from 'react'
import { useState } from 'react';
import { Calendar, Calendarfunc } from '../calendar/Calendar'
import { WidgetLg } from '../widgetLg/WidgetLg'
import './index.css'


export const MainListandCalendar = () => {

    return (
        <div className="mlac">
            <Calendarfunc/>
            <WidgetLg/>
        </div>
    )
}
