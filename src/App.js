import React, { useState } from "react";
import "./App.css";
import Content from "./components/Content";
import Display from "./components/Display";
import Card from "./components/Card";
import Heading from "./components/Heading";

const DUMMY_VALUE = [];

const App = () => {
  const [info, setInfo] = useState(DUMMY_VALUE);

  const addData = (data) => {
    console.log("In app.js");
    console.log(data);
    setInfo((preData) => {
      return [data, ...preData];
    });
  };

  return (
    <div className="container-fluid">
      <Heading />
      <Card className="card">
        <Content onAddData={addData} />
        <Display item={info} />
      </Card>
    </div>
  );
};

export default App;
