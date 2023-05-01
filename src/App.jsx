import { useEffect } from 'react'
import './App.css'

function App() {

 useEffect(()=>{
  fetch('http://localhost:5000/chef')
  .then(res => res.json())
  .then(data => console.log(data))
 },[])
 useEffect(()=>{
  fetch('http://localhost:5000/recipes')
  .then(res => res.json())
  .then(data => console.log(data))
 },[])
  return (
    
    <>
     <h2>how are you</h2>
    </>
  )
}

export default App
