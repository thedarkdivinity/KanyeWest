import React, { useState } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Heading from './Heading';
import Quote from './Quote';
import Sayush from './Sayush';
import './App.css';

function App() {
  const [quote,setQuote]=useState();
  return (
    <div className="App bg-dark">
    <Heading/>
    
    <button className="btn btn-primary mt-4" onClick={()=>{
      fetch("https://api.kanye.rest/").then((response)=>{
        return response.json();
      }).then((data)=>{
        setQuote(data.quote);
      })
    }}>GET QUOTE</button>
    <Quote text={quote}/>
    <Sayush/>
    </div>
  );
}

export default App;
