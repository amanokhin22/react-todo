import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from "@reduxjs/toolkit";
import {Todo} from "../types/todo.types";

export interface TodoState {
    todoList: Todo[];
}

const initialState: TodoState = {
    todoList: []
}

export const todoSlice = createSlice({
    name: 'todos',
    initialState: initialState,
    reducers: {
        setTodoList(state, action: PayloadAction<Todo[]>) {
            state.todoList = action.payload
        },
        clearTodoList(state) {
            state.todoList = [];
        }
    },
})

export const {setTodoList, clearTodoList} = todoSlice.actions

export default todoSlice.reducer