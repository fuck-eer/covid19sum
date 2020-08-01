import React from 'react'
// import '../../containers/showstates/showstate.css'

const showcity=(props)=>{
    
    
    return(



  <tr >
        <td style={{color:"Black"}}>{props.name}</td>
        <td style={{color:"Black"}}>{props.active}</td>
        <td style={{color:"Black"}}>{props.confirm}</td>
        <td style={{color:"Black"}}>{props.recover}</td>
        <td>---</td>
  </tr>
 

    );
};

export default showcity;
