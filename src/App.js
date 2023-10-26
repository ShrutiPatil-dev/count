
import { useState } from 'react';
import './App.css';

function App() {
  const [ counter,setCounter] = useState(0);

  function incrementCounter (){
    setCounter( prevState => prevState + 1 )
  }
  function decrementCounter (){
    setCounter( prevState => prevState - 1 )
  }

  function reSet(){
    setCounter(0)
  }


  return (
    <div className="main-container">
       <h1>Counter</h1>
       <div className="center-container">
            <button onClick={decrementCounter} className='icons'>-</button>
            <div className="count">Current value is {counter}</div>
            <button onClick={incrementCounter}className='icons'>+</button>
       </div>
       <button onClick={reSet} className='icons-reset'>Reset</button>
    </div>
  );
}

export default App;
