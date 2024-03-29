import {createContext,useContext} from "react"

export const TodoContext = createContext({
    Todos:[
        {
            id:1,
            todo:"todo msg",
            completed:false

        }
        
    ],
    addTodo:(todo) =>{},
    update:(id,todo) =>{},
    deleteToDo:(id) =>{},
    togglecomplet: (id) =>{}
})

export const useTodo = () =>{
    return useContext(TodoContext)
}

export const Todoprovider = TodoContext.Provider