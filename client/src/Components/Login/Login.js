import "./Login.css";
import React, { useState } from "react";
import GoogleLogin from "react-google-login";
import GoogleIcon from "./GoogleIcon.svg";
import { Link } from "react-router-dom";
import axios from "axios";
import backgroundLogin from "./backgroundLogin.svg";

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
    localStorage.setItem("userToken", response.tokenId);
    axios
      .post(`${process.env.REACT_APP_SERVER}/user/login`, {id_token: localStorage.getItem("userToken")})
      .then((res) => {
        alert(res.data);
        if (res.data === "LoggedIn!") {
          // redirect to "/"
        }
        else {
          // redirect to "/signup"
        }
      })
      .catch((err) => {
        alert("Error in login! Try again");
      });
  };

  return (
    <div className=" login-container fluid-container">
      <img
        src={backgroundLogin}
        className="backgroundLogin"
        alt="backgroundLogin"
      />
      <div className="login container">
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
    </div>
  );
}

export default Login;
