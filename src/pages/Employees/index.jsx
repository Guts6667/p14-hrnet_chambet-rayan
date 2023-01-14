import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./Employees.scss"
const Employees = () => {

    const employeeDatas = useSelector((state) => state.employee)
    console.log(employeeDatas);
    return(
        <div className="container__employee">
            <header>
                <h1>Current Employees</h1>
            </header>
            <div className="container__employee-entries">
                <span>Show</span>
                <select name="" id="">
                    <option value="10">10</option>
                    <option value="25">25</option>
                    <option value="50">50</option>
                    <option value="100">100</option>
                </select>
                <span>entries</span>
            </div>
            <div className="container__employee-search">
                <label htmlFor="">Search: </label>
                <input type="search" />
            </div>
            <table className="container__table">
                <thead>
                    <tr>
                        <th colSpan={1}>First Name</th>
                        <th colSpan={1}>Last Name</th>
                        <th colSpan={1}>Date Of Birth</th>
                        <th colSpan={1}>Start Date</th>
                        <th colSpan={1}>Street</th>
                        <th colSpan={1}>City</th>
                        <th colSpan={1}>State</th>
                        <th colSpan={1}>Zip Code</th>
                        <th colSpan={1}>Department</th>
                    </tr>
                </thead>
                <tbody>
                    {employeeDatas.map((employee) => {
                        return(
                            <tr key={`${employee.lastName}-${employee.birthDate}-${employee.department}`}>
                                <td>{employee.firstName}</td>
                                <td>{employee.lastName}</td>
                                <td>{employee.birthDate}</td>
                                <td>{employee.startDate}</td>
                                <td>{employee.street}</td>
                                <td>{employee.city}</td>
                                <td>{employee.state}</td>
                                <td>{employee.zipCode}</td>
                                <td>{employee.department}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
            <div>
                <span>{`Showing ${"[number of entries]"} to ${"[maximum number of entries displayed]"} of ${"[total amount of entries]"} entries`}</span>
            </div>
            <div>
                <button>Previous</button>
                <span>{`${"1"}`}</span>
                <button>Next</button>
            </div>
            <Link to={"/"} className="btn-link">Home</Link>
        </div>
    )
}

export default Employees;