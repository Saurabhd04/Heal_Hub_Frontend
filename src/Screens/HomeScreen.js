import home1 from "../assets/Images/healhub-logo.png";
import about from "../assets/Images/HEALHUB-ABOUT.png";
import support from "../assets/Images/HEALHUB-SUPPORT.png";
import security from "../assets/Images/HEALHUB-SECURITY.png";
import qrcode from "../assets/Images/HEALHUB-QRCODE.png";
import scanner from "../assets/Images/HEALHUB-SCANNER.png";
import { Link } from "react-router-dom";

const HomeScreen = () => {
  return (
    <>
      <div className="sec-home-body-container">
        <div className="home-content-inner">
          <img className="home-1-img" src={home1} alt="#" />

          <div className="healhub-frontline">
            <p className="bold-900 lobster-font">
              HealHub
              <span className="icon-size-sm material-icons">
                health_and_safety
              </span>
            </p>
            <p>
              An Electronic Health Record Management System. A secure place to
              store your Health Records.
            </p>
            <Link to="/register">
              <button className="btn btn-primary">Register</button>
            </Link>
          </div>
        </div>

        <div className="home-content-inner2">
          <div className="heading">
            <p className="bold-500">
              <span className="icon-size material-icons">article</span> About
            </p>
          </div>

          <div className="home-content-inner2-inner">
            <div className="profile-inner">
              <p style={{ textAlign: "justify" }}>
                <strong>What is HealHub?</strong><br/>
                HealHub helps to store and maintain the health records of a
                patient and provide patient’s the facility to share their
                medical records with any Medical Practitioner at their own ease.
                Medical emergencies can happen anytime and anywhere. A number of
                cases has been reported where a fraction of deaths were caused
                due to the unavailability of the patient’s health record. This
                platform removes the hassle of physical medical records and
                gives patient the power to store his medical records securely in
                one place.
              </p>
            </div>

            <img className="home-1-img" src={about} alt="#" />
          </div>
        </div>

        <div className="home-content-inner2">
          <div className="heading">
            <p className="bold-500">
              <span className="icon-size material-icons">
                supervised_user_circle
              </span>
              Stakeholder
            </p>
          </div>
          <div className="home-content-inner2-inner">
            <div className="profile-inner">
              <p style={{ textAlign: "justify" }}>
                <strong>Patient's</strong><br/>
                A patient is a stakeholder who requires medical care and
                treatment based on his past Medial History. Here a patient can
                store his Medical History data safely and securely. He can as
                well as grant Medical Practitioners the access to his medical
                data through this platform.{" "}
              </p>
            </div>
            <div className="profile-inner">
              <p style={{ textAlign: "justify" }}>
                <strong>Doctor's</strong><br/>
                Doctors are the prime stakeholder, who will have utmost benefit
                from this platform. They will be able to access patient’s health
                record with ease and will be able to serve their best for the
                care and treatment of the patient.
              </p>
            </div>
          </div>
        </div>
        <div className="home-content-inner2">
          <div className="heading">
            <p className="bold-500">
              <span className="icon-size material-icons">security</span>Security
            </p>
          </div>
          <div className="home-content-inner2-inner">
            <div className="">
              <img className="home-2-img" src={security} alt="#" />
            </div>
            <div className="">
              <div className="profile-inner">
                <p style={{ textAlign: "justify" }}>
                  <strong>How your data is secure with us?</strong><br/>
                  Authentication is the mechanism of associating an incoming
                  request with a set of identifying credentials, such as the
                  user the request came from, or the token that it was signed
                  with. The permission and throttling policies can then use
                  those credentials to determine if the request should be
                  permitted.
                </p>
                <p style={{ textAlign: "justify" }}>
                  Knox authentication is token based, similar to the
                  TokenAuthentication built in to DRF. However, it overcomes
                  some problems present in the default implementation:
                </p>
                <p style={{ textAlign: "justify" }}>
                  Knox provides one token per call to the login view - allowing
                  each client to have its own token which is deleted on the
                  server side when the client logs out.
                </p>
                <p style={{ textAlign: "justify" }}>
                  Knox tokens are only stored in an encrypted form. Even if the
                  database were somehow stolen, an attacker would not be able to
                  log in with the stolen credentials.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="home-content-inner2">
          <div className="heading">
            <p className="bold-500">
              <span className="icon-size material-icons">contact_support</span>
              Support
            </p>
          </div>
          <div className="home-content-inner2-inner">
            <div className="profile-inner">
              <p style={{ textAlign: "justify" }}>
               <strong>Found a Bug or Issue ?</strong><br/>
                We assure customer reliability for our web portal. Support team
                is available to resolve any issue arose while using the web
                application.
              </p>
              <p>
                Contact us today at <strong>healhub0@gmail.com</strong> or leave
                a Bug/Issue feedback using the form below.
              </p>
              <a href="https://forms.gle/9qK4jrywRds9zuxm9">
                <button className="btn btn-primary">Support Form </button>{" "}
              </a>
            </div>

            <div className="">
              <img className="home-1-img" src={support} alt="#" />
            </div>
          </div>
        </div>

        <div className="home-content-inner2">
          <div className="heading">
            <p className="bold-500">
              <span className="icon-size material-icons">qr_code_scanner</span>{" "}
              QR-CODE
            </p>
          </div>
          <div className="home-content-inner2-inner">
            <div className="">
              <div className="qr-container">
                <img className="qrcode" src={qrcode} alt="#" />
                <p>
                  Scan the <strong>QR-CODE</strong>
                </p>
              </div>
              <div className="profile-inner">
                <p style={{ textAlign: "justify" }}>
                  HealHub is a mobile friendly platform. Now you can access the
                  platform by just scanning this QR-code using your Device. Why
                  not grab your phone and give a try scanning the QR-Code.
                </p>
              </div>
            </div>
            <div className="">
              <img className="home-1-img" src={scanner} alt="#" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeScreen;
