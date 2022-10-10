import {AddTodoDTO} from "../components/home/addForm/AddTodoForm";
import axios from "axios";
import {Todo} from "../components/home/mainTodo/MainTodo";

const axiosInstance = axios.create({
    withCredentials: true,
    baseURL: `http://localhost:3001/todo`,
    headers: {
        "API-KEY": ""
    }
});

export const apiTodo = {
    async getAll() {
        const res = await axiosInstance.get('');
        return res.data
    },

    async create(data: AddTodoDTO) {
        await axiosInstance.post('', data);
    },

    async delete(todo: Todo) {
        await axiosInstance.delete(`/${todo.id}`);
    },

    async put(todo: Todo) {
        await axiosInstance.put(`/${todo.id}`, {...todo, completed: !todo.completed});
    },
}

