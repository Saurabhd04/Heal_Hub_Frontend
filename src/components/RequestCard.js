import { useEffect, useState, useContext } from "react";
import axios from "axios";
import { urlContext } from "../App";

const RequestCard = (props) => {
  const url = useContext(urlContext);
  const { id, username, phone_number } = props.value;
  const did = props.did;

  const [pField, setPfield] = useState({
    prescription_field: false,
  });

  const [data, setData] = useState({
    otp: "",
    verify_otp: false,
    pid: "",
    did: "",
    prescription_field: false,
    blood_pressure_field: false,
  });

  const onChangeHandler = (event) => {
    const { name } = event.target;
    if (name === "prescription_field") {
      setPfield((prevData) => {
        return { ...prevData, [name]: event.target.checked };
      });
    }

    setData((prevData) => {
      return {
        ...prevData,
        prescription_field: event.target.checked,
        pid: id,
        did: did,
      };
    });
  };

  const handleSubmit = (event) => {
    if (event) {
      event.preventDefault();
    }
    localStorage.setItem("pid", id);
    console.log(data);

    axios
      .post(url + "/api/v1/accessverification/", data, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => console.log(error.response));
  };

  useEffect(() => {}, [pField.prescription_field, data]);

  return (
    <>
      {/* <div className="profile-inner">
        <div className="">
          <div className="">
            <h3>Patient Detail</h3>
            <hr />
            <div className="row">
              <div className="col-2">
                <strong>UserID : </strong>
                {id}
              </div>
              <div className="col-4">
                <strong>Username :</strong> {username}
              </div>
              <br></br>
              <div className="col-6">
                <strong>Phone Number :</strong> {phone_number}
              </div>
            </div>
          </div>
        </div>
        <form>
          <div className="form-group">
            <div className="row">
              <label className="col-5">
                <strong>Prescribtion Field</strong>
              </label>
              <input
                type="checkbox"
                className="checkbox-container  col-1"
                placeholder=""
                name="prescription_field"
                checked={pField.prescription_field}
                onChange={onChangeHandler}
              />
            </div>
            <hr />
            <div className="col align-centre">
              <button onClick={handleSubmit} className="btn btn-dark col ">
                Request
              </button>
            </div>
          </div>
        </form>
      </div> */}
      <div className="table-inner">
        <h3>Request Patient Detail</h3>
        <table className="table table-boardered table-info">
          <tbody>
            <tr>
              <th className="w-25">ID:</th>
              <td>{id}</td>
            </tr>
            <tr>
              <th className="w-25">Username:</th>
              <td>{username}</td>
            </tr>
            <tr>
              <th className="w-25">Phone Number:</th>
              <td>{phone_number}</td>
            </tr>
            <tr>
              <th className="w-25">Prescribtion Field</th>
              <td>
                <input
                  type="checkbox"
                  className="checkbox-container  col-1"
                  placeholder=""
                  name="prescription_field"
                  checked={pField.prescription_field}
                  onChange={onChangeHandler}
                />
              </td>
            </tr>
            <tr className="table-danger">
              <th className="w-25">Make Request:</th>
              <td>
                <button onClick={handleSubmit} className="btn btn-dark">
                  Request
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default RequestCard;
