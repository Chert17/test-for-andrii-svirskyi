import React, { FC } from "react";
import { ITodo } from "../../redux/todo-slice/todo.interface";

import css from "./TodoInfo.module.css";

interface ITodoInfo {
  todoInfo: Omit<ITodo, "id">;
  onClose: () => void;
}

const TodoInfo: FC<ITodoInfo> = ({
  todoInfo: { description, status, title },
  onClose,
}) => {
  return (
    <div className={css.infoWrapper}>
      <h3 className={css.infoTitle}>{title}</h3>
      <p className={css.infoDescr}>
        <b>Description:</b> {description}
      </p>
      <p>
        Status: <input type="checkbox" checked={status} readOnly />
      </p>
      <button type="button" onClick={onClose}>
        close
      </button>
    </div>
  );
};

export default TodoInfo;
