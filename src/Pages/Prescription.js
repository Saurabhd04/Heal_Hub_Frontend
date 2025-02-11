import React, { useState, useEffect, useContext } from "react";
import PrescriptionCard from "../components/PrescriptionCard";
// import logo from "../HealHubLogo.jpeg";
import axios from "axios";
import { loginContext, urlContext } from "../App";

const Prescription = () => {
  const { state } = useContext(loginContext);
  const url = useContext(urlContext);

  const [prescriptions, setPrescriptions] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(
          url + `/api/v1/PrescriptionInfoOfSpecificUser/`,
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: "Token " + state.token,
            },
          }
        );
        setPrescriptions(response.data);
      } catch (err) {
        console.log(err.response);
      }
    };
    getData();
  }, [state.token, url]);

  // const generatePDF = () => {
  //   window.print();
  // };

  return (
    <>
      <div className="content-inner" id="invoice">
        <div className="align-centre">
          <div className="col">
            <p className="bold-300">Medical Prescriptions</p>
          </div>
          {/* <div className="col">
            <button className="btn  btn-primary btn-sm" onClick={() => generatePDF()}>
              Generate PDF
            </button>
          </div> */}
        </div>
        <hr />
        <div className="">
          {prescriptions.map((value, index) => {
            return <PrescriptionCard data={value} key={index} id={value.id} />;
          })}
        </div>
      </div>
    </>
  );
};

export default Prescription;
