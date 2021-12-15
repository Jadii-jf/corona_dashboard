import { Download, Filter, FilterAlt, Settings } from '@mui/icons-material';
import React from 'react'
import './widgetLg.css'
export const WidgetLg = () => {
  const Button = ({ type }) => {
    return <button className={"widgetLgButton " + type}>{type}</button>;
  };
    return (
        <div className="widgetLg">
              <div className="widgetImgbox">
                  <img className="widgetCorona" src="./corona.png" alt="corona" />
                    </div>
        <div className="widgetFlex">
        <h3 className="widgetLgTitle">List of Positive cases</h3>
        <div className="widgetflexBox">
        <div className="setWrapper">
              <Settings/>
            </div> 
            <div className="downdladCsv">
                <p>Download CSV</p>
                <Download/>
              </div>     
        </div>
      </div>
        <table className="widgetLgTable">
          <tr className="widgetLgTrHead">
            <th className="widgetLgTh">Patient ID</th>
            <th className="widgetLgTh">Report Download Status</th>
            <th className="widgetLgTh">Name</th>
            <th className="widgetLgTh">Location <FilterAlt/></th>
            <th className="widgetLgTh">Contact Tracing Report</th>
            <th className="widgetLgTh">Resopond Date</th>
          </tr>
          <tr className="widgetLgTr">
            <td className="widgetLgUser">
              #5568
            </td>
            <td className="widgetLgStatus" style={{background:"orange"}}><div className="reportStatus"><p>Pending</p></div></td>
            <td className="widgetLgAmount">Usman Bashir</td>
            <td className="widgetLgLocation">
              Islambad F10
            </td>
            <td>
              <div className="downdladCsv">
                <p>Download CSV</p>
                <Download/>
              </div>
            </td>
            <td>
              10/18/2021
            </td>
            
          </tr>
          <tr className="widgetLgTr">
            <td className="widgetLgUser">
              #1232
            </td>
            <td className="widgetLgStatus"><div className="reportStatus"><p>Pending</p></div></td>
            <td className="widgetLgAmount">Ali hamza</td>
            <td className="widgetLgLocation">
              Islambad F8/1
            </td>
            <td>
              <div className="downdladCsv">
                <p>Download CSV</p>
                <Download/>
              </div>
            </td>
            <td>
              10/19/2021
            </td>
          </tr>
          <tr className="widgetLgTr">
            <td className="widgetLgUser">
              #4540
            </td>
            <td className="widgetLgStatus"><div className="reportStatus"><p>Pending</p></div></td>
            <td className="widgetLgAmount">Sharif</td>
            <td className="widgetLgLocation">
              Islambad F8/1
            </td>
            <td>
              <div className="downdladCsv">
                <p>Download CSV</p>
                <Download/>
              </div>
            </td>
            <td>
              10/20/2021
            </td>
          </tr>
          <tr className="widgetLgTr">
            <td className="widgetLgUser">
              #9498
            </td>
            <td className="widgetLgStatus"><div className="reportStatus"><p>Pending</p></div></td>
            <td className="widgetLgAmount">Junaid</td>
            <td className="widgetLgLocation">
              Islambad E11
            </td>
            <td>
              <div className="downdladCsv">
                <p>Download CSV</p>
                <Download/>
              </div>
            </td>
            <td>
              10/21/2021
            </td>
          </tr>

          <tr className="widgetLgTr">
            <td className="widgetLgUser">
              #6783
            </td>
            <td className="widgetLgStatus"><div className="reportStatus"><p>Pending</p></div></td>
            <td className="widgetLgAmount">Huzaifa</td>
            <td className="widgetLgLocation">
              Islambad H9
            </td>
            <td>
              <div className="downdladCsv">
                <p>Download CSV</p>
                <Download/>
              </div>
            </td>
            <td>
              10/18/2021
            </td>
          </tr>
          <tr className="widgetLgTr">
            <td className="widgetLgUser">
              #5568
            </td>
            <td className="widgetLgStatus"><div className="reportStatus"><p>Pending</p></div></td>
            <td className="widgetLgAmount">Usman Bashir</td>
            <td className="widgetLgLocation">
              Islambad F10
            </td>
            <td>
              <div className="downdladCsv">
                <p>Download CSV</p>
                <Download/>
              </div>
            </td>
            <td>
              10/18/2021
            </td>
          </tr>
        </table>
      </div>
    )
}
