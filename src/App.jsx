import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
 
  const [api,setApi]=useState([]);
  const [error,setError]=("");


    useEffect(function(){

      async function apiFetch() {
        try{

   let result=await fetch("https://randomuser.me/api/?results=10");
        let data=await result.json();
        console.log(data.results);
        setApi(data.results);


        }catch{

          setError("failed to fetch");

        }
     
      }
      apiFetch();
    },[])


  return (
    <>
    {error&&<p>{error}</p>}
     {api&&api.map(function(items,index){
      return (<div key={index}><p>{items.name.first}</p>
      <img src={items.picture.large} /></div>
    ) })}
    </>
  )
}

export default App
