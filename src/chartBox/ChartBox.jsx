import { FmdGood, LocationCity } from '@mui/icons-material'
import React from 'react'
import { BarChartWithMinHeight } from '../barChart/BarChartWithMinHeight'
import { PieChartWithCustomizedLabel } from '../roundChart/PieChartWithCustomizedLabel'
import'./index.css'
export const ChartBox = () => {
    return (
        <div className="chartBox">
            <div className="cityNameBox">
                <FmdGood/>
                <h1>Islamabad</h1>
            </div>
            <div className="chartFlex">
                     <PieChartWithCustomizedLabel/>
            <BarChartWithMinHeight/>
            </div>
            <div className="chartImgbox">
                  <img className="chartCorona" src="./corona.png" alt="corona" />
                    </div>
        </div>
    )
}
