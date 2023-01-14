import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./index.css";
import Employees from "./pages/Employees";
import Home from "./pages/Home";
import store from "./store/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path={"/"} element={<Home />} />
          <Route path={"/employees"} element={<Employees />} />
        </Routes>
      </Router>
    </Provider>
  </React.StrictMode>
);
