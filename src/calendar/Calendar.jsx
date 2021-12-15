import  { useState } from 'react'
import './calendar.css'
import 'react-calendar/dist/Calendar.css';
import Calendar from 'react-calendar'



export const Calendarfunc = (props) => {
    const [calDate, setCalDate] = useState(new Date())

    function onChange (calDate) {
        setCalDate(calDate)
    
    }
    return (
        <div className="calendar">
            <Calendar onChange={onChange} value={calDate} className="actualCalendar">
                </Calendar>
                <div className="buttonBox" >
                                    <button style={{background:"white"}}>
Cancel
                </button>
                <button style={{background: "#0088fe"}}>
Filter
                </button>
                </div>

        </div>
    )
}
