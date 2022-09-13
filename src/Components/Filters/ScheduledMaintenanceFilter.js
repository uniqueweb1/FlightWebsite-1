import React, { useState } from 'react';
import '../../Styles/Filter.css'

function Filter () {
  const [state,setState] = useState(1);

	const action = (index) => {
	  setState(index)
	}
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
              <h3 onClick={()=>action(1)} className={`${state===1? 'mytab my-active-tab' : 'mytab'}`}>Earlier</h3>
                <h3 onClick={()=>action(2)} className={`${state===2? 'mytab my-active-tab' : 'mytab'}`}>Now</h3>
                <h3 onClick={()=>action(3)} className={`${state===3? 'mytab my-active-tab' : 'mytab'}`}>Later</h3>
                </div>
                <section id="content1" className={`${state===1? 'my-tab-content my-active-content':'my-tab-content'}`}>
              <div className='table-tab-content'>
       
           {/* date code handle */}
                  <p> 
                  <label htmlFor=""> 
                   <span>From</span>   
             <input type="date" name="" id="" className='filter-data-d'/>
             </label> 
                  </p>
                 
    {/* date code handle */}
                  <p>
                  <label htmlFor=""> 
                   <span>To</span>   
             <input type="date" name="" id=""  className='filter-data-d'/>
             </label> 
                  </p>
                  
                  <p>
                    <input type="radio" name="" id="" />
                 </p>

                { /*column two begin*/}
             

                  {/* date code handle */}
                <p>
                <label htmlFor=""> 
                   <span>From</span>   
             <input type="date" name="" id=""  className='filter-data-d'/>
             </label> 
                </p>

                {/* date code handle */}
                  <p>
                  <label htmlFor=""> 
                   <span>To</span>   
             <input type="date" name="" id=""  className='filter-data-d'/>
             </label> 
                  </p>

                  <p>
                  <input type="radio" name="" id="" />
                  </p>
                {/* column 2 end */}


         {/* column 3 start */}

                   <p>
                   <label htmlFor=""> 
                   <span>Month</span>   
             <input type="month" name="" id=""  className='filter-data-d'/>
             </label> 
                  </p>


    {/* date code handle */}
                  <p>
                  <label htmlFor=""> 
                   <span>year</span>   
             <input type="text" name="" id=""  className='filter-data-d'/>
             </label> 
                  </p>

                  <p>
               <input type="radio" name="" id="" />
                 </p>

{/* column 3 end */}
              </div>
              
              <div className='table-tab'>
                <h3>Aircraft</h3>
                </div>
                <div className='table-tab-content2'>
                  <p>Status</p>
                <p>
                <select id='aircraft' name='Aircraft'><option>--select--</option><option>IATA</option><option>IATA</option><option>IATA</option></select>
                </p>
                  
                  
      <button className='show'>Show</button>
     
                  </div>
                  </section>

                {/* SECTION TAB TWO*/}


                  <section id="content1" className={`${state===2? 'my-tab-content my-active-content':'my-tab-content'}`}>
              <div className='table-tab-content'>
       
           {/* date code handle */}
                  <p> 
                  <label htmlFor=""> 
                   <span>From</span>   
             <input type="date" name="" id="" className='filter-data-d'/>
             </label> 
                  </p>
                 
    {/* date code handle */}
                  <p>
                  <label htmlFor=""> 
                   <span>To</span>   
             <input type="date" name="" id=""  className='filter-data-d'/>
             </label> 
                  </p>
                  
                  <p>
                    <input type="radio" name="" id="" />
                 </p>

                { /*column two begin*/}
             

                  {/* date code handle */}
                <p>
                <label htmlFor=""> 
                   <span>From</span>   
             <input type="date" name="" id=""  className='filter-data-d'/>
             </label> 
                </p>

                {/* date code handle */}
                  <p>
                  <label htmlFor=""> 
                   <span>To</span>   
             <input type="date" name="" id=""  className='filter-data-d'/>
             </label> 
                  </p>

                  <p>
                  <input type="radio" name="" id="" />
                  </p>
                {/* column 2 end */}


         {/* column 3 start */}

                   <p>
                   <label htmlFor=""> 
                   <span>Month</span>   
             <input type="month" name="" id=""  className='filter-data-d'/>
             </label> 
                  </p>


    {/* date code handle */}
                  <p>
                  <label htmlFor=""> 
                   <span>year</span>   
             <input type="text" name="" id=""  className='filter-data-d'/>
             </label> 
                  </p>

                  <p>
               <input type="radio" name="" id="" />
                 </p>

{/* column 3 end */}
              </div>
              
              <div className='table-tab'>
                <h3>Aircraft</h3>
                </div>
                <div className='table-tab-content2'>
                  <p>Status</p>
                <p>
                <select id='aircraft' name='Aircraft'><option>--select--</option><option>IATA</option><option>IATA</option><option>IATA</option></select>
                </p>
                  
                  
      <button className='show'>Show</button>
     
                  </div>
                  </section>
             </div>
          </div>
          </>
          )

}

export default Filter;