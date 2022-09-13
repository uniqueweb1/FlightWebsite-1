import React, { useEffect } from 'react';
import '../../../App.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const NewscheduledMaintenanance = (props) => {
   const [value, setValue]= useState('')


    const [formData, setFormData] = useState({
        name: '',
        checkbox:'',
        AOGCHECK:'',
        workOrder:'',
        Supplier:'',
        aircraftType:'',
        Aircraft:'',
        Airport:'',
        start:'',
        startTime:'',
        end:'',
        endTime:'',
        tah:'',
        tac:'',
        camLimitDate:'',
        notes:'',
        files:'',
        deleteAircraftCheckbox:'',
        addReposition:''
    });
/*
useEffect(() => {
    if(localStorage) {
        const formDataFromLocalStorage = localStorage.getItem('formData');
        if(formDataFromLocalStorage) {
            const formDataCopy = JSON.parse(formDataFromLocalStorage)
            setFormData({...formDataCopy})
        }
    }
}, []);
useEffect(()=>{

    localStorage && localStorage.setItem('formData', JSON.stringify({...formData}))
}, [formData]);
*/
const handleAddFormChange = (event) => {
    setFormData({...formData, [event.target.name]: event.target.value});
  }; 
  const handleDelete = (index) => {
    formData.splice(index,1)
    setFormData({...formData})
  }

 // onSubmit function will be used later if needed to submit to the backend


 //const handleSubmit = (event) => {
    // prevent the submiot button from refreshing the page
   // event.preventDefault();
   /* addFormItems(formInfo);
    setFormInfo({ name: '',
    checkbox:'',
    AOGCHECK:'',
    workOrder:'',
    Supplier:'',
    aircraftType:'',
    Aircraft:'',
    Airport:'',
    start:'',
    startTime:'',
    end:'',
    endTime:'',
    tah:'',
    tac:'',
    camLimitDate:'',
    notes:'',
    files:'',
    deleteAircraftCheckbox:'',
    addReposition:'' });  */
  //}
  

  return (
    <div className='container'>
<fieldset className='fieldset1'>
        
        <legend>
            Add scheduled maintenance
        </legend>
        <form>
        <div className="input">    
            <div id="cont"><label htmlFor="Name"><span>Name</span></label></div>
            <div className='input-right'><select id='Name' className='input-name' name="name"  value={formData.name} onChange={handleAddFormChange}><option>Maintenance Option</option><option>Aircraft on Ground(AOG)</option><option>Confirmed MX</option></select></div>
        </div>
         
        <div className="input">    
            <div id="cont"><label htmlFor="addflight"><span>Confirmed(cannot add flight)</span></label></div>
            <div className='input-right'><input type="checkbox" name="checkbox" id="addflight"value={formData.checkbox} className="inputs radio first" defaultChecked={true}onChange={handleAddFormChange}/></div>
        </div>
        <div className="input">    
            <div id="cont"><label htmlFor="AOG"><span>AOG?</span></label></div>
            <div className='input-right'><input type="checkbox" name="AOGCHECK" id="AOG" className="inputs radio first"  defaultChecked={false} onChange={handleAddFormChange}/></div>
        </div>
        <div className="input">    
            <div id="cont"><label htmlFor="workorder"><span>Work Order</span></label></div>
            <div className='input-right'><input id="workorder" type="text" name="workOrder"  className='input-ww'  onChange={handleAddFormChange}/></div>
        </div>
        <div className="input">    
            <div id="cont"><label htmlFor="supplier"><span>Supplier</span></label></div>
            <div className='input-right'><input id="supplier" type="text" name="Supplier" className='input-ww' onChange={handleAddFormChange}/></div>
        </div>
        <div className='box'>
         <p> Aircraft</p>
        </div>
        <div className="input">    
            <div id="cont"><label htmlFor="aircrafttype"><span>Aircraft Type</span></label></div>
            <div className='input-right'><select id='aircrafttype' name='aircraftType' onChange={handleAddFormChange}><option>IATA</option><option>IATA</option><option>IATA</option><option>IATA</option></select></div>        
        </div>
        <div className="input">    
            <div id="cont"><label htmlFor="aircraft"><span>Aircraft</span></label></div>
            <div className='input-right'><select id='aircraft' name='Aircraft' onChange={handleAddFormChange}><option>--select--</option><option>IATA</option><option>IATA</option><option>IATA</option></select></div>        
        </div>
        <div className="input">    
        <div id="cont"><label htmlFor="airport"><span>Airport</span></label></div>
            <div className='input-right'><input id="airport" type="text" name="Airport" className='small-input' onChange={handleAddFormChange}/></div>
        </div>
        <div className='box'>
         <p> Time Period</p>
        </div>
        <div className='input-second'>
         <div className='time-periods'> 
         <p>start</p>
         <div className='my-my-Content'> <label htmlFor="startdate"><span>Date</span></label><input type="date" id='startdate'  name='start' onChange={handleAddFormChange} /></div>
         <div className='my-my-Content'> <label htmlFor="startTime"><span>Time</span></label><input type="time" id='startTime' name='startTime' onChange={handleAddFormChange} /></div>   
         </div>
         <div className='time-periods'> 
         <p>End</p>
         <div className='my-my-Content'> <label htmlFor="enddate"><span>Date</span></label><input type="date" id='enddate' name='end' onChange={handleAddFormChange}/></div>
         <div className='my-my-Content'> <label htmlFor="endTime"><span>Time</span></label><input type="time" id='endTime'  name='endTime' onChange={handleAddFormChange}/></div>   
         </div>
        </div>
        <div className='box'>
         <p className='camlimit'><span className='cam-left'>CAM limits</span> <span className='cam-right'><button className='button-check'>check</button></span></p>
        </div>
        <div className='input-third'>
         <div className='CAM'> 
         <div className='my-my-Content'> <label htmlFor="tah"><span>TAH</span></label><input type="text" id='tah' name='tah'onChange={handleAddFormChange} /></div>
         <div className='my-my-Content'> <label htmlFor="tac"><span>TAC</span></label><input type="text" id='tac'name='tac' onChange={handleAddFormChange} /></div> 
         <div className='my-my-Content'> <label htmlFor="dates"><span>Date</span></label><input type="date" id='dates' name='camLimitDate'  onChange={handleAddFormChange}/></div>   
         </div>
        </div>
        <div className='box'>
         <p>Notes</p>
        </div>
        <div className='input-fourth'>
          <label htmlFor='note'><textarea className='textarea' id='note' name='notes' onChange={handleAddFormChange} placeholder='add notes'></textarea></label>
        </div>
        <div className='input-fourth'>
          <div>(max: 4MB)</div>
          <div><label htmlFor="files"><input type="file"id='files' name='files'placeholder='add files' onChange={handleAddFormChange} /></label></div>
        </div>
        <div className='box'>
         <p>Schedule maintenance options</p>
        </div>
        <div className='input-second'>
        <div id="cont"><label htmlFor="deleteAircraft"><span>Delete aircraft from conflicting flights</span></label></div>
            <div className='input-right'><input type="checkbox" name="deleteAircraftCheckbox" id="deleteAircraft" className="inputs radio first" defaultChecked={true}  onChange={handleAddFormChange}/></div>
        
        </div>
        <div className='input-second'>
       <div name='addReposition'>Add reposition</div>
        </div>
        <div className="timeline">    
            <button className='add-schedule' type='submit'><Link to='/scheduledmaintenance' state={formData}>Update scheduled maintenance</Link></button><button className='delete-schedule' onClick={handleDelete}>Delete scheduled maintenance</button>
        </div>
        </form>
        </fieldset>
    </div>
  );

};
  export default NewscheduledMaintenanance;    