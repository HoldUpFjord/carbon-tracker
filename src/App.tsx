import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'


function App() {
  const [count, setCount] = useState(0)

  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '4852155a1bmshd3e4dbc3f121d3ap1567d8jsn98b7b7e02f87',
      'X-RapidAPI-Host': 'climate-change-live402.p.rapidapi.com'
    }
  };
 function GetNews() { 
  fetch('https://climate-change-live402.p.rapidapi.com/news', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));
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
<<<<<<< HEAD
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => GetNews()}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <div className="news">
        <button onClick={() => setCount((count) => count + 1)}>
          
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
=======
     
      {data.map( item => (
       <div key={item.id}>
        <h2>{item.title}</h2>
        <p>{item.source}</p>
       </div>
       ))}
     
>>>>>>> 1044f8311ee41b57b258654f6345f3cd2b2b21bc
      <button></button>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}



export default App
