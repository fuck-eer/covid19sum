import React from 'react'
import './showstate.css'


const showstate=(props)=>{

  
return(
   
    <tr onClick={props.click}>
    <td style={{color:"whitesmoke"}}>{props.name}</td>
    <td style={{color:"skyblue",textAlign:'center'}}>{props.active}</td>
    <td style={{color:"orange",textAlign:'center'}}>{props.confirm}</td>
    <td style={{color:"lightgreen", textAlign:'center'}}>{props.recover}</td>
    <td style={{color:"whitesmoke", textAlign:'center'}}>{props.update}</td>
    </tr>


);

}

export default showstate;