import {AddTodoDTO} from "../components/home/addForm/AddTodoForm";
import axios from "axios";
import {useEffect, useState} from "react";
import {Todo} from "../components/home/mainTodo/MainTodo";

const axiosInstance = axios.create({
    withCredentials: true,
    baseURL: `http://localhost:3001/todo`,
    headers: {
        "API-KEY": ""
    }
});

export const ApiTodos = () => {
    const [todoList, setTodoList] = useState<Todo[]>([]);

    useEffect(() => {
        axiosInstance.get('').then(res => {
            return setTodoList(res.data)
        })
    }, []);

    const addTodoHandler = async (data: AddTodoDTO) => {
        //await axiosInstance.create(data)
        //const res = await apiTodo.getAll()
        await axiosInstance.post('', data);
        const res = await axiosInstance.get('')
        setTodoList(res.data);
    }

    const onDelete = async (todo: Todo) => {
        await axiosInstance.delete(`/${todo.id}`);
        const res = await axiosInstance.get('')
        setTodoList(res.data);
        //setTodoList(todoList.filter(t => t.id !== todo.id))
    }

    const onToggle = async (todo: Todo) => {
        await axiosInstance.put(`/${todo.id}`, {...todo, completed: !todo.completed});
        const res = await axiosInstance.get('')
        setTodoList(res.data);
    }
}