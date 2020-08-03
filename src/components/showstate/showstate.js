import React from 'react'
import './showstate.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import{faCaretUp} from '@fortawesome/free-solid-svg-icons'


const showstate=(props)=>{

  const eleicon=<FontAwesomeIcon icon={faCaretUp}/>
return(
   
    <tr onClick={props.click}>
    <td style={{color:"whitesmoke"}}>{props.name}</td>
    <td className='dispfle'><span style={{color:'#f5f1da'}} className='dolo'>{props.confirm}</span><span className='daily'>{eleicon}  {props.delcnf} </span></td>
    <td className='actt'>{props.active}</td>
    <td className='dispfle'><span style={{color:'#f5f1da'}} className='dolo'>{props.recover}</span><span style={{color:'#00ff00'}} className='daily'> {eleicon} {props.delrec}</span></td>
    <td className='actt'>{props.update}</td>
    </tr>


);

}

export default showstate;