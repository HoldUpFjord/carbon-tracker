

import { useState, useEffect } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';
 
interface Object {
  title: string;
  url: string;
  source: string
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
  fetch('https://climate-change-live402.p.rapidapi.com/news', options)
  .then(response => response.json())
  .then(data => setData(data))
  .catch(err => console.error(err));
  }, []);
   
  
 
  if (!data) {
    return <p>Loading...</p>
  }
 
 
  return (
    <div className="App">
      
     
      <div className='display:flex flex-flow:column'>
      {data.map( item => (
        <div className='border-2 border-white' key={item.title}>
          <p className='text-3xl font-bold underline'>{item.title}</p>
          <a href='{item.url}'>{item.url}</a>
          <p>{item.source}</p>
          </div>
      ))}
     </div>
    
      
    </div>
  )
}
export default App