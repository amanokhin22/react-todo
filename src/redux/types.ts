import {Todo} from "../types/todo.types";

export interface TodoState {
    todoList: Todo[];
    loading: boolean;
}
