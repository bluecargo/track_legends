import React, { useEffect } from 'react';
import './App.css';
import axios from 'axios'

function App() {
  useEffect(() => {
    async function fetchData () {
      const {data} = await axios.get('http://localhost:8000/polls')
      console.log('Backend reached with ', data);
    }
    fetchData()
  }, [])
  return (
    <div className="App">
      <header className="App-header">
        <h1>Track Legends</h1>
      </header>
    </div>
  );
}

export default App;
