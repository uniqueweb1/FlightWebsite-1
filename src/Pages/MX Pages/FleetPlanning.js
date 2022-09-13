import React from 'react';
import '../../App.css'
import FilterPlanning from '../../Components/Filters/FilterPlanning';




export default function FleetPlanning() {

  return(
   
    <div className='table-container'>
  <div className='pre-content'><p className='precont-link'></p>  <p className='filt'>{<FilterPlanning />} </p></div>
   
      <table>
{/*-----table head start ------*/}
       <thead>
       <tr>
         <th>Date</th>
         <th>BLOFF</th>
         <th>Route</th>   
         <th>BLON</th>
         <th>BLK</th>
         <th>FC</th>
         <th>M-NOEL</th>
         <th>D-LEON</th>
         <th>G-LEON</th>
         <th>H-LEON</th>
         <th>B-ARTI</th>
         <th>A-BCDE</th>
         <th>C-CAR</th>
         <th>A-TEST</th>
          <th></th>
          <th></th>
       </tr>
       </thead>
       <thead>
       <tr>
         <th></th> 
         <th></th>
         <th></th>   
         <th></th>
         <th></th>
         <th>Check all:</th>
         <th><input  type="radio" name="radio" id="fuel" className="inputs radio first" /></th>
         <th><input  type="radio" name="radio" id="fuel" className="inputs radio first" /></th>
         <th><input  type="radio" name="radio" id="fuel" className="inputs radio first" /></th>
         <th><input  type="radio" name="radio" id="fuel" className="inputs radio first" /></th>
         <th><input  type="radio" name="radio" id="fuel" className="inputs radio first" /></th>
         <th><input  type="radio" name="radio" id="fuel" className="inputs radio first" /></th>
         <th><input  type="radio" name="radio" id="fuel" className="inputs radio first" /></th>
         <th><input  type="radio" name="radio" id="fuel" className="inputs radio first" /></th>
         <th><input  type="radio" name="radio" id="fuel" className="inputs radio first" /></th>
       <th>conflict</th>
       </tr>
       </thead>
       {/*-----table head end ------*/}

         {/*-----table body start ------*/}
    <tbody>
      <tr>
        <td>02-01-2017</td>
        <td></td>
        <td>SPIJKL</td>
        <td></td>
        <td>0</td>
        <td>33</td>
        <td><input  type="radio" name="radio" id="fuel" className="inputs radio second" /> <span>OEL</span></td>
        <td><input  type="radio" name="radio" id="fuel" className="inputs radio second" /> <span>EON</span></td>
        <td><input  type="radio" name="radio" id="fuel" className="inputs radio second" /> <span>EON</span></td>
        <td><input  type="radio" name="radio" id="fuel" className="inputs radio second" /> <span>EON</span></td>
        <td><input  type="radio" name="radio" id="fuel" className="inputs radio second" /> <span>RTI</span></td>
        <td><input  type="radio" name="radio" id="fuel" className="inputs radio second" /> <span>CDE</span></td>
        <td><input  type="radio" name="radio" id="fuel" className="inputs radio second" /> <span>CAR</span></td>
        <td><input  type="radio" name="radio" id="fuel" className="inputs radio second" /> <span>EST</span></td>
        <td><input  type="radio" name="radio" id="fuel" className="inputs radio second" /></td>
        <td>CONFLICT</td>
      </tr>

      <tr>
        <td>02-01-2017</td>
        <td></td>
        <td>SPIJKL</td>
        <td></td>
        <td>0</td>
        <td>33</td>
        <td><input  type="radio" name="radio" id="fuel" className="inputs radio second" /> <span>OEL</span></td>
        <td><input  type="radio" name="radio" id="fuel" className="inputs radio second" /> <span>EON</span></td>
        <td><input  type="radio" name="radio" id="fuel" className="inputs radio second" /> <span>EON</span></td>
        <td><input  type="radio" name="radio" id="fuel" className="inputs radio second" /> <span>EON</span></td>
        <td><input  type="radio" name="radio" id="fuel" className="inputs radio second" /> <span>RTI</span></td>
        <td><input  type="radio" name="radio" id="fuel" className="inputs radio second" /> <span>CDE</span></td>
        <td><input  type="radio" name="radio" id="fuel" className="inputs radio second" /> <span>CAR</span></td>
        <td><input  type="radio" name="radio" id="fuel" className="inputs radio second" /> <span>EST</span></td>
        <td><input  type="radio" name="radio" id="fuel" className="inputs radio second" /></td>
        <td>CONFLICT</td>
      </tr>
      
      <tr>
        <td>02-01-2017</td>
        <td></td>
        <td>SP-IJKL</td>
        <td></td>
        <td>0</td>
        <td>33</td>
        <td><input  type="radio" name="radio" id="fuel" className="inputs radio second" /> <span>OEL</span></td>
        <td><input  type="radio" name="radio" id="fuel" className="inputs radio second" /> <span>EON</span></td>
        <td><input  type="radio" name="radio" id="fuel" className="inputs radio second" /> <span>EON</span></td>
        <td><input  type="radio" name="radio" id="fuel" className="inputs radio second" /> <span>EON</span></td>
        <td><input  type="radio" name="radio" id="fuel" className="inputs radio second" /> <span>RTI</span></td>
        <td><input  type="radio" name="radio" id="fuel" className="inputs radio second" /> <span>CDE</span></td>
        <td><input  type="radio" name="radio" id="fuel" className="inputs radio second" /> <span>CAR</span></td>
        <td><input  type="radio" name="radio" id="fuel" className="inputs radio second" /> <span>EST</span></td>
        <td><input  type="radio" name="radio" id="fuel" className="inputs radio second" /></td>
        <td></td>
      </tr>

      <tr>
        <td>02-01-2017</td>
        <td></td>
        <td>SP-IJKL</td>
        <td>TEST123</td>
        <td>0</td>
        <td>33</td>
        <td><input  type="radio" name="radio" id="fuel" className="inputs radio second" /> <span>OEL</span></td>
        <td><input  type="radio" name="radio" id="fuel" className="inputs radio second" /> <span>EON</span></td>
        <td><input  type="radio" name="radio" id="fuel" className="inputs radio second" /> <span>EON</span></td>
        <td><input  type="radio" name="radio" id="fuel" className="inputs radio second" /> <span>EON</span></td>
        <td><input  type="radio" name="radio" id="fuel" className="inputs radio second" /> <span>RTI</span></td>
        <td><input  type="radio" name="radio" id="fuel" className="inputs radio second" /> <span>CDE</span></td>
        <td><input  type="radio" name="radio" id="fuel" className="inputs radio second" /> <span>CAR</span></td>
        <td><input  type="radio" name="radio" id="fuel" className="inputs radio second" /> <span>EST</span></td>
        <td><input  type="radio" name="radio" id="fuel" className="inputs radio second" /></td>
        <td></td>
      </tr>
    </tbody>
       {/*-----table body end------*/}
    </table>
    <div><button id="Update">Update</button></div>
    </div>
  )
};
