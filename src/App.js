//https://api.covid19india.org/data.json
//https://api.covid19india.org/state_district_wise.json
import React, { Component } from 'react';
import './App.css';
import Auxi from './hoc/Auxi/Auxi';
import Showstate from './containers/showstates/showstates'




class App extends Component {

state={
  hidestates:false,
}

  render() {



    return (
    <Auxi>
    <h1>COVID-19 Summary</h1>
     <Showstate />
    </Auxi>
    );
  }
}

export default App;
