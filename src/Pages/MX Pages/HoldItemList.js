import React from 'react';
import '../../App.css'
import {Link} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';




export default function Fleet() {
  const navigate = useNavigate();
  const handleRowClick = () => {
    navigate('/new-hil');
  }  

  return(
    <div className='table-container'>
         <div className='pre-content'><p className='precont-link'><Link to='/new-hil' className='mylink'> Add new HIl </Link></p></div>
  
      <table>
{/*-----table head start ------*/}
       <thead>
       <tr>
         <th>HIL Item No: </th>
         <th>MEL Item No</th>
         <th>ACFT?</th>   
         <th>Date</th>
         <th>Limit</th>
         <th>Date c/w</th>
         <th>Report</th>
         <th>Flight Limit</th>
         <th>Status</th>
      <th><button className='clear'>Clear</button></th>
       </tr>
       </thead>
       <thead>
       <tr>
         <th><input type="text" name="" id=""  className='item-no'/></th>
         <th><input type="text" name="" id="" className='item-no'/></th>
         <th><input type="text" name="" id="" className='item-no'/></th>   
         <th></th>
         <th></th>
         <th></th>
         <th></th>
         <th><select id='region'><option>All</option><option>IATA</option><option>IATA</option><option>IATA</option></select></th>
         <th><select id='region'><option>All</option><option>IATA</option><option>IATA</option><option>IATA</option></select></th>
      <th><button className='clear'>SHOW</button></th>
       </tr>
       </thead>
       {/*-----table head end ------*/}

         {/*-----table body start ------*/}
    <tbody>
      <tr  onClick={handleRowClick }>
        <td>1</td>
        <td></td>
        <td>SPIJKL</td>
        <td></td>
        <td>0</td>
        <td>33</td>
        <td>Faulty Engine</td>
        <td>No</td>
        <td>open</td>
        <td></td>
      </tr>

      <tr onClick={handleRowClick }>
        <td>2</td>
        <td></td>
        <td>SPIJKL</td>
        <td></td>
        <td>0</td>
        <td>33</td>
        <td>Faulty Engine</td>
        <td>No</td>
        <td>open</td>
        <td></td>

      </tr>
      
      <tr onClick={handleRowClick }>
        <td>3</td>
        <td></td>
        <td>SP-IJKL</td>
        <td></td>
        <td>0</td>
        <td>33</td>
        <td>Faulty Engine</td>
        <td>Yes</td>
        <td>closed</td>
        <td></td>
      </tr>

      <tr onClick={handleRowClick }>
        <td>1</td>
        <td></td>
        <td>SP-IJKL</td>
        <td>TEST123</td>
        <td>0</td>
        <td>33</td>
        <td>Faulty Engine</td>
        <td>Yes</td>
        <td>open</td>
        <td></td>
      </tr>
    </tbody>
       {/*-----table body end------*/}
    </table>
    </div>
  )
};
