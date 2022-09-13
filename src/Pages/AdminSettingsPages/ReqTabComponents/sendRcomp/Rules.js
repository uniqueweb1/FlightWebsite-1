import React from 'react';
import RuleItem from './RuleItem.js';

class Zones extends React.Component{
   render(){
       return(
        this.props.zones.map((zone) => (
           <RuleItem todo={zone} key={zone.id} delTodo={this.props.delTodo}/>                
         ))
        )
      }
}
export default Zones 