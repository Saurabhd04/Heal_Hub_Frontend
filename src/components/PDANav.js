import { Link } from "react-router-dom";
const PDANav = () => {
  return (
    <>
      <div className="input-col">
        <Link className="txt" to="/patientdetailaccess/accessbyid">
          <button className="btn btn-dark" style={{width: "300px"}}>Access by ID</button>
        </Link>
        <Link className="txt" to="/patientdetailaccess/accessbyfp">
          <button className="btn btn-dark" style={{width: "300px"}}>Access by Fingerprint</button>
        </Link>
      </div>
    </>
  );
};

export default PDANav;
