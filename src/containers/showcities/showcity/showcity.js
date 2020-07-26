import React from 'react'
import '../../showstate/showstate.css'

const showcity=(props)=>{
    
    
    return(



  <tr >
        <td>{props.name}</td>
        <td>{props.confirmed}</td>
        <td>{props.active}</td>
        <td>{props.recovered}</td>
        <td>---</td>
  </tr>
 

    );
};

export default showcity;
