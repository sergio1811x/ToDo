import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import s from "./../App.module.css";

const FieldMain = ({ add, change, click }) => {
  const [text, setText] = useState();

  return (
    <div className={s.InpBut}>
      <span className={s.TextField}>
        <TextField
          id="newMessageBody"
          value={text}
          name="newMessageBody"
          label="Введите текст"
          variant="outlined"
          sx={{ height: "56px", width: "300px" }}
          onChange={(e) => {
            change("message", e);
            setText(e.target.value);
          }}
        />
      </span>
      <span className={s.Button}>
        <Button
          variant="outlined"
          sx={{ height: "56px", width: "100px" }}
          type={"submit"}
          onClick={() => {
            add();
            setText("");
          }}
        >
          Добавить
        </Button>
      </span>
    </div>
  );
};

export default FieldMain;
