import "./Login.css";
import { useState } from "react";
import GoogleLogin from "react-google-login";
import { GoogleLogout } from "react-google-login";
import GoogleIcon from "./GoogleIcon.svg";
import { Link } from "react-router-dom";
import axios from "axios";

const startValues = {
  username: "",
  password: "",
};

function Login() {
  const [formValues, setFormValues] = useState(startValues);

  const onChange = (event) => {
    const { name, value } = event.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };
  const responseGoogle = (response) => {
    const firstName = response.profileObj.givenName;
    const lastName = response.profileObj.familyName;
    const email = response.profileObj.email;
    localStorage.setItem("userLoggedInToken", response.tokenId);
    const user = {
      firstName,
      lastName,
      email,
    };

    axios
      .post(`${process.env.REACT_APP_SERVER}/routes/user/login`, user)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
    console.log(response);
  };
  const logout = (response) => {
    localStorage.removeItem("userLoggedInToken");
  };

  return (
    <div className=" Login fluid-container">
      <GoogleLogout
        clientId={process.env.REACT_APP_CLIENT_ID}
        render={(renderProps) => (
          <button
            onClick={renderProps.onClick}
            disabled={renderProps.disabled}
            className="google-button"
          >
            <span className="google-button__icon">
              {" "}
              <img src={GoogleIcon} alt="GoogleIcon" />
            </span>
            <span className="google-button__text">Logout</span>{" "}
          </button>
        )}
        buttonText="Logout"
        onLogoutSuccess={logout}
        isSigned={false}
      ></GoogleLogout>
      <div className="outer">
        <div className="inner">
          <h3 className="signin-heading">Sign In</h3>
          <div className="line-signin-heading"> </div>
          <div className="google-button-text">
            <GoogleLogin
              clientId={process.env.REACT_APP_CLIENT_ID}
              render={(renderProps) => (
                <button
                  onClick={renderProps.onClick}
                  disabled={renderProps.disabled}
                  className="google-button"
                >
                  <span className="google-button__icon">
                    {" "}
                    <img src={GoogleIcon} alt="GoogleIcon" />
                  </span>
                  <span className="google-button__text">
                    Sign In with Google
                  </span>{" "}
                </button>
              )}
              buttonText="Login"
              onSuccess={responseGoogle}
              onFailure={responseGoogle}
              cookiePolicy={"single_host_origin"}
              isSignedIn={true}
            />
          </div>
          <p className="alt-signin"> OR</p>
          <form>
            <div className="form-group">
              <div className="input-group flex-nowrap">
                <span className="input-group-text" id="addon-wrapping">
                  <i className="fas fa-user"></i>
                </span>

                <input
                  required
                  type="text"
                  name="username"
                  className="form-control "
                  value={formValues.username}
                  onChange={onChange}
                  placeholder="Username"
                />
              </div>
            </div>

            <div className="form-group">
              <div className="input-group flex-nowrap">
                <span className="input-group-text" id="addon-wrapping">
                  <i className="fas fa-lock"></i>{" "}
                </span>
                <input
                  required
                  type="password"
                  name="password"
                  className="form-control"
                  value={formValues.password}
                  onChange={onChange}
                  placeholder="Password"
                />
              </div>
            </div>

            <div className="form-group">
              <div className="custom-control custom-checkbox">
                <input
                  type="checkbox"
                  className="custom-control-input checkbox"
                  id="customCheck1"
                />
                <label
                  className="custom-control-label rememberme-text"
                  htmlFor="customCheck1"
                >
                  Remember me
                </label>
              </div>
            </div>
            <div className="signin-btn-div">
              <button
                className="btn  btn-lg btn-dark signin-btn "
                type="submit"
                name="signin"
              >
                Sign In
              </button>
            </div>
            <Link to="/ForgotPassword">
              <p className="forgot-password text-right">Forgot Password?</p>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
