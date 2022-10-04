import * as React from 'react';
import AddTodoForm from './addForm/AddTodoForm';
import MainTodo from './mainTodo/MainTodo';

import styles from '../scss/home.module.scss'

const Home = () => {
    return (
        <div className={styles.home}>
            <div>
                <AddTodoForm/>
            </div>
            <div>
                <MainTodo/>
            </div>
        </div>
    )
}

export default Home