import React from 'react';
import TableItem from './TableItem.js';

function Item(props){ 
    console.log(props.Ratings)
       return(
            props.User.map((item) => (
               <TableItem  key={item.user} users={item} Ratings={props.Ratings}  />
           ))          
        )     

}
 export default Item 