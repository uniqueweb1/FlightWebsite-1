import React, { useState } from 'react';
import '../../Styles/Filter.css'


function Filter () {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    return(
        <>
   <p className='filter-items' onClick={handleClick}>
            <i className={click? 'fas fa-times' : 'show-filter'}></i>
              show filter
          </p>
    
          <div className={click? 'filter-content active' : 'filter-item'}>
             <div className='mytable'>
              <div className='table-tab'>
                </div>
                <div className='table-tab-content2'>
   
                    <p className='table-tab-content2-p'>Aircraft Type</p>
                <p className='table-tab-content2-p'>
                <select id='aircraft' name='Aircraft' className='select-type'><option>--select--</option><option>IATA</option><option>IATA</option><option>IATA</option></select>
                </p>
                    
                  <p className='table-tab-content2-p'>Aircraft </p>
                       <p className='table-tab-content2-p'>
                       <select id='aircraft' name='Aircraft'><option>--select--</option><option>IATA</option><option>IATA</option><option>IATA</option></select>
                        </p>
                   
                  <p className='table-tab-content2-p'>Document Type</p>
                       <p className='table-tab-content2-p'>
                       <select id='aircraft' name='Aircraft' ><option>--select--</option><option>IATA</option><option>IATA</option><option>IATA</option></select>
                        </p>
                    
                  <p className='table-tab-content2-p'>Document Name</p>
                       <p className='table-tab-content2-p'>
                       <select id='aircraft' name='Aircraft' className='select-type'><option>--select--</option><option>IATA</option><option>IATA</option><option>IATA</option></select>
                        </p>

                        <p className='table-tab-content2-p'><input type="checkbox" name="show-not-required" id="notRequired"  defaultChecked={true}/></p>
                        <p className='table-tab-content2-p'>Show not required</p>

                        <p className='table-tab-content2-p'><input type="checkbox" name="show-empty" id="showEmpty" defaultChecked={true} /></p>
                        <p className='table-tab-content2-p'>Show Empty</p>
                  </div>
             </div>
          </div>
          </>
          )

}

export default Filter;