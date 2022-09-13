import { useState } from "react";
import Rsettings from "./ReqTabComponents/ReqSettings.js";
import SendRule from "./ReqTabComponents/SendingRule.js";
import ReqItem from "./ReqTabComponents/ReqItem.js";
import Billing from "./ReqTabComponents/BillingInfo.js"; 
 function Tab(){
	
	const [state,setState] = useState(1);

	const action = (index) => {
	  setState(index)
	}
     return (
        <div className="ReqApp">
			{/* <div id="hr"></div> */}
			<div className="tab1_container" >
				        <div onClick={()=>action(1)} className={`${state===1? 'tab1 active-tab' : 'tab1'}`}><span>Settings</span></div>
                        <div onClick={()=>action(2)} className={`${state===2? 'tab1 active-tab' : 'tab1'}`}><span>Sending Rules</span></div>
                        <div onClick={()=>action(3)} className={`${state===3? 'tab1 active-tab' : 'tab1'}`}><span>Requested Items</span></div>
                        <div onClick={()=>action(4)} className={`${state===4? 'tab1 active-tab active-tab1' : 'tab1'}`}><span>Billing Info</span></div>
				    
					<section id="content1" className={`${state===1? 'tab-content1 active-content':'tab-content'}`}>
					   <Rsettings />
					</section>
							
					<section id="content2" className={`${state===2? 'tab-content1 active-content':'tab-content'}`}>
                         <SendRule />  	
					</section>

					<section id="content3" className={`${state===3? 'tab-content1 active-content':'tab-content'}`}>
					     <ReqItem />  	
					</section>
					<section id="content4" className={`${state===4? 'tab-content1 active-content':'tab-content'}`}>
			             <Billing />				 			
					</section>
					
				 </div>
			</div>  
	  )
 }

 export default Tab