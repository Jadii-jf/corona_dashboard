import React from 'react'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import './pieChartLine.css'
const SMbox = ({color,name})=>{
return(
    <div className="smBoxFlex">
         <div className="colorBox" style={{background:`${color}`}}></div>
         <p className='smName'>{name}</p>
    </div>
)
}
export const PieChartLine = () => {
    return (
        <div className="pieMainBox">
       <div className="dotBox"><MoreHorizIcon/></div>
             <div className="pieChartLine">
            <SMbox color='blue' name="A"/>
            <SMbox color='red' name="B"/>
            <SMbox color='brown' name="C"/>
            <SMbox color='grey' name="D"/>
            <SMbox color='pink' name="E"/>
            <SMbox color='yellow' name="F"/>
            <SMbox color='orange' name="G"/>
            <SMbox color='black' name="H"/>
            <SMbox color='green' name="I"/>
           </div>
        </div>
       
    )
}
