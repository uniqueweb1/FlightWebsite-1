import React from 'react';
import PropTypes from "prop-types";
import Cancel from "../../../Assets/images/Cancel.png";
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
    const {id, name,utc} = this.props.todo;
       return(  
         <div style={this.NameStyle()}>
             <div className="basic">
                <div>{ this.props.todo.name }</div>
                <div>{ this.props.todo.utc }</div>
                <div className="secound"><span><button onClick={this.props.delTodo.bind(this, id)} style={btnStyle}><img src={Cancel} alt=""/></button></span></div>
             </div>
          </div>
       )
   }
}    

const btnStyle = {
    backgroundColor: "#fff",
    border: "none",
    float: "right",
    width: '10px'
}
export default TodoItem