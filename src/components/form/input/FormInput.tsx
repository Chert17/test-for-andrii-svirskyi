import React, { ChangeEventHandler, FC } from "react";
import { IInput } from "./input.interface";

import css from "./FormInput.module.css";

interface IFormInput {
  onChange: ChangeEventHandler<HTMLInputElement>;
  input: IInput;
  value: { [key: string]: string };
  error: boolean;
}

const FormInput: FC<IFormInput> = ({ onChange, input, value, error }) => {
  const { label, name, placeholder, type, errorMessage } = input;

  return (
    <>
      <label>
        <p>{label}</p>
        <input
          value={value[name]}
          name={name}
          type={type}
          placeholder={placeholder}
          // required={required}
          onChange={onChange}
          style={{
            borderColor: error && !value[name].length ? "#ff3e3e" : "#767676",
          }}
        />
        {error && !value[name].length ? (
          <p className={css.errorMessage}>{errorMessage}</p>
        ) : (
          ""
        )}
      </label>
    </>
  );
};

export default FormInput;
