import React, { Component } from 'react'
import  './showstates.css'
import Showstate from '../../components/showstate/showstate'
import Auxi from '../../hoc/Auxi/Auxi'
import axios from 'axios'
import Spinner from '../../components/UI/Spinner/Spinner.js'
import Showcities from '../showcities/showcities'

class showstate extends Component{
state={
statewise:null,
isSelected:false,
selcode:null,
}


componentDidMount(){

  axios.get('https://api.covid19india.org/data.json')
  .then(res=>{this.setState({statewise:res.data.statewise})})
  .catch(()=>console.log("out of data we are!"));

}

clickHandler(code){

this.setState(prevstate=>{return{isSelected:!prevstate.isSelected,selcode:code}})
}



render()
{
  let citywise=null
  let statewise=<Spinner />
// console.log(this.state.isSelected);
if(this.state.statewise){

  statewise=this.state.statewise.map(e=>{
    
    if(this.state.isSelected ){
      citywise=<Auxi><br/><br/><p style={{textAlign:"center",fontSize:'13px',marginLeft:'220%',textTransform:'uppercase', color:'#f7f5dd'}}>Districts</p>
      
<tr style={{textDecoration:"uppercase", textAlign:'center'}} className="tbl-header">
 <th style={{color:"#aacdbe",fontSize:'15px', padding:'8px',borderRadius:'8px'}}>DISTRICT</th> 
 <th style={{color:"skyblue",fontSize:'15px', padding:'8px',borderRadius:'8px'}}>ACTIVE</th>
 <th style={{color:"orange",fontSize:'15px', padding:'8px',borderRadius:'8px'}}>CONFIRMED</th>
 <th style={{color:"lightGreen",fontSize:'15px', padding:'8px',borderRadius:'8px'}}>RECOVERED</th>
 <th style={{color:"white",fontSize:'15px', padding:'8px',borderRadius:'8px'}}>UPDATED ON</th>
</tr>

      <Showcities code={this.state.selcode} />
      <p style={{textAlign:"center", fontSize:'13px',display:'block' ,marginLeft:'220%', textTransform:'uppercase' ,color:'#f7f5dd'}}>End</p><br/><br/></Auxi>
    }

  return(
    <Auxi key={e.statecode}>
  <Showstate name={e.state} active={e.active} confirm={e.confirmed} recover={e.recovered} update={e.lastupdatedtime.split(' ')[0]}  click={()=>this.clickHandler(e.statecode)} />
  {e.statecode===this.state.selcode?citywise:null}
</Auxi>
  );
  
  })


  if(this.state.isSelected ){
    citywise=<Showcities code={this.state.selcode} />
  }

}


  
    return(
<table>
<thead>
<tr style={{textDecoration:"uppercase", textAlign:'center'}} className="tbl-header">
 <th style={{color:"white", position:'sticky',top:'0',backgroundColor:"#222831"}}>STATE</th> 
 <th style={{color:"skyblue", position:'sticky',top:'0',backgroundColor:"#222831"}}>ACTIVE</th>
 <th style={{color:"orange", position:'sticky',top:'0',backgroundColor:"#222831"}}>CONFIRMED</th>
 <th style={{color:"lightGreen", position:'sticky',top:'0',backgroundColor:"#222831"}}>RECOVERED</th>
 <th style={{color:"white", position:'sticky',top:'0',backgroundColor:"#222831"}}>UPDATED ON</th>
</tr>
</thead>
<tbody>
{statewise}
</tbody>
</table>
      

    );
}
};

export default showstate;