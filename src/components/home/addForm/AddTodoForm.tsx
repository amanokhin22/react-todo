import * as React from 'react';
import TextField from '@mui/material/TextField';
import SendIcon from '@mui/icons-material/Send';
import Button from '@mui/material/Button';
import styles from '../../scss/home.module.scss'
import {TextareaAutosize} from "@mui/material";
import {useState} from "react";


const AddTodoForm = () => {
     const [title, setTitle] = useState();
     const [text, setText] = useState();
    //
    // const on = async () => {
    //     const res = await axios.put('http://localhost:3001/todo');
    //     setAddTitle(res.data)
    // }
    //
    // const onEdit = async () => {
    //     const res = await axios.put('http://localhost:3001/todo');
    //     setAddText(res.data)
    // }

    const handleClick = (event: { currentTarget: { disabled: boolean; }; }) => {
        event.currentTarget.disabled = true;
        console.log('button clicked');
    };

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
            <div className={styles.add}><Button disabled={!title} variant="contained" endIcon={<SendIcon/>}>
                Add
            </Button>
            </div>
        </div>
    )
}

export default AddTodoForm;