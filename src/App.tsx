

import { useState, useEffect } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';
 
interface Object {
  title: string;
  url: string;
}

  
function App() {
  const [data, setData] = useState<Object[]>([]);
  
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '4852155a1bmshd3e4dbc3f121d3ap1567d8jsn98b7b7e02f87',
      'X-RapidAPI-Host': 'climate-change-live402.p.rapidapi.com'
    }
  };
 useEffect(() => {
  fetch('https://climate-change-live402.p.rapidapi.com/news/latimes', options)
  .then(response => response.json())
  .then(data => setData(data))
  .catch(err => console.error(err));
  }, []);
   
  
 
  if (!data) {
    return <p>Loading...</p>
  }
 
 
  return (
    <div className="App">
      
     
      <div>
      {data.map( item => (
        <div key={item.title}>
          <p>{item.title}</p>
          <p>{item.url}</p>
          </div>
      ))}
     </div>
    
      
    </div>
  )
}
export default App