import React from 'react'
import { Header } from '../Header/Header'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import './dashboard.css'
export const Dashboard = () => {
    return (
        <div className="dashboard">
            <div className="dashContainer">
            <li className="dashList"><a className="dashA" href="/">Dashboard</a></li>
            <li className="dashList"><a className="dashA" href="/">Inbox</a></li>
            <li className="dashList"><a className="dashA" href="/">Security</a></li>
            <li className="dashList"><a className="dashA" href="/">Calendar</a></li>
            <li className="dashList"><a className="dashA" href="/"><MoreHorizIcon/></a></li>   
            </div>
        </div>
    )
}
