//https://api.covid19india.org/data.json
//https://api.covid19india.org/state_district_wise.json
import React, { Component } from 'react';
import './App.css';
import Auxi from './hoc/Auxi/Auxi';
import Showstate from './containers/showstate/showstate'
import axios from 'axios'



class App extends Component {

state={
  statewise:null,
  districtwise:null,
  selectedis:null,
  showdistrict:false,
  codee:null,
}

componentDidMount(){

  axios.get('https://api.covid19india.org/data.json')
  .then(res=>{this.setState({statewise:res.data.statewise})})
  .catch(()=>console.log("out of data we are!"));

  axios.get('https://api.covid19india.org/state_district_wise.json')
  .then(res=>{this.setState({districtwise:res.data})})
  .catch(()=>console.log("out of data we are!"));

}

districttoggle=(code)=>{
this.setState((prev)=>{return {showdistrict:!prev.showdistrict}});

if(this.state.showdistrict)
{ Object.values(this.state.districtwise).forEach(e=>{
  if(e.statecode===code)
   this.setState({selectedis: e.districtData,codee:code});
})

 
}

}





  render() {



let showstate=(<tbody>
  <tr >
        <td>Loading...</td>
        <td>Loading...</td>
        <td>Loading...</td>
        <td>Loading...</td>
        <td>Loading...</td>
  </tr>
  </tbody>);
    if(this.state.statewise&&this.state.districtwise)
showstate=this.state.statewise.map(e=>{
  
  return(
    
  <Showstate state={e} key={e.state} clicked={()=>this.districttoggle(e.statecode) } selected={this.state.selectedis} codee={this.state.codee}/>
 


  
);})




    return (<Auxi>
    <h1>COVID-19 Summary</h1>
      <table>
      <thead>
  <tr style={{textDecoration:"uppercase", textAlign:'center'}} className="tbl-header">
    <th style={{color:"Black"}}>State</th>
    <th style={{color:"maroon"}}>Confirmed</th>
    <th style={{color:"orange"}}>Active</th>
    <th style={{color:"Green"}}>recoverd</th>
    <th style={{color:"Black"}}>updated last</th>
  </tr>
  </thead>
  
  {showstate}
 
 
    </table>
      </Auxi>
    );
  }
}

export default App;
