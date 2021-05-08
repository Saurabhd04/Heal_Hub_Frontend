import React, { useState, useContext, useEffect } from "react";
import axios from "axios";
import { loginContext, urlContext } from "../App";
import moment from "moment";

const Profile = () => {
  const url = useContext(urlContext);

  const { state } = useContext(loginContext);

  const bloodGroups = [
    { label: "Choose", value: "" },
    { label: "A+", value: "A+" },
    { label: "B+", value: "B+" },
    { label: "AB+", value: "AB+" },
    { label: "O+", value: "O+" },
    { label: "O-", value: "O-" },
    { label: "A-", value: "A-" },
    { label: "B-", value: "B-" },
    { label: "AB-", value: "AB-" },
  ];

  const states = [
    { label: "Choose", value: "" },
    { label: "Andhra Pradesh", value: "Andhra Pradesh" },
    { label: "Arunachal Pradesh", value: "Arunachal Pradesh" },
    { label: "Assam", value: "Assam" },
    { label: "Bihar", value: "Bihar" },
    { label: "Chhattisgarh", value: "Chhattisgarh" },
    { label: "Goa", value: "Goa" },
    { label: "Gujarat", value: "Gujarat" },
    { label: "Haryana", value: "Haryana" },
    { label: "Himachal Pradesh", value: "Himachal Pradesh" },
    { label: "Jammu and Kashmir", value: "Jammu and Kashmir" },
    { label: "Jharkhand", value: "Jharkhand" },
    { label: "Karnataka", value: "Karnataka" },
    { label: "Kerala", value: "Kerala" },
    { label: "Madhya Pradesh", value: "Madhya Pradesh" },
    { label: "Maharashtra", value: "Maharashtra" },
    { label: "Manipur", value: "Manipur" },
    { label: "Meghalaya", value: "Meghalaya" },
    { label: "Mizoram", value: "Mizoram" },
    { label: "Nagaland", value: "Nagaland" },
    { label: "Odisha", value: "Odisha" },
    { label: "Punjab", value: "Punjab" },
    { label: "Rajasthan", value: "Rajasthan" },
    { label: "Sikkim", value: "Sikkim" },
    { label: "Tamil Nadu", value: "Tamil Nadu" },
    { label: "Telangana", value: "Telangana" },
    { label: "Tripura", value: "Tripura" },
    { label: "Uttar Pradesh", value: "Uttar Pradesh" },
    { label: "Uttarakhand", value: "Uttarakhand" },
    { label: "West Bengal", value: "West Bengal" },
  ];

  const genders = [
    { label: "Choose", value: "" },
    { label: "Male", value: "Male" },
    { label: "Female", value: "Female" },
    { label: "Others", value: "Others" },
  ];

  const [profile, setProfile] = useState({
    user: "",
    firstName: "",
    middleName: "",
    lastName: "",
    gender: "",
    dateOfBirth: "",
    bloodGroup: "",
    emailId: "",
    mobileNumber: "",
    alternateMobileNumber: "",
    addressLine: "",
    cityOrTown: "",
    district: "",
    state: "",
    pin: "",
    aadhaarCardNumber: "",
  });

  const [isUpdate, setIsUpdate] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setProfile((prevData) => {
      return { ...prevData, [name]: value, user: state.user.id };
    });
  };

  const handleSubmit = (event) => {
    console.log("THIS IS HANDLESUBMIT");
    //AXIOS POST Request
    axios
      .post(url + "/api/v1/PersonalInfo/", profile, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        alert("Profile Updated Successfully.");
      })
      .catch((error) => {
        console.log(error.response.request);
      });
  };

  const handleUpdate = async (event) => {
    if (event) {
      event.preventDefault();
    }
    axios
      .patch(
        url + "/api/v1/PersonalInfoOfSpecificUser/" + state.user.id,
        profile,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => {
        alert("Profile Updated Successfully.");
      })
      .catch((error) => {
        console.log(error.response);
      });
  };

  const handle_Submit = (event) => {
    event.preventDefault();
    if (event.nativeEvent.submitter.name === "PUT") {
      handleUpdate();
    } else {
      handleSubmit();
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      let response = null;
      try {
        response = await axios.get(
          url + "/api/v1/PersonalInfoOfSpecificUser/" + state.user.id
        );
        if (response.status === 200 ? setIsUpdate(true) : setIsUpdate(false));
        setProfile((prevData) => {
          return {
            ...prevData,
            firstName: response.data["firstName"],
            middleName: response.data["middleName"],
            lastName: response.data["lastName"],
            gender: response.data["gender"],
            dateOfBirth: response.data["dateOfBirth"],
            bloodGroup: response.data["bloodGroup"],
            emailId: response.data["emailId"],
            mobileNumber: response.data["mobileNumber"],
            alternateMobileNumber: response.data["alternateMobileNumber"],
            addressLine: response.data["addressLine"],
            cityOrTown: response.data["cityOrTown"],
            district: response.data["district"],
            state: response.data["state"],
            pin: response.data["pin"],
            aadhaarCardNumber: response.data["aadhaarCardNumber"],
          };
        });
      } catch (error) {
        console.log(error.response);
      }
    };
    fetchData();
  }, [state.user.id, url, isUpdate]);

  return (
    <>
      <div className="content-inner">
        <div className="profile-inner">
          <div className="row">
            <p className="bold-300">Update Profile</p>
          </div>
          <hr />
          <form onSubmit={handle_Submit}>
            
              <div className="input-row">
                <div className="col">
                  <label>First Name*</label>
                  <input
                    className="form-control "
                    type="text"
                    name="firstName"
                    onChange={handleInputChange}
                    value={profile.firstName}
                    autoComplete="off"
                    required
                  />
                </div>

                <div className="col">
                  <label>Middle Name</label>
                  <input
                    className="form-control"
                    type="text"
                    name="middleName"
                    onChange={handleInputChange}
                    value={profile.middleName}
                    autoComplete="off"
                    placeholder="Optional"
                  />
                </div>

                <div className="col">
                  <label>Last Name</label>
                  <input
                    className="form-control"
                    type="text"
                    name="lastName"
                    onChange={handleInputChange}
                    value={profile.lastName}
                    autoComplete="off"
                    placeholder="Optional"
                  />
                </div>
              </div>

              <div className="input-row">
                <div className="col">
                  <label>Gender*</label>
                  <select
                    name="gender"
                    value={profile.gender}
                    className="form-control"
                    onChange={handleInputChange}
                    required
                  >
                    {genders.map((gender, index) => (
                      <option key={index} value={gender.value}>
                        {gender.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="col">
                  <label>Date of Birth*</label>
                  <input
                    className="form-control"
                    type="date"
                    name="dateOfBirth"
                    onChange={handleInputChange}
                    value={profile.dateOfBirth}
                    autoComplete="off"
                    max={moment().format("YYYY-MM-DD")}
                    required
                  />
                </div>

                <div className="col">
                  <label>Blood Group*</label>
                  <select
                    name="bloodGroup"
                    value={profile.bloodGroup}
                    className="form-control"
                    onChange={handleInputChange}
                    required
                  >
                    {bloodGroups.map((bloodGroup, index) => (
                      <option key={index} value={bloodGroup.value}>
                        {bloodGroup.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="input-row">
                <div className="col">
                  <label>Email ID*</label>
                  <input
                    className="form-control"
                    type="text"
                    name="emailId"
                    onChange={handleInputChange}
                    value={profile.emailId}
                    autoComplete="off"
                    required
                  />
                </div>

                <div className="col">
                  <label>Mobile Number*</label>
                  <input
                    className="form-control"
                    type="text"
                    name="mobileNumber"
                    onChange={handleInputChange}
                    value={profile.mobileNumber}
                    autoComplete="off"
                    maxLength="10"
                    minLength="10"
                    required
                  />
                </div>

                <div className="col">
                  <label>Alternate Mobile Number</label>
                  <input
                    className="form-control"
                    type="text"
                    name="alternateMobileNumber"
                    onChange={handleInputChange}
                    value={profile.alternateMobileNumber}
                    placeholder="Optional"
                    autoComplete="off"
                    maxLength="10"
                    minLength="10"
                  />
                </div>
              </div>
              <div className="input-row">
                <div className="col">
                  <label>Address Line*</label>
                  <input
                    className="form-control"
                    type="text"
                    name="addressLine"
                    onChange={handleInputChange}
                    value={profile.addressLine}
                    autoComplete="off"
                    required
                  />
                </div>
                <div className="col">
                  <label>City or Town*</label>
                  <input
                    className="form-control"
                    type="text"
                    name="cityOrTown"
                    onChange={handleInputChange}
                    value={profile.cityOrTown}
                    autoComplete="off"
                    required
                  />
                </div>
                <div className="col">
                  <label>District*</label>
                  <input
                    className="form-control"
                    type="text"
                    name="district"
                    onChange={handleInputChange}
                    value={profile.district}
                    autoComplete="off"
                    required
                  />
                </div>
              </div>
              <div className="input-row">
                <div className="col">
                  <label>State*</label>
                  <select
                    name="state"
                    value={profile.state}
                    className="form-control"
                    onChange={handleInputChange}
                    required
                  >
                    {states.map((state, index) => (
                      <option key={index} value={state.value}>
                        {state.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="col">
                  <label>Pin*</label>
                  <input
                    className="form-control"
                    type="text"
                    name="pin"
                    onChange={handleInputChange}
                    value={profile.pin}
                    autoComplete="off"
                    maxLength="6"
                    minLength="6"
                    required
                  />
                </div>

                <div className="col">
                  <label>Aadhaar Card Number*</label>
                  <input
                    className="form-control"
                    type="text"
                    name="aadhaarCardNumber"
                    onChange={handleInputChange}
                    value={profile.aadhaarCardNumber}
                    autoComplete="off"
                    minLength="12"
                    maxLength="12"
                    required
                  />
                </div>
              </div>
            
            <hr />
            <p className="font-small">
              <strong>Note:</strong> When you fill this form and submit it, The
              data will reflect in your dashboard.
            </p>

            {isUpdate === true ? (
              <button
                // onClick={handleUpdate}
                className="btn btn-primary"
                type="submit"
                name="PUT"
                value="PUT"
              >
                Update
              </button>
            ) : (
              <button
                // onClick={handleSubmit}
                className="btn btn-primary"
                type="submit"
                name="POST"
                value="POST"
              >
                Save
              </button>
            )}
          </form>
        </div>
      </div>
    </>
  );
};

export default Profile;
