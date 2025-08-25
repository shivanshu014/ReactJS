import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// React Hooks are built-in functions that allow functional components to use features like state, lifecycle methods, and side effects without writing class components.

// Major use of the react is to control the UI 
function App() {
  // let counter = 5;
  let [counter, setCounter] = useState(0)
  // useState is a hook that allows you to add state to a functional component
  // functional component -------functional component in React is simply a JavaScript function that returns JSX (the UI layout) and renders part of the UI.
  // useState returns an array with two elements: the current state value and a function to update it
  // useState(0) - is the initial value of the state
  // setCounter - is a function that updates the state value
  // counter - is the current state value
  const addValue = () => {
    console.log(counter)
    if(counter+1>20){
      return 20;
    }
    // ✅ Safe way to update counter multiple times
// Using functional updates ensures React uses the latest state value
setCounter((prevCounter) => prevCounter + 1);
setCounter((prevCounter) => prevCounter + 1);

// ❌ Not safe when updating multiple times
// This reads the old `counter` value and may cause incorrect results
// Because React batches updates, all three may use the same stale value
// Result: counter may only increase by 1 instead of 3
// setCounter(counter + 1);
// setCounter(counter + 1);
// setCounter(counter + 1);

// ✅ Summary:
// Always use functional updates when the new state depends on the previous one


  }
  const removeValue = () => {
    console.log(counter);
    // counter = counter + 1;
    if(counter-1<0){
      return 0;
    }
    setCounter(counter-1)
  }
  // setCounter(counter - 1);
  // setCounter((prevCounter) => prevCounter - 1); - is the safe way to update the counter
  return (
    <>
    <h1>React Counter</h1>
    <h2>Value : {counter}</h2>
    <button onClick={addValue}>Add value</button>
    <button onClick={removeValue}>Remove value</button>  
    </>
  )
}

export default App
