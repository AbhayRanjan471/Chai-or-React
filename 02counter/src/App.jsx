import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  //HOOKS
  let [counter, setCounter] = useState(15);
  
//  let counter = 5;

 const addValue = function (){
  console.log("clicked", counter);
  if(counter < 20){
    //updating the counter value
    counter = counter+1;
    setCounter(counter);
  }
 }

 const removeValue = function (){
  console.log("clicked", counter);
  if(counter > 0){
    //updating the counter value
    counter = counter-1;
    setCounter(counter);
  }
  
 }

  return (
    <>
      <h1>Chai or react</h1>
      <h2>Counter value: {counter}</h2>
      <button onClick={addValue}>Add value :{counter}</button>
      <br />
      <button onClick={removeValue}>remove value: {counter}</button>
      <br />
      <button>footer:{counter}</button>
    </>
  )
}

export default App
