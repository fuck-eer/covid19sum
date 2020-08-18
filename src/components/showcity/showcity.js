import React from 'react'
import CountUp from 'react-countup'
// import '../../containers/showstates/showstate.css'
import './showcity.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretUp } from '@fortawesome/free-solid-svg-icons'
const showcity = props => {
  const eleicon = <FontAwesomeIcon icon={faCaretUp} />

  let changecnf = null
  let changerec = null
  if (props.delcnf !== 0) {
    changecnf = (
      <span>
        {eleicon}
        <CountUp end={props.delcnf} start={props.delcnf-100} />
      </span>
    )
    changerec = (
      <span>
        {eleicon}
        <CountUp end={props.delrec} start={props.delrec-100} />
      </span>
    )
  }

  return (
    <tr>
      <td style={{ color: '#aacdbe' }}>{props.name}</td>

      <td className='dispfle'>
        <span className='dolo'>
          <CountUp end={props.confirm} />
        </span>
        <span className='daily'>{changecnf}</span>
      </td>
      <td className='actt'>
        <CountUp end={props.active} />
      </td>

      <td className='dispfle'>
        <span className='dolo'>
          <CountUp end={props.recover} />
        </span>
        <span style={{ color: '#00ff00' }} className='daily'>
          {changerec}
        </span>
      </td>
      <td style={{ textAlign: 'center', color: '#f5f1dd' }}>---</td>
    </tr>
  )
}

export default showcity
