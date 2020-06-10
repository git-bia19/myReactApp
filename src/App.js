import React from 'react';
import './App.css';
import './hello';

function App(props) {
  return (
    <div className ="style">
    <div>
    Hello from <strong>{props.name}</strong>,
    <hello firstName={props.name}></hello>
    </div>
    <div>
      <div>
        <h1>Packages offerred:</h1>
        </div>
        <h3>4000 Rs Packages:</h3>
      <ul>
       <li> 10 Mbps typhoon (Internet + Phone +TV) </li>
       <li>15 Mbps cyclone (Internet + Phone)</li>
      <li>  20 Mbps Tornado (Internet)</li>
      </ul>
      <h3>Top 3 packages of the month:</h3>
      <ol>
        <li>15 Mbps cyclone (Internet + Phone)</li>
        <li>20 Mbps Tornado (Internet)</li>
        <li>10 Mbps typhoon(Internet + Phone + TV)</li>
      </ol>
      <p>*Installation fee :{props.installationFee}(first month free)</p>
    </div>
    <div>
    <img alt="high speed internet" src={require('../src/high-speed.gif')} width="300" height="320"/>
     <p> Contact us: 0345 338122234</p>
    </div>
    </div>
  );
}

export default App;
