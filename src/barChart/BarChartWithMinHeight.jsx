import React from 'react'
import'./index.css'
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: ' A',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'B',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: ' C',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'D',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: ' E',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: ' F',
    uv: 2390,
    pv: 3800,
    amt: 1000,
  },
  {
    name: ' G',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: ' H',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: ' I',
    uv: 3000,
    pv: 4300,
    amt: 10,
  },
];

export const BarChartWithMinHeight = () => {
    return (
        <div className="barChart">
             <div className="barchartImgbox">
                  <img className="barchartCorona" src="./corona.png" alt="corona" />
                    </div>
            <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          
          <Bar dataKey="pv" fill="#716aec" />
          <Bar dataKey="uv" fill=" #716aec" />
        </BarChart>
      </ResponsiveContainer>
        </div>
    )
}
