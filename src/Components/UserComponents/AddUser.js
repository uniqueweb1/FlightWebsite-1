import { useState } from "react";

  // import Document from "./Document.js"; 
   function User(props){
      
    //  const [Bt,setBt] = useState(props.trigger.ButtonTrue);
    //  console.log(props.trigger.ButtonTrue)
     return (props.trigger) ? (
        <div className="AddUsers">
              <div className="UserPop-up">
                      <button className="close-btn" onClick={()=> props.setTrigger(false)}>&times;</button>
                    {props.children}
              </div>
		</div>  
	  ) : '';
 }
 export default User;