
function Gsettings(props){ 
    if(props.user.users.name.split(' ').length === 2){
     var name = props.user.users.name.split(' ')[0]
    var surname = props.user.users.name.split(' ')[1]    
    }
    else if(props.user.users.name.split(' ').length === 3){
            name = props.user.users.name.split(' ')[0]
        var middlename = props.user.users.name.split(' ')[1]
            surname = props.user.users.name.split(' ')[2]
    }
    return (
    <div>
       <div className="User__info">
            <div>
                <h5>Phone Book</h5><br/>
                <div className="AddUsersForm" > 
					<div><label htmlFor="name">Name*</label></div>
					<div><input type="text" name="name" value={name}  id="username"/></div>
               </div>
			   <div className="AddUsersForm"> 
					<div><label htmlFor="name">Middle name</label></div>
					<div><input type="text" name="middlename"   value={middlename} /></div>
               </div>
			   <div className="AddUsersForm"> 
					<div><label htmlFor="name">Surname*</label></div>
					<div><input type="text" name="surname" value={surname} /></div>
               </div>
			   <div className="AddUsersForm"> 
					<div><label htmlFor="name">Known as*</label></div>
					<div><input type="text" name="name"  o/></div>
					{/* <div><label htmlFor="email">E-mail</label></div>
					<div><input type="email" name="email"  /></div> */}
               </div>
               <div className="AddUsersForm"> 
					 <div><label htmlFor="sex" id="alignSex">Gender*</label></div>
					<div><div className="userName"><span>M</span><input type="radio" name="sex" id="sex"/><span>F</span><input type="radio" name="sex" id='sex'/></div></div>
               </div>
               <div className="AddUsersForm"> 
					<div><label htmlFor="name">ID card</label></div>
					<div><input type="text" name="name"  /></div>
					 
               </div>
               <div className="AddUsersForm"> 
					<div><label htmlFor="name">Title</label></div>
					<div><input type="text" name="name"  o/></div>
					 
               </div>
               <div className="AddUsersForm"> 
					<div><label htmlFor="name">Job Title</label></div>
					<div><textarea></textarea></div>
               </div>
               <div className="AddUsersForm"> 
					<div><label htmlFor="name">Country</label></div>
                    <div><select><option>--select---</option></select></div>
					{/* <div><input type="checkbox"/></div> */}
               </div>
               <div className="AddUsersForm"> 
					<div><label htmlFor="name">Place of birth</label></div>
                    <div><input type="text" name="name"  /></div>
					{/* <div><input type="checkbox"/></div> */}
               </div>
               <div className="AddUsersForm"> 
					<div><label htmlFor="name">Date of birth</label></div>
                    <div><input type="date" name="name"  /></div>
					{/* <div><input type="checkbox"/></div> */}
               </div>
                  <div className="AddUsersForm"> 
					<div><label htmlFor="name">Client</label></div>
                     <div><input type="checkbox"/></div>
               </div>
               <div className="AddUsersForm"> 
					<div><label htmlFor="name">Vat</label></div>
                    <div><input type="text" name="name"  /></div>
					{/* <div><input type="checkbox"/></div> */}
               </div>
               <div className="AddUsersForm"> 
					<div><label htmlFor="name">Crew Id</label></div>
                    <div><input type="text" name="name"  /></div>
					{/* <div><input type="checkbox"/></div> */}
               </div>
               <div className="AddUsersForm"> 
					<div><label htmlFor="name">Hire Date</label></div>
                    <div><input type="text" name="name"  /></div>
					{/* <div><input type="checkbox"/></div> */}
               </div>
               <div className="AddUsersForm"> 
					<div><label htmlFor="name">Next of kin Details:</label></div>
					<div><textarea></textarea></div>
               </div>
               <div className="AddUsersForm"> 
					<div><label htmlFor="name">Active</label></div>
                     <div><input type="checkbox"/></div>
               </div> <br/>

               <hr style={{width: '14rem'}}/><br/>
               <h5>Phone </h5><br/>
               <div className="AddUsersForm"> 
					<div><label htmlFor="name">Work</label></div>
                    <div><input type="text" name="name"  /></div>
               </div>
               <div className="AddUsersForm"> 
					<div><label htmlFor="name">Private</label></div>
                    <div><input type="text" name="name"  /></div>
               </div>
               <div className="AddUsersForm"> 
					<div><label htmlFor="name">Fax</label></div>
                    <div><input type="text" name="name"  /></div>
               </div><br/>
               <hr style={{width: '14rem'}}/><br/>
               <h5>Address</h5><br/>
               <div className="AddUsersForm"> 
					<div><label htmlFor="name">Home</label></div>
					<div><textarea></textarea></div>
               </div>
            </div>
            <div> 
                <h5>User data</h5><br/>
                <div className="AddUsersForm"> 
					<div><label htmlFor="name">Login</label></div>
                    <div><input type="text" name="name"  /></div>
               </div>
               <div className="AddUsersForm"> 
					<div><label htmlFor="name">Code</label></div>
                    <div><input type="text" name="name"  /></div>
               </div>
               <div className="AddUsersForm"> 
					<div><label htmlFor="name">Home base</label></div>
                    <div><input type="text" name="name"  /></div>
               </div>
               <div className="AddUsersForm"> 
					<div><label htmlFor="name">User base</label></div>
                    <div><select><option>main</option></select></div>
               </div><br/>

               <hr style={{width: '14rem'}}/><br/>
               <h5>Options</h5><br/>
               <div className="AddUsersForm"> 
					<div><label htmlFor="name">OML</label></div>
                     <div><input type="checkbox"/></div>
               </div>
               <div className="AddUsersForm"> 
					<div><label htmlFor="name">Freelancer</label></div>
                     <div><input type="checkbox"/></div>
               </div><br/>
               <hr style={{width: '14rem'}}/><br/>
               <h5>Days off</h5><br/>
               <div className="AddUsersForm"> 
					<div><label htmlFor="name">User Anual limit</label></div>
                     <div>10</div>
               </div>
               <div className="AddUsersForm"> 
					<div><label htmlFor="name">User Operator Anual limit</label></div>
                     <div><input type="checkbox" defaultChecked={true}/></div>
               </div><br/>
               <hr style={{width: '14rem'}}/><br/>
               <h5>Change Password</h5><br/>
               <div className="AddUsersForm"> 
					<div><label htmlFor="name">Generate new password</label></div>
                     <div><input type="checkbox" /></div>
               </div>
            </div>
            <div id='lastChild'>
                <h5>Passports</h5><br/>
                <div className="AddUsersPassports"> 
					<div style={{flex: '2'}}>Country</div>
                    <div>No</div>
                    <div>Date of issue</div>
                    <div>Expires</div>
                    <div>Notes</div>
               </div>
               <div className="AddUsersPassports AddUsersPassports1"> 
					<div style={{flex: '2'}}><select><option>main</option></select></div>
                    <div><input type="text" /></div>
                    <div><input type="text" /></div>
                    <div><input type="text" /></div>
                    <div><input type="text" /></div>
               </div>
            </div>
       </div>       
    </div>    
    )
  }
export default Gsettings