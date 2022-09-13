import React from 'react';
import TimezoneItem from './TimezoneItem'

class Zones extends React.Component{
   render(){
    
       return(
        this.props.zones.map((zone) => (
           <TimezoneItem todo={zone} key={zone.id} delTodo={this.props.delTodo}/>     
         ))
        )
   }
}
 export default Zones 