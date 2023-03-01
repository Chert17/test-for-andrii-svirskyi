import React from "react";
import Form from "./form/Form";
import Table from "./table/Table";

import css from "./App.module.css";

function App() {
  return (
    <div className={css.wrapper}>
      <Form />
      <Table />
    </div>
  );
}

export default App;
