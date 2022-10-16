import * as React from 'react'
import styles from '../../../scss/home.module.scss'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import {Todo} from "../../../types/todo.types";


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
                                <FormControlLabel control={<Checkbox/>} label={""}/>
                                <Typography>
                                    {todo.completed
                                        ? <del className={styles.del}>{todo.title} </del>
                                        : <ins className={styles.ins}>{todo.title} </ins>
                                    }
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    {todo.text}
                                </Typography>
                            </AccordionDetails>
                            <div className={styles.buttonsTodo}>
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