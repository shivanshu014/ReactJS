import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeTodo, updateTodo } from '../features/todo/todoSlice'

function Todo() {
  const todos = useSelector((state) => state.todos)
  const dispatch = useDispatch()
  const [editId, setEditId] = useState(null)
  const [editText, setEditText] = useState('')

  const startEdit = (todo) => {
    setEditId(todo.id)
    setEditText(todo.text)
  }

  const saveEdit = (id) => {
    dispatch(updateTodo({ id, text: editText }))
    setEditId(null)
    setEditText('')
  }

  return (
    <div className='flex flex-col gap-2 mb-4 w-full mx-auto bg-gray-600 p-4 rounded shadow'>
      <h1 className='text-2xl font-bold mb-4'>Todo List</h1>
      <ul className="w-full">
        {todos.map((todo) => (
          <li
            key={todo.id}
            className='flex gap-2 items-center mb-4 bg-white p-4 rounded shadow justify-between'
          >
            {editId === todo.id ? (
              <>
                <input
                  className='border border-gray-400 rounded p-1 flex-1'
                  value={editText}
                  onChange={(e) => setEditText(e.target.value)}
                />
                <button
                  className='bg-green-500 text-white rounded p-2'
                  onClick={() => saveEdit(todo.id)}
                >
                  Save
                </button>
              </>
            ) : (
              <>
                <span className="flex-1">{todo.text}</span>
                <button
                  className='bg-yellow-500 text-white rounded p-2'
                  onClick={() => startEdit(todo)}
                >
                  U
                </button>
              </>
            )}
            <button
              className='bg-red-500 text-white rounded p-2'
              onClick={() => dispatch(removeTodo(todo.id))}
            >
              X
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Todo


// useSelector - is a hook that allows you to extract data from the Redux store state. It takes a selector function as an argument, which receives the entire Redux store state and returns the part of the state that you want to access. The useSelector hook subscribes to the Redux store and will re-render your component whenever the selected state changes. value lena hai