import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import axios from "axios";

function App() {
  const [collection, setCollection] = useState("")

  const fetchData = async () => {
    return await axios.get('/.netlify/functions/collections')
  }

  useEffect(() => {
    fetchData()
        .then((response) => {
          setCollection(response.data.results)
        })
        .catch((error) => console.error(error))
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {collection}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
