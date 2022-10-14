import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from "@reduxjs/toolkit";
import {Todo} from "../types/todo.types";
import {deleteTodo, fetchTodo, postTodo, putTodo} from "./asyncAction";
import {TodoState} from "./types";

const initialState: TodoState = {
    todoList: [],
    loading: false
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
    extraReducers: (builder) => {

        builder.addCase(fetchTodo.pending, (state) => {
            state.loading = true; //Ожидание загрузки
        });

        builder.addCase(fetchTodo.fulfilled, (state, action) => {
            state.todoList = action.payload;//Если всё норм пришло
            state.loading = false;// чтобы загрузчик-ожидание не грузились, но для этого нужно создать компонент-загрузчик

        });
        builder.addCase(fetchTodo.rejected, (state) => {
            state.todoList = [];// Если ошибки пришли
            state.loading = false; // чтобы загрузчик-ожидание не грузились
        });


        builder.addCase(deleteTodo.pending, (state) => {
            state.loading = true
        });
        builder.addCase(deleteTodo.fulfilled, (state) => {
            state.loading = false;
        });
        builder.addCase(deleteTodo.rejected, (state) => {
            state.todoList = [];
            state.loading = false
        });


        builder.addCase(postTodo.pending, (state) => {
            state.loading = true
        });
        builder.addCase(postTodo.fulfilled, (state) => {
            state.loading = false;
        });
        builder.addCase(postTodo.rejected, (state) => {
            state.todoList = [];
            state.loading = false
        });


        builder.addCase(putTodo.pending, (state) => {
            state.loading = true
        });
        builder.addCase(putTodo.fulfilled, (state) => {
            state.loading = false;
        });
        builder.addCase(putTodo.rejected, (state) => {
            state.todoList = [];
            state.loading = false
        });

    },
})

export const {clearTodoList} = todoSlice.actions

export default todoSlice.reducer