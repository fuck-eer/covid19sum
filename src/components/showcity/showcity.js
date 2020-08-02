import React from 'react'
// import '../../containers/showstates/showstate.css'

const showcity=(props)=>{
    
    
    return(



  <tr >
        <td style={{color:"#aacdbe"}}>{props.name}</td>
        <td style={{color:"skyblue"}}>{props.active}</td>
        <td style={{color:"orange"}}>{props.confirm}</td>
        <td style={{color:"lightgreen"}}>{props.recover}</td>
        <td style={{color:"#f7f5dd"}}>---</td>
  </tr>
 

    );
};

export default showcity;
