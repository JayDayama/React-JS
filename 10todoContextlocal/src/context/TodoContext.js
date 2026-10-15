import { createContext , useContext } from "react";

// i need functionality of edit , mark/unmark , delete , add todo for all the todo's therfore context

export const TodoContext = createContext({
    // property/variable
    todos : [
        {
            id : 1,
            todo : "Todo msg",
            completed : false,
        }
    ],
    addTodo : (todo) => {},
    updateTodo : (id,todo) => {},
    deleteTodo : (id) => {},
    toggleComplete : (id) => {}
})

export const useTodo = () => {
    // to allow access of context for others
    return useContext(TodoContext)
}

export const TodoProvider = TodoContext.Provider