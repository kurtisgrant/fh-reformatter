import './App.css';
import Header from './Header';
import TradeConfirmation from './TradeConfirmation';
import { useState, useRef } from 'react';

function App() {
  const [outputData, setOutputData] = useState([]);
  const [processedBy, setProcessedBy] = useState('');
  const inputArea = useRef(null);
  const outputArea = useRef(null);

  function updateName(e) {
    setProcessedBy(e.target.value);
  }

  function clear() {
    setOutputData([]);
    inputArea.current.innerHTML = '';
  }

  function printOutput() {
    let printWindow = window.open('', 'PRINT', 'height=900,width=800');

    printWindow.document.write(`<html><head><title>Trade Confirmation</title>`);
    printWindow.document.write('</head><body style="font-family: sans-serif">');
    printWindow.document.write(outputArea.current.innerHTML);
    printWindow.document.write('</body></html>');

    printWindow.document.close(); // necessary for IE >= 10
    printWindow.focus(); // necessary for IE >= 10*/

    printWindow.print();
    printWindow.close();

    return true;
  }


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
          keyTds.push(td);
        } else {
          valTds.push(td);
        }
        isKey = !isKey;
      }
    }

    const keyLis = keyTds.map(td => td.querySelector('li'));
    const keys = keyLis.map(li => {
      if (!li) return '';
      return li.textContent;
    });
    const vals = valTds.map(td => {
      if (!td) return '';
      return td.textContent;
    });

    const dataMap = new Map();
    for (let i = 0; i < keys.length; i++) {
      const key = keys[i];
      const value = vals[i];
      if (key === '') continue;
      dataMap.set(key, value);
    }

    setOutputData(prev => [...prev, dataMap]);
    inputArea.current.innerHTML = '';

  }
  return (
    <div className="app">
      <h1>FH Trade Confirmation Reformatter</h1>

      <label>Processed By:
        <input type="text" name="processed_by" placeholder="Name" value={processedBy} onChange={updateName} />
      </label>

      <h2 className="main-header">Input</h2>
      <div ref={inputArea} className="input-area" contentEditable></div>
      <button onClick={scrape}>Add</button>
      <button onClick={clear}>Clear All</button>
      <h2 className="main-header">Output</h2>
      <button onClick={printOutput}>Print</button>

      <div className="output-area" ref={outputArea}>

        <Header items={outputData} processedBy={processedBy} />

        <div>{outputData.map(d => <TradeConfirmation data={d} key={d.get("Order Id")} />)}</div>

      </div>
    </div>
  );
}

export default App;
