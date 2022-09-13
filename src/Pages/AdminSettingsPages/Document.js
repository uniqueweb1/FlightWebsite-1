
function Documents(){
     return (
        <div>
            <fieldset>
                <legend>
                    Flight Document
                </legend>
                <div className="DS">    
                    <div><b>Document Name</b></div>
                    <div><b>Default on</b></div>
                    <div><b>Airport Code</b></div>
                </div>
                <div className="DS">    
                    <div><label><span>Flight Order </span></label></div>
                    <div><input className="inputs" type="checkbox" name="checkbox"/></div>
                    <div><select><option>IATA</option><option>ICAO</option></select></div>
                </div>
                <div className="DS">    
                    <div><label><span>General Declaration</span></label></div>
                    <div><input className="inputs" type="checkbox" name="checkbox" /></div>
                    <div><select><option>IATA</option><option>ICAO</option></select></div>
                </div>
                <div className="DS">    
                    <div><label><span>Trip Sheet</span></label></div>
                    <div><input className="inputs" type="checkbox" name="checkbox"/></div>
                    <div><select><option>IATA</option><option>ICAO</option></select></div>
                </div>
                <div className="DS">    
                    <div><label htmlFor="twoFactor"><span>Airport Brief </span></label></div>
                    <div><input id="twoFactor" className="inputs" type="checkbox" name="checkbox"/></div>
                    <div>Not acceptable</div>
                </div>
                <div className="DS">    
                    <div><label><span>Pax Manifest </span></label></div>
                    <div><input className="inputs" type="checkbox" name="checkbox" /></div>
                    <div><select><option>IATA</option><option>ICAO</option></select></div>
                </div>
                <div className="DS">    
                    <div><label><span>Pax Information </span></label></div>
                    <div><input className="inputs" type="checkbox" name="checkbox" /></div>
                    <div><select><option>IATA</option><option>ICAO</option></select></div>
                </div>
            </fieldset>
            <div className="document">
                    <div className="DS">    
                        <div id="cont"><label htmlFor="Notify"><b>Flight document reply to:</b></label></div>
                        <div id="OperatorName"><input type="text" className="OperatorName" /></div>
                    </div>
                    <div className="DS">    
                        <div id="cont"><label><span>CC</span></label></div>
                        <div id="OperatorName"><textarea type="text" className="Emails"  name="check1" /></div>
                    </div>
                    <div className="DS">    
                            <div id="cont"><label><span>Default content</span></label></div>
                            <div id="OperatorName"><textarea type="text" className="Emails details"  name="check1" /></div>
                        </div>
                    <div className="DS">    
                        <div><label><span>Automatically add dispacher signature to Flight Order </span></label></div>
                        <div><input className="inputs" type="checkbox" name="checkbox"  defaultChecked={true}/></div>
                    </div>
                    <div className="DS">    
                        <div><label htmlFor="twoFactor"><span>Show number on Flight Order</span></label></div>
                        <div><input id="twoFactor" className="inputs" type="checkbox" name="checkbox"/></div>
                    </div>
                    <div className="DS">    
                        <div><label><span>Show Airport notes on Trip Sheet</span></label></div>
                        <div><input className="inputs" type="checkbox" name="checkbox" defaultChecked={true} /></div>
                    </div>
                    <div className="DS">    
                        <div><label><span>Show PDF summary on Trip Sheet</span></label></div>
                        <div><input className="inputs" type="checkbox" name="checkbox" /></div>
                    </div>
                    <div className="DS">    
                        <div><label><b>Default fuel cards on Trip Sheet</b></label></div>
                    </div>
                    <div className="DS">    
                        <div><label><span>Show pax labels on pax Manifest</span></label></div>
                        <div><input className="inputs" type="checkbox" name="checkbox" /></div>
                    </div>
                    <div className="DS">    
                        <div><label><span>Show on pax Manifest</span></label></div>
                        <div><input className="inputs" type="checkbox" name="checkbox" /></div>
                    </div>
                    <div className="DS">    
                        <div><label><span>Show crew duties PDF on different pages:</span></label></div>
                        <div><input className="inputs" type="checkbox" name="checkbox" /></div>
                    </div> 
               </div>
            </div>
    )
  }
  
  export default Documents;