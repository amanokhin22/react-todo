import * as React from 'react';
import AddTodoForm, {AddTodoDTO} from './addForm/AddTodoForm';
import MainTodo, {Todo} from './mainTodo/MainTodo';
import styles from '../scss/home.module.scss'
import {useEffect, useState} from 'react';
import {apiTodo} from '../../api/apiTodos';

const Home: React.FC = () => {

    const [todoList, setTodoList] = useState<Todo[]>([]);

    useEffect(() => {
        apiTodo.getAll().then(res => {
            console.log('home')
            return setTodoList(res)
        })
    }, []);

    const addTodoHandler = async (data: AddTodoDTO) => {
        await apiTodo.create(data);
        const res = await apiTodo.getAll()
        console.log(data)
        setTodoList(res);
    }

    const onDelete = async (todo: Todo) => {
        await apiTodo.delete(todo);
        const res = await apiTodo.getAll();
        console.log(todo)
        setTodoList(res);
        //setTodoList(todoList.filter(t => t.id !== todo.id))
    }

    const onToggle = async (todo: Todo) => {
        await apiTodo.put(todo);
        const res = await apiTodo.getAll()
        console.log(todo)
        setTodoList(res);
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