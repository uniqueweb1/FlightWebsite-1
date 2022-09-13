import React from 'react';
import '../../../App.css';



  export default function NewHIL() {
    
  return (
    <div className='myhilainer'>
<fieldset className='fieldset2'>
        
        <legend>
            Add NewHIL
        </legend>
        <div className="input">    
            <div id="myhil"><label htmlFor="aircrafttype"><span>Aircraft</span></label></div>
            <div className='input-right'><select id='aircrafttype'><option>--select--</option><option>IATA</option><option>IATA</option><option>IATA</option></select></div>        
        </div>
         
        <div className="input">    
            <div id="myhil"><label htmlFor="workorder"><span>HIL Item No</span></label></div>
            <div className='input-right'><input id="workorder" type="text" name="text" /></div>
        </div> 
        <div className="input">    
            <div id="myhil"><label htmlFor="workorder"><span>MEL Item No</span></label></div>
            <div className='input-right'><input id="workorder" type="text" name="text" /></div>
        </div> 
        <div className="input">    
            <div id="myhil"><label htmlFor="workorder"><span>Date</span></label></div>
            <div className='input-right'><input id="workorder" type="date" name="date" /></div>
        </div> 
        <div className="input">    
            <div id="myhil"><label htmlFor="workorder"><span>Due Date</span></label></div>
            <div className='input-right'><input id="workorder" type="date" name="date" /></div>
        </div>  
         <div className="input">    
            <div id="myhil"><label htmlFor="AOG"><span>Discrepancy description</span></label></div>
            <label htmlFor='notes'><textarea className='textarea'></textarea></label>  
            </div>
                 <div className="input">    
            <div id="myhil"><label htmlFor="workorder"><span>Flight Limitation</span></label></div>
            <div className='input-rightss'><span><input id="workorder" type="radio" name="radio" /><span>Yes</span></span><span><input id="workorder" type="radio" name="radio" /><span>No</span></span><span><input id="workorder" type="radio" name="radio" /><span>Don't Know</span></span></div>
        </div>
        <div className="input">    
            <div id="myhil"><label htmlFor="AOG"><span>Limitations</span></label></div>
            <label htmlFor='notes'><textarea className='textarea'></textarea></label>  
            </div>
        <div className="input">    
            <div id="myhil"><label htmlFor="supplier"><span>Closed(corrected)</span></label></div>
            <div className='input-right'><input id="" type="checkbox" name="checkbox" /></div>
        </div>
        <div className="input">    
            <div id="myhil"><label htmlFor="workorder"><span>Date c/w</span></label></div>
            <div className='input-right'><input id="workorder" type="date" name="date" /></div>
        </div>
        <div className="input">    
            <div id="myhil"><label htmlFor="AOG"><span>Corrective Actions</span></label></div>
            <label htmlFor='notes'><textarea className='textarea'></textarea></label>  
            </div>
            <div className="input">    
            <div id="myhil"><label htmlFor="workorder"><span>P/N Off</span></label></div>
            <div className='input-right'><input id="P/N Off" type="text" name="text" /></div>
        </div> 
        <div className="input">    
            <div id="myhil"><label htmlFor="workorder"><span>S/N Off</span></label></div>
            <div className='input-right'><input id="S/N Off" type="text" name="text" /></div>
        </div> 
        <div className="input">    
            <div id="myhil"><label htmlFor="workorder"><span>P/N On</span></label></div>
            <div className='input-right'><input id="P/N On" type="text" name="text" /></div>
        </div>
        <div className="input">    
            <div id="myhil"><label htmlFor="workorder"><span>S/N On</span></label></div>
            <div className='input-right'><input id="S/N On" type="text" name="text" /></div>
        </div> 
        
        <div className="timeline">    
            <button className='add-schedule-s'><a href="/holditemlist">Save</a></button>
        </div>
        </fieldset>
    </div>
  );
        };