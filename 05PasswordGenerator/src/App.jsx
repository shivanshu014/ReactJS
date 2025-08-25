import { useCallback, useEffect, useRef, useState } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passwordGenertor = useCallback(()=>{  // useCallback is used to memorize completely or part or the thread which can be used
    let pass = ""
    let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"

    if(numberAllowed) str+="0123456789";
    if(charAllowed) str+="!@#$%^&*()_+-=[]{}|;:',.<>?/~`";

    for(let i=1; i<=length; i++) {
      let char = Math.floor(Math.random()*str.length + 1);
      pass += str.charAt(char)
    }
    setPassword(pass)
  }, [numberAllowed, charAllowed, length, setPassword]) // if any of the value is changed then it will run again
  // useCallback is used to memorize the function and it will not run again unless the value is changed 

  
  const passwordRef = useRef(null) // we can take the reference of the webpage of any element 

  const copyPasswordToClipboard = useCallback(()=>{ 
    passwordRef.current?.select(); // select the password
    window.navigator.clipboard.writeText(password)
  }, [password])


  useEffect(()=>{ // when my page is loaded then first time it is called 
    passwordGenertor()
  }, [numberAllowed, length, charAllowed, passwordGenertor]) //if any change occure the it will run again


  return (
  <>
    <div className='w-full shadow-md rounded-lg px-8 my-8 shadow-amber-500 py-4 text-3xl bg-gray-700'>
      <h1 className='text-3xl text-white text-center'>Password Generator</h1>

      <div className='flex shadow rounded-lg overflow-hidden my-2 mx-4'>
        <input
          type="text"
          placeholder='Password'
          value={password}
          className='outline-none bg-white py-1 px-2 w-full text-gray-700'
          readOnly
          ref={passwordRef}
        />
        <button 
        onClick={copyPasswordToClipboard}
        className='bg-red-500 text-white px-4 py-2 cursor-pointer hover:bg-red-600 transition duration-200'>Copy</button>
      </div>
      <div className='flex text-lg gap-x-5'>
      <div className='flex items-center gap-x-5'>
        <input 
        type="range"
        min={6}
        max={100}
        value={length}
         className='cursor-pointer'
         onChange={(e) => {setLength(e.target.value)}}
          />
          <label>Length: {length}</label>
      </div>
      <div className="flex items-center gap-x-2">
      <input
          type="checkbox"
          defaultChecked={numberAllowed}
          id="numberInput"
          onChange={() => {
              setNumberAllowed((prev) => !prev);
          }}
      />
      <label htmlFor="numberInput">Numbers</label>
      </div>
      <div className="flex items-center gap-x-1">
          <input
              type="checkbox"
              defaultChecked={charAllowed}
              id="characterInput"
              onChange={() => {
                  setCharAllowed((prev) => !prev )
              }}
          />
          <label htmlFor="characterInput">Characters</label>
      </div>
    </div>
    </div>
  </>
);

  
}

export default App
