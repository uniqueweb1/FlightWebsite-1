import React from 'react';
import '../App.css'





export default function TabCAM() {

  return(
    <div className="form-containers">
  {/* Airframe start*/}
      <div className="form-itemss1">
        <p className="span-head">Airframe</p>
<div className='cam-cont'>
   <p className='SPN1'>Start Date</p>
   <span><input type="date" className='cam-input'/></span>
        </div>

        <div className='cam-cont'>
   <p className='SPN1'>Start TAH</p>
   <span><input type="text" className='cam-input'/></span>
        </div>

        <div className='cam-cont'>
   <p className='SPN1'>Start TAC</p>
   <span><input type="text" className='cam-input'/></span>
        </div> 

        <div className='cam-cont'>
   <p className='SPN1'>Remainder</p>
   <span><input type="text" className='cam-input'/></span>
        </div>       
</div>
  {/* Airframe end*/}

  {/* Engine 1 begin*/}
<div className="form-itemss1">
    <div className="mygrid">
    <div className="gridview">
<p className="span-head">Engine 1</p>
<div className="griditems">serial number  <span><input type="text" className='serial-num'/></span></div>
<div className='cam-cont'>
   <p className='SPN1'>Start Date</p>
   <span><input type="date" className='cam-input'/></span>
        </div> 

        <div className='cam-cont'>
   <p className='SPN1'>Start TAH</p>
   <span><input type="text" className='cam-input'/></span>
        </div>

        <div className='cam-cont'>
   <p className='SPN1'>Start TAC</p>
   <span><input type="text" className='cam-input'/></span>
        </div>

        <div className='cam-cont'>
   <p className='SPN1'>Oil report period</p>
   <span><input type="text" className='cam-input'/></span>
        </div> 

        <div className='cam-cont'>
   <p className='SPN1'>Remainder</p>
   <span><input type="text" className='cam-input'/></span>
        </div> 
    </div >
     {/* engine 1 end*/}

     {/* engine 2 begin*/}
     
    <div className="gridview">
<p className="span-head">Engine 2</p>
<div className="griditems">serial number  <span><input type="text" className='serial-num'/></span></div>
<div className='cam-cont'>
   <p className='SPN1'>Start Date</p>
   <span><input type="date" className='cam-input'/></span>
        </div> 

        <div className='cam-cont'>
   <p className='SPN1'>Start TAH</p>
   <span><input type="text" className='cam-input'/></span>
        </div> 

        <div className='cam-cont'>
   <p className='SPN1'>Start TAC</p>
    <span><input type="text" className='cam-input'/></span>
        </div> 

        <div className='cam-cont'>
   <p className='SPN1'>Oil report period</p>
   <span ><input type="text" className='cam-input'/></span>
        </div> 

        <div className='cam-cont'>
   <p className='SPN1'>Remainder</p>
   <span><input type="text" className='cam-input'/></span>
        </div> 
    </div>
    </div>
         {/* engine 2 end*/}

         {/* engine 3  begin*/}  
         <div className='mygrid'>
    <div className="gridview">
<p className="span-head">Engine 3</p>
<div className="griditems">serial number  <span><input type="text" className='serial-num'/></span></div>
<div className='cam-cont'>
   <p className='SPN1'>Start Date</p>
    <span><input type="date" className='cam-input'/></span>
        </div> 

        <div className='cam-cont'>
   <p className='SPN1'>Start TAH</p>
   <span><input type="text" className='cam-input'/></span>
        </div> 

        <div className='cam-cont'>
   <p className='SPN1'>Start TAC</p>
    <span><input type="text" className='cam-input'/></span>
        </div> 

        <div className='cam-cont'>
   <p className='SPN1'>Oil report period</p>
    <span><input type="text" className='cam-input'/></span>
        </div> 

        <div className='cam-cont'>
   <p className='SPN1'>Remainder</p>
    <span><input type="text" className='cam-input'/></span>
        </div> 
    </div>
      {/* engine 3 end*/}

        {/* engine 4 begin*/}
    <div className="gridview">
<p className="span-head">Engine 4</p>
<div className="griditems">serial number  <span><input type="text" className='serial-num'/></span></div>
<div className='cam-cont'>
   <p className='SPN1'>Start Date</p>
   <span><input type="date" className='cam-input'/></span>
        </div> 
        <div className='cam-cont'>
   <p className='SPN1'>Start TAH</p>
   <span><input type="text" className='cam-input'/></span>
        </div> 
        <div className='cam-cont'>
   <p className='SPN1'>Start TAC</p>
   <span><input type="text" className='cam-input'/></span>
        </div> 
        <div className='cam-cont'>
   <p className='SPN1'>Oil report period</p>
   <span><input type="text" className='cam-input'/></span>
        </div> 
        <div className='cam-cont'>
   <p className='SPN1'>Remainder</p>
   <span><input type="text" className='cam-input'/></span>
        </div> 
    </div>
    
    </div>
    </div>
          {/* engine 4 end*/}

   {/* APU begin*/}
    <div className="form-itemss1">
     <div className="gridview">
<p className="span-head">APU?</p>
<div className="griditems">serial number  <span><input type="text" className='serial-num'/></span></div>
<div className='cam-cont'>
   <p className='SPN1'>Start Date</p>
   <span><input type="date" className='cam-input'/></span>
        </div> 
        <div className='cam-cont'>
   <p className='SPN1'>Start TAH</p>
   <span><input type="text" className='cam-input'/></span>
        </div> 
        <div className='cam-cont'>
   <p className='SPN1'>Start TAC</p>
   <span><input type="text" className='cam-input'/></span>
        </div> 
        <div className='cam-cont'>
   <p className='SPN1'>Oil report period</p>
   <span><input type="text" className='cam-input'/></span>
        </div> 
        <div className='cam-cont'>
   <p className='SPN1'>Remainder</p>
   <span><input type="text" className='cam-input'/></span>
        </div> 
    </div>
         {/* APU end*/}
</div>

</div>
  )
};