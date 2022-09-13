import React from 'react';
import PropTypes from "prop-types";
export class TodoItem extends React.Component{
   render(){
    const {id, name,utc} = this.props.todo;
       return(  
         <div>
                <table>
                    <tbody>
                        <tr>
                            <td id="count">{ this.props.todo.count }</td>
                            <td>{ this.props.todo.name }</td>
                            <td>{ this.props.todo.utc }</td>
                            <td>{ this.props.todo.NameType }</td>
                        </tr>
                    </tbody>    
                </table> 
          </div>
       )
   }
}    
 
export default TodoItem