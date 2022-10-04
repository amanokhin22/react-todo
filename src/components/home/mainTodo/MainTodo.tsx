import * as React from 'react'
import styles from '../../scss/home.module.scss'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';


const MainTodo = () => {

    return (
        <div className={styles.main} >
            <h2>'The main list of todos'</h2>
            <ul className={styles.list}>
                <li>
                    <Accordion >
                        <AccordionSummary>
                            <Typography>TODO 1</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                malesuada lacus ex, sit amet blandit leo lobortis eget.
                            </Typography>
                        </AccordionDetails>
                       <div className={styles.buttonsTodo}>
                        <Button className={styles.editButton} variant="outlined" startIcon={<DeleteIcon/>} >
                            Edit
                        </Button>
                        <Button className={styles.doneButton} variant="outlined" startIcon={<DeleteIcon/>}>
                            Done
                        </Button>
                        <Button className={styles.deleteButton} variant="outlined" startIcon={<DeleteIcon/>}>
                            Delete
                        </Button>
                       </div>
                    </Accordion>
                </li>
                <li>
                    <Accordion>
                        <AccordionSummary>
                            <Typography>TODO 2</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                malesuada lacus ex, sit amet blandit leo lobortis eget.
                            </Typography>
                        </AccordionDetails>
                        <div className={styles.buttonsTodo}>
                            <Button className={styles.editButton} variant="outlined" startIcon={<DeleteIcon/>} >
                                Edit
                            </Button>
                            <Button className={styles.doneButton} variant="outlined" startIcon={<DeleteIcon/>}>
                                Done
                            </Button>
                            <Button className={styles.deleteButton} variant="outlined" startIcon={<DeleteIcon/>}>
                                Delete
                            </Button>
                        </div>
                    </Accordion>
                </li>
                <li>
                    <Accordion>
                        <AccordionSummary>
                            <Typography>TODO 3</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                malesuada lacus ex, sit amet blandit leo lobortis eget.
                            </Typography>
                        </AccordionDetails>
                        <div className={styles.buttonsTodo}>
                            <Button className={styles.editButton} variant="outlined" startIcon={<DeleteIcon/>} >
                                Edit
                            </Button>
                            <Button className={styles.doneButton} variant="outlined" startIcon={<DeleteIcon/>}>
                                Done
                            </Button>
                            <Button className={styles.deleteButton} variant="outlined" startIcon={<DeleteIcon/>}>
                                Delete
                            </Button>
                        </div>
                    </Accordion>
                </li>
                <li>
                    <Accordion>
                        <AccordionSummary>
                            <Typography>TODO 4</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                malesuada lacus ex, sit amet blandit leo lobortis eget.
                            </Typography>
                        </AccordionDetails>
                        <div className={styles.buttonsTodo}>
                            <Button className={styles.editButton} variant="outlined" startIcon={<DeleteIcon/>} >
                                Edit
                            </Button>
                            <Button className={styles.doneButton} variant="outlined" startIcon={<DeleteIcon/>}>
                                Done
                            </Button>
                            <Button className={styles.deleteButton} variant="outlined" startIcon={<DeleteIcon/>}>
                                Delete
                            </Button>
                        </div>
                    </Accordion>
                </li>
                <li>
                    <Accordion>
                        <AccordionSummary>
                            <Typography>TODO 5</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                malesuada lacus ex, sit amet blandit leo lobortis eget.
                            </Typography>
                        </AccordionDetails>
                        <div className={styles.buttonsTodo}>
                            <Button className={styles.editButton} variant="outlined" startIcon={<DeleteIcon/>} >
                                Edit
                            </Button>
                            <Button className={styles.doneButton} variant="outlined" startIcon={<DeleteIcon/>}>
                                Done
                            </Button>
                            <Button className={styles.deleteButton} variant="outlined" startIcon={<DeleteIcon/>}>
                                Delete
                            </Button>
                        </div>
                    </Accordion>
                </li>
            </ul>
        </div>
    )
}

export default MainTodo