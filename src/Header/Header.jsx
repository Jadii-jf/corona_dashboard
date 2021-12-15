import { NotificationAdd, Settings } from '@mui/icons-material'
import React from 'react'
import { Dashboard } from '../dashboard/Dashboard'
import './header.css'
export const Header = () => {
    return (
        <div className="header">
             <div className="wrapper">
                <div className="flexBox">
                    <div className="logoImgBox">
                        <img src="./logo.png" alt="logo" />
                    </div>
                    <div className="coronaImgBox">
                  <img className="coronaImg" src="./corona.png" alt="corona" />
                    </div>
                    <div className="iconBox">
                          <Settings className="icon"/>
            <NotificationAdd className="icon"/>
                    </div>
                </div>
                 <Dashboard/>
            </div>
          
          
        </div>
    )
}
