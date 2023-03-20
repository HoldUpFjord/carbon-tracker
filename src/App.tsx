import { useState, useEffect } from 'react';
import reactLogo from './assets/react.svg'
import './App.css'


 

  
function App() {
  const [data, setData] = useState(null);
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
  .then(response => console.log(response))
  .then(json => setData(json))
  .catch(err => console.error(err));
  }, []);
   
  

 
  if (!data) {
    return <p>Loading...</p>
  }
 

 
  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
     <ul>
      {data.map( item => (
        <li key={item.id}>{item.title}</li>
      ))}
     </ul>
      <button></button>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      
    </div>
  )
}



export default App
