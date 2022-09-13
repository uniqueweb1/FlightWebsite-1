import { React, Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from "prop-types";
import edit from "../../Assets/images/edit.png";
import Edit from "./FullUserEdit.js";

import BasicInfo from "./UserTabComponents/ReqSettings.js";
import Groups from "./UserTabComponents/Groups.js";
import Endorsement from "./UserTabComponents/Endorsement.js";
import Ratings from "./UserTabComponents/Ratings.js"; 

 function TableItem(props){
    const [ButtonTrue,setButtonTrue] = useState(false);
    const [state,setState] = useState(1);
        const action = (index) => {
          setState(index)
        }
       return(  
         <Fragment>      
            <tr className="UserTableRow" border='1'>
                <td>{props.users.name}</td>
                <td>{props.users.code}</td>
                <td>{props.users.email}</td>
                <td><input type="checkbox" defaultChecked="true"/></td>
                <td>{props.users.lastvisit}</td>
                <td><img src={edit} alt="edit images" onClick={() => {setButtonTrue(true)}}/></td>         
            </tr>
            <Edit trigger={ButtonTrue} setTrigger={setButtonTrue}>
                   <h1>{props.users.name}</h1>
                   <div className="ReqApp">
			{/* <div id="hr"></div> */}
			<div className="tab1_container"style={{width: "50%", fontSize: '11.83px', padding: '0px'}}>
                        <div onClick={()=>action(1)} className={`${state===1? 'tab1 active-tab' : 'tab1'}`}><span>Basic Information</span></div>
                        <div onClick={()=>action(2)} className={`${state===2? 'tab1 active-tab' : 'tab1'}`}><span>Groups</span></div>
                        <div onClick={()=>action(3)} className={`${state===3? 'tab1 active-tab' : 'tab1'}`}><span>Personanl Endorsements</span></div>
                        <div onClick={()=>action(4)} className={`${state===4? 'tab1 active-tab' : 'tab1'}`}><span>Ratings</span></div>
                        <div onClick={()=>action(5)} className={`${state===5? 'tab1 active-tab' : 'tab1'}`}><span>User settings</span></div>
					<section id="content1" className={`${state===1? 'tab-content1 active-content':'tab-content'}`}>
					    <BasicInfo user={props} />
					</section>
							
					<section id="content2" className={`${state===2? 'tab-content1 active-content':'tab-content'}`}>
                        
                         <Groups />  	
					</section>
					<section id="content3" className={`${state===3? 'tab-content1 active-content':'tab-content'}`}>
                         wssw
					     <Endorsement />  	
					</section>
					<section id="content4" className={`${state===4? 'tab-content1 active-content':'tab-content'}`}>
			             <Ratings  Ratings={props.Ratings}/>
					</section>
                    <section id="content5" className={`${state===5? 'tab-content1 active-content':'tab-content'}`}>
			              lk
					</section>
					
				 </div>
			</div>
                    
            </Edit>    
            
                      
        </Fragment>
       )
   }    
//PropTypes
TableItem.propTypes = {
    todo: PropTypes.object.isRequired
}
 
export default TableItem