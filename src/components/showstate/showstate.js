import React from 'react'
import './showstate.css'


const showstate=(props)=>{

  
return(
   
    <tr onClick={props.click}>
    <td style={{color:"whitesmoke"}}>{props.name}</td>
    <td style={{color:"whitesmoke"}}>{props.active}</td>
    <td style={{color:"whitesmoke"}}>{props.confirm}</td>
    <td style={{color:"whitesmoke"}}>{props.recover}</td>
    <td style={{color:"whitesmoke"}}>{props.update}</td>
    </tr>


);

}

export default showstate;