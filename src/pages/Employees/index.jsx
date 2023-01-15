import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import searchFilter from "../../service/searchFilter";
// import sortByFirstName from "../../service/sortByFirstName";
import "./Employees.scss"
const Employees = () => {
    const [searchInput, setSearchInput] = useState("")
    const [datas, setDatas] = useState([])
    const employeeDatas = useSelector((state) => state.employee)
    useEffect(() => {
        if(searchInput.length >= 2){
            setDatas(searchFilter(employeeDatas, searchInput))
        } else{
            setDatas(employeeDatas)
        }
    }, [searchInput])
    
    
 // Utiliser un useState pour récupérer les datas dans la searchbar et ensuite appeler la fonction searchbar
    searchFilter(employeeDatas, "Tom")
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
                <input type="search" onChange={(e) => setSearchInput(e.target.value)}/>
            </div>
            <table className="container__table">
                <thead>
                    <tr>
                        <th colSpan={1} className="container__table-head"><span>First Name</span><img className="chevron" src="/assets/chevron-up-solid.svg" alt="chevron up" /></th>
                        <th colSpan={1} className="container__table-head"><span>Last Name</span><img className="chevron" src="/assets/chevron-up-solid.svg" alt="chevron up" /></th>
                        <th colSpan={1} className="container__table-head"><span>Date Of Birth</span><img className="chevron" src="/assets/chevron-up-solid.svg" alt="chevron up" /></th>
                        <th colSpan={1} className="container__table-head"><span>Start Date</span><img className="chevron" src="/assets/chevron-up-solid.svg" alt="chevron up" /></th>
                        <th colSpan={1} className="container__table-head"><span>Street</span><img className="chevron" src="/assets/chevron-up-solid.svg" alt="chevron up" /></th>
                        <th colSpan={1} className="container__table-head"><span>City</span><img className="chevron" src="/assets/chevron-up-solid.svg" alt="chevron up" /></th>
                        <th colSpan={1} className="container__table-head"><span>State</span><img className="chevron" src="/assets/chevron-up-solid.svg" alt="chevron up" /></th>
                        <th colSpan={1} className="container__table-head"> <span>Zip Code</span><img className="chevron" src="/assets/chevron-up-solid.svg" alt="chevron up" /></th>
                        <th colSpan={1} className="container__table-head"><span>Department</span><img className="chevron" src="/assets/chevron-up-solid.svg" alt="chevron up" /></th>
                    </tr>
                </thead>
                <tbody>
                    {datas.map((data) => {
                        return(
                            <tr key={`${data.birthDate}-${data.id}`}>
                                <td >{data.firstName}</td>
                                <td>{data.lastName}</td>
                                <td>{data.birthDate}</td>
                                <td>{data.startDate}</td>
                                <td>{data.street}</td>
                                <td>{data.city}</td>
                                <td>{data.state}</td>
                                <td>{data.zipCode}</td>
                                <td>{data.department}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
            <div>
                <span>{`Showing ${"[number of entries]"} to ${"[maximum number of entries displayed]"} of ${datas.length} entries`}</span>
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