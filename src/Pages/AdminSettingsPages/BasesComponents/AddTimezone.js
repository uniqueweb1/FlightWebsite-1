import React from 'react';
import {v4 as uuidv4} from 'uuid';
export class AddTodo extends React.Component{
    constructor(props){
        super(props)
        this.handleChange = this.handleChange.bind(this);
        this.handleChange1 = this.handleChange1.bind(this);
    }
    handleChange(e){
        // console.log(e.target.value); 
        this.setState({utc: e.target.value})
    }
    handleChange1(e){ 
        this.setState({NameType: e.target.value})
    }
    state = {
        name: '',
        utc: 'utc',
        NameType: "IATA"
    }
    onSubmit = (e) => {
        e.preventDefault();
        if(this.state.NameType === "IATA"){
            this.state.name.length !== 3 ? this.props.AddErr('Invalid Input: (3 letters for Iata)') : this.props.addTimezone(this.state.name,this.state.utc,this.state.NameType);
         }
         else if(this.state.NameType === "ICAO"){
            this.state.name.length !== 4 ? this.props.AddErr('Invalid Input: (4 letters for Icao)') : this.props.addTimezone(this.state.name,this.state.utc,this.state.NameType);
         }
    }
    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value})
    }
   render(){
  const options = [
        {
            label: "UTC",
            value: 'UTC'
        },
        {
            label: "moschow (RU, UTC+3:00)",
            value: 'mosshow (RU, UTC+3:00)'
        },
        {
            label: "london (RU, UTC+3:00)",
            value: 'london (RU, UTC+3:00)'
        },
        {
            label: "st-thomas (RU, UTC+3:00)",
            value: 'st-thomas (RU, UTC+3:00)'
        },
        {
            label: "st-thomas (RU, UTC+3:00)",
            value: 'st-thomas (RU, UTC+3:00)'
        },
        {
            label: "st-thomas (RU, UTC+3:00)",
            value: 'st-thomas (RU, UTC+3:00)'
        },
        {
            label: "st-thomas (RU, UTC+3:00)",
            value: 'st-thomas (RU, UTC+3:00)'
        },
        {
            label: "st-thomas (RU, UTC+3:00)",
            value: 'st-thomas (RU, UTC+3:00)'
        },
        {
            label: "st-thomas (RU, UTC+3:00)",
            value: 'st-thomas (RU, UTC+3:00)'
        },
        {
            label: "st-thomas (RU, UTC+3:00)",
            value: 'st-thomas (RU, UTC+3:00)'
        },
        {
            label: "st-thomas (RU, UTC+3:00)",
            value: 'st-thomas (RU, UTC+3:00)'
        },
        {
            label: "st-thomas (RU, UTC+3:00)",
            value: 'st-thomas (RU, UTC+3:00)'
        },
        {
            label: "st-thomas (RU, UTC+3:00)",
            value: 'st-thomas (RU, UTC+3:00)'
        }
        
    ]
    const options1 = [
        {
            label: "IATA",
            value: 'IATA'
        },
        {
            label: "ICAO",
            value: 'ICAO'
        }
    ]

       return(
           <div>
           <form onSubmit={this.onSubmit}>
                <select value={this.state.NameType} onChange={this.handleChange1}>
                        {options1.map((option1) => (
                        <option key={uuidv4()} value={option1.value} > {option1.label}</option>
                    ))}
                </select>
                <input  id="Tname" type='text' name="name" placeholder="Name"  onChange={this.onChange}  />
                <select value={this.state.utc} onChange={this.handleChange}>
                        {options.map((option) => (
                        <option key={uuidv4()} value={option.value} > {option.label}</option>
                  ))}
               </select>
               <input type='submit' name="submit" id="Update" className='Update' value="Add" />
           </form> 
           </div>       
        )
   }

}

export default AddTodo