import React, { Component } from 'react'
import Showcity from '../../components/showcity/showcity'
import Auxi from '../../hoc/Auxi/Auxi'
import axios from 'axios'
import Spinner from '../../components/UI/Spinner/Spinner'



class showcities extends Component{

state={
    districtwise:null,
    code:this.props.code,

}

componentDidMount(){
  
    axios.get('https://api.covid19india.org/state_district_wise.json')
    .then(res=>{this.setState({districtwise:res.data})})
    .catch(()=>console.log("out of data we are!"));
  
  }



    render(){

let cities=<Spinner />

        if(this.state.districtwise){
            const k=Object.values(this.state.districtwise)

        k.forEach(e=>{
         if(e.statecode===this.state.code)
         {let l=Object.keys(e.districtData)
         let m=Object.values(e.districtData)
        cities=l.map((el,i)=>{
            return(
                <Showcity name={el} active={m[i].active} confirm={m[i].confirmed} recover={m[i].recovered} delcnf={m[i].delta.confirmed} delrec={m[i].delta.recovered} key={el+m[i].active}/>
            );
        })
         }   
        });

        }

        // console.log(cities)

       return(
<Auxi>
        {cities}
</Auxi>
        );
    }
};

export default showcities;