import * as React from 'react';
import AddTodoForm from './addForm/AddTodoForm';
import MainTodo from './mainList/MainTodo';
import styles from '../scss/home.module.scss'

const Home = () => {
    return (
        <div className={styles.home}>
            <AddTodoForm/>
            <MainTodo/>
        </div>
    )
}

export default Home