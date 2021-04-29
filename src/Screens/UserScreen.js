import React, { useContext, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import Dashboard from "../Pages/Dashboard";
import Profile from "../Pages/Profile";
import Insurance from "../Pages/Insurance";
import Prescription from "../Pages/Prescription";
import Prescribe from "../Pages/Prescribe";
import FindUser from "../Pages/FindUser";
import Menu from "../Menu";
import { loginContext } from "../App";
import ErrorScreen from "./ErrorScreen";
import Prediction from "../Pages/Prediction";
import PatientDetailAccess from "../Pages/PatientDetailAccess";
import AccessById from "../Pages/AccessById";
import AccessByFP from "../Pages/AccessByFP";
import DetailAccess from "../Pages/DetailAccess";
import DDashboard from "../Pages/DDashboard";

const UserScreen = () => {
  const { dispatch } = useContext(loginContext);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    const token = JSON.parse(localStorage.getItem("token"));
    // console.log(user);
    // console.log(token);
    dispatch({
      type: "REFRESH",
      payload: { user, token },
    });
  }, [dispatch]);

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="menu-body-container">
            <Menu />
          </div>
          <div className="container-fluid  col-10">
            <Switch>
              {/* <Route exact path="/userscreen" component={UserScreen} /> */}
              <Route exact path="/dashboard" component={Dashboard} />
              <Route exact path="/profile" component={Profile} />
              <Route exact path="/insurance" component={Insurance} />
              <Route exact path="/prescription" component={Prescription} />
              <Route exact path="/prescribe" component={Prescribe} />
              <Route exact path="/finduser" component={FindUser} />
              <Route exact path="/prediction" component={Prediction} />
              <Route exact path="/patientdetailaccess" component={PatientDetailAccess} />
              <Route exact path="/patientdetailaccess/accessbyid" component={AccessById} />
              <Route exact path="/patientdetailaccess/accessbyfp" component={AccessByFP} />
              <Route exact path="/detailaccess" component={DetailAccess} />
              <Route exact path="/ddashboard" component={DDashboard} />
              
              <Route exact path="/error" component={ErrorScreen} />
            </Switch>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserScreen;
