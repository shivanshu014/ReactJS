import React, {useState } from 'react'
import {useDispatch} from 'react-redux'
import { addTodo } from '../features/todo/todoSlice'

function AddTodo() {
    const [input, setInput] = useState('')
    const dispatch = useDispatch()
    // Dispatch yek Reducer ko use krke store mein changes krta h 

    const addTodoHandler = (e) => {
        e.preventDefault()
        dispatch(addTodo(input))
        setInput('')
    }
  return (
    <form onSubmit={addTodoHandler} className='flex gap-2 items-center mb-4 w-full max-w-lg mx-auto bg-white p-4 rounded shadow'>
        <input type="text" placeholder='Add a new todo' className='border w-full border-gray-300 rounded p-2 flex-1' 
        value={input} onChange={(e) => setInput(e.target.value)} />
        <button type="submit" className='bg-blue-500 text-white rounded p-2 cursor-pointer hover:bg-blue-600 transition-all duration-200   '>Add Todo</button>
    </form>
  )
}

export default AddTodo


// dispatch - is a function that is used to send actions to the Redux store. It is used to update the state of the store by sending an action to the reducer function. The dispatch function takes an action object as an argument and sends it to the reducer function, which then updates the state of the store based on the action type and payload.