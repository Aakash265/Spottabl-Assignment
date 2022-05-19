import "./Form.css";
import React, { useState } from "react";

const Form = (props) => {
  const [text, setText] = useState("");

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const data = {
      name: text
    };
    props.onSaveData(data);
    setText("");
  };

  return (
    <div className="row">
      <form onSubmit={submitHandler}>
        <input
          className="form col-9"
          type="text"
          placeholder="Add by Name or email"
          value={text}
          onChange={handleOnChange}
        />
        <button type="submit" className="but col-2">
          Add CSM
        </button>
      </form>
    </div>
  );
};

export default Form;
