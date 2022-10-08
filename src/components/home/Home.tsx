import * as React from 'react';
import AddTodoForm, {AddTodoDTO} from './addForm/AddTodoForm';
import MainTodo, { Todo} from './mainTodo/MainTodo';
import styles from '../scss/home.module.scss'
import {useEffect, useState} from "react";
import axios from "axios";

const Home: React.FC = () => {

    const addTodoHandler =  async (data: AddTodoDTO) => {
        await axios.post(`http://localhost:3001/todo`, data);
        const res = await axios.get('http://localhost:3001/todo')
        setTodoList(res.data);
    }

    const [todoList, setTodoList] = useState<Todo[]>([]);

    useEffect(() => {
        axios.get('http://localhost:3001/todo').then(res => {
            return setTodoList(res.data)
        })
    }, []);

    const onDelete = async (todo: Todo) => {
        await axios.delete(`http://localhost:3001/todo/${todo.id}`);
        const res = await axios.get('http://localhost:3001/todo')
        setTodoList(res.data);
        //setTodoList(todoList.filter(t => t.id !== todo.id))
    }

    const onToggle = async (todo: Todo) => {
        await axios.put(`http://localhost:3001/todo/${todo.id}`, {...todo, completed: !todo.completed});
        const res = await axios.get('http://localhost:3001/todo')
        setTodoList(res.data);
    }
    return (
        <div className={styles.home}>
            <div>
                <AddTodoForm onAddTodo={addTodoHandler}/>
            </div>
            <div>
                <MainTodo todoList={todoList} onToggle={onToggle} onDelete={onDelete}/>
            </div>
        </div>
    )
}

export default Home