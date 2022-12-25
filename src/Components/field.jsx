import React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import s from './../App.module.css';

const FieldMain = (props) => {
    return (
        <div className={s.InpBut}>
            <span className={s.TextField}>
                <TextField
                    id="newMessageBody"
                    name="newMessageBody"
                    label="Введите текст"
                   variant="outlined"
                    sx={{height: '56px', width: '300px'}}
                    onChange={(e) => props.change('message', e, 'id')}
                />
            </span>
            <span className={s.Button}>
                <Button
                    variant="outlined"
                    sx={{height: '56px', width: '100px'}}
                    type={'submit'}
                    onClick={() => {
                        props.add()
                    }}
                >Добавить </Button>
                </span>
        </div>
    )
}


export default FieldMain



