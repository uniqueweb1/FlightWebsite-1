import { useState } from "react";
import Endorsements from "./EndorsementComp/EndorsementFile.js";
import OnlineTraining from "./EndorsementComp/OnlineTraining.js";
import PracticalTraining from "./EndorsementComp/PersonalTraning.js";
 function Endorsement(){ 
  const [state,setState] = useState(1);
  const action = (index) => {
    setState(index)
  }

    return (
      <div className="ReqApp">
       <div className="tab1_container"style={{width: "40%", fontSize: '11.83px', padding: '0px'}}>
          <div onClick={()=>action(1)} className={`${state===1? 'tab1 active-tab' : 'tab1'}`}><span>Endorsement</span></div>
          <div onClick={()=>action(2)} className={`${state===2? 'tab1 active-tab' : 'tab1'}`}><span>Online Training</span></div>
          <div onClick={()=>action(3)} className={`${state===3? 'tab1 active-tab' : 'tab1'}`}><span>Practical Training</span></div>
            <section id="content1" className={`${state===1? 'tab-content1 active-content':'tab-content'}`}>
                <Endorsements/>
            </section>
            <section id="content2" className={`${state===2? 'tab-content1 active-content':'tab-content'}`}>
                more.. 	
            </section>
            <section id="content3" className={`${state===3? 'tab-content1 active-content':'tab-content'}`}>
                more.. and more..
            </section>
    </div>
</div>
 
    )
  }
  export default Endorsement;