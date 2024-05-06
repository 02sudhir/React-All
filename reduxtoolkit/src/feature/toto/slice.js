import {createSlice ,nanoid} from '@reduxjs/toolkit';


const initialState ={
    todos:[{id:1, text:"hells sudhir"}]
}

function sayhello(){
    console.log("hellos sudhir");
}

export const todoSclice =createSlice({
    name:'todo',
    initialState,
    reducers:{
        addTodo: (state,action) => {
            const todo ={
                id: nonoid(),
                text:action.payload
            }
            },
        removeTodo : () => {},

    }
})