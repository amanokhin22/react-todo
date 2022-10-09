import * as React from 'react';
import AddTodoForm from './addForm/AddTodoForm';
import MainTodo from './mainTodo/MainTodo';
import styles from '../scss/home.module.scss'

const Home: React.FC = () => {

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