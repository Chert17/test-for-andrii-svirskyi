import React, { FC, MouseEvent, useState } from "react";
import { formatText } from "../../helpers/formatText";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { toggleStatus } from "../../redux/todo-slice/todoSlice";
import { Modal } from "../modal/Modal";
import TodoInfo from "../todo-info/TodoInfo";

import css from "./Table.module.css";

const thItems = [
  { label: "ID" },
  { label: "TITLE" },
  { label: "DESCRIPTION" },
  { label: "STATUS" },
];

const Table: FC = () => {
  const [showModal, setShowModal] = useState(false);
  const [todoInfo, setTodoInfo] = useState({
    title: "",
    description: "",
    status: false,
  });

  const todos = useAppSelector((state) => state.todos.todos);
  const dispatch = useAppDispatch();

  const openModal = (e: MouseEvent) => {
    const { target } = e;
    if (target instanceof HTMLElement && target.nodeName === "TD" && !showModal)
      setShowModal(true);
  };

  const closeModal = () => {
    if (showModal) setShowModal(false);
  };

  return (
    <>
      <table className={css.table}>
        <thead>
          <tr>
            {thItems.map(({ label }) => (
              <th key={label}>{label}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {todos.map(({ id, title, description, status }, index) => (
            <tr
              key={id}
              onClick={(e) => {
                setTodoInfo({ title, description, status });
                openModal(e);
              }}
            >
              <td>{index + 1}</td>
              <td>{formatText(title)}</td>
              <td>{formatText(description)}</td>
              <td>
                <input
                  type="checkbox"
                  checked={status}
                  onChange={() => dispatch(toggleStatus(id))}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {showModal && (
        <Modal onClose={closeModal}>
          <TodoInfo todoInfo={todoInfo} onClose={closeModal} />
        </Modal>
      )}
    </>
  );
};

export default Table;
