import logo from './logo.svg';
import './App.css';
import { useState } from 'react';



function App() {


  let squareRoot = () => {
    let x = document.getElementById('number').value
    console.log(new Date().toUTCString()+", "+"[Function: Square Root],"+"[Value:"+x+"]");
    document.getElementById('result').innerText = "Result: "+Math.sqrt(x).toString();
  }

  let factorial = () => {
    let x = document.getElementById('number').value
    console.log(new Date().toUTCString()+", "+"[Function: Factorial],"+"[Value:"+x+"]");
    let res = 1
    for (let i=1; i<=x; i++)
      res = res * i
    document.getElementById('result').innerText = "Result: "+res.toString();
  }

  let power = () => {
    let x = document.getElementById('number').value
    console.log(new Date().toUTCString()+", "+"[Function: Power],"+"[Value:"+x+"]");
    let y = document.getElementById('power').value
    document.getElementById('result').innerText = "Result: "+Math.pow(x, y).toString();
  }

  let naturalLog = () => {
    let x = document.getElementById('number').value
    console.log(new Date().toUTCString()+", "+"[Function: Natural Log],"+"[Value:"+x+"]");
    document.getElementById('result').innerText = "Result: "+Math.log(x).toString();
  }

  return (
    <div className='container mt-5'>
      <div className='row'>
        {/* <div className='col'/> */}
        <div className='col'>
          <div className='row'>
            <div className='col'>
              <input className='form-control input-sm' type="text" id="number" placeholder="Number"></input>
            </div>
            <div className='col'>
              <input className='form-control input-sm' type="text" id="power" placeholder="Power"></input>
            </div>
          </div>
          <div className='row mt-3'>
            <div className='col'>
              <button className='btn-primary' onClick={squareRoot}>SquareRoot</button>
            </div>
            <div className='col'>
              <button className='btn-primary' onClick={factorial}>Factorial</button>
            </div>
            <div className='col'>
              <button className='btn-primary' onClick={naturalLog}>NaturalLog</button>
            </div>
            <div className='col'>
              <button className='btn-primary' onClick={power}>Power</button>
            </div>
            <h3 className='mt-5 ml-3' id='result'/>
          </div>
        </div>
        <div className='col'/>
      </div>
    </div>
  );
}

export default App;
