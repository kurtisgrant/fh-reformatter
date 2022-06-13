import './App.css';
import { useState, useRef } from 'react';

function App() {
  const [outputData, setOutputData] = useState([]);
  const inputArea = useRef(null);


  function scrape() {
    const keyTds = [];
    const valTds = [];
    const trNodes = inputArea.current.querySelectorAll('tr');
    for (const tr of trNodes) {
      if (tr.children.length === 1) {
        continue;
      }
      let isKey = true;
      for (const td of tr.children) {
        if (isKey) {
          keyTds.push(td)
        } else {
          valTds.push(td)
        }
        isKey = !isKey;
      }
    }

    const keyLis = keyTds.map(td => td.querySelector('li'))
    const keys = keyLis.map(li => {
      if (!li) return ''
      return li.textContent
    })
    const vals = valTds.map(td => {
      if (!td) return ''
      return td.textContent
    });

    const dataMap = new Map()
    for (let i = 0; i < keys.length; i++) {
      const key = keys[i]
      const value = vals[i]
      if (key === '') continue;
      dataMap.set(key, value)
    }

    setOutputData(prev => [...prev, dataMap])
    inputArea.current.innerHTML = ''

  }
  return (
    <div className="app">
      <h1>FH Reformatter</h1>
      <h2>Input</h2>
      <div ref={inputArea} className="input-area" contentEditable></div>
      <button onClick={scrape}>Add</button>
      <h2>Output</h2>
      <div>{outputData}</div>
    </div>
  );
}

export default App;
