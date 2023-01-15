import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { employeeActions } from "../../store/employee";
import "./Home.scss"
const Home = () => {  

  // Add verification before form validation in case the employee already exists
  //Add span element in modal saying: employee already existing
  const employeeState = useSelector((state) => state.employee)
  const maxStartDate = new Date().toISOString().slice(0,10)
  const minDate = new Date(new Date(maxStartDate).setFullYear(new Date(maxStartDate).getFullYear() - 70));
  const maxDate = new Date(new Date(maxStartDate).setFullYear(new Date(maxStartDate).getFullYear() - 18));
  const maxBirthDate = maxDate.toISOString().slice(0,10);
  const minBirthDate = minDate.toISOString().slice(0,10);

  const dispatch = useDispatch();
  const [states, setStates] = useState([])
  const [isFormInvalid, setIsFormInvalid] = useState(false);

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
    // Retrieves formDatas
    const formDatas = {
      firstName: firstName, 
      lastName: lastName, 
      birthDate: birthDate, 
      startDate: startDate,
      street: street,
      city : city,
      state: state,
      zipCode : zipCode,
      department : department
    }
    // Compares formDatas with storeDatas
        let existingEmployee = employeeState.filter( (element) => element.firstName.toLowerCase() === formDatas.firstName.toLowerCase() && element.lastName.toLowerCase() === formDatas.lastName.toLowerCase() )

        if(existingEmployee.length > 0){
          console.log('Employ already exists!');
          dispatch(employeeActions.getEmployee())
          setIsFormInvalid(true)
          let formInputs = document.querySelectorAll("input[type='text']");
          formInputs.forEach((element) => element.value = " ")
        } else{
          setIsFormInvalid(false)
          dispatch(employeeActions.addEmployee({
            firstName: formDatas.firstName, 
            lastName: formDatas.lastName, 
            birthDate: formDatas.birthDate, 
            startDate: formDatas.startDate,
            street: formDatas.street,
            city : formDatas.city,
            state: formDatas.state,
            zipCode : formDatas.zipCode,
            department : formDatas.department
          }))
        }
          

          

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
            {isFormInvalid && <span className="error">Employé déjà existant</span>}
          </div>
          <div className="container__form-input">
            <label htmlFor="">Last Name</label>
            <input type="text" onChange={(e) => {setLastName(e.target.value)}} required/>
            {isFormInvalid && <span className="error">Employé déjà existant</span>}
          </div>
          <div className="container__form-input">
            <label htmlFor="">Date of Birth</label>
            <input type="date" max={maxBirthDate} min={minBirthDate} onChange={(e) => {setBirthDate(e.target.value)}} required />
          </div>
          <div className="container__form-input">
            <label htmlFor="">Start Date</label>
            <input type="date" max={maxStartDate} onChange={(e) => {setStartDate(e.target.value)}}required />
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
              <input type="number" min="0" onChange={(e) => {setZipCode(e.target.value)}}required />
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
