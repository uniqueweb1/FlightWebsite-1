import React from 'react';
import '../../App.css'
import { useNavigate } from 'react-router-dom';




export default function Fleet() {

  // navigate to another page

  const navigate = useNavigate();
  const handleRowClick = (rows) => {
    navigate('/fleetform');
  }  

  return(
    <div className='table-container'>
      <table>
{/*-----table head start ------*/}
       <thead>
       <tr>
         <th>Aircraft Type </th>
         <th>Serial number</th>
         <th>Registeration</th>   
         <th>Default Flight number</th>
         <th>MTOW</th>
         <th>capacity</th>
         <th>Status</th>
         <th>ACMI</th>
         <th></th>
         <th id="translates">Airframe</th>
      <th><button className='clear'>Clear</button></th>
       </tr>
       </thead>
       <thead>
       <tr>
         <th><select id='region'><option>All</option><option>IATA</option><option>IATA</option><option>IATA</option></select></th>
         <th></th>
         <th></th>   
         <th></th>
         <th></th>
         <th></th>
         <th><select id='region'><option>All</option><option>IATA</option><option>IATA</option><option>IATA</option></select></th>
         <th><select id='region'><option>All</option><option>IATA</option><option>IATA</option><option>IATA</option></select></th>
         <th>TAH</th>
         <th>TAC</th>
      <th><button className='clear'>SHOW</button></th>
       </tr>
       </thead>
       {/*-----table head end ------*/}

         {/*-----table body start ------*/}
        
    <tbody>
   
      <tr  onClick={handleRowClick }>
        <td>BE20</td>
        <td></td>
        <td>SPIJKL</td>
        <td></td>
        <td>0</td>
        <td>33</td>
        <td>active</td>
        <td>NonACMI</td>
        <td>-</td>
        <td>33</td>
        <td></td>
      </tr>

      <tr onClick={handleRowClick }>
        <td>BE62</td>
        <td></td>
        <td>SPIJKL</td>
        <td></td>
        <td>0</td>
        <td>33</td>
        <td>active</td>
        <td>NonACMI</td>
        <td>104.45</td>
        <td>33</td>
        <td></td>

      </tr>
      
      <tr onClick={handleRowClick }>
        <td>CL30</td>
        <td></td>
        <td>SP-IJKL</td>
        <td></td>
        <td>0</td>
        <td>33</td>
        <td>active</td>
        <td>NonACMI</td>
        <td>-</td>
        <td>33</td>
        <td></td>
      </tr>

      <tr onClick={handleRowClick }>
        <td>CL30</td>
        <td></td>
        <td>SP-IJKL</td>
        <td>TEST123</td>
        <td>0</td>
        <td>33</td>
        <td>active</td>
        <td>NonACMI</td>
        <td>-</td>
        <td>33</td>
        <td></td>
      </tr>
       
    </tbody>
   
    <tfoot>
      <tr>

      </tr>
    </tfoot>
       {/*-----table body end------*/}
    </table>
    </div>
  )
};
