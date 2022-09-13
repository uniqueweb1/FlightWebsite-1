import { useState } from "react";
import Gsettings from "./GeneralSettings.js";
import Fediting from "./FlightEditing.js";
import Rhandling from "./ReqHandling.js";
import Document from "./Document.js"; 
   function Tab(){
	const [state,setState] = useState(1);
	const action = (index) => {
	  setState(index)
   }
   
     return (
        <div className="App">
			<div className="tab_container">
				<div onClick={()=>action(1)} className={`${state===1? 'tab active-tab' : 'tab'}`}><span>General</span></div>
				<div onClick={()=>action(2)} className={`${state===2? 'tab active-tab' : 'tab'}`}><span>Flight Editing</span></div>
				<div onClick={()=>action(3)} className={`${state===3? 'tab active-tab' : 'tab'}`}><span>Request Handling</span></div>
				<div onClick={()=>action(4)} className={`${state===4? 'tab active-tab' : 'tab'}`}><span>Quotations</span></div>
				<div onClick={()=>action(5)} className={`${state===5? 'tab active-tab' : 'tab'}`}><span>Documents</span></div>

					<section id="content1" className={`${state===1? 'tab-content active-content':'tab-content'}`}>
				       <Gsettings />	
					</section>							
					<section id="content2" className={`${state===2? 'tab-content active-content':'tab-content'}`}>
					   <Fediting />   	
					</section>
					<section id="content3" className={`${state===3? 'tab-content active-content':'tab-content'}`}>
						<Rhandling />
					</section>
					<section id="content4" className={`${state===4? 'tab-content active-content':'tab-content'}`}>
						<h3>Headline 4</h3>			
					</section>
					<section id="content5" className={`${state===5? 'tab-content active-content':'tab-content'}`}>
					    <Document />
					</section>
					<div><button id="Update">Update</button></div>
				 </div>
			</div>  
	  )
 }

 export default Tab