import React from 'react';

export class wrong extends React.Component{
      render(){
       return(
           <div className="AddApp">
             <i><h1 id="ErrorMessage">{this.props.addErr}</h1></i> 
           </div>       
        )
   }
}
export default wrong;