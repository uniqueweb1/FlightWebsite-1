import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {useLocation } from 'react-router-dom';
import '../../App.css';
import { useNavigate } from 'react-router-dom';
import Filter from '../../Components/Filters/ScheduledMaintenanceFilter';



const ScheduledMaintenance =(props) => {
 const location = useLocation()

 const [state, setLocationState] = useState({FormData})
 // location state
 useEffect (()=>{
  if (location.state){
    let state = location.state
    setLocationState(state)
  }
 }, [location.state])
 
const navigate = useNavigate();
  const handleRowClick = () => {
    navigate('/new-scheduled-maintenance');
  }  

  return(
    <div className='table-container'>
      

                 
   
    <div>
   
      <div className='pre-content'><p className='precont-link'><p className='mylink'><Link to='/add-new-scheduled-maintenance' className='mylink'> Add new scheduled maintenance </Link>| PDF Version | Export to excel</p>  <p className='filt'>{<Filter />} </p></p></div>
    <table>
     <thead className='firsthead'>
      <tr>
      <th></th>
      <th></th>
      <th></th>
      <th></th>
      <th></th>
      <th></th>
      <th>Aircraft</th>
   
      <th></th>
      <th></th>
        <th  id='translate'>CAM Limits</th>
        <th></th>

        <th></th>   
        <th id='translatee'>Estimated</th>

        <th></th>
        <th></th>

      </tr>
      </thead>

{/*-----table head start ------*/}
       <thead>
       <tr>
         <th>Title</th>
         <th>Start</th>
         <th>End</th>   
         <th>Time(start)</th>
         <th>Time(end)</th>
         <th>(Reg</th>
         <th>TAH</th>
         <th>TAC)</th>
         <th>(TAH</th>
         <th>TAC</th>
         <th>Date)</th>
         <th>(TAH</th>
         <th>TAC)</th>
         <th>Files</th>
         <th>Notes</th>
       </tr>
       </thead>
       {/*-----table head end ------*/}

         {/*-----table body start ------*/}

    <tbody>
    {state && (
      <tr onClick={handleRowClick}>
        <td key={state.name}>Maintenance Option</td>
        <td>{state.start}</td>
        <td>{state.end}</td>
        <td>{state.startTime}</td>
        <td>{state.endTime}</td>
        <td>{state.Aircraft}</td>
        <td>{state.tah}</td>
        <td>{state.tac}</td>
        <td>{state.tah}</td>
        <td>{state.tac}</td>
        <td>{state.camLimitDate}</td>
        <td>{state.tah}</td>
        <td>{state.tac}</td>
        <td>{state.files}</td>
        <td>{state.notes}</td>
      </tr>
  )}
   {state && (
      <tr onClick={handleRowClick }>
        <td key={state.name}>Aircraft on Ground(AOG)</td>
        <td>-</td>
        <td>-</td>
        <td>-</td>
        <td></td>
        <td>SP-IJKL</td>
        <td>104.45</td>
        <td>33</td>
        <td>-</td>
        <td>-</td>
        <td>-</td>
        <td>104.45</td>
        <td>33</td>
        <td></td>
        <td></td>
        </tr>
       )}
{state && (
      <tr  onClick={handleRowClick} >
        <td>confirmed MX</td>
        <td>-</td>
        <td>-</td>
        <td>-</td>
        <td></td>
        <td>SP-IJKL</td>
        <td>104.45</td>
        <td>33</td>
        <td>-</td>
        <td>-</td>
        <td>-</td>
        <td>104.45</td>
        <td>33</td>
        <td></td>
        <td></td>
      </tr>
      )}
    </tbody>
     
       {/*-----table body end------*/}
    </table>
    
    </div>
 
  </div>

 )

};

export default ScheduledMaintenance;    
