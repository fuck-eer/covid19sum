import React from 'react'
import './showstate.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import{faCaretUp} from '@fortawesome/free-solid-svg-icons'


const showstate=(props)=>{

  const eleicon=<FontAwesomeIcon icon={faCaretUp}/>

  let changecnf=null
  let changerec=null
if(+props.delcnf!==0){
changecnf=<span>{eleicon}{props.delcnf}</span>
changerec=<span>{eleicon}{props.delrec}</span>

}



return(
   
    <tr onClick={props.click}>
    <td style={{color:"whitesmoke"}}>{props.name}</td>
    <td className='dispfle'><span style={{color:'#f5f1da'}} className='dolo'>{props.confirm}</span><span className='daily'>{changecnf} </span></td>
    <td className='actt'>{props.active}</td>
    <td className='dispfle'><span style={{color:'#f5f1da'}} className='dolo'>{props.recover}</span><span style={{color:'#00ff00'}} className='daily'> {changerec}</span></td>
    <td className='actt'>{props.update}</td>
    </tr>


);

}

export default showstate;