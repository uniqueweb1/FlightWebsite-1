import React, { useEffect } from 'react';
import '../App.css'
import { useState, useRef } from 'react';



export default function TabDocument() {
const [file, setFiles] = useState(false)

// handle file upload
  const fileInputField = useRef(null);

const handleFileChange = (e) => {
   setFiles(e.target.files[0].name);
}



  const [val, setValue] = useState([]);
  const [val1, setFirstValue] = useState([]);
  const [val2, setSecValue] = useState([]);

  // input td  input states 
  const handleInputAdd = e =>{
    const inputfield =[...val,[]]
    setValue(inputfield)
  }
  const handleChange = (onChangeValue,i) => {
    const inputdata=[...val]
    inputdata[i]=onChangeValue.target.value;
    setValue(inputdata)
  }
  // first td input 
  const handleInputAddFirst = e =>{
    const inputfield =[...val1,[]]
    setFirstValue(inputfield)
  }
  const handleFirstChange = (onChangeValue,i) =>{
    const inputdata=[...val1]
    inputdata[i]=onChangeValue.target.value;
    setFirstValue(inputdata)
  }
  // second td input
  const handleInputAddSec = e =>{
    const inputfield =[...val2,[]]
    setSecValue(inputfield)
  }
  const handleSecChange = (onChangeValue,i) =>{
    const inputdata=[...val2]
    inputdata[i]=onChangeValue.target.value;
    setSecValue(inputdata)
  }
 

  return(
    <div className='tab-table-container'>
      <div className="document-head">
        <span>Send notifications to</span><span><select id='aircrafttype' name='aircraftType'><option>none</option><option>IATA</option><option>IATA</option><option>IATA</option></select></span>
      </div>
      <table>
{/*-----table head start ------*/}
       <thead>
       <tr>
         <th>Document Name </th>
         <th>Number</th>
         <th>Date of Issue</th>   
         <th>Expiry date</th>
         <th>Notes</th>
         <th>Scan</th>
       </tr>
       </thead>
       {/*-----table head end ------*/}

         {/*-----table body start ------*/}
    <tbody>
      <tr>
        <td>Noice certificate</td>
        <td><input id="Number" className="input-number" type="number" name="number" /></td>
        <td><input type="date" id='IssueDate'  name='issuedate' className='datewidth' /></td>
        <td><input type="date" id='IssueDate'  name='issuedate' className='datewidth' /></td>
        <td><textarea className='input-number' id='note'></textarea></td>
        <td>(max 12MB)
        <input type='file' id='real-file'onChange={handleFileChange} ref={fileInputField}/>
        <p><label htmlFor="file" id='custombutton' className='file-label' onClick={() =>fileInputField.current.click()}>Add new file</label><span id='custom-text'>{file}</span></p>
        </td>
      </tr>

      <tr>
        <td  onClick={()=>{handleInputAdd()}}>RVSM</td>
        <td>{val.map((data,i) => { return( <input type="number" value={data} className='input-number' onChange={e=>handleChange(e,i)} />)})}</td>
        <td>{val.map((data,i) => { return( <input type="date" value={data} className='datewidth' onChange={e=>handleChange(e,i)} />)})}</td>
        <td>{val.map((data,i) => { return( <input type="date" value={data} className='datewidth' onChange={e=>handleChange(e,i)} />)})}</td>
        <td>{val.map((data,i)  => { return(<textarea value={data} type="date" className='input-number' onChange={e=>handleChange(e,i)}></textarea>) })}</td>
        <td>(max 12MB)
        <input type='file' id='real-file'onChange={handleFileChange} ref={fileInputField}/>
        <p><label htmlFor="file" id='custombutton' className='file-label' onClick={() =>fileInputField.current.click()}>Add new file</label><span id='custom-text'>{file}</span></p>
        </td>

      </tr>
      
      <tr>
      <td onClick={() => handleInputAddFirst()}>Insurance</td>
        <td>{val1.map((data,i)  => { return( <input value={data} type="number" className='input-number' onChange={e=>handleFirstChange(e,i)}/>) })}</td>
        <td>{val1.map((data,i)  => { return( <input value={data} type="date" className='datewidth' onChange={e=>handleFirstChange(e,i)}/>) })}</td>
        <td>{val1.map((data,i)  => { return( <input value={data} type="date" className='datewidth' onChange={e=>handleFirstChange(e,i)}/>) })}</td>
      
        <td>{val1.map((data,i)  => { return(<textarea value={data} type="date" className='input-number' onChange={e=>handleFirstChange(e,i)}></textarea>) })}</td>
        <td>(max 12MB)
        <input type='file' id='real-file'onChange={handleFileChange} ref={fileInputField}/>
        <p><label htmlFor="file" id='custombutton' className='file-label' onClick={() =>fileInputField.current.click()}>Add new file</label> <span id='custom-text'>{file}</span></p>
        </td>
      </tr>

      <tr>
      <td onClick={() => handleInputAddSec()}>Insurance</td>
        <td>{val2.map((data,i)  => { return( <input value={data} type="number" className='input-number' onChange={e=>handleSecChange(e,i)}/>) })}</td>
        <td>{val2.map((data,i)  => { return( <input value={data} type="date" className='datewidth' onChange={e=>handleSecChange(e,i)}/>) })}</td>
        <td>{val2.map((data,i)  => { return( <input value={data} type="date" className='datewidth' onChange={e=>handleSecChange(e,i)}/>) })}</td>
        <td>{val2.map((data,i)  => { return(<textarea value={data} type="date" className='input-number' onChange={e=>handleSecChange(e,i)}></textarea>) })}</td>
        <td>(max 12MB)
        <input type='file' id='real-file'onChange={handleFileChange} ref={fileInputField}/>
        <p><label htmlFor="file" id='custombutton' className='file-label' onClick={() =>fileInputField.current.click()}>Add new file</label> <span id='custom-text'>{file}</span></p>
        </td>
      </tr>

      
    </tbody>
       {/*-----table body end------*/}
    </table>
    </div>
  )
};
