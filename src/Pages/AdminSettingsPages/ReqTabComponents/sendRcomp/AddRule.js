import React from 'react';
import {v4 as uuidv4} from 'uuid';
export class AddTodo extends React.Component{
    constructor(props){
        super(props)
        this.handleChange = this.handleChange.bind(this);
        this.handleChange1 = this.handleChange1.bind(this);
    }
    handleChange(e){ 
        this.setState({utc: e.target.value})
    }
    handleChange1(e){ 
        this.setState({NameType: e.target.value})
    }
    state = {
        name: '',
        utc: 'All',
        NameType: " ",
        count: 2
    }
    onSubmit = (e) => {
        e.preventDefault();
        this.state.count++        
        this.props.addTimezone(this.state.NameType,this.state.name,this.state.utc,this.state.count);       
    }
    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value})
    }
    render(){
    const options = [
                {
                    label: "All",
                    value: 'All'
                },
                {
                    label: "Yes",
                    value: 'Yes'
                },
                {
                    label: "No",
                    value: 'No'
                }
       
            ]
    const options1 = [
                {
                    label: "--Select--",
                    value: '--Select--'
                },
                {
                    label: "G-XYZ",
                    value: 'G-XYZ'
                },
                {
                    label: "SP-ABCD",
                    value: 'SP-ABCD'
                },
                {
                    label: "SP-ABCD",
                    value: 'SP-ABCD'
                },
                {
                    label: "SP-ABCD",
                    value: 'SP-ABCD'
                }
            ]

            return(
                <div className="">
                   <form onSubmit={this.onSubmit}>
                       <table width="40%">
                           <tbody>
                            <tr>
                                <td></td>
                                <td>
                                    <select value={this.state.NameType} onChange={this.handleChange1}>
                                        {options1.map((option1) => (
                                        <option key={uuidv4()} value={option1.value} > {option1.label}</option>
                                    ))}
                                    </select>
                                </td>
                                <td>
                                    <input type='text' id="RuleName" name="name"  onChange={this.onChange}  />
                                </td>
                                <td>
                                    <select value={this.state.utc} onChange={this.handleChange}>
                                    {options.map((option) => (
                                        <option key={uuidv4()} value={option.value} > {option.label}</option>
                                        ))}
                                    </select>
                                </td>
                                <td>
                                    <input type='submit' name="submit" id="Update" value="Add Rule" />
                                </td>
                            </tr>
                        </tbody>        
                    </table>                             
                </form> 
                </div>       
                )
            }
        }
   
 export default AddTodo
