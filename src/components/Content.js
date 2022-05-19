import "./Content.css";
import Form from "./Form";

const Content = (props) => {
  const saveData = (enteredData) => {
    const Data = {
      ...enteredData,
      id: Math.random().toString()
    };
    props.onAddData(Data);
  };
  return (
    <div className="content">
        <h3 className="csm">Customer Success Managers</h3>
        <Form onSaveData={saveData} />
    </div>
  );
}

export default Content;
