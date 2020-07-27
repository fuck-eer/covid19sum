import React from 'react'
import  './showstate.css'
import Showcities from '../showcities/showcities'
import Auxi from '../../hoc/Auxi/Auxi'
const showstate=(props)=>{

  let showcities=null;
if(props.selected){
  showcities=<Auxi><br/><br/><p style={{textAlign:"center",fontSize:'13px',marginLeft:'220%',textTransform:'uppercase'}}>Districts</p><Showcities data={props.selected} /><p style={{textAlign:"center", fontSize:'13px',display:'block' ,marginLeft:'220%', textTransform:'uppercase'}}>End</p><br/><br/></Auxi>
}


    
    let k=props.state.lastupdatedtime.split(' ')
    
    return(

<tbody >
  <tr>
        <td onClick={props.clicked}>{props.state.state}</td>
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