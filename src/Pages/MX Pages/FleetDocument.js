import React from 'react';
import '../../App.css'
import { useNavigate } from 'react-router-dom';
import Filter from '../../Components/Filters/FleetDocumentFilter';



export default function FleetDocument() {
  const navigate = useNavigate();
  const handleRowClick = () => {
    navigate('/fleet-document-form');
  }  

  return(
    <div className='table-container'>
      <div className='pre-content'><p className='precont-link'></p>  <p className='filt'>{<Filter />} </p></div>
      <table>
{/*-----table head start ------*/}
       <thead>
       <tr>
         <th>Aircraft</th>
         <th>Name</th>
         <th>Number</th>   
         <th>Expiry date</th>
         <th>Remains</th>
         <th>Notes</th>
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
      </tr>

      <tr onClick={handleRowClick }>
        <td>BE62</td>
        <td></td>
        <td>SPIJKL</td>
        <td></td>
        <td>0</td>
        <td>33</td>
      </tr>
      
      <tr onClick={handleRowClick }>
        <td>CL30</td>
        <td></td>
        <td>SP-IJKL</td>
        <td></td>
        <td>0</td>
        <td>33</td>
      </tr>

      <tr onClick={handleRowClick }>
        <td>CL30</td>
        <td></td>
        <td>SP-IJKL</td>
        <td>TEST123</td>
        <td>0</td>
        <td>33</td>
      </tr>
    </tbody>
       {/*-----table body end------*/}
    </table>
    </div>
  )
};
