import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { employeeActions } from "../../store/employee";
import InputBirthDate from "../InputBirthDate";
import InputDepartment from "../InputDepartment";
import InputStartDate from "../InputStartDate";
import InputState from "../inputState/inputState";

const FormEmployee = () => {

    const employeeState = useSelector((state) => state.employee)
    const dispatch = useDispatch();
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
    console.log(formDatas);
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
    return(
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
            {/**Créer un  composant pour mes inputs qui nécessitent des funcs (envisager d'utiliser une librarie react: date picker)*/}
            <InputBirthDate setBirthDate={setBirthDate} />
          </div>
          <div className="container__form-input">
            <label htmlFor="">Start Date</label>
            <InputStartDate setStartDate={setStartDate} />
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
            <InputState setState={setState} />
            </div>
            <div className="container__form-input">
              <label htmlFor="">Zip Code</label>
              <input type="number" min="0" onChange={(e) => {setZipCode(e.target.value)}}required />
            </div>
          </div>
          <div className="container__form-input">
            <label htmlFor="">Department</label>
            <InputDepartment setDepartment={setDepartment} />
          </div>
          <div className="container__form-submit">
            <input type="submit" value="Valider"/>
          </div>
        </form>
    )
}

export default FormEmployee;