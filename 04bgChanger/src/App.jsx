
import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState('olive');
  return (
    <div className='w-screen h-screen' style={{backgroundColor : color}}>
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center shadow-lg px-6 py-2 bg-white rounded-3xl gap-3'>
          <button 
          onClick={() => setColor('red')}
          className='outline-none px-4 py-1 rounded-full shadow-sm text-white' style={{backgroundColor : "red"}}>Red</button>
          <button
          onClick={() => setColor('green')}
          className='outline-none px-4 py-1 rounded-full shadow-sm text-white' style={{backgroundColor : "green"}}>Green</button>
          <button 
          onClick={() => setColor('black')}
          className='outline-none px-4 py-1 rounded-full shadow-sm text-white' style={{backgroundColor : "black"}}>Black</button>
          <button 
          onClick={() => setColor('yellow')}
          className='outline-none px-4 py-1 rounded-full shadow-sm text-white' style={{backgroundColor : "yellow"}}>Yellow</button>
        </div> 
      </div>
    </div>
  )
}     

export default App
// onClick={() => setColor('yellow')} - this is a function that sets the color to yellow when the button is clicked.
// This means "call this function when the button is clicked".

// You’re passing a function reference to onClick.

// The function will be called only when the user clicks the button.


// onClick={setColor('yellow')} - this is a function that sets the color to yellow when the button is clicked.
// This means "call this function immediately when the component renders".
// You’re calling the function immediately, not passing a reference to it.
// This means "call setColor('yellow') immediately" when rendering the component.

// So, React will execute setColor('yellow') right away, not when the button is clicked.

// It will pass the return value of setColor() (which is undefined) to onClick.