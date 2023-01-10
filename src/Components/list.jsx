import s from "../App.module.css";
import React from "react";
import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined";
import CheckIcon from "@mui/icons-material/Check";
import Button from "@mui/material/Button";

const List = ({ value, setValue, del, complete, todo, delAll }) => {
  const countComplete = () => {
    const numberOfComplete = value.filter((todo) => todo.isCompleted);
    return numberOfComplete.length;
  };
  return (
    <div className={s.list}>
      <p className={s.p}>
        выполнено {countComplete()} из {value.length} задач
      </p>
      <div>
        {value.map((item, index) => {
          return (
            <div>
              <li
                className={s.list_text}
                style={{
                  textDecoration: value[index].isCompleted
                    ? "line-through"
                    : "none",
                }}
              >
                {item.message}
              </li>
              <CheckIcon
                className={s.list_del}
                onClick={(e) => {
                  complete(index, e);
                }}
              />
              <DeleteForeverOutlinedIcon
                className={s.list_del}
                onClick={() => {
                  del(item.id);
                }}
              />
            </div>
          );
        })}
        {value.length > 0 && (
          <Button
            sx={{
              height: "30px",
              width: "10px",
              fontSize: 25,
              marginTop: 3,
              marginLeft: 63,
            }}
            color="error"
            variant="outlined"
            onClick={() => delAll()}
          >
            ✖{" "}
          </Button>
        )}
      </div>
    </div>
  );
};

export default List;
