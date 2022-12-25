import s from './App.module.css';
import React, {useState} from "react";
import FieldMain from "./Components/field";
import List from "./Components/list";


function App(props) {
    const [value, setValue] = useState([])
    const [obj, setObj] = useState([]);
    const [todo, setTodo] = useState(value)

    const change = (message, e) => {
        setObj({[message]: e.target.value});
    }

    const add = () => {
        let num = (Math.floor(Math.random() * 10000) + 1)
        if (obj.message.length > 0) {
        setValue([...value, {message: obj.message, id: num}])
       }
    }

    const del = (id) => {
        setValue(value.filter(obj => obj.id != id));
    }

    const delAll = () => {
        setValue([])
    }

    const complete = (index) => {
        const newTodos = [...value];
        if (!newTodos[index].isCompleted) {
            newTodos[index].isCompleted = true;
        } else {
            newTodos[index].isCompleted = false;
        }
        setValue(newTodos);
    };


    return (
        <div className={s.main}>
            <div className={s.app}>
                <div className={s.h1}>
                    <h1>Список дел</h1>
                </div>
                <FieldMain sendMessage={props.sendMessage}
                           add={add}
                           change={change}/>
                <List messagesPage={props.messagesPage}
                      delete={props.delete}
                      value={value}
                      setValue={setValue}
                      del={del}
                      complete={complete}
                      todo={todo}
                      delAll={delAll}/>
            </div>
        </div>
    );
}

export default App


