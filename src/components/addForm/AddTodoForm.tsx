import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import SendIcon from '@mui/icons-material/Send';
import Button from '@mui/material/Button';
import styles from '../scss/home.module.scss'


const AddTodoForm = () => {
    return (
        <Box className={styles.input}>
            <TextField label="Add title" variant="outlined"/>
            <TextField label="Add text" variant="outlined"/>
            <div className={styles.send}><Button variant="contained" endIcon={<SendIcon/>}>
                Send
            </Button>
            </div>
        </Box>
    )
}

export default AddTodoForm;