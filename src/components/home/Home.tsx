import * as React from 'react';
import AddTodoForm, {AddTodoDTO} from './addForm/AddTodoForm';
import MainTodo from './mainTodo/MainTodo';

import styles from '../scss/home.module.scss'

const Home = () => {

    const addTodoHandler = (data: AddTodoDTO) => {
        console.log('Home', data)
    }


    return (
        <div className={styles.home}>
            <div>
                <AddTodoForm onAddTodo={addTodoHandler}/>
            </div>
            <div>
                <MainTodo/>
            </div>
        </div>
    )
}

export default Home