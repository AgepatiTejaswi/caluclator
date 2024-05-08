
import './App.css';
import React,{useState} from 'react';

function App() {
  const [value,setValue]=useState('');
  return (
    <div className="App">
      <header className="App-header">
       <div className='container'>
        <div className='caluclatorBox'>
          <form action=''>
            <div>
              <input type='text' className='inputBox' value={value}></input>
            </div>
            <div>
              <input type='button' value="AC" onClick={e=>setValue('')}/>
              <input type='button' value="DEL" onClick={e=>setValue(value.slice(0,-1))}/>
              <input type='button' value="%" onClick={e=>setValue(value+e.target.value)}/>
              <input type='button' value="+" onClick={e=>setValue(value+e.target.value)}/>
            </div>
            <div>
              <input type='button' value="7"  onClick={e=>setValue(value+e.target.value)}/>
              <input type='button' value="8" onClick={e=>setValue(value+e.target.value)}/>
              <input type='button' value="9" onClick={e=>setValue(value+e.target.value)}/>
              <input type='button' value="-" onClick={e=>setValue(value+e.target.value)}/>
            </div>
            <div>
              <input type='button' value="4" onClick={e=>setValue(value+e.target.value)}/>
              <input type='button' value="5" onClick={e=>setValue(value+e.target.value)}/>
              <input type='button' value="6" onClick={e=>setValue(value+e.target.value)}/>
              <input type='button' value="*" onClick={e=>setValue(value+e.target.value)}/>
            </div>
            <div>
              <input type='button' value="3" onClick={e=>setValue(value+e.target.value)}/>
              <input type='button' value="2" onClick={e=>setValue(value+e.target.value)}/>
              <input type='button' value="1" onClick={e=>setValue(value+e.target.value)}/>
              <input type='button' value="%" onClick={e=>setValue(value+e.target.value)}/>
            </div>
            <div>
              <input type='button' value="0" onClick={e=>setValue(value+e.target.value)}/>
              <input type='button' value="." onClick={e=>setValue(value+e.target.value)}/>
              <input type='button' value="=" className='equalsButton' onClick={e=>setValue(eval(value))}/>
            
            </div>
          </form>

        </div>
       </div>
      </header>
    </div>
  );
}

export default App;
