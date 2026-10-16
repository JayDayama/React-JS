import {createSlice , nanoid} from '@reduxjs/toolkit'
// nanoid -> generates unique id's

// how will the store look initially? therefore initalState :-
const initialState = {
    todos : [{id : 1 , text : "Hello Jay"}]
}

export const todoSlice = createSlice({
    name : 'todo',
    initialState,
    // reducers have properties and functions
    reducers : {
        // here we write defintions of functions too unlike context api's
        // state -> access to values in this particular state
        // action is like i'll require id to delete a element it provides that(kuch values aaye)
        addTodo : (state,action) => {
            const todo = {
                id : nanoid() ,
                text : action.payload
                // payload -> object we can access payload.text or .id ,...
            }
            state.todos.push(todo)
        },
        removeTodo : (state,action) => {
            // id = action.payload
            // filter allows true values therfore whose id's arent equal to check they will get selected
            state.todos = state.todos.filter((todo) => action.payload !== todo.id)
        },
        updateTodo : (state,action) => {
            state.todos = state.todos.map((todo) => todo.id === action.payload.id ? {... todo, text : action.payload.text} : todo)
        }
    }
})

// for components
export const {addTodo,removeTodo} = todoSlice.actions

// store also needs awareness about all the reducers
// because it only acceps registered reducers and then do the updates/changes accordingly

export default todoSlice.reducer