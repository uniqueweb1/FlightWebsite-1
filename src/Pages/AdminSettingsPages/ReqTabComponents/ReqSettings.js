
function Gsettings(){ 
    return (
    <div>
        <fieldset>
            <legend>
                General settings
            </legend>
            <div className="GS">    
                <div id="cont1" ><label htmlFor="operator"><span>Operator ICAO</span></label></div>
                <div><span><input type="text" id="OperatorICAO"/></span></div>
            </div>
            <div className="GS">    
                <div id="cont1" ><label htmlFor="operator"><span>Operator name</span></label></div>
                <div id="OperatorName"><span><input type="text" className="OperatorName" /></span></div>
            </div>
        <div className="GS">    
             <div id='cont1'><label htmlFor="twoFactor"><span>Text settings (if marked, HR will be sent to user's email address instead handling agent)</span></label></div>
             <div><input id="twoFactor" className="inputs" type="checkbox" name="checkbox" defaultChecked={true} /></div>
            </div>
            <div className="GS">    
             <div id='cont1'><label htmlFor="twoFactor"><span>If the approval date of handlers/fbos expires in less than 14days, send email to:</span></label></div>
             <div id="OperatorName"><textarea type="text" className="Emails"  name="check1" /></div>
            </div>
        </fieldset>    
        <fieldset>
                <legend>Maching flights</legend>
                <div className="GS">    
                    <div id="cont"><label htmlFor="Notify"><span>Include options by default</span></label></div>
                    <div><input id="twoFactor" className="inputs" type="checkbox" name="checkbox" defaultChecked={true} /></div>
                </div>   
        </fieldset>
        <fieldset>
                <legend>Handling Request status changes</legend>
                <div className="GS">    
                    <div id="cont"><label htmlFor="Notify"><span>Schedule</span></label></div>
                    <div><input id="twoFactor" className="inputs" type="checkbox" name="checkbox" defaultChecked={true} /></div>
                </div>
                <div className="GS">    
                    <div id="cont"><label htmlFor="Notify"><span>Time change treshold (in minites)</span></label></div>
                    <div><input type="text" id="OperatorICAO"/></div>
                </div>
                <div className="GS">    
                    <div id="cont"><label htmlFor="Notify"><span><b>Aircraft</b></span>
                      <div>Registration ?</div>                    
                    </label></div>
                    <div><input id="twoFactor" className="inputs" type="checkbox" name="checkbox" defaultChecked={true} /></div>
                </div>
                <div className="GS">    
                    <div id="cont"><label htmlFor="Notify"><span><b>PAX</b></span>
                      <div>Number ?</div>                    
                    </label></div>
                    <div><input id="twoFactor" className="inputs" type="checkbox" name="checkbox" defaultChecked={true} /></div>
                </div>
                <div className="GS">    
                    <div id="cont"><label htmlFor="Notify"><span>Details ?</span></label></div>
                    <div><input id="twoFactor" className="inputs" type="checkbox" name="checkbox" defaultChecked={true} /></div>
                </div>
                <div className="GS">    
                    <div id="cont"><label htmlFor="Notify"><span><b>Crew</b></span>
                      <div>Number ?</div>                    
                    </label></div>
                    <div><input id="twoFactor" className="inputs" type="checkbox" name="checkbox" defaultChecked={true} /></div>
                </div>
                <div className="GS">    
                    <div id="cont"><label htmlFor="Notify"><span>Details ?</span></label></div>
                    <div><input id="twoFactor" className="inputs" type="checkbox" name="checkbox" defaultChecked={true} /></div>
                </div>   
        </fieldset> 

        <fieldset>
                <legend>Handling Request emails</legend>
                <div className="GS">    
                    <div id="cont"><label htmlFor="Notify"><span>Handler comfirmation recipient e-mail ?</span></label></div>
                    <div id="OperatorName"><input type="text" className="OperatorName" /></div>
                </div>
                <div className="GS">    
                    <div id="cont"><label htmlFor="Notify"><span>Email "from" ("Name" <b>'email@address.com'</b>)</span></label></div>
                    <div id="OperatorName"><input type="text" className="OperatorName" /></div>
                </div>
                <div className="GS">    
                    <div id="cont"><label htmlFor="Notify"><span>Email "C c"</span></label></div>
                    <div id="OperatorName"><textarea type="text" className="Emails"  name="check1" /></div>
                </div>
                <div className="GS">    
                    <div id="cont"><label htmlFor="Notify"><span>Email "Bcc"</span></label></div>
                    <div id="OperatorName"><input type="text" className="OperatorName" /></div>
                </div>
                <div className="GS">    
                    <div id="cont"><label htmlFor="Notify"><span>Email "Reply to"</span></label></div>
                    <div id="OperatorName"><textarea type="text" className="Emails"  name="check1" /></div>
                </div>
                <div className="GS">    
                    <div id="cont"><label htmlFor="Notify"><span>Send copy of HR Email to</span></label></div>
                    <div id="OperatorName"><input type="text" className="OperatorName" /></div>
                </div>
                <div className="GS">    
                    <div id="cont"><label htmlFor="Notify"><span>Send copy of HR Email to</span></label></div>
                    <div id="OperatorName"><input type="text" className="OperatorName" /></div>
                </div>
                <div className="GS">    
                    <div id="cont"><label htmlFor="Notify"><span>Your Email (Included in PDF) </span></label></div>
                    <div id="OperatorName"><input type="text" className="OperatorName" /></div>
                </div>
                <div className="GS">    
                    <div id="cont"><label htmlFor="Notify"><span>Your SITA (Included in PDF) </span></label></div>
                    <div id="OperatorName"><input type="text" className="OperatorName" /></div>
                </div>
                <div className="GS">    
                    <div id="cont"><label htmlFor="Notify"><span>Your Phone (Included in PDF) </span></label></div>
                    <div id="OperatorName"><input type="text" className="OperatorName" /></div>
                </div>
                <div className="GS">    
                    <div id="cont"><label htmlFor="Notify"><span>Your Mobile Phone (Included in PDF) </span></label></div>
                    <div id="OperatorName"><input type="text" className="OperatorName" /></div>
                </div>
                <div className="GS">    
                    <div id="cont"><label htmlFor="Notify"><span>Your FAX (Included in PDF) </span></label></div>
                    <div id="OperatorName"><input type="text" className="OperatorName" /></div>
                </div>
               <div className="GS">    
                    <div id="cont"><label htmlFor="Notify"><span>default HOTAC Details</span></label></div>
                    <div id="OperatorName"><textarea type="text" className="Emails details"  name="check1" /></div>
                </div>
                <div className="GS">    
                    <div id="cont"><label htmlFor="Notify"><span>Footer</span></label></div>
                    <div id="OperatorName"><textarea type="text" className="Emails details"  name="check1" /></div>
                </div>
        </fieldset> 
                           
        </div>
       
    )
  }
export default Gsettings
