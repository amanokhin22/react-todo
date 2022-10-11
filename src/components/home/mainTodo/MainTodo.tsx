import * as React from 'react'
import styles from '../../scss/home.module.scss'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';

export interface Todo {
    userId?: number;
    id: number;
    title: string;
    completed?: boolean;
    text: string;
}

export interface MainPropsType {
    todoList: Todo[];
    onToggle: (todo: Todo) => void;
    onDelete: (todo: Todo) => void;
}

const MainTodo: React.FC<MainPropsType> = ({todoList, onToggle, onDelete}) => {
    return (
        <div className={styles.main}>
            <h2>'The main list of todos'</h2>
            <ul className={styles.list}>
                {
                    todoList.map((todo) => <li key={todo.id}>

                        <Accordion>
                            <AccordionSummary>
                                <Typography> {todo.title}</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    {todo.text}
                                </Typography>
                            </AccordionDetails>
                            <div className={styles.buttonsTodo}>
                                <Button className={styles.editButton} variant="outlined">
                                    Edit
                                </Button>
                                <Button onClick={() => onToggle(todo)} className={styles.doneButton} variant="outlined">
                                    {todo.completed ? 'Back' : 'Done'}
                                </Button>
                                <Button onClick={() => onDelete(todo)} className={styles.deleteButton}
                                        variant="outlined"
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