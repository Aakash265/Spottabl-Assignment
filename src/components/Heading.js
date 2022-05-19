import "./Heading.css";
import pic from "../assets/logo.jpeg";

function Heading() {
  return (
    <div className="heading">
      <div className="row">
        <div className="col-1">
          <img className="image" src={pic} alt="Logo" />
        </div>
        <div className="col-10">
          <h2 className="head">YOUR SPOTTABL TEAM</h2>
          <h5 className="subHead">Spottabl supports you all throughout</h5>
        </div>
      </div>
    </div>
  );
}

export default Heading;
