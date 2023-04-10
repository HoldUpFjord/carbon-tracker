

import { useState, useEffect } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';
 
interface NewsInfo {
  title:string;
  thumbnail:string;
  url:string
  published:string;
  source:string;
}

interface API {
  articles : NewsInfo[] | [];

}
  
function App() {
  const [data, setData] = useState<API>({ articles: [] });
  
  const options = {
    method: 'GET',
    headers: {

        'X-RapidAPI-Key': '4852155a1bmshd3e4dbc3f121d3ap1567d8jsn98b7b7e02f87',
        'X-RapidAPI-Host': 'climate-news-feed.p.rapidapi.com'
    }
  };
 useEffect(() => {
  // fetch('https://climate-news-feed.p.rapidapi.com/?source=Nasa%20Climate&limit=50&exclude=The%20Guardian', options)
  fetch('https://climate-news-feed.p.rapidapi.com/page/1?limit=10', options)
  // .then(response => response.json())
  .then(response => response.json())
  .then(response => setData({articles : response.articles}))
  // .then(data => setData(data))
  .catch(err => console.error(err));
  }, []);
   
  
 

  if (!data) {
    return <p>Loading...</p>
  }
 

  return (
     <div className="App">
    {/* //   <div className='max-w-lg'>
    //   <img className = 'max-w-xs 'src="/app.svg"></img>
    //   <div className=''>Illustration by <a href="https://icons8.com/illustrations/author/cj62pzCRUq1N">Julia Buzatti</a> from <a href="https://icons8.com/illustrations">Ouch!</a></div>
    // </div> */}

    
     {data.articles && 
    (<div className='flex flex-col justify-center'>
      {data.articles.map(child => (
        <div  key={child.title}>
          <p className='text-3xl font-bold underline w-auto'>{child.title}</p>
          <p>{child.source}</p>
          <p>{child.thumbnail}</p>
          <a href={child.url}><img src={child.thumbnail}></img></a>
        
          </div>
      ))}
     </div>)} 
    
      
    </div>
  )
}
export default App