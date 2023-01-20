import React from "react";
import { Link } from "react-router-dom";
import FormEmployee from "../../components/FormEmployee";
import "./Home.scss"
const Home = () => {  

  return (
    <div className="container__home">
      <div className="container__home-header">
        <h1>HRnet</h1>
        <Link to={"/employees"} className="btn-link">View Current Employees</Link>
      </div>
      <main>
        <h2>Create Employee</h2>
        <FormEmployee />
      </main>
    </div>
  );
};

export default Home;
