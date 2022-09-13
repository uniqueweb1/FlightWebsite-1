import React from 'react';
import { useState } from "react";
import FleetTabDocument from '../../../Components/Tabs/FleetTabDocument';
import FleetTabCam from '../../../Components/Tabs/FleetTabCam'
import '../../../Styles/Tab.css'


 export default function FleetForm(){
	
	const [state,setState] = useState(1);

	const action = (index) => {
	  setState(index)
	}
     return (
        <div className="Tab">
			<div className="tab_container">
				<div onClick={()=>action(1)} className={`${state===1? 'tab active-tab' : 'tab'}`}><span>Documents</span></div>
				<div onClick={()=>action(2)} className={`${state===2? 'tab active-tab' : 'tab'}`}><span>CAM</span></div>
					<section id="content1" className={`${state===1? 'tab-content active-content':'tab-content'}`}>
						
					  <FleetTabDocument />	
					</section>
								
					<section id="content2" className={`${state===2? 'tab-content active-content':'tab-content'}`}>
						<FleetTabCam />   	
					</section>
					<div><button id="Update">Update</button></div>
				 </div>
			</div>  
			
	  )
 }
