import { Switch, Route } from "react-router-dom";
import AccessById from "./AccessById";
import AccessByFP from "./AccessByFP";
import PDANav from "../components/PDANav";


const PatientDetailAccess = () => {
  
  return (
    <>
      <div className="content-inner">
        <p className="bold-300">Access Verification Tool</p>
        <p><strong>Note: </strong>Use Access by fingerprint in those cases where the patient is unconscious or is incapable of communication.</p>
        <div className="profile-inner"><PDANav/></div>
        <div className="container">
          <Switch>
            <Route
              exact
              path="/patientdetailaccess/accessbyid"
              component={AccessById}
            />
            <Route
              exact
              path="/patientdetailaccess/accessbyfp"
              component={AccessByFP}
            />
          </Switch>
        </div>
      </div>
    </>
  );
};

export default PatientDetailAccess;
