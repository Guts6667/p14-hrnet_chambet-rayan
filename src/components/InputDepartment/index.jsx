import React from "react";

/**
 * 
 * @param {Function} setDepartment()
 * @returns {JSX} React Component
 */
const InputDepartment = ({setDepartment}) => {


    return(
        <select name="" id="" required onChange={(e) => setDepartment(e.target.value)}>
              <option value="Sales">Sales</option>
              <option value="Marketing">Marketing</option>
              <option value="Engineering">Engineering</option>
              <option value="Human Resources">Human Resources</option>
              <option value="Legal">Legal</option>
        </select>
    )
}

export default InputDepartment;