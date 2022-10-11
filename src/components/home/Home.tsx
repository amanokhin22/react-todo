import * as React from 'react';
import AddTodoForm, {AddTodoDTO} from './addForm/AddTodoForm';
import MainTodo from './mainTodo/MainTodo';
import styles from '../scss/home.module.scss'
import {useEffect} from 'react';
import {apiTodo} from '../../api/apiTodos';
import {Todo} from "../../types/todo.types";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../redux/store";
import {clearTodoList, setTodoList} from "../../redux/todoSlice";


const Home: React.FC = () => {

    const todoList = useSelector<RootState, Todo[]>(state => state.todo.todoList);
    const dispatch = useDispatch();

    useEffect(() => {
        apiTodo.getAll().then(res => {
            return dispatch(setTodoList(res))
        })
    }, [dispatch]);

    const addTodoHandler = async (data: AddTodoDTO) => {
        await apiTodo.create(data);
        dispatch(setTodoList(await apiTodo.getAll()))
    }

    const onDelete = async (todo: Todo) => {
        await apiTodo.delete(todo);
        dispatch(setTodoList(await apiTodo.getAll()))
    }

    const onToggle = async (todo: Todo) => {
        await apiTodo.put(todo);
        dispatch(setTodoList(await apiTodo.getAll()))
    }
    const clearHandler = () => {
        dispatch(clearTodoList())
    }

    return (
        <div className={styles.home}>
            <div>
                <AddTodoForm onAddTodo={addTodoHandler}/>
            </div>
            <div>
                <MainTodo todoList={todoList} onToggle={onToggle} onDelete={onDelete}/>
                <button onClick={clearHandler}>
                    Clear all
                </button>
            </div>
        </div>
    )
}

export default Home