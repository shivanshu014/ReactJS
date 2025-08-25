import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos: [
        {
            id: 1,
            text: "Hello World!",
        }
    ]
}

export const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                text: action.payload
            }
            state.todos.push(todo)
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => (todo.id!==action.payload))
        },
        updateTodo: (state, action) => {
            // state.todos = state.todos.map((todo) => {
            //     if (todo.id === action.payload.id) {
            //         return {
            //             ...todo,
            //             text: action.payload.text
            //         }
            //     }
            //     return todo;
            // })
            state.todos = state.todos.map((todo) => (todo.id===action.payload.id ? {...todo, text: action.payload.text} : todo))
        }

    } //properties and function
})

export const {addTodo, removeTodo, updateTodo} = todoSlice.actions // indivilual reducer expoert for the use in component

export default todoSlice.reducer;
// state - state of the store the initial state value
// action - kuch value aaye example - id
// export of the reducers are in two part
 

// Notes:-
//  Redux - core library 
//  React-redux - is the implementation of redux for react
// react-redux - is a library that provides bindings to use Redux with React.
//  Redux Toolkit - is a library that provides a set of tools and best practices for using Redux more effectively.

//steps
// 1. Install Redux Toolkit
// 2. Create a Redux store
// configureStore and tell where is the reducer
// 3. Create a slice - give a name and initial state and reducers
// we get state which is the initial state and action which is the payload
// export individual reducers and main source export
// 3. Define your state structure
// 4. Create slices for your state
// 5. Use the generated actions and reducers in your components
