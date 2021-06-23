import React from "react";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Homepage from "./pages/Homepage";
import Weather from "./pages/Weather";
import { Switch, Route } from "react-router-dom";
import "./styles/style.css";
function App() {
  return (
    <div className="App">
      <Nav />
      <Switch>
        <Route path="/" exact>
          <Homepage />
        </Route>
        <Route path="/weather" exact>
          <Weather />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
