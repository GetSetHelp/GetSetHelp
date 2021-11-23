import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar.js";
import InteractiveForm from "./Components/InteractiveForm/InteractiveForm.js";
import Login from "./Components/Login/Login.js";

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Navbar />

          <Switch>
            <Route exact path="/InteractiveForm" component={InteractiveForm} />
            <Route exact path="/login" component={Login} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
