import {createAsyncThunk} from "@reduxjs/toolkit";
import {Todo} from "../types/todo.types";
import {apiTodo} from "../api/apiTodos";
import {AddTodoDTO} from "../components/home/addForm/AddTodoForm";


export const fetchTodo = createAsyncThunk(
    'todo/fetchTodos',
    async () => await apiTodo.getAll()
);

export const deleteTodo = createAsyncThunk(
    'todo/deleteTodo',
    async (todo: Todo, {dispatch}) => {
        await apiTodo.delete(todo);
        await dispatch(fetchTodo());
    }
);

export const postTodo = createAsyncThunk(
    'todo/postTodo',
    async (data: AddTodoDTO, {dispatch}) => {
        await apiTodo.create(data);
        await dispatch(fetchTodo());
    }
);

export const putTodo = createAsyncThunk(
    'todo/putTodo',
    async (todo: Todo, {dispatch}) => {
        await apiTodo.put(todo);
        await dispatch(fetchTodo());
    }
);