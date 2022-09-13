import React from 'react';
import Timezones from './BasesComponents/Timezones.js';
import AddTimezone from './BasesComponents/AddTimezone.js';
import Wrong from './BasesComponents/Wrong.js';
import {v4 as uuidv4} from 'uuid';


class Gsettings extends React.Component{
    state = {
        zones: [
            {
                id: uuidv4(),
                name: 'VKO',
                utc: 'paris (RU, UTC+3:00)'
                
            },
            {   
                id:  uuidv4(),
                name: 'AMS',
                utc: 'New York (RU, UTC+3:00)'
                 
            },
        ],
        ErrMessage: '',
        setToEmpty: ''
    }
    
      delTodo = (id) => {
        this.setState({zones: [...this.state.zones.filter(zone => zone.id !== id)] })
      }
      
      AddErr = (x) => {
        this.setState({ErrMessage: x}) 
    } 
      addTimezone = (name,utc,NameType) => {
        const newTodo = {
          id: uuidv4(),
          name: name,
          utc: utc
      }          
      this.setState({ zones:[...this.state.zones, newTodo]});
      if(NameType === 'IATA'){
        if(newTodo.name.length === 3){ 
            this.setState({ErrMessage: ''})
        }
      }else if(NameType === 'ICAO'){
        if(newTodo.name.length === 4){ 
            this.setState({ErrMessage: ''})
        } 
      }      
  }
      
 render(){
    return (
    <div>
        <fieldset>
            <legend>
                General settings
            </legend>
            <div className="GS">    
                <div id="cont"><label htmlFor="twoFactor"><span>Force two factor authentication for all users</span></label></div>
                <div><input id="twoFactor" className="inputs" type="checkbox" name="checkbox"  defaultChecked={true}/></div>
            </div>

            <div className="GS">    
                <div id="cont"><label htmlFor="date"><span>Enter Date<span id="smalls"> (Format: month/day/year)</span></span></label></div>
                <div><span><input type="date" id='date'  /></span></div>
            </div>
             
            <div className="GS">    
                <div id="cont"><label htmlFor="fuel"><span>Default fuel unit</span></label></div>
                <div><input  type="radio" name="radio" id="fuel" className="inputs radio first" defaultChecked={true} /><span>kg</span><input  type="radio" name="radio" id="fuel" className="inputs radio" /><span>ibs</span></div>
            </div>
            <div className="GS">    
                <div id="cont"><label htmlFor="weight"><span>Default weight unit</span></label></div>
                <div><input type="radio" name="weight-radio" id="weight" className="inputs radio first" defaultChecked={true} /><span>kg</span><input  type="radio" name="weight-radio"  id="weight" className="inputs radio" /><span>ibs</span></div>
            </div>
            <div className="GS">    
                <div id="cont"><label htmlFor="region"><span>Default airport category</span></label></div>
                <div><select id='region'><option>A</option><option>B</option><option>C</option><option>U</option><option>P</option></select></div>    
            </div>
            <div className="GS">    
                <div id="cont"><label htmlFor="region"><span>Default local Currency</span></label></div>
                <div><select id='region'><option>&#x20A6;</option><option>&euro;</option><option>&pound;</option><option>&#36;</option></select></div>        
            </div>
            <div className="GS">    
                <div id="cont"><label htmlFor="region"><span>Default Currency<span id="smalls"> (Price Lists)</span></span></label></div>
                <div><select id='region'><option>&#x20A6;</option><option>&euro;</option><option>&pound;</option><option>&#36;</option></select></div>        
            </div>
            <div className="GS">    
                <div id="cont"><label htmlFor="region"><span>Default Currency for fuel prices</span></label></div>
                <div><select id='region'><option>&#x20A6;</option><option>&euro;</option><option>&pound;</option><option>&#36;</option></select></div>        
            </div>
            <div className="GS">    
                <div id="cont"><label htmlFor="region"><span>Default Quantity unit for fuel prices</span></label></div>
                <div><select id='region' className="inputs"><option>kg</option><option>Ltrs</option><option>lbs</option></select></div>    
            </div>
            <div className="GS">    
                <div id="cont"><label htmlFor="twoFactor"><span>Option will change position of aircraft on Calender page</span></label></div>
                <div><input id="twoFactor" className="inputs" type="checkbox" name="checkbox" defaultChecked={true} /></div>
            </div>
            <div className="GS">    
                <div id="cont"><label htmlFor="twoFactor"><span>Display pilot experience table in users profile</span></label></div>
                <div><input id="twoFactor" className="inputs" type="checkbox" name="checkbox" defaultChecked={true} /></div>
            </div>
            <div className="GS">    
                <div id="cont"><label htmlFor="twoFactor"><span>Crew Age Validation:</span></label></div>
                <div><select id='region' className="inputs"><option>Enable &gt; 60 years</option><option>Enable &gt; 65 years</option><option>Disable</option></select></div>
            </div>
            <div className="timeline">    
                <a href="/">Timeline additional markers</a>
            </div>
            </fieldset>
            <fieldset>
                <legend>Trios inbox settings</legend>
                <div className="GS">    
                    <div id="cont"><label htmlFor="Notify"><span>Notify users about new messages in their inbox</span></label></div>
                    <div><input type="radio" name="Notify" id="Notify" className="inputs radio first"defaultChecked={true} /><span>Yes</span><input  type="radio" name="Notify" id="Notify" className="inputs radio" /><span>No</span></div>
                </div>   
            </fieldset> 
            <fieldset>
            <legend>
                Basis
            </legend>
            
            <div className="BS BS_name">    
                <div>Name</div>
                <div>Time zone</div>
            </div>
            <Wrong addErr={this.state.ErrMessage} />
            <AddTimezone Style={this.Style} AddErr={this.AddErr}  addTimezone={this.addTimezone}/>
            <Timezones zones={this.state.zones} delTodo={this.delTodo}/>    
             
        </fieldset>
            
       </div>
       
    )
  }


}

export default Gsettings

