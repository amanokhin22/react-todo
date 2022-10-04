import * as React from 'react';
import TextField from '@mui/material/TextField';
import SendIcon from '@mui/icons-material/Send';
import Button from '@mui/material/Button';
import styles from '../../scss/home.module.scss'
import {TextareaAutosize} from "@mui/material";


const AddTodoForm = () => {
    return (
        <div className={styles.box}>
            <div>
                <TextField className={styles.input} label="Add title"/>
            </div>
            <div>
                <TextareaAutosize className={styles.description}
                    minRows={4}
                    aria-label="maximum height"
                    placeholder="Add text"
                    ></TextareaAutosize>
            </div>
            <div className={styles.add}><Button variant="contained" endIcon={<SendIcon/>}>
                Add
            </Button>
            </div>
        </div>
    )
}

export default AddTodoForm;