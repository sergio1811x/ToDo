import s from "../App.module.css";
import React from "react";
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';
import CheckIcon from '@mui/icons-material/Check';
import Button from "@mui/material/Button";

const List = (props) => {
    const countComplete = () => {
        const numberOfComplete = props.value.filter((todo) => todo.isCompleted);
        return numberOfComplete.length;
    };
    return (
        <div className={s.list}>
            <p className={s.p}>
                выполнено {countComplete()} из {props.value.length} задач
            </p>
            <div>
                {
                    props.value.map((item, index) => {
                        return (
                            <div>
                                <li className={s.list_text}
                                    style={{textDecoration: props.value[index].isCompleted ? "line-through" : "none"}}
                                >  {item.message} </li>
                                <CheckIcon className={s.list_del}
                                           onClick={(e) => {
                                               props.complete(index, e)
                                           }}/>
                                <DeleteForeverOutlinedIcon className={s.list_del} onClick={() => {
                                    props.del(item.id)
                                }}/>
                            </div>
                        )
                    })
                }
                <Button sx={{height: '30px', width: '10px', fontSize: 25, marginTop: 3, marginLeft: 63}}
                        color="error" variant="outlined"
                        onClick={() => props.delAll()}>
                    ✖ </Button>
            </div>

        </div>
    )
}

export default List

