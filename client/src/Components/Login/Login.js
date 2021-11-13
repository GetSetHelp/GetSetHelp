import "./Login.css";
import GoogleLogin from "react-google-login";
import { GoogleLogout } from "react-google-login";
import GoogleIcon from "./GoogleIcon.svg";
import axios from "axios";
function Login() {
  const responseGoogle = (response) => {
    const firstName = response.profileObj.givenName;
    const lastName = response.profileObj.familyName;
    const email = response.profileObj.email;

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
    console.log(response);
  };

  return (
    <div className="Login">
      <div className="container">
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
              <span className="google-button__text">Sign In with Google</span>{" "}
            </button>
          )}
          buttonText="Login"
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
          cookiePolicy={"single_host_origin"}
          isSignedIn={true}
        />
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
      </div>
    </div>
  );
}

export default Login;
