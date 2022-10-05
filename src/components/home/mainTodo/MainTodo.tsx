import * as React from 'react'
import styles from '../../scss/home.module.scss'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import {useEffect, useState} from "react";
import axios from 'axios';

export interface Todo {
    userId: number,
    id: number,
    title: string,
    completed: boolean,
    description: string
}

const MainTodo = () => {
    const [todo, setTodo] = useState<Todo[]>([]);

    useEffect(() => {
        axios.get('http://localhost:3001/todo').then(res => {
            console.log(res)
            return setTodo(res.data)
        }).catch(error => {
            console.log(error)
        })
    }, []);

    const onDelete = (todo: Todo) => async () => {
        console.log(todo)// Удалить туду (документация JSON-server). Загрузить снова туду и обновить через setTodo
        const res = await axios.delete(`http://localhost:3001/todo/${todo.id}`);
        await setTodo(res.data);
        console.log(todo)
    }

    const onEdit = (todo: Todo) => async () => {
        console.log(todo)
        const res = await axios.put(`http://localhost:3001/todo/${todo.id}`, todo );
        setTodo(res.data)
    }


    return (
        <div className={styles.main}>
            <h2>'The main list of todos'</h2>
            <ul className={styles.list}>
                {
                    todo.map((todo) => <li key={todo.id}>

                        <Accordion>
                            <AccordionSummary>
                                <Typography> {todo.id} {todo.title}</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    {todo.description}
                                </Typography>
                            </AccordionDetails>
                            <div className={styles.buttonsTodo}>
                                <Button onClick={onEdit(todo)} className={styles.editButton} variant="outlined">
                                    Edit
                                </Button>
                                <Button className={styles.doneButton} variant="outlined">
                                    {todo.completed ? 'Back' : 'Done'}
                                </Button>
                                <Button onClick={onDelete(todo)} className={styles.deleteButton} variant="outlined"
                                        startIcon={<DeleteIcon/>}>
                                    Delete
                                </Button>
                            </div>
                        </Accordion>

                    </li>)
                }
            </ul>
        </div>
    )
}

export default MainTodo