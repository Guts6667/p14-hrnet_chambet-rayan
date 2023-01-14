import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { employeeActions } from "../../store/employee";
import "./Home.scss"
const Home = () => {
  const dispatch = useDispatch();
  const [states, setStates] = useState([])

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [startDate, setStartDate] = useState("");
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [department, setDepartment] = useState("");
   
  const handleSubmit = (e) => {
    e.preventDefault()
    let formDatas = {
      firstName : firstName,
      lastName : lastName,
      birthDate: birthDate,
      startDate : startDate, 
      street : street, 
      city : city,
      state: state,
      zipCode: zipCode,
      department : department
    }
    dispatch(employeeActions.addEmployee({
      firstName: formDatas.firstName, 
      lastName: formDatas.lastName, 
      birthDate: formDatas.birthDate, 
      startDate: formDatas.birthDate,
      street: formDatas.street,
      city : formDatas.city,
      state: formDatas.state,
      zipCode : formDatas.zipCode,
      department : formDatas.department
    }))
    dispatch(employeeActions.getEmployee())
  }

  useEffect(() => {
     fetch("/data/states.json")
    .then((data) => data.json())
    .then((data) =>  setStates(data))
  }, [])
  return (
    <div className="container__home">
      <div className="container__home-header">
        <h1>HRnet</h1>
        <Link to={"/employees"} className="btn-link">View Current Employees</Link>
      </div>
      <main>
        <h2>Create Employee</h2>
        <form  className="container__form" onSubmit={handleSubmit}>
          <div className="container__form-input">
            <label htmlFor="">First Name</label>
            <input type="text" onChange={(e) => {setFirstName(e.target.value)}} required/>
          </div>
          <div className="container__form-input">
            <label htmlFor="">Last Name</label>
            <input type="text" onChange={(e) => {setLastName(e.target.value)}} required/>
          </div>
          <div className="container__form-input">
            <label htmlFor="">Date of Birth</label>
            <input type="date" onChange={(e) => {setBirthDate(e.target.value)}} required />
          </div>
          <div className="container__form-input">
            <label htmlFor="">Start Date</label>
            <input type="date" onChange={(e) => {setStartDate(e.target.value)}}required />
          </div>
          <div className="container__form-address">
            <span>Address</span>
            <div className="container__form-input">
              <label htmlFor="">Street</label>
              <input type="text" onChange={(e) => {setStreet(e.target.value)}}required />
            </div>
            <div className="container__form-input">
              <label htmlFor="">City</label>
              <input type="text" onChange={(e) => {setCity(e.target.value)}}required/>
            </div>
            <div className="container__form-input">
            <label htmlFor="">State</label>
              <select name="" id="" onChange={(e) => {setState(e.target.value)}}required>
             {states.map((state)=> {
              return (
                <option key={`${state.name}-${state.abbreviation}`} value={state.name}>{state.name}</option>
              ) 
             })}   
              </select>
            </div>
            <div className="container__form-input">
              <label htmlFor="">Zip Code</label>
              <input type="number" onChange={(e) => {setZipCode(e.target.value)}}required />
            </div>
          </div>
          <div className="container__form-input">
            <label htmlFor="">Department</label>
            <select name="" id="" onChange={(e) => {setDepartment(e.target.value)}}required>
              <option value="Sales">Sales</option>
              <option value="Marketing">Marketing</option>
              <option value="Engineering">Engineering</option>
              <option value="Human Resources">Human Resources</option>
              <option value="Legal">Legal</option>
            </select>
          </div>
          <div className="container__form-submit">
            <input type="submit" value="Valider"/>
          </div>
        </form>
      </main>
    </div>
  );
};

export default Home;
