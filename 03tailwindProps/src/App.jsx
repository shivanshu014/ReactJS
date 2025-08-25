import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'
function App() {
  let obj1 = {
    name : "tailwind",
    btn : "Click me",
  }
  let arr = [1, 2, 3]
  return (
    <>
    <h1 className='bg-amber-600 text-2xl rounded-2xl mb-4'>Hello world</h1>
    <Card obj={obj1}/>
    <Card name='CSS'/>
    
    </>
  )
}

export default App
// Props are used to pass data from parent to child components (unidirectional data flow)
// You can pass strings, numbers, objects, arrays, functions, etc. as props

// Objects and arrays are passed by reference (changes affect original object if mutated)
// Primitives (like string, number, boolean) are passed by value (copies are passed)

// Props cannot be modified inside child components (they are read-only)

