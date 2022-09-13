import React from 'react';
import '../../App.css'
import { useState , useRef} from 'react';



export default function FleetTabDocument() {

 const [selectedFile, setSelectedFile] = useState();
 const [errorMsg, setErrorMsg] = useState(false);
 const [isSucess, setIsSucess] = useState(false);

const fileInputField = useRef(null);
  
const handleFileEvent = (e) => {
if (e.target.files.length > 0){
  setSelectedFile(e.target.files[0]);
}
};
 // validate file size
const validateSelectedFile = () => {
  const MAX_FILE_SIZE = 12288 //12MB

  if (!selectedFile) {
    setErrorMsg('please choose a file');
    setIsSucess(false)
    return
  }
  const fileSizeKiloBytes = selectedFile.size / 1024
  if (fileSizeKiloBytes > MAX_FILE_SIZE){
    setErrorMsg('file size is greater than maximum limit');
    setIsSucess(false)
    return
  }
  setErrorMsg('')
  setIsSucess(true)
};

// input states
  const [val, setValue] = useState([]);
  const [val1, setFirstValue] = useState([]);
  const [val2, setSecValue] = useState([]);
  // input td  input states 
  const handleInputAdd = e =>{
    const inputfield =[...val,[]]
    setValue(inputfield)
  }
  const handleChange = (onChangeValue,i) =>{
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
        <td><p>(max 12MB)</p>
        <input type='file' id='real-file'onChange={handleFileEvent} accept='application/pdf, image/png/jpg' onClick={validateSelectedFile} />
          <p><label htmlFor="file" id='custombutton'  className='file-label' >Add new file</label><span id='custom-text'></span></p>
       </td>
      </tr>
      <tr>
        <td  onClick={()=>{handleInputAdd()}}>RVSM</td>
        <td>{val.map((data,i) => { return( <input type="number" value={data} className='input-number' onChange={e=>handleChange(e,i)} />)})}</td>
        <td>{val.map((data,i) => { return( <input type="date" value={data} className='datewidth' onChange={e=>handleChange(e,i)} />)})}</td>
        <td>{val.map((data,i) => { return( <input type="date" value={data} className='datewidth' onChange={e=>handleChange(e,i)} />)})}</td>
        <td>{val.map((data,i)  => { return(<textarea value={data} type="date" className='input-number' onChange={e=>handleChange(e,i)}></textarea>) })}</td>
        <td>(max 12MB)
        <input type='file' id='real-file'onChange={handleFileEvent} onClick={validateSelectedFile}/>
          <p><label htmlFor="file" id='custombutton' className='file-label' >Add new file</label> {isSucess ? <span id='custom-text'>success</span> : null}<span id='custom-text' className='errormsg'>{errorMsg}</span></p>
    </td>

      </tr>
      
      <tr>
      <td onClick={() => handleInputAddFirst()}>Insurance</td>
        <td>{val1.map((data,i)  => { return( <input value={data} type="number" className='input-number' onChange={e=>handleFirstChange(e,i)}/>) })}</td>
        <td>{val1.map((data,i)  => { return( <input value={data} type="date" className='datewidth' onChange={e=>handleFirstChange(e,i)}/>) })}</td>
        <td>{val1.map((data,i)  => { return( <input value={data} type="date" className='datewidth' onChange={e=>handleFirstChange(e,i)}/>) })}</td>
      
        <td>{val1.map((data,i)  => { return(<textarea value={data} type="date" className='input-number' onChange={e=>handleFirstChange(e,i)}></textarea>) })}</td>
        <td>(max 12MB)
        <input type='file' id='real-file'onChange={handleFileEvent}/>
          <p><label htmlFor="file" id='custombutton' className='file-label' >Add new file</label> <span id='custom-text'></span></p>
        </td>
      </tr>

      <tr>
      <td onClick={() => handleInputAddSec()}>Insurance</td>
        <td>{val2.map((data,i)  => { return( <input value={data} type="number" className='input-number' onChange={e=>handleSecChange(e,i)}/>) })}</td>
        <td>{val2.map((data,i)  => { return( <input value={data} type="date" className='datewidth' onChange={e=>handleSecChange(e,i)}/>) })}</td>
        <td>{val2.map((data,i)  => { return( <input value={data} type="date" className='datewidth' onChange={e=>handleSecChange(e,i)}/>) })}</td>
        <td>{val2.map((data,i)  => { return(<textarea value={data} type="date" className='input-number' onChange={e=>handleSecChange(e,i)}></textarea>) })}</td>
        <td>(max 12MB)
        <input type='file' id='real-file'onChange={handleFileEvent} />
          <p><label htmlFor="file" id='custombutton' className='file-label'>Add new file</label> <span id='custom-text'></span></p>
        </td>
      </tr>

      
    </tbody>
       {/*-----table body end------*/}
    </table>
    </div>
  )
};
