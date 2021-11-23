import "./Navbar.css";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import { GoogleLogout } from "react-google-login";
import GoogleIcon from "./GoogleIcon.svg";

function TopNavbar() {
  const logout = (response) => {
    localStorage.removeItem("userLoggedInToken");
  };
  return (
    <div className="App">
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="/">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/InteractiveForm">InteractiveForm</Nav.Link>
              <Nav.Link href="/login">Login</Nav.Link>
            </Nav>
            <GoogleLogout
              clientId={process.env.REACT_APP_CLIENT_ID}
              render={(renderProps) => (
                <button
                  onClick={renderProps.onClick}
                  disabled={renderProps.disabled}
                  className="google-logout-button google-button"
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
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default TopNavbar;
