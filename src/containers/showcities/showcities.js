import React from 'react'
import Showcity from './showcity/showcity'
import Auxi from '../../hoc/Auxi/Auxi'


const showcities=(props)=>{
    const k=Object.keys(props.data)
    const l=Object.values(props.data)
    let city=k.map((e,i) =>(<Showcity name={e} confirmed={l[i].confirmed} active={l[i].active} recovered={l[i].recovered} key={e}  />))

    return(<Auxi>

{city}

    </Auxi>
    );
};

export default showcities;