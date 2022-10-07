import * as React from 'react';
import TextField from '@mui/material/TextField';
import SendIcon from '@mui/icons-material/Send';
import Button from '@mui/material/Button';
import styles from '../../scss/home.module.scss'
import {TextareaAutosize} from "@mui/material";
import {useState} from "react";


const AddTodoForm: React.FC = () => {
     const [title, setTitle] = useState('')
     const [text, setText] = useState('')

     const handleChangeTitle = (event: React.ChangeEvent<HTMLInputElement>) => {
         setTitle(event.target.value);
         console.log('value', event.target.value)
     }

    const handleChangeText = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setText(event.target.value);
        console.log('value', event.target.value)
    }

     const handleClick = (event: React.UIEvent) => {
         event.preventDefault();
         console.log(title, text);
         setTitle('');
         setText('');
     }

    return (
        <div className={styles.box}>
            <div >
                <TextField value={title} onChange={handleChangeTitle} className={styles.input} label="Add title"/>
            </div>
            <div>
                <TextareaAutosize value={text} onChange={handleChangeText} className={styles.description}
                    minRows={4}
                    aria-label="maximum height"
                    placeholder="Add text"
                    ></TextareaAutosize>
            </div>
            <div className={styles.add}><Button onClick={handleClick} variant="contained" endIcon={<SendIcon/>}>
                Add
            </Button>
            </div>
        </div>
    )
}

export default AddTodoForm;