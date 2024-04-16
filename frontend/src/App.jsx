import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

// Functions
import { getTest } from './Functions/test';

function App() {
  const [data, setData] = useState("self test API"); 
  useEffect(() => { 
    getTest() 
      .then((res) => {
        setData(res.message); 
      })
      .catch((err) => console.log(err)); 
  }, []); 

  return (
    <div className="App">
      <h1>{data}</h1>
    </div>
  );
}
export default App;
