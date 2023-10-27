import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import Navigation from "./components/Navigation";
import { VehiclesList, VehicleAdmin } from "./components/vehicles";
import { AccessList, AccessAdmin } from "./components/access";

function App() {
  return (
    <Router>
      <Navigation />
      <div className="container p-4">
        <Routes>
          {/* Crud Access */}
          <Route path="/" Component={AccessList} exact />
          <Route path="/edit/:id" Component={AccessAdmin} />
          <Route path="/create" Component={AccessAdmin} />

          {/* Crud Vehicles */}
          <Route path="/vehicles" Component={VehiclesList} />
          <Route path="/vehicles/edit/:id" Component={VehicleAdmin} />
          <Route path="/vehicles/create" Component={VehicleAdmin} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
