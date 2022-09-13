import React from 'react';
import Rules from './sendRcomp/Rules.js';
import AddRules from './sendRcomp/AddRule.js';
import Records from './sendRcomp/Records';
import {v4 as uuidv4} from 'uuid';


class sendingRule extends React.Component{
    state = {
        zones: [
            {
                id: uuidv4(),
                name: 'G-ABCD',
                utc: 'VDC',
                NameType: 'NO',
                count: '1'                
            },
            {   
                id:  uuidv4(),
                name: 'G-SDKF',
                utc: 'VMS',
                NameType: 'NO',
                count: '2'
                 
            },
        ],
    
        setCount: '' 
    }
      delTodo = (id) => {   
        this.setState({zones: [...this.state.zones.filter(zone => zone.id !== id)] })
      }
      AddErr = (x) => {
        this.setState({ErrMessage: x}) 
    } 
      addTimezone = (name,utc,NameType,count) => {
        
        const newTodo = {
          id: uuidv4(),
          name: name,
          utc: utc,
          NameType: NameType,
          count: count 
      }    

      this.setState({ zones: [...this.state.zones, newTodo]});
             
  }
      
 render(){    
    return (
       
    <div id="sendingRule">
        <h3 className="Reg">Registration</h3>     
            <div className="AddTzoneTable">
                <table>
                    <tbody>
                        <tr> 
                            <td className="serial">S/N</td> 
                            <td>Aircraft</td>
                            <td>Airport</td>
                            <td>Send</td>
                        </tr>
                    </tbody>                
                </table>
            </div>
            <AddRules  AddErr={this.AddErr}  addTimezone={this.addTimezone}/>
            <Rules zones={this.state.zones} delTodo={this.delTodo}/>    
            <Records addRecords={this.state.zones.length}/>                 
       </div>
       
    )
  }


}

export default sendingRule;


