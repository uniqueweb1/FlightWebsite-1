import { useState } from "react";
import Alt1 from "./AlternativeComp/alt1.js";
function ReqItem(){
    
    const [isSubscribed, setIsSubscribed] = useState(false)
    const handleChange = (event) => {
        setIsSubscribed(current => !current)
    }
    return (
    <div>
        <fieldset>
            <legend>
                General settings
            </legend>
            <div className="GS">    
                <div id="cont1" ><label htmlFor="operator"><span><b>Default</b></span></label></div>
             <div id="OperatorName"><textarea type="text" className="defaults"  name="check1" /></div>
            </div>

            <div>Billing info specified per an aircraft will overwrite default billing info</div><br/>
        
        <div className="GS">    
                    <div id='cont1'><label htmlFor="twoFactor"><span className="overwrite">G-SXYZ</span></label></div>
             <div><input id="twoFactor" className="inputs" type="checkbox" name="checkbox" value={isSubscribed} onChange={handleChange} /></div>
         </div>
        {isSubscribed ? <Alt1 />: ''}
         <div className="GS">    
                    <div id='cont1'><label htmlFor="twoFactor"><span className="overwrite">SP-ABCD</span></label></div>
             <div><input id="twoFactor" className="inputs" type="checkbox" name="checkbox"  /></div>
         </div>
         <div className="GS">    
                    <div id='cont1'><label htmlFor="twoFactor"><span className="overwrite">SP-EFGH</span></label></div>
             <div><input id="twoFactor" className="inputs" type="checkbox" name="checkbox"  /></div>
         </div>
         <div className="GS">    
             <div id='cont1'><label htmlFor="twoFactor"><span className="overwrite">SP-IJKL</span></label></div>
             <div><input id="twoFactor" className="inputs" type="checkbox" name="checkbox"  /></div>
         </div>
         <div className="GS">    
                    <div id='cont1'><label htmlFor="twoFactor"><span className="overwrite">SP-MNOP</span></label></div>
             <div><input id="twoFactor" className="inputs" type="checkbox" name="checkbox"  /></div>
         </div>
         <div className="GS">    
                    <div id='cont1'><label htmlFor="twoFactor"><span className="overwrite">SP-XXX</span></label></div>
             <div><input id="twoFactor" className="inputs" type="checkbox" name="checkbox"  /></div>
         </div>
         <div className="GS">    
             <div id='cont1'><label htmlFor="twoFactor"><span className="overwrite">TEXT</span></label></div>
             <div><input id="twoFactor" className="inputs" type="checkbox" name="checkbox"  /></div>
         </div>
        </fieldset>    
                            
        </div>    
    )
  }
export default ReqItem

