import React from 'react'; 

function Edit(props){
       
        return (props.trigger) ? (
        <div className="UserEdit">
              <div className="UserPop-Edit">
                      <button className="back-btn" onClick={()=> props.setTrigger(false)}><span className="btn-span">Back</span>&#171;&#171;</button>
                    {props.children}
              </div>
		</div>  
	  ) : '';      
}
 export default Edit 