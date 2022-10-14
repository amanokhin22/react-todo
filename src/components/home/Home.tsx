import * as React from 'react';
import AddTodoForm, {AddTodoDTO} from './addForm/AddTodoForm';
import MainTodo from './mainTodo/MainTodo';
import styles from '../scss/home.module.scss'
import {useEffect} from 'react';
import {Todo} from "../../types/todo.types";
import {useSelector} from "react-redux";
import {useAppDispatch} from "../../redux/store";
import {clearTodoList} from "../../redux/todoSlice";
import {deleteTodo, fetchTodo, postTodo, putTodo} from "../../redux/asyncAction";
import {selectTodoList} from "../../redux/selectors";


const Home: React.FC = () => {

    const todoList = useSelector(selectTodoList);
    const dispatch = useAppDispatch();


    useEffect(() => {
        // apiTodo.getAll().then(res => {
        //     return dispatch(setTodoList(res))
        // }) Заменили getAll на тоже самое из санки
        dispatch(fetchTodo());
        //Или объявлять переменную внутри UseEffect или же создать переменную, которой присвоить useMemo. Также как-то можно применить useCallback
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const addTodoHandler = async (data: AddTodoDTO) => {
        await dispatch(postTodo(data))
    }
    //Заменили post и getAll на диспатч в асинхронном экшене, который содержит в себе и пост и гетОлл. Также и в других

    const onDelete = async (todo: Todo) => {
        await dispatch(deleteTodo(todo));
    }

    const onToggle = async (todo: Todo) => {
        await dispatch(putTodo(todo));
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