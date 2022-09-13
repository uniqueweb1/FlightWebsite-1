import React from 'react';
import PropTypes from "prop-types";
//import "../../Assets/images/Cancel.png"
//import "../../Assets/images/scan.png";//
export class TodoItem extends React.Component{
    render(){

    const {id, name,utc} = this.props.todo;
     
       return(  
         <React.Fragment>
                 <tr className="PassportTableData">
					<td><input type="text"/></td>
                    <td><input type="text" id="number"/></td>
                    <td><input type="date" required/></td>
                    <td><input type="date" required/></td>
                   {/* <td><img src={scan} alt="ScanImg"/></td> */}
                    <td><input type="checkbox" defaultChecked={true}/></td>
                    <td id="close-btn"><b><span className="close-btn1" onClick={this.props.delTodo.bind(this, id)}>&times;</span></b></td>
				</tr>
             {/* <div className="BS">
                <div><span id="zoneName"></span></div>
                <div className="first"><span id="zoneName"></span></div> */}
                {/* <div className="secound"><span><button   style={btnStyle}><img id="cancelImg" src={Cancel} alt=""/></button></span></div> */}
             {/* </div> */}
          </React.Fragment>
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
    
}
export default TodoItem