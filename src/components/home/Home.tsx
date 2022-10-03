import * as React from 'react';
import AddTodoForm from './addForm/AddTodoForm';
import MainTodo from './mainList/MainTodo';

const Home = () => {
    return (
        <div>
            <AddTodoForm/>
            <MainTodo/>
        </div>
    )
}

export default Home