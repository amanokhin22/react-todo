import {RootState} from "./store";
import {createSelector} from "@reduxjs/toolkit";


export const selectTodo = (state: RootState) => state.todo;

export const selectTodoList = createSelector(selectTodo, (todo) => todo.todoList);

//export const selectTodoLoading = createSelector(selectTodo, (todo) => todo.loading); //Если создам загрузчик, тогда он нужен

//export const selectCompletedTodoList = createSelector(selectTodoList, (todoList) => todoList.filter((todo) => todo.completed));

//export const selectUncompletedTodoList = createSelector(selectTodoList, (todoList) => todoList.filter((todo) => !todo.completed));

export const selectSortedTodoList = createSelector(selectTodoList, (todoList) => [...todoList].sort((a, b) => Number(a.completed) - Number(b.completed)))


//export const selectCombineTodo = createSelector(selectTodoList, selectTodoLoading, (todoList, loading) => loading ? [] : todoList);