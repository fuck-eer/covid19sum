import React from 'react'
import  './showstate.css'
import Showcities from '../showcities/showcities'

const showstate=(props)=>{

  let showcities=null;
if(props.selected){
  showcities=<Showcities data={props.selected} />
}


    
    let k=props.state.lastupdatedtime.split(' ')
    
    return(

<tbody >
  <tr onClick={props.clicked}>
        <td>{props.state.state}</td>
        <td>{props.state.confirmed}</td>
        <td>{props.state.active}</td>
        <td>{props.state.recovered}</td>
        <td>{k[0]}</td>
  </tr>
{props.state.statecode===props.codee?showcities:null}
  </tbody>

    );
};

export default showstate;