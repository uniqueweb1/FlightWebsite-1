function Alternative(props){
    // console.log(props);
   return(
       <div>
           <div className="GS">    
                <div id="cont1" ><label htmlFor="operator"><div>Defualt operation billing info will be overwritten by this aircraft specific value<br/>Slot if required <br/>Refueling</div></label></div>
             <div id="OperatorName"><textarea type="text" className="defaults"  name="check1" /></div>
            </div>
       </div>
   )
}
export default Alternative;