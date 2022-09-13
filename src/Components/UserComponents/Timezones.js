import React from 'react';
import TimezoneItem from './TimezoneItem.js';
import PropTypes from "prop-types";

class Zones extends React.Component{
  
   render(){
       return(
        this.props.zones.map((zone) => (
           <TimezoneItem todo={zone} key={zone.id} delTodo={this.props.delTodo}/>     
         ))
        )
   }
}
Zones.propTypes = {
  zone: PropTypes.object.isRequired
}    
export default Zones 