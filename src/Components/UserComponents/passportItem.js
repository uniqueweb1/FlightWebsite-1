import React from 'react';
import PropTypes from "prop-types";
// import Cancel from "./images/Cancel.png";
export class TodoItem extends React.Component{
    NameStyle = () =>{
        return{
            width: '60%',
            marginLeft: '30px',
            textTransform: 'uppercase',
            color: '#000',
            
        }
    }
   render(){
    // const {id, name,utc} = this.props.todo;
       return(  
         <div style={this.NameStyle()}>
           <tr className="PassportTableData">
					<td><input type="text"/></td>
                    <td><input type="number"/></td>
                    <td><input type="date" required/></td>
                    <td><input type="date" required/></td>
                    <td>and</td>
                    <td><input type="checkbox"/></td>
				</tr>
          </div>
       )
   }
}    
//PropTypes
TodoItem.propTypes = {
    todo: PropTypes.object.isRequired
}
const btnStyle = {
    backgroundColor: "#fff",
    border: "none",
    float: "right"
}
export default TodoItem