import React from "react";
import pic from "../assets/trash.jpg";
import "./Show.css";

const Show = (props) => {
  return (
    <div>
        <table className="table">
            <tr>
                <td className="tr"><p className="data">{props.show}</p></td>
                <td align="right"><img className="image" src={pic} alt="Delete" /></td>
            </tr>
        </table>
    </div>
  );
};

export default Show;
