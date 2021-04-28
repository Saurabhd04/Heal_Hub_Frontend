import { useContext, useEffect, useState } from "react";
import { loginContext, urlContext } from "../App";
import axios from "axios";
import RequestCard from "../components/RequestCard";

const AccessById = () => {
  const { state, dispatch } = useContext(loginContext);
  const url = useContext(urlContext);

  const [id, setID] = useState({
    pid: "",
    did: state.user.id,
  });

  const [names, setNames] = useState([]);

  const [user, setUser] = useState();

  const [otp, setOtp] = useState({
    otp: "",
    pid: "",
    did: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setID((prevData) => {
      return { ...prevData, [name]: value };
    });
  };

  const handleOTPInputChange = (event) => {
    const { name, value } = event.target;

    setOtp((prevData) => {
      return { ...prevData, [name]: value };
    });
    setOtp((prevData) => {
      return {
        ...prevData,
        ["pid"]: localStorage.getItem("pid"),
        ["did"]: state.user.id,
      };
    });
  };

  const handleOTPSubmit = async (event) => {
    if (event) {
      event.preventDefault();
    }

    let res = await axios
      .post(url+"/api/v1/otpaccessverification/", otp, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        console.log(response);

        if (response.status === 200) {
          alert(response.data);
        } else if (response.status === 201) {
          alert("OTP verified");
        }
      })
      .catch((error) => {
        console.log(error.response);
        alert("No User Available for this OTP");
      });

    console.log(otp);
  };

  const handleSubmit = (event) => {
    if (event) {
      event.preventDefault();
    }
    let res = names
      .map((name) => name)
      .filter((n) => {
        return n.id == id.pid;
      });
    setUser(res);
    console.log(user);
  };

  useEffect(async () => {
    let res = await axios.get(url+"/api/auth/userlist");
    //console.log(res.data);
    let temp = res.data
      .map((item) => item)
      .filter((mp) => {
        return mp.is_MP === false;
      });
    setNames(temp);
  }, []);

  return (
    <>
      <div className="container inner">
        <h3>Access by user Identity Number </h3>
        <hr/>
        <div className="container2 request-card2">
          <div className="col">
            <form onSubmit={handleSubmit}>
              <div className="dark-card">
                <div className="form-group col">
                  <label>
                    <strong>Patient ID/User ID</strong>
                  </label>
                  <div className="row align-centre">
                    <div className="col-8">
                      <input
                        type="number"
                        className="form-control"
                        id=""
                        placeholder="Enter Patient ID"
                        name="pid"
                        value={id.pid}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="col-4">
                      <button type="submit" className="btn btn-primary">
                        Search Patient
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </form>
            <div className="">
              {user ? (
                user.map((u) => (
                  <RequestCard key={u.id} value={u} did={state.user.id} />
                ))
              ) : (
                <div className="request-card2">
                  <p>
                    <strong>Note:</strong> Currently you have not searched any
                    Patient ID/User ID
                  </p>
                </div>
              )}
            </div>
            <form onSubmit={handleOTPSubmit}>
              <div className="dark-card">
                <div className="form-group col">
                  <label>
                    <strong>OTP</strong>
                  </label>
                  <div className="row align-centre">
                    <div className="col-8">
                      <input
                        type="number"
                        className="form-control"
                        id=""
                        placeholder="Enter One Time Password after making request"
                        name="otp"
                        value={otp.otp}
                        onChange={handleOTPInputChange}
                      />
                    </div>
                    <div className="col-4">
                      <button type="submit" className="btn btn-primary">
                        Verify OTP
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default AccessById;
