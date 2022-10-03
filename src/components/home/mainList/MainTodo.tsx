import * as React from 'react'
import styles from '../../scss/home.module.scss'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';

const MainTodo = () => {
    return (
        <div className={styles.main}>
            <ul className={styles.main}>
                <h2>'The main list of todos'</h2>
                <li>
                    <Accordion>
                        <AccordionSummary
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Typography>TODO 1</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                malesuada lacus ex, sit amet blandit leo lobortis eget.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                </li>
                <li>
                    <Accordion>
                        <AccordionSummary
                            aria-controls="panel2a-content"
                            id="panel2a-header"
                        >
                            <Typography>TODO 2</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                malesuada lacus ex, sit amet blandit leo lobortis eget.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                </li>
                <li>
                    <Accordion>
                        <AccordionSummary
                            aria-controls="panel2a-content"
                            id="panel2a-header"
                        >
                            <Typography>TODO 3</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                malesuada lacus ex, sit amet blandit leo lobortis eget.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                </li>
                <li>
                    <Accordion>
                        <AccordionSummary
                            aria-controls="panel2a-content"
                            id="panel2a-header"
                        >
                            <Typography>TODO 4</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                malesuada lacus ex, sit amet blandit leo lobortis eget.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                </li>
                <li>
                    <Accordion>
                        <AccordionSummary
                            aria-controls="panel2a-content"
                            id="panel2a-header"
                        >
                            <Typography>TODO 5</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                malesuada lacus ex, sit amet blandit leo lobortis eget.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                </li>
            </ul>
        </div>
    )
}

export default MainTodo