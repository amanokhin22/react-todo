import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import SendIcon from '@mui/icons-material/Send';
import Button from '@mui/material/Button';
import styles from '../../scss/home.module.scss'
import {TextareaAutosize} from "@mui/material";


const AddTodoForm = () => {
    return (
        <Box className={styles.input} >
            <div className={styles.text}>
                <TextField fullWidth label="Add title" id="fullWidth" variant="outlined"
                           style={{width: 680, height: 60, borderRadius: 10}}/>
            </div>
            <div>
                <TextareaAutosize
                    maxRows={4}
                    aria-label="maximum height"
                    placeholder="Add text"
                    style={{width: 680, height: 60, borderRadius: 10}}></TextareaAutosize>
            </div>
            <div className={styles.send}><Button variant="contained" endIcon={<SendIcon/>}>
                Send
            </Button>
            </div>
        </Box>
    )
}

export default AddTodoForm;