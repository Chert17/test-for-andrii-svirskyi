import React, { ChangeEvent, FC, FormEvent, useState } from "react";
import { useAppDispatch } from "../../redux/hooks";
import { addTodo } from "../../redux/todo-slice/todoSlice";
import { inputs } from "./input.data";
import FormInput from "./input/FormInput";

import css from "./Form.module.css";

const Form: FC = () => {
  const [values, setValues] = useState({
    title: "",
    description: "",
  });
  const [error, setError] = useState(false);

  const dispatch = useAppDispatch();

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!values.title.length || !values.description.length) setError(true);

    if (values.title && values.description) {
      dispatch(addTodo(values));
      setValues({ title: "", description: "" });
      setError(false);
    }
  };

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [e.target.name]: e.target.value.trim() });
  };

  return (
    <form onSubmit={onSubmit} className={css.form}>
      {inputs.map((input) => (
        <FormInput
          key={input.id}
          input={input}
          onChange={onChange}
          value={values}
          error={error}
        />
      ))}
      <button type="submit">Create</button>
    </form>
  );
};

export default Form;
