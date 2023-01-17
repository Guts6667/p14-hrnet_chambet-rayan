import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import InputEntries from "../../components/InputEntries";
import SearchbarEmployee from "../../components/SearchbarEmployee";
import TableEmployee from "../../components/TableEmployee";
import searchFilter from "../../service/searchFilter";
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
    return(
        <div className="container__employee">
            <header>
                <h1>Current Employees</h1>
            </header>
            <InputEntries />
            <SearchbarEmployee setSearchInput={setSearchInput} />
            <TableEmployee datas={datas} />
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