import { useState } from "react";

function Ratings(props){
    
     console.log(props.Ratings)
    return (
        <div>
          <div>{props.Ratings.map((rate) => rate + 2)}</div>
        </div>
       
    )
  }



export default Ratings

