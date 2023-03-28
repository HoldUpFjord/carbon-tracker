

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
      <div className='max-w-lg'>
      <img className = 'max-w-xs 'src="/app.svg"></img>
      <div className=''>Illustration by <a href="https://icons8.com/illustrations/author/cj62pzCRUq1N">Julia Buzatti</a> from <a href="https://icons8.com/illustrations">Ouch!</a></div>
      </div>

      <div className='flex flex-col justify-center'>
      {data.map( item => (
        <div  key={item.title}>
          <p className='text-3xl font-bold underline w-auto'>{item.title}</p>
          <a href='{item.url}' target={'_blank'}>{item.url}</a>
          <p>{item.source}</p>
          </div>
      ))}
     </div>
    
      
    </div>
  )
}
export default App