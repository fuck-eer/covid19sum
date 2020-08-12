import React from 'react'
// import '../../containers/showstates/showstate.css'
import './showcity.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import{faCaretUp} from '@fortawesome/free-solid-svg-icons'
const showcity=(props)=>{
  const eleicon=<FontAwesomeIcon icon={faCaretUp}/>
    
  let changecnf=null
  let changerec=null
if(props.delcnf!==0){
changecnf=<span>{eleicon}{props.delcnf}</span>
changerec=<span>{eleicon}{props.delrec}</span>

}


    return(



  <tr >
        <td style={{color:"#aacdbe"}}>
        {props.name}
        </td>
     
        <td className='dispfle'>
         <span  className='dolo'>{props.confirm}</span>
          <span className='daily'>{changecnf}</span>
           </td>
           <td className='actt'>
         {props.active}
         </td>
      
        <td className='dispfle'>
        <span   className='dolo'>{props.recover}</span>
         <span style={{color:'#00ff00'}} className='daily'>{changerec}</span>
         </td>
        <td style={{textAlign:'center',color:'#f5f1dd'}}>---</td>
  </tr>
 

    );
};

export default showcity;
