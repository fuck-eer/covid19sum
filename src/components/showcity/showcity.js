import React from 'react'
// import '../../containers/showstates/showstate.css'

const showcity=(props)=>{
    
    
    return(



  <tr >
        <td style={{color:"#aacdbe"}}>{props.name}</td>
        <td style={{color:"skyblue", textAlign:'center'}}>{props.active}</td>
        <td style={{color:"orange", textAlign:'center'}}>{props.confirm}</td>
        <td style={{color:"lightgreen", textAlign:'center'}}>{props.recover}</td>
        <td style={{color:"#f7f5dd", textAlign:'center'}}>---</td>
  </tr>
 

    );
};

export default showcity;
