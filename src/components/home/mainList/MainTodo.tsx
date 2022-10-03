import * as React from 'react'
import styles from '../../scss/home.module.scss'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';


const MainTodo = () => {
    return (
        <Box className={styles.main} sx={{
            width: 700,
            maxWidth: '100%',

        }} >
            <ul className={styles.main}>
                <h2>'The main list of todos'</h2>
                <li>
                    <Accordion style={{width: 680, borderRadius: 10, borderColor: '#202020' }}>
                        <AccordionSummary>
                            <Typography>TODO 1</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                malesuada lacus ex, sit amet blandit leo lobortis eget.
                            </Typography>
                        </AccordionDetails>
                        <Button variant="outlined" startIcon={<DeleteIcon />}>
                            Edit
                        </Button>
                        <Button variant="outlined" startIcon={<DeleteIcon />} style={{color: 'green', margin: 25}}>
                            Done
                        </Button>
                        <Button variant="outlined" startIcon={<DeleteIcon />} style={{color: 'red'}}>
                            Delete
                        </Button>
                    </Accordion>
                </li>
                <li>
                    <Accordion style={{width: 680, borderRadius: 10, borderColor: '#202020' }}>
                        <AccordionSummary>
                            <Typography>TODO 2</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                malesuada lacus ex, sit amet blandit leo lobortis eget.
                            </Typography>
                        </AccordionDetails>
                        <Button variant="outlined" startIcon={<DeleteIcon />}>
                            Edit
                        </Button>
                        <Button variant="outlined" startIcon={<DeleteIcon />} style={{color: 'green', margin: 25}}>
                            Done
                        </Button>
                        <Button variant="outlined" startIcon={<DeleteIcon />} style={{color: 'red'}}>
                            Delete
                        </Button>
                    </Accordion>
                </li>
                <li>
                    <Accordion style={{width: 680, borderRadius: 10, borderColor: '#202020' }}>
                        <AccordionSummary>
                            <Typography>TODO 3</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                malesuada lacus ex, sit amet blandit leo lobortis eget.
                            </Typography>
                        </AccordionDetails>
                        <Button variant="outlined" startIcon={<DeleteIcon />}>
                            Edit
                        </Button>
                        <Button variant="outlined" startIcon={<DeleteIcon />} style={{color: 'green', margin: 25}}>
                            Done
                        </Button>
                        <Button variant="outlined" startIcon={<DeleteIcon />} style={{color: 'red'}}>
                            Delete
                        </Button>
                    </Accordion>
                </li>
                <li>
                    <Accordion style={{width: 680, borderRadius: 10 }}>
                        <AccordionSummary>
                            <Typography>TODO 4</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                malesuada lacus ex, sit amet blandit leo lobortis eget.
                            </Typography>
                        </AccordionDetails>
                        <Button variant="outlined" startIcon={<DeleteIcon />}>
                            Edit
                        </Button>
                        <Button variant="outlined" startIcon={<DeleteIcon />} style={{color: 'green', margin: 25}}>
                            Done
                        </Button>
                        <Button variant="outlined" startIcon={<DeleteIcon />} style={{color: 'red'}}>
                            Delete
                        </Button>
                    </Accordion>
                </li>
                <li>
                    <Accordion style={{width: 680, borderRadius: 10, borderColor: '#202020' }}>
                        <AccordionSummary>
                            <Typography>TODO 5</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                malesuada lacus ex, sit amet blandit leo lobortis eget.
                            </Typography>
                        </AccordionDetails>
                        <Button variant="outlined" startIcon={<DeleteIcon />}>
                            Edit
                        </Button>
                        <Button variant="outlined" startIcon={<DeleteIcon />} style={{color: 'green', margin: 25}}>
                            Done
                        </Button>
                        <Button variant="outlined" startIcon={<DeleteIcon />} style={{color: 'red'}}>
                            Delete
                        </Button>
                    </Accordion>
                </li>
            </ul>
        </Box>
    )
}

export default MainTodo